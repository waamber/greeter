"use strict";

const french = require("./french"); //french.js
const spanish = require("./spanish"); //spanish.js
const italian = require("./italian"); //italian.js
const english = require("./english");



const greetingGenerator = {
  french, italian, spanish, english
};




module.exports = greetingGenerator;