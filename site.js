let questions = [
  {
    id: 1,
    question: "What is part of a database that holds only one type of information?",
    answer: "File",
    options: [
      "Report",
      "Field",
      "Record",
      "File"
    ]
  },
  {
    id: 2,
    question: " 'Os'computer abbreviation usually means ?",
    answer: "OPerating system",
    options: [
      "Order of significance",
      "Open software",
      "Operating system",
      "Optical Sensor"
    ]
  },
  {
    id: 3,
    question: "How many hearts does an octopus have?",
    answer: "four",
    options: [
      "one",
      "two",
      "three",
      "four"
    ]
  },
  {
    id: 4,
    question: "Who developed Yahoo?",
    answer: "David Filo & Jerry Yang",
    options: [
      "Dennis Ritchie & Ken Thompson",
      "David Filo & Jerry Yang",
      "Vint Cerf & Robert Kahn",
      "Steve Case & Jeff Bezos"
    ]
  },
  {
    id: 5,
    question: "Which city hosted the Olympics in the year 2000?",
    answer: "Sydney",
    options: [
      "Sydney",
      "Barcelona",
      "Athens",
      "Havana"
    ]
  },
  {
    id: 6,
    question: "Which of the following is used in pencils?",
    answer: "Graphite",
    options: [
      "Graphite",
      "Silicon",
      "Charcoal",
      "Phosphorous"
    ]
  },
  {
  id: 7,
  question: "he gas usually filled in the electric bulb is",
  answer: "Nitrogen",
  options: [
    "Nitrogen",
    "Hydrogen",
    "Carbon dioxide",
    "Oxygen"
  ]
},
{
  id: 8,
  question: "Joule is the unit of",
  answer: "Energy",
  options: [
    "Temperature",
    "Pressure",
    "Energy",
    "Heat"
  ]
},
{
  id: 9,
  question: "What does the term PLC stand for?",
  answer: "Programmable Logic Controller",
  options: [
    "Programmable Lift Computer",
    "Program List Control",
    "Programmable Logic Controller",
    "Piezo Lamp Connector"
  ]
},
{
  id: 10,
  question: "'DB' computer abbreviation usually means ?",
  answer: "Database",
  options: [
    "Database",
    "Double Byte",
    "Data Block",
    "Driver Boot"
  ]
}
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points ++;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let j = 0; j < option.length; j++) {
        option[j].classList.remove("active");
      }
      option[i].classList.add("active");
    };
  }
}
