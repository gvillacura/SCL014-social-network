// Función firebase que captura mail y contraseña a usuarios ya registrados
export const ingreso = (callback) => {
    const email = document.getElementById('input_email').value;
    const password = document.getElementById('input_password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            callback();
        })
        .catch((error) => {
            const errorCode = error.code;

            if (errorCode === 'auth/wrong-password') {
                alert('Contraseña erronea.');
            } else {
                alert('¡Ingrese un correo valido!');
            }
            console.log(error);
        });
};

// Función firebase para registrarse mediante google
export const loginG = (callback) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)

        .then((result) => {
            console.log(result.user);
            callback();
        })
        .catch((error) => {
            const errorCode = error.code;

            if (errorCode === 'auth/wrong-password') {
                alert('Contraseña erronea.');
            }
            console.log(error);
        });
};

// función firebase para cambiar contraseña
export const pass = (callback) => {
    const auth = firebase.auth();
    const emailAddress = document.getElementById('input_email_Pass').value;

    auth.sendPasswordResetEmail(emailAddress)

        .then(() => {
            alert('¡Correo enviado! Ingrese con su nueva contraseña en la pagina de inicio.');
            callback();
        })
        .catch((error) => {
            alert('¡Ingrese una dirección de correo!');
            // eslint-disable-next-line no-unused-vars
            const errorMessage = error.message;
        });
};

const db = firebase.firestore();

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

export const perfil = () => {
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
     <p class = 'nameProfile'>${user.displayName}</p>
      <p class = 'emailProfile'>${user.email}</p>
      </div>
      
      `;
        }
    });
};

export const getPosts = () => db.collection('publicaciones').get();

export const dbPublicaciones = (post, callback) => {
    db.collection('publicaciones').add({
        publicacion: post,
    })
        .then(() => {
            callback();
            console.log('Document successfully written!');
        })
        .catch((error) => {
            console.error('Error writing document: ', error);
        });
};
