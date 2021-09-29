const { number } = require('yargs');

const argv = require('yargs') //capturamos lo que el cliente escribe en consola
                    .options({

                        'b': { //con options declaramos el comando que podrá ejecutar el cliente en la consola en este caso el comando 'b' en su forma corta (colocando antes de la letra un - o --)
                            alias: 'base',  //nombre completo del comando -b o --b es igual a -base o --base
                            demandOption: true, //si es obligatorio
                            type: 'number', //tipo de datos que debe esperar
                            describe: 'Es la base de la tabla de multiplicar'
                        },

                        'l': {
                            alias: 'listar',
                            demandOption: false,
                            type: 'boolean',
                            default: false, //valor por defecto en caso de que el usuario no lo especifique
                            describe: 'Muestra la tabla en la consola'

                        },

                        'h': {
                            alias: 'hasta',
                            demandOption: false,
                            type: 'number',
                            default: 10,
                            describe: 'Cantidad de veces que se va a multiplicar',
                        }

                    })
                    .check((argv, options) => { //cuando se encuentra un error se dispara el check mostrado el helper (--helper) y podemos atrapar la excepción para mostrar un mensaje
                        if( isNaN( argv.b ) ){
                            throw 'La base tiene que ser un número'
                        }
                        if( isNaN( argv.h ) ){
                            throw 'El hasta tiene que ser un número'
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;