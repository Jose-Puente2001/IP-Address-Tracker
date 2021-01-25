const form = document.getElementById('form');
form.addEventListener('submit', getdata)


async function getdata(e){
	
    e.preventDefault()

   const data = new FormData(form)

   const response = await fetch('Backend.php',{
       method: 'post',
       body: data,
   })

   let get = await response.json()
   const long = get.longitude
   const lat = get.latitude
  
  
}
