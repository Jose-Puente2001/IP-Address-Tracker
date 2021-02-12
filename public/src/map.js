export default function Mapa(ip){
   
   const mapa = L.map('map').setView([ip.latitude, ip.longitude], 13);
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     }).addTo(mapa);
           
    //marker
     L.marker([ip.latitude, ip.longitude])
    .bindPopup('Estás aquí').addTo(mapa)
    .openPopup();
      
}





