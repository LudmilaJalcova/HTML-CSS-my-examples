// definovaná funkcia s nazvom ahoj a vo vnútri kučeravých zátvorkách je scope teda priestor čo daná funkcia má vykonať po jej zavolaní
function ahoj() {
  console.log("ahoj svet");
}
// takto definujem volanie funkcie
// ahoj();

// es6
// const ahoj = () => {
//     console.log("ahoj svet");
// }

function ahojMeno(
  name = "nezadali ste meno",
  lastName = "nezadali ste priezvisko"
) {
  // console.log("ahoj " + name + " " + lastName);
  console.log(`ahoj ${name} ${lastName}`); // es6 zapis
}

// ahojMeno("Janko", "Mkrvicka");
// ahojMeno("Janko2");
// ahojMeno();

function vynasob(number) {
  return number * number;
}
// let hodnota = vynasob(2);
// console.log(hodnota);
console.log(vynasob(2));
