let jukeboksMenyCont = document.querySelector(".jukeboks-meny-bilde-link");

async function getJukeboksMeny(){
    try{
      let api = `https://6etbe3og.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27jukeboks-meny%27%5D%7B%0A++jukeboksMeny%2C+%0A++%22jukeboksMeny%22%3A+jukeboksMeny.asset-%3Eurl%0A%7D`;
      const response = await fetch(api);
      if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
      const data = await response.json();
      let apiResult = data.result;
      setMenyImgLink(apiResult);
    } catch (error){
      console.error("Error message: " + error)
      jukeboksMenyCont.innerHTML = `<p>Kan ikke finne noen bilde</p>`
    }
  }

  getJukeboksMeny();

  function setMenyImgLink(api){
    jukeboksMenyCont.innerHTML = "";
    jukeboksMenyCont.innerHTML = `<img src="${api[0].jukeboksMeny}" alt="jukeboks menyen"/>
    <a href="${api[0].jukeboksMeny}">Se hvilke sanger vi har her</a>`;
  }

