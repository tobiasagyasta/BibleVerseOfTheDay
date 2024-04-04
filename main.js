const ourmannaVerse = document.querySelector(`#ourmanna-verse`);
const verseArray = [];

window.addEventListener("load", function()
{
    getImage().then((image)=>displayBackgroundImage(image));
    getVerse().then((verse)=>displayFoundVerseFromAPI(verse));
});

    
async function getVerse()
{
    try {
        const response = await fetch("https://beta.ourmanna.com/api/v1/get?format=json&order=daily");
        const verse = await response.json();
        console.log(verse.verse);
        return verse.verse;    
    } catch (error) {
        console.error(error);
        
    }

}

function displayFoundVerseFromAPI(foundVerse)
{
    let reference = foundVerse.details.reference;
    let text = foundVerse.details.text;
    ourmannaVerse.innerHTML = `<span id ="referenceSpan">${reference}</span> <span id = "textSpan">${text}</span>`;
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



