//loader
setTimeout(() => {
  document.querySelector(".loader").style.display = "none";
}, 2000);
// url json
const url = "../assets/data.json";
// fonction qui lance le fetch
function find() {
  fetch(url).then(handleFetch);
}
// fetch
function handleFetch(responseText) {
  if (responseText.ok) {
    responseText
      .json()
      .then(showAll)
      .catch((error) => console.log(error));
  } else {
    console.log(responseText.statusText);
  }
}
// Declaration constantes
const bien = document.querySelector("#bien");
const dispImg = document.querySelector(".bienAffiche");
const search = document.querySelector("#search a");
const localisation = document.querySelector("#localisation");
const type = document.querySelector("#type");
const start = document.querySelector("#start");
const end = document.querySelector("#end");


// fonction generale qui permet d'affiner les recherches
function showAll(data) {
  document.querySelector('#app').addEventListener('click',()=>
  {
    dispImg.innerHTML = ""
    showApp(data)
  })
  document.querySelector('#mai').addEventListener('click',()=>
  {
    dispImg.innerHTML = ""
    showMai(data)
  })
  document.querySelector('#ter').addEventListener('click',()=>
  {
    dispImg.innerHTML = ""
    showTer(data)
  })
      showApp(data);
      showMai(data);
      showTer(data);
    if (type.value == "Appartement") {
      dispImg.innerHTML = "";
      showApp(data);
    }
    if (type.value == "Maison") {
      dispImg.innerHTML = "";
      showMai(data);
    }
    if (type.value == "Terrain") {
      dispImg.innerHTML = "";
      showTer(data);
    }
    if (localisation.value == "")
    {
      console.log("vide");
    }
    else
    {
      dispImg.innerHTML = "";
     showLoc(data) 
    }
    if (start.value == "" || end.value == "")
    {
      console.log("vide");
    }
    else
    {
      dispImg.innerHTML = "";
     showBudg(data) 
    }
    
}
// fonction affichant les appartements
function showApp(data) {
  for (let i = 0; i < data.appartement.length; i++) {
    createApp(data, i)
  }
}
// fonction affichant les maisons
function showMai(data) {
  for (let i = 0; i < data.maison.length; i++) {
    createMai(data, i)
  }
}
// fonction affichant les terrains
function showTer(data) {
  for (let i = 0; i < data.terrain.length; i++) {
    createTer(data, i)
  }
}
// fonction affichant les biens en fonction de la localisation rentré par l'utilisateur
function showLoc(data) {
   for(let i = 0; i < Object.keys(data).length; i++){
    dispImg.innerHTML = "";
    for (let i = 0; i < data.appartement.length; i++) {
      if (localisation.value == data.appartement[i].ville){
        
        createApp(data, i)
      }
    }
    for (let i = 0; i < data.maison.length; i++) {
      if (localisation.value == data.maison[i].ville){
        createMai(data, i)
      }
    }
    for (let i = 0; i < data.terrain.length; i++) {
      if (localisation.value == data.terrain[i].ville){
        createTer(data, i)
      }
    }
  }
} 
// fonction affichant les biens en fonction du budget rentré par l'utilisateur
function showBudg(data) {
  
  for(let i = 0; i < Object.keys(data).length; i++){
    dispImg.innerHTML = "";
    for (let i = 0; i < data.appartement.length; i++) {
      if (data.appartement[i].prix >= start.value && data.appartement[i].prix <= end.value)
      {
        createApp(data, i)
      }
    }
    for (let i = 0; i < data.maison.length; i++) {
      if (data.maison[i].prix >= start.value && data.maison[i].prix <= end.value)
      {
        createMai(data, i)
      }
    }
    for (let i = 0; i < data.terrain.length; i++) {
      if (data.terrain[i].prix >= start.value && data.terrain[i].prix <= end.value)
      {
        createTer(data, i)
      }
    }
  }
}
// fonction permettant de creer les images des appartement et leurs infos
function createApp(data, i)
{
  const img = document.createElement("img");
    const div = document.createElement("div");
    const infoBien = document.createElement('div');
    const titre = document.createElement("h2");
    const ville = document.createElement('h3'); 
    const prix = document.createElement('p');
    const button = document.createElement("a");
    button.textContent = "EN SAVOIR PLUS" 
    ville.textContent = data.appartement[i].ville;
    titre.textContent = data.appartement[i].titre;
    prix.textContent = `${data.appartement[i].prix} €`;
    div.classList.add("indiv");
    infoBien.classList.add("infoBien")
    img.src = `../assets/images/immobilier/${data.appartement[i].photos}`;
    div.append(img);
    div.append(infoBien);
    infoBien.append(titre);
    infoBien.append(ville);
    infoBien.append(prix);
    infoBien.append(button);
    dispImg.append(div);
}
// fonction permettant de creer les images des maisons et leurs infos
function createMai(data, i)
{
    const img = document.createElement("img");
    const div = document.createElement("div");
    const infoBien = document.createElement('div');
    const titre = document.createElement("h2");
    const ville = document.createElement('h3'); 
    const prix = document.createElement('p');
    const button = document.createElement("a");
    button.textContent = "EN SAVOIR PLUS" 
    ville.textContent = data.maison[i].ville;
    titre.textContent = data.maison[i].titre;
    prix.textContent = `${data.maison[i].prix} €`;
    div.classList.add("indiv");
    infoBien.classList.add("infoBien")
    img.src = `../assets/images/immobilier/${data.maison[i].photos}`;
    div.append(img);
    div.append(infoBien);
    infoBien.append(titre);
    infoBien.append(ville);
    infoBien.append(prix);
    infoBien.append(button);
    dispImg.append(div);
}
// fonction permettant de creer les images des terrains et leurs info
function createTer(data, i)
{
  const img = document.createElement("img");
    const div = document.createElement("div");
    const infoBien = document.createElement('div');
    const titre = document.createElement("h2");
    const ville = document.createElement('h3'); 
    const prix = document.createElement('p');
    const button = document.createElement("a");
    button.textContent = "EN SAVOIR PLUS" 
    ville.textContent = data.terrain[i].ville;
    titre.textContent = data.terrain[i].titre;
    prix.textContent = `${data.terrain[i].prix} €`;
    div.classList.add("indiv");
    infoBien.classList.add("infoBien")
    img.src = `../assets/images/immobilier/${data.terrain[i].photos}`;
    div.append(img);
    div.append(infoBien);
    infoBien.append(titre);
    infoBien.append(ville);
    infoBien.append(prix);
    infoBien.append(button);
    dispImg.append(div);
}
// event qui permet de lancer le fetch à chaque fois qu'on appuie sur le bouton "Lancer la recherche"
search.addEventListener('click', find);

find()