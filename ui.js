
export default function Ui(ip){

	const region = document.getElementById('region');
   	const city = document.getElementById('city');
   	const isp = document.getElementById('isp');

	region.textContent = ip.region;
    city.textContent = ip.city;
    isp.textContent = ip.isp;

}