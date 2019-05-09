"use strict";

function getBeerData(searchTerm){
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
            <h2>${index.name}</h2>
            <img src=${index.image_url} alt=${index.name}/>
            <ul>
              <li>PH: ${index.ph} people</li>
              <li>Description: ${index.description}</li>
              <li>Contributed: ${index.contributed_by}</li>
            </ul>
          `
        )
    })
    document.getElementById('display').innerHTML =results;
  }



