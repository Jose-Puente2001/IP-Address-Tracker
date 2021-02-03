export default function Mapa(ip){
   
    let map = L.map('map').setView([ip.latitude, ip.longitude], 13);
    let container = L.DomUtil.get('map');
    //condición que evalua si el mapa fue inicializado
      if(container != null){
        container._leaflet_id = null;
      }
    
    //titlelayer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     }).addTo(map);
    
      
    //marker
     L.marker([ip.latitude, ip.longitude]).addTo(map)
    .bindPopup('Estás aquí')
    .openPopup();
      

}
