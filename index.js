const express = require ('express');
const app = express();

app.use(express.static(__dirname + '/public'))


const server = app.listen(3000, ()=>{
	console.log('server en el puerto 3000');
})