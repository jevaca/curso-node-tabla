const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, listar, hasta) => {

    try {
        let salida = "";
        let salidaConColores = "";

        for (let i = 1; i <= hasta; i++) {

            salida += `${base} x ${i} = ${base * i} \n`;
            salidaConColores += `${(colors.blue(base))} ${ 'x'.red } ${colors.blue(i)} ${ '='.green } ${colors.blue(base * i)} \n`;
        }

        if (listar) {
            console.log('====================='.rainbow);
            console.log(`     Tabla del ${base}      `.red);
            console.log('====================='.rainbow);
            console.log(salidaConColores);
        }

        fs.writeFile(`./salida/tabla${base}-.txt`, salida, (err) => {

            if (err) throw err;

            //console.log(`Archivo tabla-${base}.txt creado`);
        }); //si no se especfica un path fs toma por defecto la carpeta donde se ejecuta el script


        //fs.writeFileSync( `tabla${base}-.txt`, salida ); //si sucede un error debemos atraparlo en un try-catch

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }



};

// export{
//     crearArchivo, //en node no se puede utilizar el export, en su lugar se utiliza modelu.exports
// }

module.exports = {
    crearArchivo
}