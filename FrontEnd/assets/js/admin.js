const token = localStorage.getItem("token");
const btnEditContainer = document.getElementById("btn_edit_container");
const btnModifyContainer = document.getElementById("btn_modify_container");
const modalGallery = document.querySelector(".modal_gallery");

if (token) {

  displayEditInputs()
  switchNavigationLogout()
  /**
   * Switche dans la navigation le lien Login / Logout
   */
  function switchNavigationLogout() {
    const log = document.getElementById("logging");
    const logout = document.querySelector(".link_loging");

    log.innerText = "logout";
    logout.href = "./index.html";
    logout.addEventListener("click", () => {
      btnEditContainer.remove();
      btnModifyContainer.remove();
      localStorage.removeItem("token");
      logout.href = "./index.html";
      log.innerText = "login";
    });
  }

  /**
* Affiche les boutons pour accéder à l'administration
*/
  function displayEditInputs() {
    const btnModeEdition = document.createElement("button");
    const btnModify = document.createElement("button");
    // on retire les boutons de filtrage des Projets
    const btnProjetsFilter = document.querySelector(".btn__projets");
    btnProjetsFilter.remove();

    // Création du HTML des boutons administration
    btnModeEdition.innerHTML = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.0229 2.18576L14.3939 2.55679C14.6821 2.84503 14.6821 3.31113 14.3939 3.5963L13.5016 4.49169L12.0879 3.07808L12.9803 2.18576C13.2685 1.89751 13.7346 1.89751 14.0198 2.18576H14.0229ZM6.93332 8.23578L11.0484 4.11759L12.4621 5.53121L8.34387 9.64633C8.25494 9.73525 8.14455 9.79964 8.02496 9.83337L6.23111 10.3455L6.7432 8.55162C6.77693 8.43203 6.84133 8.32164 6.93025 8.23271L6.93332 8.23578ZM11.9408 1.14625L5.89074 7.1932C5.62397 7.45998 5.43078 7.78808 5.32959 8.14685L4.4526 11.2133C4.379 11.4708 4.44953 11.7468 4.63965 11.9369C4.82977 12.127 5.10574 12.1976 5.36332 12.124L8.42973 11.247C8.79156 11.1427 9.11967 10.9495 9.38338 10.6858L15.4334 4.63888C16.2951 3.77722 16.2951 2.37894 15.4334 1.51728L15.0624 1.14625C14.2007 0.284585 12.8024 0.284585 11.9408 1.14625ZM3.19844 2.34214C1.70816 2.34214 0.5 3.55031 0.5 5.04058V13.3812C0.5 14.8715 1.70816 16.0796 3.19844 16.0796H11.5391C13.0293 16.0796 14.2375 14.8715 14.2375 13.3812V9.94683C14.2375 9.539 13.9094 9.21089 13.5016 9.21089C13.0937 9.21089 12.7656 9.539 12.7656 9.94683V13.3812C12.7656 14.0589 12.2167 14.6078 11.5391 14.6078H3.19844C2.52076 14.6078 1.97188 14.0589 1.97188 13.3812V5.04058C1.97188 4.36291 2.52076 3.81402 3.19844 3.81402H6.63281C7.04065 3.81402 7.36875 3.48591 7.36875 3.07808C7.36875 2.67025 7.04065 2.34214 6.63281 2.34214H3.19844Z" fill="white"/>
        </svg><span>Mode édition</span>`;
    btnEditContainer.classList.add("black_banner");
    btnModeEdition.classList.add("btn-edition");


    btnModify.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5229 1.68576L13.8939 2.05679C14.1821 2.34503 14.1821 2.81113 13.8939 3.0963L13.0016 3.99169L11.5879 2.57808L12.4803 1.68576C12.7685 1.39751 13.2346 1.39751 13.5198 1.68576H13.5229ZM6.43332 7.73578L10.5484 3.61759L11.9621 5.03121L7.84387 9.14633C7.75494 9.23525 7.64455 9.29964 7.52496 9.33337L5.73111 9.84546L6.2432 8.05162C6.27693 7.93203 6.34133 7.82164 6.43025 7.73271L6.43332 7.73578ZM11.4408 0.646245L5.39074 6.6932C5.12397 6.95998 4.93078 7.28808 4.82959 7.64685L3.9526 10.7133C3.879 10.9708 3.94953 11.2468 4.13965 11.4369C4.32977 11.627 4.60574 11.6976 4.86332 11.624L7.92973 10.747C8.29156 10.6427 8.61967 10.4495 8.88338 10.1858L14.9334 4.13888C15.7951 3.27722 15.7951 1.87894 14.9334 1.01728L14.5624 0.646245C13.7007 -0.215415 12.3024 -0.215415 11.4408 0.646245ZM2.69844 1.84214C1.20816 1.84214 0 3.05031 0 4.54058V12.8812C0 14.3715 1.20816 15.5796 2.69844 15.5796H11.0391C12.5293 15.5796 13.7375 14.3715 13.7375 12.8812V9.44683C13.7375 9.039 13.4094 8.71089 13.0016 8.71089C12.5937 8.71089 12.2656 9.039 12.2656 9.44683V12.8812C12.2656 13.5589 11.7167 14.1078 11.0391 14.1078H2.69844C2.02076 14.1078 1.47188 13.5589 1.47188 12.8812V4.54058C1.47188 3.86291 2.02076 3.31402 2.69844 3.31402H6.13281C6.54065 3.31402 6.86875 2.98591 6.86875 2.57808C6.86875 2.17025 6.54065 1.84214 6.13281 1.84214H2.69844Z" fill="black"/>
        </svg><span>Modifier</span>`;
    btnModify.classList.add("btn-modify");


    btnEditContainer.append(btnModeEdition);
    btnModifyContainer.append(btnModify);

    // Ajout des events sur les boutons
    btnModeEdition.addEventListener("click", (event) => {
      event.preventDefault();
      createFirstModal();
    });
    btnModify.addEventListener("click", (event) => {
      event.preventDefault();
      createFirstModal();
    });
  }
  /**
    * Création de la structure de la modale + ajout dans le DOM
    */
  function createFirstModal() {
    const body = document.querySelector("body");
    const bckgOpaque = document.createElement("div");
    const modal1 = document.createElement("div");
    const titleModal1 = document.createElement("h2");
    const closeModal = document.createElement("div");
    const addPhotos = document.createElement("button");

    bckgOpaque.classList.add("display_opaque");
    addPhotos.classList.add("add_photos");
    closeModal.classList.add("close_modal");
    modal1.classList.add("modal_first");

    addPhotos.innerText = "Ajouter une photo";
    titleModal1.innerText = "Galerie photo";
    closeModal.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6546 8.05106C18.1235 7.58214 18.1235 6.82061 17.6546 6.35169C17.1856 5.88277 16.4241 5.88277 15.9552 6.35169L12.005 10.3056L8.05106 6.35544C7.58214 5.88652 6.82061 5.88652 6.35169 6.35544C5.88277 6.82436 5.88277 7.58589 6.35169 8.05481L10.3056 12.005L6.35544 15.9589C5.88652 16.4279 5.88652 17.1894 6.35544 17.6583C6.82436 18.1272 7.58589 18.1272 8.05481 17.6583L12.005 13.7044L15.9589 17.6546C16.4279 18.1235 17.1894 18.1235 17.6583 17.6546C18.1272 17.1856 18.1272 16.4241 17.6583 15.9552L13.7044 12.005L17.6546 8.05106Z" fill="black"/>
        </svg>`;

    body.append(bckgOpaque);
    modal1.append(titleModal1);
    modal1.append(closeModal);
    modal1.append(addPhotos);
    body.append(modal1);

    // Remplissage de la modal avec le fetch
    fillFirstModalProjects();

    // Ajout des différents listeners

    // Listener pour fermer la modal
    closeModal.addEventListener("click", (event) => {
      event.preventDefault();
      modal1.remove();
      bckgOpaque.remove();
    });
    // Listerner pour passer à la modal suivante
    addPhotos.addEventListener("click", (event) => {
      event.preventDefault();
      modal1.remove();
      createSecondModal();
    });

  }
  /**
   * Remplit la modal avec les projets
   */
  async function fillFirstModalProjects() {
    const results = await fetch("http://localhost:5678/api/works").then(
      (reponse) => reponse.json()
    );
    const modalGallery = document.createElement("div");

    for (let i = 0; i < results.length; i++) {
      const modal1 = document.querySelector(".modal_first");
      let imgProjets = results[i].imageUrl;
      let titleProjets = results[i].title;
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const buttonDelete = document.createElement("button");

      modalGallery.classList.add("modal_gallery");
      img.setAttribute("src", imgProjets);
      img.setAttribute("atl", titleProjets);
      buttonDelete.innerHTML = `<svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.71607 0.35558C2.82455 0.136607 3.04754 0 3.29063 0H5.70938C5.95246 0 6.17545 0.136607 6.28393 0.35558L6.42857 0.642857H8.35714C8.71272 0.642857 9 0.930134 9 1.28571C9 1.64129 8.71272 1.92857 8.35714 1.92857H0.642857C0.287277 1.92857 0 1.64129 0 1.28571C0 0.930134 0.287277 0.642857 0.642857 0.642857H2.57143L2.71607 0.35558ZM0.642857 2.57143H8.35714V9C8.35714 9.70915 7.78058 10.2857 7.07143 10.2857H1.92857C1.21942 10.2857 0.642857 9.70915 0.642857 9V2.57143ZM2.57143 3.85714C2.39464 3.85714 2.25 4.00179 2.25 4.17857V8.67857C2.25 8.85536 2.39464 9 2.57143 9C2.74821 9 2.89286 8.85536 2.89286 8.67857V4.17857C2.89286 4.00179 2.74821 3.85714 2.57143 3.85714ZM4.5 3.85714C4.32321 3.85714 4.17857 4.00179 4.17857 4.17857V8.67857C4.17857 8.85536 4.32321 9 4.5 9C4.67679 9 4.82143 8.85536 4.82143 8.67857V4.17857C4.82143 4.00179 4.67679 3.85714 4.5 3.85714ZM6.42857 3.85714C6.25179 3.85714 6.10714 4.00179 6.10714 4.17857V8.67857C6.10714 8.85536 6.25179 9 6.42857 9C6.60536 9 6.75 8.85536 6.75 8.67857V4.17857C6.75 4.00179 6.60536 3.85714 6.42857 3.85714Z" fill="white"/>
                </svg> `;
      buttonDelete.classList.add("trash");
      buttonDelete.setAttribute("type", "button")

      modal1.append(modalGallery);
      modalGallery.append(figure);
      figure.append(img);
      figure.append(buttonDelete);
      buttonDelete.addEventListener("click", (event) => {
        console.log(event.value);
        event.preventDefault();
        deleteImg(results[i].id)
        return false
      });
    }
  }
  /**
   * supprime les images des projets
   */
  function deleteImg(id) {
    fetch(`http://localhost:5678/api/works/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => console.log(response))
      .catch(function (err) {
        console.error(err);
      });
    resetDisplayCategories()
    fillFirstModalProjects()
  }
  /**
    * creation de la modal d'ajout des photos
    */
  function createSecondModal() {
    const body = document.querySelector("body");
    const modal2 = document.createElement("div");
    const arrowPrevious = document.createElement("div");
    const closeModal = document.createElement("div");
    const titleModal2 = document.createElement("h2");
    const bckgOpaque = document.querySelector(".display_opaque");
    const form = document.createElement("form");
    const addPhotoContent = document.createElement("div");
    const addPhotoBtn = document.createElement("div");

    modal2.classList.add("modal_two");
    arrowPrevious.classList.add("arrow_previous");
    closeModal.classList.add("close_modal");
    addPhotoBtn.classList.add("add_photo_btn");
    addPhotoContent.classList.add("add_photo_content");
    form.classList.add("add_info_photos");
    form.setAttribute("id", "formCreateProject");


    titleModal2.innerText = "Ajout photo";
    arrowPrevious.innerHTML = `<svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.439478 7.94458C-0.146493 8.53055 -0.146493 9.48217 0.439478 10.0681L7.9399 17.5686C8.52587 18.1545 9.47748 18.1545 10.0635 17.5686C10.6494 16.9826 10.6494 16.031 10.0635 15.445L5.11786 10.5041H19.4999C20.3297 10.5041 21 9.83375 21 9.00402C21 8.17428 20.3297 7.50393 19.4999 7.50393H5.12255L10.0588 2.56303C10.6447 1.97706 10.6447 1.02545 10.0588 0.439478C9.47279 -0.146493 8.52118 -0.146493 7.93521 0.439478L0.43479 7.9399L0.439478 7.94458Z" fill="black"/>
        </svg> `;

    closeModal.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6546 8.05106C18.1235 7.58214 18.1235 6.82061 17.6546 6.35169C17.1856 5.88277 16.4241 5.88277 15.9552 6.35169L12.005 10.3056L8.05106 6.35544C7.58214 5.88652 6.82061 5.88652 6.35169 6.35544C5.88277 6.82436 5.88277 7.58589 6.35169 8.05481L10.3056 12.005L6.35544 15.9589C5.88652 16.4279 5.88652 17.1894 6.35544 17.6583C6.82436 18.1272 7.58589 18.1272 8.05481 17.6583L12.005 13.7044L15.9589 17.6546C16.4279 18.1235 17.1894 18.1235 17.6583 17.6546C18.1272 17.1856 18.1272 16.4241 17.6583 15.9552L13.7044 12.005L17.6546 8.05106Z" fill="black"/>
        </svg>`;

    addPhotoContent.innerHTML = `<div class="logo_preview"><svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M63.5517 15.8879C64.7228 15.8879 65.681 16.8461 65.681 18.0172V60.5768L65.0156 59.7118L46.9165 36.2894C46.3176 35.5042 45.3727 35.0517 44.3879 35.0517C43.4031 35.0517 42.4715 35.5042 41.8594 36.2894L30.8136 50.5824L26.7546 44.8998C26.1557 44.0614 25.1975 43.569 24.1595 43.569C23.1214 43.569 22.1632 44.0614 21.5644 44.9131L10.9178 59.8183L10.319 60.6434V60.6034V18.0172C10.319 16.8461 11.2772 15.8879 12.4483 15.8879H63.5517ZM12.4483 9.5C7.75048 9.5 3.93103 13.3195 3.93103 18.0172V60.6034C3.93103 65.3012 7.75048 69.1207 12.4483 69.1207H63.5517C68.2495 69.1207 72.069 65.3012 72.069 60.6034V18.0172C72.069 13.3195 68.2495 9.5 63.5517 9.5H12.4483ZM23.0948 35.0517C23.9337 35.0517 24.7644 34.8865 25.5394 34.5655C26.3144 34.2444 27.0186 33.7739 27.6118 33.1807C28.2049 32.5876 28.6755 31.8834 28.9965 31.1083C29.3175 30.3333 29.4828 29.5027 29.4828 28.6638C29.4828 27.8249 29.3175 26.9943 28.9965 26.2192C28.6755 25.4442 28.2049 24.74 27.6118 24.1468C27.0186 23.5537 26.3144 23.0831 25.5394 22.7621C24.7644 22.4411 23.9337 22.2759 23.0948 22.2759C22.2559 22.2759 21.4253 22.4411 20.6503 22.7621C19.8752 23.0831 19.171 23.5537 18.5779 24.1468C17.9847 24.74 17.5142 25.4442 17.1931 26.2192C16.8721 26.9943 16.7069 27.8249 16.7069 28.6638C16.7069 29.5027 16.8721 30.3333 17.1931 31.1083C17.5142 31.8834 17.9847 32.5876 18.5779 33.1807C19.171 33.7739 19.8752 34.2444 20.6503 34.5655C21.4253 34.8865 22.2559 35.0517 23.0948 35.0517Z" fill="#B9C5CC"/>
        </svg></div> 
        <p class="infos_add">jpg, png : 4mo max</p>
        `;
    addPhotoBtn.innerHTML = `<label for="file">+ Ajouter une photo</label>
                             <input type="file" id="inputimg"  accept="image/png, image/jpeg">
                             <img src="" id="imagePreview" alt=""/>
                            `;

    form.innerHTML = `
                        <label for="titre" >Titre</label>
                        <input type="text" name="titre" placeholder="" id="titre" >
                        <label for="category" name="categories">Catégorie</label>
                        <select name="category" id="categories">
                          <option value="1">Objets</option>
                          <option value="2">Appartements</option>
                          <option value="3">Hôtel et restaurants</option>
                        </select>
                        <hr>
                        <p id="erreur"></p>
                        <input type="submit" >
                        `;

    body.append(modal2);
    modal2.append(arrowPrevious);
    modal2.append(closeModal);
    modal2.append(titleModal2);
    form.prepend(addPhotoContent);
    modal2.append(form);
    addPhotoContent.append(addPhotoBtn);

    // Listenre pour fermer la modal
    closeModal.addEventListener("click", (event) => {
      event.preventDefault();
      modal2.remove();
      bckgOpaque.remove();
      window.location.href = "./index.html";
    });
    // Listerner pour passer à la modal précédent
    arrowPrevious.addEventListener("click", (event) => {
      event.preventDefault();
      modal2.remove(); // Supprime la deuxieme modal du DOM
      bckgOpaque.remove();
      createFirstModal(); // Création de la première modal
    });
    const input = document.getElementById("inputimg");
    //input.addEventListener("load", () => {
    previewImg();
    //});
    infoUpload();
  }
  /**
   * affiche la prévisualisation de l'image ajoutée
   */
  function previewImg() {
    const input = document.getElementById("inputimg");
    const output = document.getElementById("imagePreview");
    const addPhotpBtn = document.querySelector(".add_photo_btn")


    const loadFile = (event) => {
      const file = event.target.files[0];
      const erreur = document.getElementById('erreur')

      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        erreur.innerHTML = "L'image ne correspond pas à un fichier jpeg ou png";
        return;
      }
      if (file.size > 4 * 1024 * 1024) {
        erreur.innerHTML = "Taille de l'image supérieure à 4Mo";
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        addPhotpBtn.style.width = "0"
        output.style.opacity = "1"
        output.src = reader.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    };
    input.addEventListener("change", loadFile);
    input.style.zIndex = "10";
  }
  /**
 * récupère les données du formulaire ajout photo
 */
  function infoUpload() {
    const formCreateProject = document.querySelector("#formCreateProject");

    formCreateProject.addEventListener("submit", (event) => {
      event.preventDefault();
      const imageNode = document.querySelector("#inputimg");
      const titleNode = document.querySelector("#titre");
      const categoriesNode = document.querySelector("select#categories");
      const option = categoriesNode.options[categoriesNode.selectedIndex];

      addPhotosProjets({
        image: imageNode.files[0],
        title: titleNode.value,
        category: option.value,
      });
    });
  }
  /**
* Envoie les photos via API
*/
  async function addPhotosProjets(data) {
    const titleAdd = document.getElementById("titre");
    const callError = document.getElementById("erreur");
    const newForm = document.getElementById('formCreateProject')
    const newPreview = document.getElementById('imagePreview')
    const addPhotpBtn = document.querySelector(".add_photo_btn")
    if (titleAdd.value == "") {
      callError.innerText = "Veuillez entrer un titre";
      console.log(callError);
      return;
    }
    const newData = new FormData();
    newData.append("title", data.title);
    newData.append("image", data.image);
    newData.append("category", data.category);

    const uploadImg = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: newData,
    }).then((response) => console.log(response));
    newPreview.src = ""
    newPreview.style.opacity = "0"
    addPhotpBtn.style.width = "163px"
    newForm.reset()

  }
  /**
 * fait un reset de l'affichage
 */
  function resetDisplayCategories() {
    const modalGallery = document.querySelector(".modal_gallery");
    modalGallery.remove();
  }
}