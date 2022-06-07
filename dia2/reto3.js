
const fs = require('fs');
const promise = require('fs/promises');
const readline = require('readline');



let persona = {
    nombre: '',
    apellido: '',
    edad: 0
}



function pregunta(pregunta) {
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        })
    });
    return question;
}

pregunta("What is your name? ").then(function (name) {
    persona.nombre = name;
    pregunta("What is your surname? ").then(function (surname) {
        persona.apellido = surname;
        pregunta("Que edad tienes ? ").then(function (edad) {
            persona.edad = edad;
            fs.writeFile('./objeto3.json', JSON.stringify(persona), function () {
                fs.readFile('./objeto3.json', function (err, objleido) {
                    console.log(JSON.parse(objleido));
                })
            })
        });
    });
});