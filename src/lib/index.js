// aqui exportaras las funciones que necesites
// funcion firebase que captura mail y contraseña a usuarios ya registrados
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
// funcion firebase para registrarse en la pagina
export const registrar = () => {
  const email = document.getElementById('input_email2').value;
  const password = document.getElementById('input_password2').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors here.
    // eslint-disable-next-line no-unused-vars
    const errorCode = error.code;
    // eslint-disable-next-line no-unused-vars
    const errorMessage = error.message;
  });
};

//funcion firebase para registrarse mediante google
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
      } else {
        alert('¡Ingrese un correo valido!');
      }
      console.log(error);
    });
  // eslint-disable-next-line eol-last
};

//función firebase para cambiar contraseña
export const pass = (callback) => {
let auth = firebase.auth();
let emailAddress = document.getElementById('input_email_Pass').value;

auth.sendPasswordResetEmail(emailAddress)
.then(() => {
  alert('¡Correo enviado! Ingrese con su nueva contraseña en la pagina de inicio.');
  callback();
})
.catch(function(error) {
  alert('¡Ingrese una dirección de correo!')
 const errorMessage = error.message;
});

}

