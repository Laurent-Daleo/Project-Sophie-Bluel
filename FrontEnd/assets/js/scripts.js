// On récupère dans le DOM la gallery (document.querySelector('.gallery'))
const gallery = document.querySelector(".gallery");
// On récupère dans le DOM le container des boutons
const btnProjets = document.querySelector(".btn__projets");

/**
 *  récupère les Projets
 */
async function getProjects() {
  return await fetch("http://localhost:5678/api/works").then((reponse) =>
    reponse.json()
  );
}
/**
 * Retourne la liste des catégories
 */
async function getCategories() {
  return await fetch("http://localhost:5678/api/categories").then((reponse) =>
    reponse.json()
  );
}
/**
 * Parcours les catégories
 */
async function displayCategories(categories) {
  for (let i = 0; i < categories.length; i++) {
    displayCategory(categories[i]);
  }
}
/**
 * affiche les boutons suivant leur categoeries
 */
function displayCategory(category) {
  const button = document.createElement("button");
  button.innerHTML = category.name;
  button.setAttribute("data-id", category.id);
  button.classList.add("all-btn");
  btnProjets.append(button);
}
/**
 * Parcours la liste des projets
 */
async function displayProjects(projects) {
  for (let i = 0; i < projects.length; i++) {
    displayProject(projects[i]);
  }
}
/**
 * trie les projets suivants leur id
 */
function sortProjectsByCategory(projects, categoryToFilter) {
  return projects.filter((project) => {
    return categoryToFilter === "-1" || project.category.id == categoryToFilter;
  });
}

/**
 * Gestion du filtre des projets lors d'un click
 */
function onClickFilterButton() {
  const buttons = document.querySelectorAll(".all-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", async (event) => {
      resetDisplayCategories()
      event.preventDefault();
      const id = buttons[i].getAttribute("data-id");
      let projects = await getProjects();
      projects = sortProjectsByCategory(projects, id);
      displayProjects(projects);
      for (let j = 0; j < buttons.length; j++) {
        if (j === i) {
          buttons[j].classList.add("active");
        } else {
          buttons[j].classList.remove("active");
        }
      }

    });
  }
}
/**
 * fait un reset de l'affichage
 */
function resetDisplayCategories() {
  gallery.innerHTML = "";
}

/**
 * Ajoute dans le DOM les images des projets dynamiquement
 */
function displayProject(project) {
  // Pour chaque projet (projects[i]), je récupère ses informations (src et title) (projects[i].src, ..)
  let imgProjets = project.imageUrl;
  let titleProjets = project.title;
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const figcaption = document.createElement("figcaption");
  img.src = imgProjets;
  img.alt = titleProjets;
  figcaption.innerHTML = titleProjets;

  gallery.append(figure);
  figure.append(img);
  figure.append(figcaption);
}

/**
 * Permet l'initialisation du code
 */
async function init() {
  const categories = await getCategories();
  displayCategories(categories);

  const projects = await getProjects();
  displayProjects(projects);

  onClickFilterButton();
}

// lance le demmarrage des fonctions
init();
