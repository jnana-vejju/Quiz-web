const quiz = [
  {
    q: "What does JS stand for?",
    a: "Java Source",
    b: "JavaScript",
    c: "Just Script",
    d: "Json Script",
    correct: "B"
  },
  {
    q: "Which symbol is used for single-line comment in JS?",
    a: "<!-- -->",
    b: "//",
    c: "/* */",
    d: "#",
    correct: "B"
  },
  {
    q: "Which keyword is used to declare a variable?",
    a: "var",
    b: "int",
    c: "string",
    d: "float",
    correct: "A"
  },
  {
    q: "Which method is used to print output in console?",
    a: "print()",
    b: "log()",
    c: "console.log()",
    d: "document.write()",
    correct: "C"
  },
  {
    q: "Which company developed JavaScript?",
    a: "Google",
    b: "Microsoft",
    c: "Netscape",
    d: "Oracle",
    correct: "C"
  },
  {
    q: "Which data type is NOT supported in JS?",
    a: "Number",
    b: "Boolean",
    c: "Character",
    d: "String",
    correct: "C"
  },
  {
    q: "How do you create a function in JS?",
    a: "function myFunc()",
    b: "def myFunc()",
    c: "create myFunc()",
    d: "func myFunc()",
    correct: "A"
  },
  {
    q: "Which operator is used to compare value and type?",
    a: "==",
    b: "!=",
    c: "===",
    d: "=",
    correct: "C"
  },
  {
    q: "Which event occurs when a button is clicked?",
    a: "onmouseover",
    b: "onchange",
    c: "onclick",
    d: "onload",
    correct: "C"
  },
  {
    q: "Which loop is used to iterate over an array?",
    a: "for",
    b: "foreach",
    c: "loop",
    d: "repeat",
    correct: "A"
  }
];

let i = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").innerText = quiz[i].q;
  document.getElementById("a").innerText = quiz[i].a;
  document.getElementById("b").innerText = quiz[i].b;
  document.getElementById("c").innerText = quiz[i].c;
  document.getElementById("d").innerText = quiz[i].d;
}

function checkAnswer(ans) {
  if (ans === quiz[i].correct) {
    score++;
  }
  i++;
  if (i < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("score").innerText =
      "Final Score: " + score + " / " + quiz.length;
  }
}

loadQuestion();
