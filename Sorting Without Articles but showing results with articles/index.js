const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticle(name){
    return name.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => removeArticle(a) > removeArticle(b) ? 1: -1);

// when we try to set something to innerHTML that is not a string, DOM will run a toString funcion that gives up a string with commas so we change that by sayin join with "";
document.querySelector("#bands").innerHTML = 
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join("");