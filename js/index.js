function test() {
  var app = document.getElementById("app");
  var caracteres = document.getElementById("caracter-date");
  var configuracion = {
    caracteres: parseInt(caracteres.value),
    simbolos: true,
    numeros: true,
    mayusculas: true,
    minusculas: true,
  };

  const caracter = {
    numeros: "0 1 2 3 4 5 6 7 8 9",
    simbolos: "! · $ % & / ( ) = *",
    mayusculas: "A B C D E F G H T V",
    minusculas: "a b c d e f g h t v",
  };

  app.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  app.elements.namedItem("btn-mas").addEventListener("click", function () {
    if (configuracion.caracteres < 15) {
      configuracion.caracteres++;
      caracteres.value = configuracion.caracteres;
    }
  });
  app.elements.namedItem("btn-menos").addEventListener("click", function () {
    if (configuracion.caracteres > 1) {
      configuracion.caracteres--;
      caracteres.value = configuracion.caracteres;
    }
  });

  app.elements.namedItem("btn-generado").addEventListener("click", function () {
    console.log("activado");
    var passworld = "";
    var simbolos = caracter.simbolos.split(" ");
    var numeros = caracter.numeros.split(" ");
    var mayusculas = caracter.mayusculas.split(" ");
    var minusculas = caracter.minusculas.split(" ");
    for (i = 0; i < configuracion.caracteres; i++) {
      var ban = Math.floor(Math.random() * 4 + 1);
      var number = Math.floor(Math.random() * 8);
      if (ban == 1 && configuracion.numeros == true)
        passworld += numeros[number];
      else if (ban == 2 && configuracion.simbolos == true)
        passworld += simbolos[number];
      else if (ban == 3 && configuracion.mayusculas == true)
        passworld += mayusculas[number];
      else if (ban == 4 && configuracion.minusculas == true)
        passworld += minusculas[number];
      else i--;
    }
    const pass = document.querySelector("#input-password");
    pass.value = passworld;
    clave();
  });

  function clave() {
    const text = document.querySelector("#file");
    text.classList.remove("active");
  }

  function cambio(btn, img) {
    app.elements.namedItem(btn).addEventListener("click", function () {
      const simbolos = document.querySelector(img);
      if (simbolos.classList[1] == "fa-check") {
        simbolos.classList.remove("fa-check");
        simbolos.classList.add("fa-times");
        if (img == "#img1") configuracion.simbolos = false;
        else if (img == "#img2") configuracion.numeros = false;
        else if (img == "#img3") configuracion.mayusculas = false;
      } else {
        simbolos.classList.remove("fa-times");
        simbolos.classList.add("fa-check");
        if (img == "#img1") configuracion.simbolos = true;
        else if (img == "#img2") configuracion.numeros = true;
        else if (img == "#img3") configuracion.mayusculas = true;
      }
    });
  }
  cambio("btn-simbolos", "#img1");
  cambio("btn-numeros", "#img2");
  cambio("btn-mayusculas", "#img3");
}

test();
