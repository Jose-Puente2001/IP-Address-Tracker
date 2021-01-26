import Api from './api.js'

const form = document.getElementById('form');
form.addEventListener('submit', FetchApi)


 function FetchApi(e){

  e.preventDefault()

  Api()

}



 