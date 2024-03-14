const cockTailPrices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function checkIfSamePrice(){
  let firstPrice = cockTailPrices[0].innerText;
  for(let i = 1; i < cockTailPrices.length; i++){
    if(cockTailPrices[i].innerText !== firstPrice){
      samePrice = false;
      break;
    }
  }
}
const singlePriceTag = document.querySelector('.cocktails-single-price-tag')
const allPriceTags = document.querySelectorAll('.cocktails-price-tag')

let samePrice = checkIfSamePrice();

if(samePrice){
  singlePriceTag.style.display = 'flex';
  allPriceTags.forEach((tag) => {
    tag.style.display = 'none';
  })
} else {
  singlePriceTag.style.display = 'none';
  allPriceTags.forEach((tag) => {
    tag.style.display = 'flex';
  })
}