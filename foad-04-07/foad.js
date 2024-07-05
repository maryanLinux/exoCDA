
// Affiche const
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');

// Valid filtre
const isRequired = value => value === '' ? false : true;
const isBetween = (length,min,max) => length<min || length>max ? false : true;

// Valid input
const checkUsername = () =>
{
  let valid = false;
  const min = 3, max = 25;
  const username = usernameEl.value.trim();
  if(!isRequired(username))
  {
    showError(usernameEl, 'Le champ ne peut être vide');
   }
   else if (!isBetween(username.length, min, max))
   {
     showError(usernameEl, `le nom doit être compris entre ${min} et ${max} caractères.`)
   }
   else
   {
     showSuccess(usernameEl);
     valid = true;
   }
   return valid;
};
const checkEmail = () => {
 let valid = false;
 const email = emailEl.value.trim();
 if (!isRequired(email))
 {
 showError(emailEl, 'le champ ne peut être vide');
 }
 else if (!isEmailValid(email))
 {
 showError(emailEl, "L'adresse mail ne peut être valide")
 }
 else
 {
   showSuccess(emailEl);
   valid = true;
 }
  return valid;
};
//validation du mot de passe
const checkPassword = () => {
 let valid = false;
 const password = passwordEl.value.trim();

 if (!isRequired(password))
 {
   showError(passwordEl, 'le mot de passe ne peut être vide');
 }
 else if (!isPasswordSecure(password))
 {
   showError(passwordEl, 'Le mot de passe doit avoir au moins 8 caractères, il doit comporter une minuscule,une majuscule, un chiffre et un caractère spécial parmi les suivants (!@#$%^&*)');
 }
 else
 {
   showSuccess(passwordEl);
   valid = true;
 }
 return valid;
};

 //validation de la confirmation du mot de passe
const checkConfirmPassword = () => {
 let valid = false;

 const confirmPassword = confirmPasswordEl.value.trim();
 const password = passwordEl.value.trim();

 if (!isRequired(confirmPassword))
 {
 showError(confirmPasswordEl, 'Entrez votre mot de passe');
 }
 else if (password !== confirmPassword)
 {
 showError(confirmPasswordEl, "Votre mot de passe et la confirmation n'est pas bonne");
 }
 else
 {
 showSuccess(confirmPasswordEl);
 valid = true;
 }

 return valid;
 };
const isEmailValid = (email) => {
const re =
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/;
 return re.test(email);
 };
const isPasswordSecure = (password) => {
  const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  return re.test(password);
};

// Check error
const showError = (input, message) => {
 // reprendre le form-field element
 const formField = input.parentElement;
 // ajouter la class error et supprimer la class success
 formField.classList.remove('success');
 formField.classList.add('error');

 // afficher le message d'erreur
 const error = formField.querySelector('small');
 error.textContent = message;
 };

 const showSuccess = (input) => {
  // reprendre le form-field element
  const formField = input.parentElement;

  // ajouter la class success et supprimer la class error
  formField.classList.remove('error');
  formField.classList.add('success');

  // cacher le message d'erreur
  const error = formField.querySelector('small');
  error.textContent = '';
};
// Check form
form.addEventListener("submit", function (e) {

    //validation des champs
     let isUsernameValid = checkUsername();
     let isEmailValid = checkEmail();
     let isPasswordValid = checkPassword();
     let isConfirmPasswordValid = checkConfirmPassword();
     let isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
      // Soumettre le formulaire
      if (isFormValid == false)
      {
        e.preventDefault();
        alert("L'envoi a échoué");
      }
      else
      {
        let usernameVal =document.getElementById("username").value;
        let mailVal = document.getElementById("email").value;
        let aff = document.getElementById("aff");
        //envoie dans le localStorage
        localStorage.setItem("nom",usernameVal);
        localStorage.setItem("mail",mailVal);
      }

}); // End fonction
