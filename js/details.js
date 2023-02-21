const detContDiv = document.querySelector(".details-content");
const detailsTitle = document.querySelector(".details-title");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const idDrink = params.get("id");

console.log(idDrink);

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + idDrink;

async function findDrink() {
    try {
        const respond = await fetch(url);
        const data = await respond.json();
        console.log(data);

        detContDiv.innerHTML = "";

        const yourDrink = data.drinks[0]

        detContDiv.innerHTML =
            `<div class="upper-details-container">
            <h2 class="details-name upper-details-item"> ${yourDrink.strDrink}</h2>
            <img class="details-img upper-details-item" src="${yourDrink.strDrinkThumb}" alt = "serving example"/>
            <p>Main ingredients: ${yourDrink.strIngredient1}, ${yourDrink.strIngredient2}, ${yourDrink.strIngredient3} </p>
            <p>Instructions: ${yourDrink.strInstructions}</p>
            </div>`

        detailsTitle.innerHTML = `${yourDrink.strDrink}`;

    }
    catch (error) {
        console.log("OOOPSIE:/sjekk internettforbindelse!!!", error);
        detContDiv.innerHTML = `<div class="error">OH NO, something went wrong 😢</div>`;
    }
}

findDrink();
