// aqui exportaras las funciones que necesites
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
// Función firebase para registrarse en la página
/* export const registrar = () => {
  const email = document.getElementById('input_email2').value;
  const password = document.getElementById('input_password2').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors here.
    // eslint-disable-next-line no-unused-vars
    const errorCode = error.code;
    // eslint-disable-next-line no-unused-vars
    const errorMessage = error.message;
  });
}; */

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
  // eslint-disable-next-line eol-last
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
      alert('¡Ingrese una dirección de correo!')
      const errorMessage = error.message;
    });
};

export const inscription = (callback) => {
  const name = document.getElementById('input_name').value;
  const region2 = document.getElementById('input_address').value;
  const email2 = document.getElementById('input_email2').value;
  const password2 = document.getElementById('input_password2').value;
  const passwordConfirm = document.getElementById('password_confirm').value;
  // const manuality = document.getElementById('input_email2').value;

  const db = firebase.firestore();
  db.collection('users').add({
      nombre: name,
      region: region2,
      correo: email2,
      contraseña: password2,
      confirmación: passwordConfirm,
    })
    .then(() => {
      // console.log('Document written with ID: ', docRef.id);
      alert('Su cuenta ha sido registrada');
      callback();
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
      // alert('Debe completar la totalidad de los campos');
    });
}