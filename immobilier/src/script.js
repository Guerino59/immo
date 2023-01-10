//loader

setTimeout(() => {
  document.querySelector(".loader").style.display = "none";
}, 2000);

const url = "../assets/data.json";
function find() {
  fetch(url).then(handleFetch);
}
function handleFetch(responseText) {
  console.log(responseText);
  if (responseText.ok) {
    responseText
      .json()
      .then(showAll)
      .catch((error) => console.log(error));
  } else {
    console.log(responseText.statusText);
  }
}
const bien = document.querySelector("#bien");
function showResult(data) {
  for (let i = 0; i < data.appartement.length; i++) {
    const v = document.createElement("p");
    v.textContent = `${data.appartement[i].ville}`;
    bien.append(v);
  }
}
const dispImg = document.querySelector(".bienAffiche");
const search = document.querySelector("#search a");
const localisation = document.querySelector("#localisation");
const type = document.querySelector("#type");

function showAll(data) {
  type.addEventListener("input", (e) => {
    e.preventDefault();
    dispImg.innerHTML = "";
    if (type.value == "Tous type") {
      showApp(data);
      showMai(data);
      showTer(data);
    }
    if (type.value == "Appartement") {
      showApp(data);
    }
    if (type.value == "Maison") {
      showMai(data);
    }
    if (type.value == "Terrain") {
      showTer(data);
    }
  });
}
function showApp(data) {
  for (let i = 0; i < data.appartement.length; i++) {
    const img = document.createElement("img");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.textContent = data.appartement[i].titre;
    div.classList.add("indiv");
    img.src = `../assets/images/immobilier/${data.appartement[i].photos}`;
    div.append(img);
    div.append(h2);
    dispImg.append(div);
    console.log(img.src);
  }
}
function showMai(data) {
  for (let i = 0; i < data.maison.length; i++) {
    const img = document.createElement("img");
    const div = document.createElement("div");
    div.classList.add("indiv");
    img.src = `../assets/images/immobilier/${data.maison[i].photos}`;
    div.append(img);
    dispImg.append(div);
    console.log(img.src);
  }
}
function showTer(data) {
  for (let i = 0; i < data.terrain.length; i++) {
    const img = document.createElement("img");
    const div = document.createElement("div");
    div.classList.add("indiv");
    img.src = `../assets/images/immobilier/${data.terrain[i].photos}`;
    div.append(img);
    dispImg.append(div);
    console.log(img.src);
  }
}
find();
