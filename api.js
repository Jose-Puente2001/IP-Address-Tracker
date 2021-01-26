export default class Fetch{
   
   async api(){
      
   const data = new FormData(form)

  const response = await fetch('Backend.php',{
       method: 'post',
       body: data
   })

   let get = await response.json()
    return get

   }

}

