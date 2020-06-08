'use strict'


$(document).ready(function () {
  function resultsScreen(angle){
 $('.results').css("transform",` translateX(${angle})`)
  }
  let value =$(".inputBeer")

  $('.btn-results').hide()
  let isClick = value.click(() =>{
    $('.btn-results').show(1000
      )
  })
  $('.btn-return').click(() =>{
    resultsScreen('100%')
  })
  $('.loading').hide()
    $(".btn-results").click(function (e) { 
      e.preventDefault();
      resultsScreen('0')
      
    });
    async function getDataAsync(){
      let response = await fetch('https://api.openbrewerydb.org/breweries')
      let data = await response.json()
      return data;
    }
    
    
    function showResults(res){
      
     let results =  res.map(index =>{
        return (
          `  <div class="results_col">
          <h1>${index.name}</h1>
          <p>Street</p>
          <p>City</p>
          <p>State</p>
          <a href=""></a>
          <p>90909034343</p>
      </div>
        `)
      })
      return results;
    }
    getDataAsync().then(data =>{
      
      $('.results-container').append(showResults(data))
    })
    
});