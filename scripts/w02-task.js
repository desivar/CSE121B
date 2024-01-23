/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName='Desire Vargas';

const currentYear=new Date().getFullYear();
const profilePicture="images/yo2.jpg";


/* Step 3 -Element Variables*/
const foodElement=document.querySelector('#food');
const yearElement=document.querySelector("#year");
const imageElement=document.querySelector('img');


/* Step 4 - Adding Content */
yearElement.textContent=currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'This is ${fullName}.She is a BYU-Idaho student');






/* Step 5 - Array */
let favFoods=['Chicken','Soups','Salads','Strawberries'];

foodElement.innerHTML=favFoods;
let newFood='Grapes';
favFoods.push(newFood);
foodElement.innerHTML+= '<br>${favFoods}';



