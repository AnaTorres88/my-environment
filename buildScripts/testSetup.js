//This file isn't transpiled, so must be Common JS and ES5

// Register babel to transpile befor our tests run.

require("babel-register")();

//Disable webpacl features tat Mocha doesn't understand
require.extensions[".css"] = function(){};
