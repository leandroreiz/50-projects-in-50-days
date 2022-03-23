const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

const quizContainer = document.querySelector('.quiz-container');
const question = document.querySelector('.question');
const answers = document.querySelectorAll('.answer');
const aText = document.querySelector('#a-text');
const bText = document.querySelector('#b-text');
const cText = document.querySelector('#c-text');
const dText = document.querySelector('#d-text');
const submitBtn = document.querySelector('.submit-btn');

let currentQuiz = 0;
let score = 0;

const clearAnswers = () => {
  answers.forEach((answer) => {
    answer.checked = false;
  });
};

const getSelected = () => {
  let userAnswer;

  answers.forEach((answer) => {
    if (answer.checked) userAnswer = answer.id;
  });

  return userAnswer;
};

const checkAnswer = () => {
  const answer = getSelected();

  if (!answer) return;

  if (answer === quizData[currentQuiz].correct) score++;

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quizContainer.innerHTML = `
      <h2>You answered ${score}/${quizData.length} questions correctly!</h2>

      <button onclick="location.reload()">Reload</button>
    `;
  }
};

const loadQuiz = () => {
  clearAnswers();

  const currentQuizData = quizData[currentQuiz];
  question.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
};

submitBtn.addEventListener('click', checkAnswer);

loadQuiz();
