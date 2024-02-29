//  Inizio codice per random img 


const randomImage = document.getElementById("random-image");

async function generatore() {
    try {
        let response = await fetch("https://dog.ceo/api/breeds/image/random");
        let data = await response.json();
        randomImage.src = data.message; 
      
    } catch (e) {
        console.error(e);
    }
}



 // inizio codice per randomrazza

 const imageContainer = document.getElementById("image-container");
5
 async function generaRazza() {
     try {
         let risposta = await fetch("https://dog.ceo/api/breed/hound/images/random/8");
         let risp = await risposta.json();
         generateImages(risp.message);
     } catch (e) { 
         console.error(e); 
     }
 }
 
 function generateImages(images) {
     imageContainer.innerHTML = ""; 
 
     images.forEach(imageUrl => {
         const imageElement = document.createElement("img");
         imageElement.src = imageUrl;
         imageElement.classList.add("random-image"); 
         imageContainer.appendChild(imageElement); 
     });
 }
 