/* LESSON 3 - Programming Tasks */

/* Profile Object  */

const myProfile = {
    name:"Desire Vargas",
    photo:"images/yo2.jpg",
    favoriteFoods:[
        "Chicken", "Rice and Beans", "Soups", "Salads"
    ],
    hobbies:[ "Code", "FamilySearch","Scriptures Journal", "Read","Teach"]
};


/* Populate Profile Object with placesLive objects */

myProfile ['placesLived'] = [
    {
        place:"La Ceiba",
        length:" 24 years"
    },

    {
        place:"Coyoles Central",
        length:"5 years"
    },
    {
        place: "Roatan",
        length:"3 years"
    },
    {
        place:"San Pedro Sula",
        length: "2 years"
    },
    {
        place:"Tegucigalpa",
        length:"5 years"
    },
    {
        place: "Siguatepeque",
        length:"7 years"
    },
    {
        place:"La Paz",
        length:"10 years"
    }
];
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent= myProfile.name;
/* Photo with attributes */
document.querySelector ('#photo').src= myProfile.photo;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(function (food){
    let newLiElement = document.createElement ('li');
    newLiElement.textContent = food;
    document.querySelector('#favorite-foods').appendChild (newLiElement);
});

/* Hobbies List */
myProfile.hobbies.forEach( function (hobby) {
    let newliElement2 = document.createElement('li');
    newliElement2.textContent = hobby;
    document.querySelector('#hobbies').appendChild (newliElement2)
})


/* Places Lived DataList */

function placesLivedLayout (placesLivedArray) {
    const placesLength=placesLivedArray.map ((pL) => 
    `<dt><b>${pL.place}</b></dt>
    <dd><sup><small>${pL.length}</small></sup></dd>`
    );
    document.querySelector('#places-lived').innerHTML=placesLength.join("");
};



placesLivedLayout (myProfile.placesLived);
