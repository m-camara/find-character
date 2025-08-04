


const personnages = [

    {nom : "Isaac Clark", image : "images/isaac.webp", jeux : "Dead Space"},



    {nom: "2b", image : "images/2b.webp",jeux: "Nier Automata"},



    {nom: "Ein", image : "images/ein.webp",jeux: "Dead or Alive 2"},



    {nom: "John Shepard", image : "images/johnshepard.webp",jeux: "Mass Effect"},



    {nom: "Judy Alvarez", image : "images/judyalvarez.webp",jeux: "Cyberpunk"},



    {nom: "Misty", image : "images/Misty.webp",jeux: "Black ops 2"},



    {nom: "Panam Palmer", image : "images/panampalmer.webp",jeux: "Cyberpunk"},



    {nom: "Lance Wilson", image : "images/rayder.webp",jeux: "GTA San Andreas"},



    {nom: "Tank Dempsey", image : "images/Tankdempsey.webp",jeux: "Black ops 2"},



    {nom: "Vito Scaletta", image : "images/vitoscaletta.webp",jeux: "Mafia 2"},



    {nom: "Ayane", image : "images/ayane.webp",jeux: "Dead or Alive"},


]

const personnagesRandom = personnages[Math.floor(Math.random()*personnages.length)];

const image = document.getElementById('personnagesImage');
const input = document.getElementById('championInput');
const result = document.getElementById('resultat');
const attemptList = document.getElementById('attemptsList');
const imageperso = document.querySelector('.imageperso');

image.src = personnagesRandom.image;

function trouvePersonnages(){
    const guess = input.value.trim();
    if(!guess) return;

    const li = document.createElement('li');
    li.textContent = guess;
    attemptList.appendChild(li);

    if(guess.toLowerCase() === personnagesRandom.nom.toLowerCase()){
        result.textContent = `Bravo vous avez trouvé ${personnagesRandom.nom} `;
        result.style.color = "green";

        imageperso.classList.add("revealed");
        input.disabled = true;
    }else{
        result.textContent = "Vous n'avez pas trouvé le bon personnage essaie encore";
        result.style.color = "red";
    }
    input.value = "";
    input.focus();
}

function recommencerJeu(){
    nouveauPersonnage = personnages[Math.floor(Math.random()*personnages.length)];

    personnagesRandom.nom = nouveauPersonnage.nom;
    personnagesRandom.image = nouveauPersonnage.image;
    personnagesRandom.jeux =  nouveauPersonnage.jeux;

    image.src = personnagesRandom.image;
    result.textContent = ""
    attemptList.innerHTML = ""

    input.disabled = false;
    input.value = "";
    input.focus();

    imageperso.classList.remove("revealed");


}
