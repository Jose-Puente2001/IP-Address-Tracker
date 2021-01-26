import Fetch from './api.js'


const form = document.getElementById('form');
form.addEventListener('submit', FetchApi)


 function FetchApi(e){

  e.preventDefault()
  
  Instancia()
 
}


function Instancia(){
   
  const fetch = new Fetch 
  fetch.api()
  
}


 