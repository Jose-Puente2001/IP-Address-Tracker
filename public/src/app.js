import Fetch from './api.js'
import Ui from './ui.js'
import Mapa from './map.js'



const fetch = new Fetch
 
const form = document.getElementById('form');
form.addEventListener('click', FetchApi)


function FetchApi(e){

e.preventDefault()
  
Initapp()
 
}



async function Initapp(){
   
 let data = await fetch.api()
 Mapa(data)
 Ui(data)

}


let map = L.map('map')
map.setView([51.505, -0.09], 13);
 setInterval(validar_inicializado_mapa, 3000)
//titlelayer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     }).addTo(map);
       
    //marker
     L.marker([51.505, -0.09]).addTo(map)
    .bindPopup('Estás aquí')
    .openPopup();




function validar_inicializado_mapa(){

let container = L.DomUtil.get('map');
    //condición que evalua si el mapa fue inicializado
    if(container != null){
       
       container._leaflet_id = null;
    }

}