
export default async function Api(){

const data = new FormData(form)

  const response = await fetch('Backend.php',{
       method: 'post',
       body: data
   })

   let get = await response.json()
   console.log(get)

 

}


