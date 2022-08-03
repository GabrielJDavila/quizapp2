const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('nxt-btn');
const finishBtn = document.getElementById('finish-btn');
let score = 0;
let shuffledQuestions, currentQuestionIndex;
const questions = [
  {
    question: 'what is 2+2',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'what is the broken blade?',
    answers: [
      { text: 'narsil', correct: true },
      { text: 'farnil', correct: false }
    ]
  },
  {
    question: 'who is good wizard?',
    answers: [
      { text: 'Gandalf', correct: true },
      { text: 'Fandalf', correct: false }
    ]
  },
  {
    question: 'what is Arda?',
    answers: [
      { text: 'The world', correct: true },
      { text: 'Frodos fav food', correct: false }
    ]
  }
]


startBtn.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  console.log("hi");
  startBtn.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainer.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    finishBtn.classList.remove('hide');
    finishBtn.addEventListener('click', () => {
      finishBtn.classList.add('hide');
      // answerButtonsElement.classList.add('hide');
      questionElement.innerText = `Your score is ${score}.`;
      startBtn.innerText = 'restart';
      startBtn.classList.remove('hide');
    })
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
    score++;
  } else {
    element.classList.add('wrong');
    score + 0;
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

// finishBtn.addEventListener('click', () => {
//   finishBtn.classList.add('hide');
//   answerButtonsElement.classList.add('hide');
//   questionElement.innerText = `Your score is ${score}.`;
//   startBtn.innerText = 'restart';
//   startBtn.classList.remove('hide');
// })

// const startBtn = document.getElementById('start-btn');
// const questionContainer = document.getElementById('question-container')
// let shuffledQuestions, currentQuestionIndex;
// const questionTitle = document.getElementById('question');
// const answerButtons = document.getElementById('answer-buttons');
// const nextButton = document.querySelector('.nxt-btn');
//
// const questions = [
//   {
//     question: 'Who is the main character in LOTR?',
//     answers: [
//       { text: 'Frodo', correct: true },
//       { text: 'Frido', correct: false }
//     ]
//   }
// ]
//
// startBtn.addEventListener('click', startGame)
//
// function startGame() {
//   console.log('hello');
//   startBtn.classList.add('hide');
//   shuffledQuestions = questions.sort(() => Math.random() - .5);
//   currentQuestionIndex = 0;
//   questionContainer.classList.remove('hide');
//   setNextQuestion();
// }
//
// function setNextQuestion() {
//   resetState()
//   showQuestion(shuffledQuestions[currentQuestionIndex]);
// }
//
// function showQuestion(question) {
//   questionTitle.innerText = question.question;
//   question.answers.forEach(answer => {
//     const button = document.createElement('button');
//     button.innerText = answer.text;
//     button.classList.add('btn');
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }
//     button.addEventListener('click', selectAnswer);
//     answerButtons.appendChild(button);
//   });
// }
//
// function resetState() {
//   nextButton.classList.add('hide');
//   while (answerButtons.firstChild) {
//     answerButtons.removeChild(answerButtons.firstChild);
//   }
// }
//
// function selectAnswer(e) {
//   const selectedButton = e.target;
//   const correct = selectedButton.dataset.correct;
//   setStatusClass(document.body, correct);
//   Array.from(answerButtons.children).forEach(button => {
//
//   });
// }
