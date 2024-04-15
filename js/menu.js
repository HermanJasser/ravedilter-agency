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
const cocktailsPrisCont = document.querySelector(".cocktails-h2-pris")
const cocktailsApi = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27cocktails%27%5D%7B%0A++product%2C+des%2C+price%2C+active%0A%7D`;
getApi(cocktailsApi, cocktailsCont, listcocktails);

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
        //console.log(apiResult);
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

            drinkContainer += `<div class="cocktails-item-container">
            <div class="produkt-og-des">
            <p class="produkt-navn">${drink.product}</p>
            <p>${drink.des}</p>
            </div>
            <p class="cocktails-pris">${drink.price} kr</p>
            </div>`;
        } else if (drink.price !== null){
      drinkContainer += `<div class="produkt-og-pris">
      <p class="produkt-navn">${drink.product}</p>
      <p class="drink-pris">${drink.price} kr</p>
      </div>`;
    } else{
        drinkContainer += `<div class="produkt-og-pris">
        <p class="produkt-navn">${drink.product}</p>
      <p></p>
      </div>`;
    }}
    output.innerHTML = drinkContainer;
  }



  function listcocktails(api, output) {
    output.innerHTML = "";
    let drinkContainer = "";
    checkIfSamePrice(api);
    //console.log(checkIfSamePrice(api))

    if(checkIfSamePrice(api) == true){
    for (let drink of api) {
            drinkContainer += `<div class="cocktails-item-container">
            <p class="produkt-navn">${drink.product}</p>
            <p>${drink.des}</p>
            </div>
            `;
    }
    output.innerHTML = drinkContainer;
    cocktailsPrisCont.innerHTML = `${api[0].price} kr`

  } else {
    for (let drink of api) {
      drinkContainer += `<div class="cocktails-item-container">
      <div class="produkt-og-des">
      <p class="produkt-navn">${drink.product}</p>
      <p>${drink.des}</p>
      </div>
      <p class="cocktails-pris">${drink.price} kr</p>
      </div>`;
}
output.innerHTML = drinkContainer;
  }
  }



function checkIfSamePrice(products){
   //console.log(products);
    let firstPrice = products[0].price;
  //console.log(firstPrice);
    for(let item of products){
      //console.log(item.price);
      if(firstPrice !== item.price){
        return false;}
    }
  return true;
  }

 

let menyPdf = document.querySelector(".meny-pdf");

async function getDrinkMenuPdf(container){
  try{
    let api = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27drink-meny%27%5D%7B%0A++%22drinkMenyURL%22%3A+drinkMenyPdf.asset-%3Eurl%0A%7D`;
    const response = await fetch(api);
    if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
    const data = await response.json();
    let apiResult = data.result;
    //console.log(apiResult);
    setPdf(apiResult);
  } catch (error){
    console.error("Error message: " + error)
    container.innerHTML = `<p>Kan ikke finne noen pdf</p>`
  }
}

getDrinkMenuPdf(menyPdf);

function setPdf (api){
  menyPdf.innerHTML = "";
    menyPdf.innerHTML = `<a class="link-meny-pdf" href="${api[0].drinkMenyURL}">Se menyen i PDF</a>`;
}






