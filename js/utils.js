



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

document.addEventListener("DOMContentLoaded", async function() {
    try {
        const dayFootContainer = document.querySelector(".days-foot-container");

        const map = {
            'Mandag': 1, 'Tirsdag': 2, 'Onsdag': 3, 'Torsdag': 4, 'Fredag': 5, 'Lørdag': 6, 'Søndag': 7
        };

        const response = await fetch('https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27apningstider%27+%5D%7B%0A++day%2C+time%0A%7D');
        if (!response.ok) {
            throw new Error(`HTTP error! ${response.status}`);
        }
        const data = await response.json();
        const apiResult = data.result;

        apiResult.sort((a, b) => map[a.day] - map[b.day]);

        dayFootContainer.innerHTML = '';

        
        apiResult.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.textContent = `${day.day}: ${day.time}`;
            dayFootContainer.appendChild(dayElement);
        });
    } catch (error) {
        console.error("Error message: " + error);
        dayFootContainer.innerHTML = `<p>Kan ikke finne noen åpningstider</p>`;
    }
});
