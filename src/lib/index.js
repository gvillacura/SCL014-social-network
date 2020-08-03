// aqui exportaras las funciones que necesites

export const ingreso = (callback) => {
  const email = document.getElementById('input_email').value;
  const password = document.getElementById('input_password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((firebaseUser) => {
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
}

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
}


export const loginG = (callback) => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)

    .then((result) => {
      console.log(result.user)
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
}