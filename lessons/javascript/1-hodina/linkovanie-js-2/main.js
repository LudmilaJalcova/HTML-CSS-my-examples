window.onload = () => {
  // priestor scope pre metody ktore potrebuju pockat na vykresleny DOM
  document.body.style.backgroundColor = "red";
};

const pridajText = () => {
  const text = "moj prvy vlozeny text do stranky";
  document.getElementById("mojeId").innerHTML = text;
};

const odoberText = () => {
  document.getElementById("mojeId").innerHTML = "";
};
