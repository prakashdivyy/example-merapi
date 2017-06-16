"use strict";

const Component = require("merapi/component");

module.exports = class FirstComponent extends Component {

    constructor() {
        super();
        this._counter = 0;
    }

    getCounter() {
        return this._counter;
    }

    increment() {
        this._counter++;
    }
};