module.exports = function parseDateAsArray(arrayData, campoString){
    return arrayData.split('T00:00:00.000Z').map(campoString => (campoString.trim()));
}