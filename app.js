document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "1",
      img: "imagenes/ 1.jpeg"
    },
    {
      name: "2",
      img: "imagenes/ 2.jpg"
    },
    {
      name: "3",
      img: "imagenes/ 3.jpg"
    },
    {
      name: "4",
      img: "imagenes/ 4.jpg"
    },
    {
      name: "5",
      img: "imagenes/ 5.jpg"
    },
    {
      name: "6",
      img: "imagenes/ 6.jpg"
    },
    {
      name: "7",
      img: "imagenes/ 7.jpg"
    },
    {
      name: "8",
      img: "imagenes/ 8.jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];

  function creartablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");

      carta.setAttribute("src", "images/reverso.png");

      carta.setattribute("data-id", i);

      carta.addEventListener("click", voltearcarta);

      cuadricula.appendchild(carta);
    }
  }
  function voltearcarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  creartablero();
});
