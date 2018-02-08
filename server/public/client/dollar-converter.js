// const Random = require('./random-number');
class Convert {
    constructor(numberToConvert) {
        this.numberToConvert = numberToConvert;
    }

    //random nunber function
    generateConversionNumber(){
        const roundedNumber = `$${this.numberToConvert}`
        return roundedNumber;
    }
}

module.exports = Convert;