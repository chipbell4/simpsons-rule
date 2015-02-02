/**
 * Helper for caculating a numerical integral using simpson's rule
 *
 * @param F         The function to integrate
 * @param a         The left lower bound
 * @param b         The right upper bound
 * @param stepCount The numbers of steps to use (defaults to 25)
 */
module.exports = function(F, a, b, stepCount) {
    // Calculate the step size
    stepCount = stepCount || 25;
    var h = (b - a) / stepCount;

    var total = F(a);

    for(var i = 1; i < stepCount; i++) {
        var functionValue = F(a + h * i);
        if(i % 2 == 1) {
            total += 4 * functionValue;
        }
        else {
            total += 2 * functionValue;
        }
    }

    total += F(b);

    return total * h / 3;
};
