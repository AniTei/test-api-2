const detContDiv = document.querySelector(".details-content");
const detailsTitle = document.querySelector (".details-title");



const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const idDrink = params.get("id");

console.log(idDrink);






const url = "htttps://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + idDrink;

//, I have hardcoded a specific drink into the url, now I need to pass the idDrink into it

// use target to send the property from the click to the new url?

//const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php  ?   i=17216" + idDrink;

//const idDrink = querystring osv


async function findDrink() {
    try {
        const respond = await fetch(url);
        const data = await respond.json();
        console.log(data);



        const yourDrink = data.drinks[0]

        detContDiv.innerHTML =
        `<div>
            <img src="${yourDrink.strDrinkThumb}" alt = "serving example"/>
            <div> ${yourDrink.strDrink}</div>
            <div> 
                <p>Main ingredients: ${yourDrink.strIngredient1}, ${yourDrink.strIngredient2}, ${yourDrink.strIngredient3} </p>
                <p>Instructions: ${yourDrink.strInstructions}</p>
            </div>
        </div>`

        detailsTitle.innerHTML = `${yourDrink.strDrink}`;



    }
    catch (error) {




        console.log("OOOPSIE:/sjekk internettforbindelse!!!", error);

        detContDiv.innerHTML = `<div class="error">OH NO, something went wrong 😢</div>`;

        
    }
}

findDrink();

