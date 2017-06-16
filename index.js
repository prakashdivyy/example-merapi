"use strict";

const merapi = require("merapi");
const config = require("./config.json");
config.package = require("./package.json");

module.exports = merapi({
    basepath: __dirname,
    config: config,
    extConfig: require("./config.ext.json")
});
