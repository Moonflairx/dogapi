// Seleziona gli elementi DOM
const select = document.getElementById("breeds");
const container = document.getElementById("image-container");

// Carica le razze di cani disponibili al caricamento della pagina
fetchBreeds();

// Aggiungi un listener per il cambiamento della selezione
select.addEventListener("change", (event) => {
    const selectedBreed = event.target.value;
    if (selectedBreed) {
        fetchImages(selectedBreed);
    }
});

// Funzione per caricare le razze di cani disponibili
function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            populateDropdown(breeds);
        })
        .catch(error => console.error("Errore nel caricamento delle razze di cani:", error));
}

// Funzione per popolare il menu a tendina con le razze di cani
function populateDropdown(breeds) {
    breeds.forEach(breed => createOption(breed));
}

// Funzione per creare un'opzione del menu a tendina
function createOption(breed) {
    const option = document.createElement("option");
    option.value = breed;
    option.textContent = breed;
    select.appendChild(option);
}

// Funzione per caricare le immagini della razza selezionata
function fetchImages(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(response => response.json())
        .then(data => {
            generateCards(data.message);
        })
        .catch(error => console.error("Errore nel caricamento delle immagini della razza:", error));
}

// Funzione per generare le card delle immagini
function generateCards(images) {
    container.innerHTML = ""; 
    images.sort(() => Math.random() - 0.5); 
    images.forEach(image => {
        const card = document.createElement("div");
        card.className = "image-card";
        card.style.backgroundImage = `url(${image})`;
        container.appendChild(card);
    });
}


function redirectToPage() {
    window.location.href = "random.html";
}

function redirectToRazze() {
    window.location.href ="randomrazza.html";
}
