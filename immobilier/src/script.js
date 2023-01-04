
//loader

setTimeout(()=>
{
    document.querySelector('.loader').style.display = "none"
},2000)

const url = "../assets/data.json"
function find(){fetch(url).then(handleFetch)};
function handleFetch(responseText) 
{
    console.log(responseText);    
    if(responseText.ok)
    {
        responseText.json()
            .then(showAll)
            .catch(error=>console.log(error))
    }
    else{
        console.log(responseText.statusText);
    }
}
const bien = document.querySelector('#bien')
function showResult(data) {
    for(let i = 0; i<data.appartement.length; i++){
        const v = document.createElement('p')
        v.textContent = `${data.appartement[i].ville}`
        bien.append(v)
    };
    
}
const dispImg = document.querySelector('.bienAffiche')
const search = document.querySelector('#search a')

function showAll(data)
{
    
    search.addEventListener("click", ()=>
{
    showApp(data)
    dispImg.remove('.indiv')
})
    showApp(data)
    showMai(data)
    showTer(data)
}
function showApp(data) 
{
   for(let i = 0; i<data.appartement.length; i++)
    {
        const img = document.createElement('img')
        const div = document.createElement('div')
        div.classList.add('indiv')
        img.src = `../assets/images/immobilier/${data.appartement[i].photos}`
        div.append(img)
        dispImg.append(div)
        console.log(img.src);
    } 
}
function showMai(data) 
{
     for(let i = 0; i<data.maison.length; i++)
    {
        const img = document.createElement('img')
        const div = document.createElement('div')
        div.classList.add('indiv')
        img.src = `../assets/images/immobilier/${data.maison[i].photos}`
        div.append(img)
        dispImg.append(div)
        console.log(img.src);
    }
}
function showTer(data) 
{
     for(let i = 0; i<data.terrain.length; i++)
    {
        const img = document.createElement('img')
        const div = document.createElement('div')
        div.classList.add('indiv')
        img.src = `../assets/images/immobilier/${data.terrain[i].photos}`
        div.append(img)
        dispImg.append(div)
        console.log(img.src);
    }
}
find()