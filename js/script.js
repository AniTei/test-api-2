
const contentDiv = document.querySelector(".content-container");


// files successfully connected
// call API




const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";



async function getSomeContent() {
    try {
        const respond = await fetch(url);
        const data = await respond.json();

        console.log(data.drinks);

        

        //loop needed for data.results[i]
        for (let i = 0; i < data.drinks.length; i++) {

            console.log(data.drinks[i])

            contentDiv.innerHTML += `<a href="details.html?id=${data.drinks[i].idDrink}"> 
                                    <div class="user-item-index">
    
                                         <div class="username-index"> ${data.drinks[i].strDrink}</div>
                                         <div> This drink is ${data.drinks[i].strAlcoholic}</div>
                                         <img class="listed-img" src="${data.drinks[i].strDrinkThumb}" alt= "serving example"/>
                                         
                                            </div>
                                </a>`;
        }

        //displaying username, name and 
        //displayContent(data);

    }
    catch (error) {
        console.log("OOOPSIE:/sjekk internettforbindelse!!!", error);

        contentDiv.innerHTML = `<div class="error">OH NO, something went wrong 😢</div>`;

    }
}
getSomeContent();

/* function createHtml (para) {
}
 */


/*
function displayContent(person) {
    contentDiv.innerHTML = `<div> my gender is: ${data.results[0].gender}</div>`;
}
 */

//got a user!!!


//////////////////////











