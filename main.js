import { convertBibleCode } from "./convert.js";

const ourmannaVerse = document.querySelector(`#ourmanna-verse`);
const indoButton = document.querySelector(`#indo-btn`);
const verseArray = [];
window.addEventListener("load", function()
{
    // getImage().then((image)=>displayBackgroundImage(image));
    getVerse().then((verse)=>displayFoundVerseFromAPI(verse));
});


    
async function getVerse()
{
    try {
        const response = await fetch("https://beta.ourmanna.com/api/v1/get?format=json&order=random");
        const verse = await response.json();
        return verse.verse;    
    } catch (error) {
        console.error(error);
        
    }

}

function displayFoundVerseFromAPI(foundVerse)
{
    let reference = foundVerse.details.reference;
    let text = foundVerse.details.text;
    let indoBibleCode = convertBibleCode(reference);
    console.log(indoBibleCode);
    indoButton.addEventListener('click', ()=> getIndonesianVerse(indoBibleCode));
    ourmannaVerse.innerHTML = `<span id ="referenceSpan">${reference}</span> <span id = "textSpan">${text}</span>`;
}

async function getIndonesianVerse(indoBibleCode)
{
    try
    {
        const text = `https://alkitab.sabda.org/api/passage.php?passage=Yoh+1:1;3:16`;
        console.log(text);
        const response = await fetch(text);
        console.log(response);
        const verse = response.json();
        console.log(verse);
        pass;
    }
    catch(error)
    {
        console.error(error);
    }
}

async function getImage()
{
    const YOUR_ACCESS_KEY = "TRCrVau4tMoysv2ver6B_TeJuR7tlYBGTtNkqvY3Ekw";
    try{
        const response = await fetch(`https://api.unsplash.com/photos/random?collections=295490&orientation=landscape&client_id=${YOUR_ACCESS_KEY}`);
        const image = await response.json();
        return image.urls.regular;
    }
    catch (error){
        console.error(error);
    }
}

function displayBackgroundImage(imageUrl)
{
    document.body.style.backgroundImage = `url(${imageUrl})`;
}



