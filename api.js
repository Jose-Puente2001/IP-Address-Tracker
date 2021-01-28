export default class Fetch{
   
   async api(){
      
   const ip = document.getElementById('ip').value

  const response = await fetch('http://ipwhois.app/json/' + ip)
     
   let get = await response.json()
    return get

   }

}

