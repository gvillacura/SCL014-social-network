const db = firebase.firestore();

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
            console.log(loggedUser.user.uid);
            window.location.hash = '#/muro';
        })
        .catch((error) => {
            const errorCode = error.code;

            if (errorCode === 'auth/wrong-password') {
                showErrorMessage.innerHTML = '<p>Contraseña incorrecta, intente nuevamente.</p>';
            } else {
                showErrorMessage.innerHTML = '<p>Correo inválido.</p>';
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

export const profile = () => {
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

     <p class = 'imgProfileimg'> <img class = 'imgProfile' src='${user.photoURL}'></p>
     <h1 class = 'nameProfile'>${user.displayName ? user.displayName : user.email}</h1>
      <p class = 'emailProfile'>${user.email}</p>
      </div>
      
      `;
        }
    });
};

export const createPost = (post) => {
    const user = () => firebase.auth().currentUser;
    db.collection('publicaciones').add({
        uid: user().uid,
        publicacion: post,
        fecha: currentTime(),
        nombre: user().displayName,
        email: user().email,
    })
        .then(() => {
            console.log('Document successfully written!');
        })
        .catch((error) => {
            console.error('Error writing document: ', error);
        });
};

export const containerPost = () => {
    db.collection('publicaciones').orderBy('fecha', 'desc').onSnapshot((querySnapshot) => {
        const postContainer = document.querySelector('#lista-publicaciones');
        postContainer.innerHTML = '';
        querySnapshot.forEach((post) => {
            const data = post.data();
            console.log(data);
            const postPart = document.createElement('div');
            postPart.classList.add('post-actual');
            postPart.innerHTML = `  
            <img class = "icoperfil2" src="img/artista2.png" alt="">
            <p class= "name1" > ${data.nombre ? data.nombre : data.email}</p><br><br>
            <p class= "post2"> ${data.fecha} </p><br><br>
            <p class= "post2"> ${data.publicacion} </p>
            <div class = icoReacall>
            <img class = "icoReac" src="img/reac1.png" alt="">
            <img class = "icoReac" src="img/reac3.png" alt="">
            <img class = "icoReac" src="img/reac4.png" alt="">
            <img class = "icoReac" src="img/reac5.png" alt="">
            <img class = "icoReac" src="img/reac6.png" alt="">
            </div>
            `;

            postContainer.appendChild(postPart);
        });
    });
};
