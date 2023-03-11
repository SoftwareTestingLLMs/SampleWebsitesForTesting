const cards = [
  { question: "What is the capital of France?", answer: "Paris", level: 1 },
  { question: "What is the largest planet in our solar system?", answer: "Jupiter", level: 1 },
  { question: "What is the formula for water?", answer: "H2O", level: 1 },
];

let currentCardIndex = 0;

function getNextCard() {
  const card = cards[currentCardIndex];
  currentCardIndex = (currentCardIndex + 1) % cards.length;
  return card;
}

function showCard(card) {
  const cardElement = document.getElementById("card");
  cardElement.innerHTML = `<h2>${card.question}</h2><p>Click to reveal the answer</p>`;
  cardElement.addEventListener("click", () => {
    cardElement.innerHTML = `<h2>${card.question}</h2><p>${card.answer}</p><button id="correct-button">Correct</button><button id="incorrect-button">Incorrect</button>`;
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


function resetCards() {
  cards.forEach((card) => (card.level = 1));
  currentCardIndex = 0;
  shuffleCards();
}

function addCard() {
  const question = prompt("Enter the question:");
  const answer = prompt("Enter the answer:");
  const newCard = { question, answer, level: 1 };
  cards.push(newCard);
}

function deleteCard() {
  cards.splice(currentCardIndex, 1);
  currentCardIndex = currentCardIndex % cards.length;
  const card = getNextCard();
  showCard(card);
}

function editCard() {
  const card = cards[currentCardIndex];
  const newQuestion = prompt("Enter the new question:", card.question);
  const newAnswer = prompt("Enter the new answer:", card.answer);
  card.question = newQuestion;
  card.answer = newAnswer;
  const newCard = getNextCard();
  showCard(newCard);
}

function sortCardsbyLevel() {
  cards.sort((card1, card2) => (card2.level - card1.level));
  const card = getNextCard();
  showCard(card);
}

function filterCardsbyLevel() {
  const level = prompt("Enter level:");
  const filteredCards = cards.filter((card) => card.level >= level);
  const card = filteredCards[currentCardIndex];
  showCard(card);
}

const nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", () => {
  const card = getNextCard();
  showCard(card);
});

const shuffleButton = document.getElementById("shuffle-button");
shuffleButton.addEventListener("click", () => {
  shuffleCards();
  const card = getNextCard();
  showCard(card);
});

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  resetCards();
  const card = getNextCard();
  showCard(card);
});

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => {
  addCard();
  const card = getNextCard();
  showCard(card);
});

const deleteButton = document.getElementById("delete-button");
deleteButton.addEventListener("click", () => {
  deleteCard();
});

const editButton = document.getElementById("edit-button");
editButton.addEventListener("click", () => {
  editCard();
});

const sortButton = document.getElementById("sort-button");
sortButton.addEventListener("click", () => {
  sortCardsbyLevel();
});

const filterButton = document.getElementById("filter-button");
filterButton.addEventListener("click", () => {
  filterCardsbyLevel();
});