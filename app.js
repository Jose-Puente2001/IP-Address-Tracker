import Fetch from './api.js'
import Ui from './ui.js'


const fetch = new Fetch
 


const form = document.getElementById('form');
form.addEventListener('click', FetchApi)


 function FetchApi(e){

  e.preventDefault()
  
  Initapp()
 
}


async function Initapp(){
   
  
 let data = await fetch.api()
 map(data)
 Ui(data)

}



function map(ip){

 //titlelayer
    let map =  L.map('map').setView([ip.latitude, ip.longitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     }).addTo(map);
   
     //marker
     L.marker([ip.latitude, ip.longitude]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

}


 