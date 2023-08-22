exports.add = (a, b) => {
    return a + b;
}

exports.sumArray = (array) => {
    return array.reduce((acc, curr) => acc + curr, 0);
}