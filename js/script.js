
const contentDiv = document.querySelector(".content-container");

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

async function getSomeContent() {
    try {
        const respond = await fetch(url);
        const data = await respond.json();
        console.log(data.drinks);

        contentDiv.innerHTML = "";

        for (let i = 0; i < data.drinks.length; i++) {

            console.log(data.drinks[i]);

            contentDiv.innerHTML += `<a href="details.html?id=${data.drinks[i].idDrink}"> 
                                        <div class="item-index">
                                            <h2 class="name-index"> ${data.drinks[i].strDrink}</h2>                                       
                                            <img class="listed-img" src="${data.drinks[i].strDrinkThumb}" alt= "serving example"/>
                                            <div> This drink is ${data.drinks[i].strAlcoholic}</div>
                                        </div>
                                    </a>`;
        }

    }
    catch (error) {
        console.log("OOOPSIE:/sjekk internettforbindelse!!!", error);
        contentDiv.innerHTML = `<div class="error">OH NO, something went wrong 😢</div>`;
    }
}
getSomeContent();







