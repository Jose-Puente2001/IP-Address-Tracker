export default class Mapa{


    tileLayer(ip){
     
    let map =  L.map('map').setView([ip.latitude, ip.longitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     }).addTo(map);

     L.marker([ip.latitude, ip.longitude]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

	}


}