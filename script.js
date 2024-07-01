const questions = [
  {
    question: "Siapakah presiden ke 3 Republik Indonesia?",
    answers: [
      { text: "Prabowo Subianto", correct: false },
      { text: "Joko Widodo", correct: false },
      { text: "BJ Habibie", correct: true },
      { text: "Abdurrahman Wahid", correct: false },
    ],
  },
  {
    question: "Apakah Ibukota dari Propinsi Sulawesi Selatan?",
    answers: [
      { text: "Sampit", correct: false },
      { text: "Makasar", correct: true },
      { text: "Lombok", correct: false },
      { text: "Mataram", correct: false },
    ],
  },
  {
    question: "Planet manakah yang dikenal dengan nama Planet Merah?",
    answers: [
      { text: "Pluto", correct: false },
      { text: "Vensus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mars", correct: true },
    ],
  },
  // Add more questions here
  {
    question: "Taman Nasional Bromo Tengger Semeru berata di daerah?",
    answers: [
      { text: "Banyuwangi", correct: false },
      { text: "Lumajang", correct: true },
      { text: "Madiun", correct: false },
      { text: "Nganjuk", correct: false },
    ],
  },
  {
    question: "Dibawah ini adalah teknologi yang dapat digunakan untuk membuat sebuah website, kecuali...",
    answers: [
      { text: "HTML", correct: false },
      { text: "PHP", correct: false },
      { text: "CSS", correct: false },
      { text: "Microsoft Word", correct: true },
    ],
  },
  {
    question: "SMP IHBS Putra berada di lokasi?",
    answers: [
      { text: "munjul", correct: true },
      { text: "bungur", correct: false },
      { text: "transyogi", correct: false },
      { text: "nakula", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(question) {
  const questionElement = document.getElementById("question");
  const answerButtons = document.querySelectorAll(".answer");

  questionElement.textContent = question.question;
  answerButtons.forEach((button, index) => {
    button.textContent = question.answers[index].text;
    button.dataset.correct = question.answers[index].correct;
  });
}

function selectAnswer(button) {
  const correct = button.dataset.correct === "true";
  if (correct) score++;

  Array.from(document.querySelectorAll(".answer")).forEach((button) => {
    button.disabled = true;
    button.style.backgroundColor = button.dataset.correct === "true" ? "green" : "red";
  });

  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
    Array.from(document.querySelectorAll(".answer")).forEach((button) => {
      button.disabled = false;
      button.style.backgroundColor = "#007bff";
    });
    document.getElementById("next-btn").style.display = "none";
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hide");
  document.getElementById("result").classList.remove("hide");
  document.getElementById("score").textContent = score + " dari " + questions.length;
}

function restartQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  document.getElementById("quiz").classList.remove("hide");
  document.getElementById("result").classList.add("hide");
  showQuestion(questions[currentQuestionIndex]);
}

document.addEventListener("DOMContentLoaded", () => {
  showQuestion(questions[currentQuestionIndex]);
});
