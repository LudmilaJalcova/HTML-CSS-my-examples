const funkcie = require("./funkcie/main");
const _ = require("lodash");

// funkcie.ahoj();

const object1 = { a: 1 };
const object2 = { b: 3, c: 2 };
const result = _.assign(object1, object2);
console.log(result);
