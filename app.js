import Fetch from './api.js'
import Mapa from './map.js'

const fetch = new Fetch 
const map = new Mapa

const form = document.getElementById('form');
form.addEventListener('submit', FetchApi)


 function FetchApi(e){

  e.preventDefault()
  
  Instancia()
 
}


async function Instancia(){
   
  
 const data = await fetch.api()
  map.tileLayer(data)
  
}


 