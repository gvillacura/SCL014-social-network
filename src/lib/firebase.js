const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();

export const uploadFile = async (archivoImg) => {
    const file = archivoImg;
    const metadata = {
        contentType: 'images/jpeg,jpg',
    };

    const fileUploaded = await storageRef.child(`images/${file.name}`)
        .put(file, metadata);

    return fileUploaded;
};


// Función para obtener fecha y hora.
const currentTime = () => {
    let date = new Date();

    const day = date.getDate();
    const month = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1);
    const year = date.getFullYear();

    const hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
    const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    const seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

    date = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    return date;
};

// Función firebase que captura mail y contraseña a usuarios ya registrados
export const ingreso = () => {
    const showErrorMessage = document.querySelector('#error-message');
    const email = document.querySelector('#input_email').value;
    const password = document.querySelector('#input_password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((loggedUser) => {
            localStorage.setItem('userId', loggedUser.user.uid);
            window.location.hash = '#/muro';
        })
        .catch((error) => {
            const errorCode = error.code;

            if (errorCode === 'auth/wrong-password') {
                showErrorMessage.innerHTML = '<p class = "error2" >Contraseña incorrecta, intente nuevamente.</p>';
            } else {
                showErrorMessage.innerHTML = '<p class = "error2" >Correo inválido.</p>';
            }
        });
};

// Función firebase para registrarse mediante google
export const loginGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)

        .then((result) => {
            console.log(result.user);
            window.location.hash = '#/muro';
            // callback();
        })
        .catch((error) => {
            // eslint-disable-next-line no-unused-vars
            const errorCode = error.code;
        });
};

export const inscription = (user) => {
    // Función para autenticar
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((response) => {
            console.log(response);
            // Datos extra de usuario
            db.collection('users')
                .add({
                    nombre: user.name,
                    region: user.region,
                    correo: user.email,
                    userid: response.user.uid,

                })
                .then((userDataCreated) => {
                    console.log(userDataCreated);
                    console.log('Usuario y data adicional creada');
                    window.location.hash = '#/home';
                })
                .catch(() => {
                    console.log('Error al crear usuario y data adicional');
                });
        })
        .catch((error) => {
            // Handle Errors here.
            // eslint-disable-next-line no-unused-vars
            const errorCode = error.code;
            // eslint-disable-next-line no-unused-vars
            const errorMessage = error.message;
        });
};

// función firebase para cambiar contraseña
export const pass = () => {
    const showErrorMessage = document.querySelector('#error-message');
    const auth = firebase.auth();
    const emailAddress = document.getElementById('input_email_Pass').value;

    auth.sendPasswordResetEmail(emailAddress)

        .then(() => {
            showErrorMessage.innerHTML = '<p>Correo para reestablecer contraseña ha sido enviado, por favor revisar email.</p>';
        })
        .catch((error) => {
            showErrorMessage.innerHTML = '<p>Correo inválido.</p>';
            // eslint-disable-next-line no-unused-vars
            const errorMessage = error.message;
        });
};


export const profile2 = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in.
            console.log(user);
            const showData = document.getElementById('contenedor-perfil2');
            showData.innerHTML = '';
            showData.innerHTML += `
    
      
      <div class = 'imgProfileimg2'> <img class = 'imgProfile2' src='${user.photoURL ? user.photoURL : 'img/artista2.png'}'></div>
      <h1 class = 'nameProfile2' >${user.displayName ? user.displayName : 'Art Space Lover\'s'}</h1>
        <p class = 'emailProfile2'>${user.email}</p>
        <div class = "btnPor">
        <button class="btnProfile2" id= "closeProfile">Cerrar Sesión</button>
        </div>
        
             
         `;
        }
        document.getElementById('closeProfile')
            .addEventListener('click', () => { window.location.hash = '#/inicio-sesion'; });
    });
};


/* export const profile = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in.
            console.log(user);
            const showData = document.getElementById('contenedor-perfil');
            showData.innerHTML = '';
            showData.innerHTML += `

    <div>
     <br>
     <br>

      <p class = 'imgProfileimg'> <img class = 'imgProfile' src='${user.photoURL ? user.photoURL : 'img/artista2.png'}'></p>
      <h1 class = 'nameProfile' >${user.displayName ? user.displayName : 'Art Space Lover\'s'}</h1>
        <p class = 'emailProfile'>${user.email}</p>
        </div>

         `;
        }
    });
}; */

export const createPost = async (post) => {
    let url = '';
    if (post.image !== undefined && post.image !== null) {
        const uploadedFile = await uploadFile(post.image);
        url = await uploadedFile.ref.getDownloadURL();
    }

    const user = () => firebase.auth().currentUser;

    db.collection('publicaciones').add({
        uid: user().uid,
        publicacion: post.text,
        imagenPublicacion: url,
        fecha: currentTime(),
        nombre: user().displayName,
        email: user().email,
        foto: user().photoURL,
    })
        .then(() => {
            document.querySelector('#post').value = '';
            document.querySelector('#fichero').src = 'img/img1.png';
        })
        .catch((error) => {
            console.error('Error writing document: ', error);
        });
};

export const createComment = data => db.collection('publicaciones').doc(data.postId)
    .collection('comentarios').add(data.comment);

// Obtiene comentarios desde firestore
const getComments = (data, callback) => {
    db.collection('publicaciones')
        .doc(data.postId)
        .collection('comentarios')
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added' || change.type === 'modified') {
                    const comentario = change.doc.data();
                    callback(comentario, data.postId);
                }
            });
        });
};

// Obtiene likes desde firestore
const getLikes = (data, callback) => {
    db.collection('publicaciones')
        .doc(data.postId)
        .collection('likes')
        .onSnapshot((snapshot) => {
            callback(snapshot.size, data.postId);
        });
};

// Verifica si un usuario hizo like en un post
const getIsUserLikePost = data => db.collection('publicaciones').doc(data.postId)
    .collection('likes').where('userId', '==', data.userId)
    .get();

const deleteUserLikeInPost = data => db.collection('publicaciones').doc(data.postId)
    .collection('likes').doc(data.likeId)
    .delete();

// Guarda o elimina un like segun corresponda
const likePost = async (data) => {
    const userActual = firebase.auth().currentUser;

    const dataIsUserLike = {
        postId: data.postId,
        userId: userActual.uid,
    };

    const isUserLikePost = await getIsUserLikePost(dataIsUserLike);

    if (isUserLikePost.size === 0) {
        // Dar like
        await db.collection('publicaciones').doc(data.postId)
            .collection('likes').add({
                userId: userActual.uid,
            });
    } else {
        const dataLikeToDelete = {
            postId: data.postId,
            likeId: isUserLikePost.docs[0].id,
        };
        deleteUserLikeInPost(dataLikeToDelete)
            .then(() => {
                console.log('Eliminado correctamente');
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
};

export const containerPost = () => {
    db.collection('publicaciones').orderBy('fecha', 'desc').onSnapshot((querySnapshot) => {
        const postContainer = document.querySelector('#lista-publicaciones');
        postContainer.innerHTML = '';
        querySnapshot.forEach((post) => {
            const data = post.data();
            const postPart = document.createElement('div');
            postPart.classList.add('post-actual');
            postPart.innerHTML = `  
          <div class="user-post-data"> 
            <img class = "icoperfil2" src='${data.foto ? data.foto : 'img/artista2.png'}'>
            <div>
                <p class= "name1" > ${data.nombre ? data.nombre : data.email}</p>
                <p class= "post2"> ${data.fecha} </p>
            </div>
          </div>
          <div>
            <p class= "post3"> ${data.publicacion} </p>
            <img class = "imgPost" src='${data.imagenPublicacion}'>
            <hr class= "hr2">
          </div>
          <div class = icoReacall>
            <div>
                <img id = "icoReac" class = "icoReac2 btnLike" src="img/reac3.png" alt=""> 
                <img class = "icoReac btnComment" src="img/char3.png" alt="">
            </div>
             <div>
                <p class="likes"> <span class="likes-counter"> </span> Me Gusta </p>
             </div>
          </div>
          <div id="make_comments">
          </div>
          <div id="comments">
          </div>
            `;
            const dataPost = {
                postId: post.id,
            };

            const showComments = (comment, postId) => {
                const commentsInPostElement = document.querySelector(`.post-actual[data-id="${postId}"] #comments`);
                const commentElement = document.createElement('div');
                commentElement.classList.add('comments');
                commentElement.innerText = comment.texto;
                commentsInPostElement.appendChild(commentElement);
            };

            getComments(dataPost, showComments);

            // Funcion callback para actualizar contador de likes
            const updateLikeCounter = (likeQuantity, postId) => {
                const likeCounterElement = document.querySelector(`.post-actual[data-id="${postId}"] .likes-counter`);
                likeCounterElement.innerText = likeQuantity;
            };

            // Obtiene la cantidad de likes desde firestore y usa el callback
            // para mostrarlo en la vista
            getLikes(dataPost, updateLikeCounter);

            postPart.setAttribute('data-id', post.id);
            postContainer.appendChild(postPart);
        });

        const btnComments = document.querySelectorAll('.btnComment');
        btnComments.forEach((btnComment) => {
            btnComment.addEventListener('click', (e) => {
                const newComment = e.target.parentElement.parentElement.nextElementSibling;
                newComment.innerHTML = ` 
                    <button type = "button" class ="close-btn" id="close-post"> 
                    <img src="./img/icons8-close-window-48.png"> </button>
                    <textarea  type="search"class="textarea2" name="post" id="post"
                    placeholder="Escribe un comentario!">
                    </textarea>
                    <button class="botones-post2" type = "button" id="publicar">Comentar</button>
                `;

                newComment.firstElementChild.nextElementSibling.focus();

                const btnSaveComment = newComment.lastElementChild;
                btnSaveComment.addEventListener('click', (event) => {
                    const data = {
                        postId: event.target.parentElement.parentElement.dataset.id,
                        comment: {
                            texto: event.target.previousElementSibling.value,
                            autor: '',
                            fecha: currentTime(),
                        },
                    };
                    newComment.innerHTML = '';
                    createComment(data);
                });
                document.querySelector('#close-post')
                    .addEventListener('click', () => { newComment.innerHTML = ''; });
            });
        });

        const btnLikes = document.querySelectorAll('.btnLike');
        btnLikes.forEach((btnLike) => {
            btnLike.addEventListener('click', (event) => {
                const data = {
                    postId: event.target.parentElement.parentElement.parentElement.dataset.id,
                };
                likePost(data);
            });
        });
    });
};
