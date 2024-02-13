//variables
const form = document.getElementById("loginform");
const email = document.getElementById("email");
const password = document.getElementById("passwords");
const displayErreur = document.querySelector(".error");

/**
 * Vérifie la saisie de l'email utilisateur dans le formulaire
 */
function checkEmail(emailToCheck) {
  let emailRegex = new RegExp(
    "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
  );
  return emailRegex.test(emailToCheck);
}

/**
 * Gestion des erreurs
 */
function displayCheckEmail() {
  if (checkEmail(email.value)) {
    displayErreur.innerText = "";
    return true;
  } else {
    displayErreur.innerText = "Adresse mail non valide";
    return false;
  }
}

/**
 * listerner sur la saisie dans le champs email
 */
email.addEventListener("keyup", displayCheckEmail);

/**
 * Vérifie la saisie du password utilisateur dans le formulaire
 */
function checkPassword(passwordToCheck) {
  let regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z]).{5,}$");
  return regex.test(passwordToCheck);
}

/**
 * Gestion des erreurs si le password n'est pas bon
 */
function displayCheckPassword() {
  if (checkPassword(password.value)) {
    return true;
  } else {
    displayErreur.innnertext = "Mot de passe non valide";
    return false;
  }
}

password.addEventListener("keyup", displayCheckPassword);

/**
 * envoie la requete  au serveur
 */
async function postUserLog(dataToSend) {
  if (!displayCheckEmail() || !displayCheckPassword()) {
    displayErreur.innerText = "Identifiant ou mot de passe invalide";
    return;
  }
  const sending = await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(dataToSend),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.token);
      localStorage.setItem("token", data.token);
      document.location.href = "./index.html";
    });
}
/**
 * Récupère les informations de login/utilisateur a transmettre au serveur
 */
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // on appel la fonction d'envoie a l'API
  postUserLog({
    email: email.value,
    password: password.value,
  });
});
