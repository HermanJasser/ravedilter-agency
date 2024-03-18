



//Hamburger menu//

window.onload = function () {
    const menuBtns = document.querySelectorAll('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav');

    menuBtns.forEach(function (menuBtn) {
        menuBtn.addEventListener('click', function () {
            menuBtn.classList.toggle('is-active');
            mobileMenu.classList.toggle('is-active')
            document.body.style.overflow = mobileMenu.classList.contains('is-active') ? 'hidden' : '';
        });
    });
}




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

