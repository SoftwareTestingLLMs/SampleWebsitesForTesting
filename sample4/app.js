const cards = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
    level: 1
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
    level: 1
  },
  {
    question: "What is the formula for water?",
    answer: "H2O",
    level: 1
  }
];

let currentCardIndex = 0;

function getNextCard() {
  const card = cards[currentCardIndex];
  currentCardIndex = (currentCardIndex + 1) % cards.length;
  return card;
}

function showCard(card) {
  const cardElement = document.getElementById("card");
  cardElement.innerHTML = `
    <h2>${card.question}</h2>
    <p>Click to reveal the answer</p>
  `;

  cardElement.addEventListener("click", () => {
    cardElement.innerHTML = `
      <h2>${card.question}</h2>
      <p>${card.answer}</p>
      <button id="correct-button">Correct</button>
      <button id="incorrect-button">Incorrect</button>
    `;

    const correctButton = document.getElementById("correct-button");
    const incorrectButton = document.getElementById("incorrect-button");

    correctButton.addEventListener("click", () => {
      card.level++;
      const nextCard = getNextCard();
      showCard(nextCard);
    });

    incorrectButton.addEventListener("click", () => {
      card.level = 1;
      const nextCard = getNextCard();
      showCard(nextCard);
    });
  });
}

const nextButton = document.getElementById("next-button");

nextButton.addEventListener("click", () => {
  const card = getNextCard();
  showCard(card);
});
