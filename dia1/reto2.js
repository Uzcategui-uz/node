
// importacion modulo fs
const fs = require('fs');


// objeto
let persona = {
    nombre : 'vir',
    apellido: 'uzeta',
    edad : 20
}

// creamos una funcio que nos escribe u archivo .json de el objeto persona
// y despues de crear el archivo, lo lee y nos devulev el objeto de nuevo.
function escribirYLeer (persona){

    // utilizamos el metodo writeFile('ruta',objetoString, callback()*), pra crear nuestro archivo.json
    // JSON.stringify, nos sirve para pasar el objeto a String
    // *Esta callback sirve para controlar la asicronia y que nos ejecute la lecatura
    // del archivo.json despues d e crearlo con el metodo writeFile
    fs.writeFile('./objeto.json',JSON.stringify(persona), function(){

        // esto es el codogo que ejecuta la callback
        // el metodo readFile nos lee un archivo  .json
        // y tiene como parametros readFile(la ruta que queremos leer, Callback(error, datoleido))
        fs.readFile('./objeto.json', function(err, objleido){
                // JSON.parse(objleido), sirve para devolver el objeto string a su tipo original
                console.log( JSON.parse(objleido) );
        })
    } )
}

escribirYLeer(persona);
