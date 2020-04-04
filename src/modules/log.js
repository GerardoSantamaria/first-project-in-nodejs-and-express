function info(text) {
    console.log("INFO:", text);
    return text;
}

//Dos formas de exportacion parcial
//1
module.exports.error = function error(text) {
    console.log("ERROR:", text);
    return text;
}

//2
module.exports.info = info;

//exportar funciones
//Exportacion global
//module.exports = { info, error };