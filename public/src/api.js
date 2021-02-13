export default class IpApi {
    async api() {
        const ip = document.getElementById("ip").value;

        const response = await fetch("https://ipwhois.app/json/" + ip);

        let get = await response.json();
        return get;
    }
}
