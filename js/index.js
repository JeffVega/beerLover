"use strict";

function getBeerData(searchTerm){
    event.preventDefault();
    let beer = document.getElementById("inputBeer").value;
    const url = `https://api.punkapi.com/v2/beers?beer_name=${beer}`;
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
     xonsole.log(err)
    });
    
}

function displayResults(data) {
    let results = data.map(index =>{
        return(
            `
            <div class="beerResults">
            <h2 class="beerResults__name" >${index.name}</h2>
            <img class="beerResults__img"src=${index.image_url} alt=${index.name}/>
            <ul class="beerResults__items">
              <li>PH: ${index.ph} people</li>
              <li>Description: ${index.description}</li>
              <li>Contributor: ${index.contributed_by}</li>
            </ul>
            </div>
          `
        )
    })
    document.getElementById('display').innerHTML =results;
    document.getElementById("inputBeer").value =" "
  }



