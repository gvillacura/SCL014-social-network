// aqui exportaras las funciones que necesites

export const ingreso = () => {
  const email = document.getElementById('input_email').value;
  const password = document.getElementById('input_password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((firebaseUser) => {
      homePage();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Contraseña erronea.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
}
  

