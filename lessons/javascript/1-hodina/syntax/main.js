// var, let, const

// zapis konstant
// const a = "string1";
// const b = "string2";
// const c = "string3";
// rovnaky a kratsi zapis
const a = "string1",
  b = "string2",
  c = "string3";

const spocitaj = 1 + 1;
const vynasob = 1 * 2;
const vydel = 2 / 2;
console.log("vysledok scitania: " + spocitaj);
console.log(`vysledok vynasobenia: ${vynasob}`);
console.log(vydel * 1);

const string1 = "string";
const string2 = "string";
const string3 = `s
t
r
i
n
g`;

// zapis parameterov
let prepisovatelnyParameter = "ja som string";
prepisovatelnyParameter = "haha prepisal som ta";

const neprepisovatelnyParameter = 10;
// neprepisovatelnyParameter = 50 neda sa prepisat parameter vdaka const

var globalnyParameter = 10;
globalnyParameter = "prepisem lebo som ulozeny v nie mudrom parameter";

// nesmies pomenuvat parametre podla:
// break, continue, debugger, do ... while, for, function, if ... else, return, switch, try, catch, var....
