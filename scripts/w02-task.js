/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName= "Desire Vargas";
const currentYear=new Date().getFullYear();
const profilePicture="images/me.png";


/* Step 3 - Element Variables */

const yearElement=document.querySelector("#year");
const imageElement=document.querySelector('images');
const foodElement=documnet.querySelector('#food');

/* Step 4 - Adding Content */
yearElement.textContent=currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt','This is ${fullname}.She is a BYU-Idaho Pathway Worldwide student.');






/* Step 5 - Array */

let favfoods=["Rice and Beans","Soup","Strawberries", "Rice Cake", "Mango", "Chicken"];
document.getElementById('food').innerHTML=favfoods;
let newfood="Grapes";
favfoods.push(newfood);
foodElement.innerHTML+='<br>${favfoods}';



