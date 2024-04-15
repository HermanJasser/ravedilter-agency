
let dayContainer = document.querySelector(".days-container");
let dayFootContainer = document.querySelectorAll(".days-foot-container");

const map = {
    'Mandag': 1, 'Tirsdag': 2, 'Onsdag': 3, 'Torsdag': 4, 'Fredag': 5, 'Lørdag': 6, 'Søndag': 7 };

async function getDays(container){
    try{
      let api = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27apningstider%27+%5D%7B%0A++day%2C+time%0A%7D`;
      const response = await fetch(api);
      if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
      const data = await response.json();
      let apiResult = data.result;

      apiResult.sort((a, b) => {
        return map[a.day] - map[b.day];
     });

      console.log(apiResult, map);
      toggleView(apiResult);
    } catch (error){
      console.error("Error message: " + error)
      container.innerHTML = `<p>Kan ikke finne noen åpningstider</p>`
    }
  }

getDays(dayContainer);





function populateAllDays(openingHours) {
    openingHours.forEach(day => {
      let dayContainer = createDayContainer(day);
      daysContainer.appendChild(dayContainer);
    });
  }
  
  function populateCurrentDay(openingHours) {
    let today = new Date().toLocaleDateString('no-NO', { weekday: 'long' });
    let todayOpeningHours = openingHours.find(entry => entry.day.toLowerCase() === today.toLowerCase());
    
    if (todayOpeningHours) {
      let dayContainer = createDayContainer(todayOpeningHours);
      daysContainer.appendChild(dayContainer);
    }
  }
  
  function createDayContainer(day) {
    let dayContainer = document.createElement('div');
    dayContainer.style.display = 'flex';
    dayContainer.style.flexDirection = 'column';
    dayContainer.style.margin = '0 10px'; // Add margin between days
  
    let daySpan = document.createElement('p');
    daySpan.textContent = day.day;
    daySpan.style.alignSelf = 'center'; // Center day name vertically
    dayContainer.appendChild(daySpan);
  
    let timeSpan = document.createElement('p');
    timeSpan.textContent = day.time;
    timeSpan.style.alignSelf = 'center'; // Center opening hours vertically
    dayContainer.appendChild(timeSpan);
  
    return dayContainer;
  }
  
  function toggleView(data) {
    dayContainer.innerHTML = ''; // Clear previous content
    
    if (window.innerWidth > 849) {
      populateAllDays(data);
    } else {
      populateCurrentDay(data);
    }
  }
  
  //toggleView(); // Initial check on page load
  
  window.addEventListener('resize', () => getDays(dayContainer));


  


