const tequilaCont = document.getElementById("tequila").querySelector("div");
const tequilaApi = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27tequila%27%5D%7B%0A++product%2C+price%2C+active+%0A%7D`;
getApi(tequilaApi, tequilaCont, listDrinks);

const ginCont = document.getElementById("gin").querySelector("div");
const ginApi = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27gin%27%5D%7B%0A++product%2C+price%2C+active+%0A%7D`;
getApi(ginApi, ginCont, listDrinks);

const fatCont = document.getElementById("fat").querySelector("div");
const fatApi = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27fat%27%5D%7B%0A++product%2C+price%2C+active+%0A%7D`;
getApi(fatApi, fatCont, listDrinks);

const brusCont = document.getElementById("brus").querySelector("div");
const brusApi = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27brus%27%5D%7B%0A++product%2C+price%2C+active+%0A%7D`;
getApi(brusApi, brusCont, listDrinks);

const snacksCont = document.getElementById("snacks").querySelector("div");
const snacksApi = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27snacks%27%5D%7B%0A++product%2C+price%2C+active+%0A%7D`;
getApi(snacksApi, snacksCont, listDrinks);

const vinCont = document.getElementById("vin").querySelector("div");
const vinApi = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27vin%27%5D%7B%0A++product%2C+price%2C+active+%0A%7D`;
getApi(vinApi, vinCont, listDrinks);

const mocktailsCont = document.getElementById("mocktails").querySelector("div");
const mocktailsApi = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27mocktails%27%5D%7B%0A++product%2C+price%2C+active+%0A%7D`;
getApi(mocktailsApi, mocktailsCont, listDrinks);

const spritzCont = document.getElementById("spritz").querySelector("div");
const spritzApi = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27spritz%27%5D%7B%0A++product%2C+price%2C+active+%0A%7D`;
getApi(spritzApi, spritzCont, listDrinks);

const rodtCont = document.getElementById("rodt").querySelector("div");
const rodtApi = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27rodt%27%5D%7B%0A++product%2C+price%2C+active+%0A%7D`;
getApi(rodtApi, rodtCont, listDrinks);

const hvitCont = document.getElementById("hvit").querySelector("div");
const hvitApi = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27hvit%27%5D%7B%0A++product%2C+price%2C+active+%0A%7D`;
getApi(hvitApi, hvitCont, listDrinks);

const aquavitCont = document.getElementById("aquavit").querySelector("div");
const aquavitApi = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27aquavit%27%5D%7B%0A++product%2C+price%2C+active+%0A%7D`;
getApi(aquavitApi, aquavitCont, listDrinks);

const flaskeCont = document.getElementById("flaske").querySelector("div");
const flaskeApi = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27flaske%27%5D%7B%0A++product%2C+price%2C+active+%0A%7D`;
getApi(flaskeApi, flaskeCont, listDrinks);

const whiskeyCont = document.getElementById("whiskey").querySelector("div");
const whiskeyApi = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27whiskey%27%5D%7B%0A++product%2C+price%2C+active+%0A%7D`;
getApi(whiskeyApi, whiskeyCont, listDrinks);

const bublorCont = document.getElementById("bublor").querySelector("div");
const bublorApi = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27bubler%27%5D%7B%0A++product%2C+price%2C+active+%0A%7D`;
getApi(bublorApi, bublorCont, listDrinks);

const shotsCont = document.getElementById("shots").querySelector("div");
const shotsApi = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27shots%27%5D%7B%0A++product%2C+price%2C+active+%0A%7D`;
getApi(shotsApi, shotsCont, listDrinks);

const cocktailsCont = document.getElementById("cocktails").querySelector("div");
const cocktailsApi = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27cocktails%27%5D%7B%0A++product%2C+des%2C+active+%0A%7D`;
getApi(cocktailsApi, cocktailsCont, listDrinks);

/*const Cont = document.getElementById("").querySelector("div");
const Api = ``;
getApi(Api, Cont, listDrinks);*/







async function getApi(api, container, listFunction) {
    try{
        const response = await fetch(api);
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
        const data = await response.json();
        //console.log(data);
        let apiResult = data.result;
        const activeFiltered = apiResult.filter((obj)=>{
            return obj.active === null || obj.active === true;
        });
       listFunction(activeFiltered, container)
    } catch (error){
        console.error("Error message: " + error)
        container.innerHTML = `<p>Kan ikke finne noen produkter</p>`
    }
}

function listDrinks(api, output) {
    output.innerHTML = "";
    let drinkContainer = "";
    for (let drink of api) {
        if (drink.des){
            drinkContainer += `<div class="produkt-og-pris"><p class="produkt-navn">${drink.product}</p>
            <p>${drink.des}</p></div>`;
        } else if (drink.price !== null){
      drinkContainer += `<div class="produkt-og-pris"><p class="produkt-navn">${drink.product}</p>
      <p>${drink.price} kr</p></div>`;
    } else{
        drinkContainer += `<div class="produkt-og-pris"><p class="produkt-navn">${drink.product}</p>
      <p></p></div>`;
    }}
    output.innerHTML = drinkContainer;
  }