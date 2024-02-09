/* W05: Programming Tasks */


/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples');
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    templeList.forEach(function(temple) {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}
    

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    const data = await response.json();
    data.forEach(function(temple) {
        templeList.push(temple);
    });
    displayTemples(templeList);
}

      
  

/* filterTemples Function */

const reset = function() {
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
};

document.querySelector("#filtered").addEventListener('change',() =>{filterTemples (templeList)});
// using ternary operators
      


/* Event Listener */
getTemples();
displayTemples();
reset();