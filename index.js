const express = require("express");
const app = express();

//configuracion
app.set("port", process.env.PORT || 3000);

//archivos estaticos
app.use(express.static(__dirname + "/public"));

//escuchando el servidor
app.listen(app.get("port"), () => {
    console.log("server en el puerto:" + app.get("port"));
});
