function nbYear(p0, percent, aug, p) {
    // Initialise array.
    var finalCatch = [];
    // Early conversion.
    var percent = percent / 100;
    // Looping through.
    for(var p0; p0 < p; p0+=p0*percent+aug) {
        currValue = p0 + p0 * percent + aug;
        finalCatch.push(currValue);
    }

    return finalCatch.length;
}