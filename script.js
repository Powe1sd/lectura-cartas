// Definir las cartas
const cards = [
  {
    title: "1 de Copas",
    content: "El 1 de Copas simboliza nuevos comienzos emocionales.",
    image: "img/copas/1-copas.jpg",
  },
  {
    title: "2 de Bastos",
    content: "El 2 de Bastos habla de planificación y decisiones importantes.",
    image: "img/bastos/2-bastos.jpg",
  },
  {
    title: "3 de Bastos",
    content: "El 3 de Bastos refleja el éxito y el progreso.",
    image: "img/bastos/3-de-bastos.jpg",
  },
  // Aquí agregarás las otras cartas que desees

  {
    title: "4 de Bastos",
    content:
      "El 4 de Bastos simboliza la estabilidad, la armonía y el logro de metas.",
    image: "img/bastos/4-bastos.jpg",
  },
  {
    title: "5 de Bastos",
    content:
      "El 5 de Bastos indica conflicto, competencia o lucha por alcanzar un objetivo.",
    image: "img/bastos/5-de-bastos.jpg",
  },
  {
    title: "6 de Bastos",
    content:
      "El 6 de Bastos simboliza la victoria, el reconocimiento y el logro de tus metas.",
    image: "img/bastos/6-de-bastos.jpg",
  },
  {
    title: "7 de Bastos",
    content:
      "El 7 de Bastos refleja la necesidad de defender tus ideas y principios.",
    image: "img/bastos/7-bastos.jpg",
  },
  {
    title: "10 de Bastos",
    content: "El 8 de Bastos es una carta de velocidad y movimiento.",
    image: "img/bastos/10-de-bastos.jpg",
  },
  {
    title: "11 de Bastos",
    content:
      "El 9 de Bastos muestra que has estado luchando durante mucho tiempo.",
    image: "img/bastos/11-bastos.jpg",
  },

  {
    title: "12 de Bastos",
    content:
      "El 10 de Bastos simboliza el estrés, la carga y la sobrecarga de responsabilidades.",
    image: "img/bastos/12-bastos.jpg",
  },
  // Agregar más cartas si es necesario...

  {
    title: "2 de Copas",
    content:
      "El 2 de Copas simboliza la unión, la armonía y las relaciones de pareja. Esta carta predice una conexión profunda con otro ser humano, ya sea en el amor o en una asociación importante.",
    image: "img/copas/2-de-copas.jpg",
  },
  {
    title: "3 de Copas",
    content:
      "El 3 de Copas es la carta de la celebración, la amistad y la alegría compartida. Es un recordatorio de que la vida está llena de momentos de gratitud y que compartir estos momentos con los demás trae felicidad.",
    image: "img/copas/3-de-copas.jpg",
  },
  {
    title: "4 de Copas",
    content:
      "El 4 de Copas refleja la insatisfacción emocional y la necesidad de reevaluar tus sentimientos. Puede significar que estás buscando algo más, pero no estás viendo las oportunidades que ya tienes.",
    image: "img/copas/4-copas.jpg",
  },
  {
    title: "5 de Copas",
    content:
      "El 5 de Copas habla de la tristeza, la pérdida y el arrepentimiento. Es una carta que nos recuerda que es importante no quedarnos anclados en el pasado, sino aprender de las experiencias.",
    image: "img/copas/5-copas.jpg",
  },
  {
    title: "6 de Copas",
    content:
      "El 6 de Copas simboliza la nostalgia, los recuerdos y la infancia. Es una carta que invita a revivir momentos felices y a reconectar con los recuerdos del pasado que te traen paz.",
    image: "img/copas/6-copas.jpg",
  },
  {
    title: "7 de Copas",
    content:
      "El 7 de Copas refleja la confusión, las ilusiones y las opciones que te rodean. Esta carta te aconseja tener claridad y tomar decisiones informadas para no caer en las trampas de la fantasía.",
    image: "img/copas/7-de-copas.jpg",
  },
  {
    title: "10 de Copas",
    content:
      "El 8 de Copas simboliza la necesidad de dejar atrás lo que ya no te sirve. Es una carta de búsqueda interior, de dejar lo conocido para explorar nuevas posibilidades.",
    image: "img/copas/10-copas.jpg",
  },
  {
    title: "11 de Copas",
    content:
      "El 9 de Copas es la carta de la satisfacción emocional. Indica que los deseos se están cumpliendo y que estás experimentando un momento de bienestar y plenitud.",
    image: "img/copas/11-de-copas.jpg",
  },
  {
    title: "12 de Copas",
    content:
      "El Rey de Copas representa un hombre maduro, sabio y emocionalmente equilibrado. Se asocia con cualidades como: Sabiduría emocional, Protección y consejo.",
    image: "img/copas/12-copas.jpg",
  },
  // Añadiendo las cartas de Oros
  {
    title: "1 de Oros",
    content:
      "El 1 de Oros simboliza una nueva oportunidad en el plano material. Es la carta de nuevos comienzos financieros, estabilidad y prosperidad.",
    image: "img/oro/1-de-oros.jpg",
  },
  {
    title: "2 de Oros",
    content:
      "El 2 de Oros refleja la necesidad de equilibrio entre los aspectos materiales y emocionales de tu vida. Habla de las prioridades y el manejo del tiempo y los recursos.",
    image: "img/oro/2-de-oros.jpg",
  },
  {
    title: "3 de Oros",
    content:
      "El 3 de Oros indica la cooperación, el trabajo en equipo y el progreso a través de la colaboración. Es una carta que muestra que el esfuerzo conjunto da frutos.",
    image: "img/oro/3-oros.jpg",
  },
  {
    title: "4 de Oros",
    content:
      "El 4 de Oros simboliza la seguridad material, pero también puede indicar el miedo a perder lo que se ha alcanzado. Es una carta que habla de la necesidad de soltar y compartir para avanzar.",
    image: "img/oro/4-de-oros.jpg",
  },
  {
    title: "5 de Oros",
    content:
      "El 5 de Oros refleja dificultades económicas o pérdidas materiales. Aunque es una carta de dificultades, también nos recuerda que las oportunidades siempre están cerca, si se buscan.",
    image: "img/oro/5-oros.jpg",
  },
  {
    title: "6 de Oros",
    content:
      "El 6 de Oros simboliza la generosidad, el equilibrio entre dar y recibir. Habla de momentos de abundancia donde es posible compartir con los demás.",
    image: "img/oro/6-oros.jpg",
  },
  {
    title: "7 de Oros",
    content:
      "El 7 de Oros es la carta de la paciencia, la evaluación y la cosecha. Habla de que los esfuerzos realizados ya están dando resultados, pero se requiere tiempo para ver los frutos completos.",
    image: "img/oro/7 de oros.jpg",
  },

  {
    title: "10 de Oros",
    content:
      "El 10 de Oros refleja la estabilidad, la riqueza y el legado familiar. Es una carta que habla de la abundancia en todos los aspectos, incluido el bienestar generacional.",
    image: "img/oro/10-oros.jpg",
  },
  {
    title: "11 de Oros",
    content:
      "El 11 de Oros es una carta que habla del éxito material alcanzado a través del esfuerzo constante, así como de los beneficios obtenidos con trabajo continuo.",
    image: "img/oro/11-de-oros.jpg",
  },
  {
    title: "12 de Oros",
    content:
      "El 12 de Oros indica una culminación exitosa, pero también el inicio de un nuevo ciclo en el que se requieren más cambios y la adaptación a nuevas situaciones.",
    image: "img/oro/12-de-oros.jpg",
  },
  // Agrega más cartas aquí...
];

// Variables para controlar el estado del juego
let selectedCards = [];
let remainingCards = 9;

// Obtener el contador, el mazo y el botón de revelar
const counter = document.getElementById("counter");
const deck = document.getElementById("deck");
const revealButton = document.getElementById("reveal");

// Actualizar el contador de cartas restantes
function updateCounter() {
  counter.textContent = `Cartas restantes: ${remainingCards}`;
  if (remainingCards === 0) {
    revealButton.disabled = false;
  } else {
    revealButton.disabled = true;
  }
}
// Función para mezclar el arreglo de cartas de manera aleatoria
function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]]; // Intercambiar elementos
  }
}

// Mostrar las cartas en el mazo
function renderDeck() {
  deck.innerHTML = "";

  // Mezclar las cartas antes de renderizarlas
  shuffleCards(cards);

  cards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="${card.image}" alt="${card.title}" />
        </div>
        <div class="card-back">
          <h3>${card.title}</h3>
          <p>Haz clic para seleccionar.</p>
        </div>
      </div>
    `;

    // Agregar evento de selección de carta
    cardElement.addEventListener("click", () =>
      selectCard(cardElement, card, index)
    );

    deck.appendChild(cardElement);
  });
}

// Seleccionar una carta
function selectCard(cardElement, card, index) {
  // Si ya se han seleccionado 9 cartas, no permitir más selecciones
  if (
    selectedCards.length >= 9 &&
    !cardElement.classList.contains("selected")
  ) {
    alert(
      "Solo puedes seleccionar 9 cartas. Ve al botón de revelar significado  "
    );
    return;
  }

  // Marcar o desmarcar la carta seleccionada
  if (cardElement.classList.contains("selected")) {
    cardElement.classList.remove("selected");
    selectedCards = selectedCards.filter(
      (selectedCard) => selectedCard !== card
    );
    remainingCards++;
  } else {
    cardElement.classList.add("selected");
    selectedCards.push(card);
    remainingCards--;
  }

  // Actualizar el contador
  updateCounter();
}

// Mostrar los significados de las cartas seleccionadas
function revealMeanings() {
  const meaningsList = document.getElementById("meanings");
  meaningsList.innerHTML = "";
  selectedCards.forEach((card) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <img src="${card.image}" alt="${card.title}" class="thumbnail" />
      <div>
        <h4>${card.title}</h4>
        <p>${card.content}</p>
      </div>
    `;
    meaningsList.appendChild(listItem);
  });
}

// Inicializar el juego
function init() {
  renderDeck();
  updateCounter();
  revealButton.addEventListener("click", revealMeanings);
}

init();
