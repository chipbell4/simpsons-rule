# Simpson's Rule

A handy function for numerically integrating a function via simpson's rule. Here's an example:
`
var simpsons = require('simpsons-rule');

var F = function(x) {
    return 2 * x;
};

var result = simpsons(F, 0, 1); // integrate from 0 to 1. Should be close to 0.5

// Or provide a step count
result = simpsons(F, 0, 1, 1000);
`
