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






 


 