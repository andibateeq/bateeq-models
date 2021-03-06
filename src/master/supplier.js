'use strict'

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class Supplier extends BaseModel {
    constructor(source) {
        super('supplier', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';
        this.address = '';
        this.contact = '';
        this.phone = '';
        this.PIC = '';
        this.import = false;
        this.NPWP = '';
        this.serialNumber = '';
        this.copy(source);
    }
}