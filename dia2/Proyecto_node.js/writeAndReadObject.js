
// 1. importacion de modulos!!!!!!!!
const fs = require('fs');
const promise = require('fs/promises');


// 2. Crear funcion !!!!! que escribe y lee
async function writeAndRead(archivo, datoObj) {
    fs.writeFile(archivo, JSON.stringify(datoObj), function () {
        fs.readFile(archivo, function (err, datoleido) {
            console.log(JSON.parse(datoleido));
        })
    })
}

// 3.exportacion!!!!
module.exports = { writeAndRead };
