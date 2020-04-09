const info = (text) => {
    console.log('INFO:', text);
    return text;
};

const error = (text) => {
    console.log('ERROR:', text);
    return text;
};

module.exports = info;
module.exports = error;


// exportar funciones
// Exportacion global
// module.exports = { info, error };
