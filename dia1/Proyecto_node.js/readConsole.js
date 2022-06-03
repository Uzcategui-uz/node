const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function readConsole(callback) {

    let persona = {
        nombre: '',
        apellido: '',
        edad: 0
    }
    rl.question("What is your name? ", function (name) {

        persona.nombre = name;
        rl.question("What is your surname? ", function (surname) {
            persona.apellido = surname;
            rl.question("Que edad tienes ? ", function (edad) {
                persona.edad = edad;

                return callback('./objeto3.json',persona);
            })
        })
    });
}


module.exports = { readConsole };