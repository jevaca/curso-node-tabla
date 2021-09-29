const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();


//PARA CAPTURAR VALORES DESDE LA CONSOLA

//FORMA TEORICA ( NO SE UTILIZA )
// const [ , , arg3] = process.argv; //con process.argv obtenemos lo que es usuario escribio en la consola. El primer y segundo elemento corresponden  a la ubicación del proyecto y el script
// const [ , base] = arg3.split('='); //split devuelve un array de dos o más cadenas diviendo la cadena original donde se encuentr el caracter especificado en el argumento

//CON YARGS
 
//yargs por defecto me permite utilizar --help 

crearArchivo(argv.base, argv.listar, argv.hasta)
.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.rainbow))
.catch( err => console.log(err));
