let persona = {
    nombre: 'Karen',
    apellido: 'Pacheco',
    edad: 20
}
fs.writeFile('./objeto.json', JSON.stringify(persona), function () {

}