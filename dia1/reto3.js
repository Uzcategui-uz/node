
const fs = require('fs')
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

// rl.question("bjeto.json", function) 

let persona = {
    nombre : '',
    apellido: '',
    edad : 0
    }
rl.question("What is your name? ", function (name) {

    persona.nombre = name;
    rl.question("What is your surname? ", function (surname) {
        persona.apellido = surname;
        rl.question("Que edad tienes ? ", function (edad) {
            persona.edad = edad;

            fs.writeFile('./objeto3.json',JSON.stringify(persona), function(){

                fs.readFile('./objeto3.json', function(err, objleido){
                        console.log( JSON.parse(objleido) );
                })
        
        })
    })
    
    })
});