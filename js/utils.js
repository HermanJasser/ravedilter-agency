



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

