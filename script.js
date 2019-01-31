"use strict";

window.addEventListener('load', function () {
  init();
})

const questionTitle = document.querySelector("#question");
const questionText = document.querySelector("#questionText");
const answer = document.querySelector("#answer");
let currentQuestionIndex = 0;

let questions = [
  {
    id: 1,
    question: "Monthly income",
    txt: "How much do you averagely earn per month?",
    type: "input",
    answerQ: function () {
      let theInput = document.createElement("input");
      theInput.setAttribute("type", "number");
      return theInput;
    },
    userAnswer: null
  },
  {
    id: 2,
    question: "Expectation",
    txt: "What kind of growth do you expect to reach in 5 years?",
    type: "radio",
    answerQ: function () {
      let values = ["Slower Growth", "Average Growth", "Above Average Growth", "Amazing"]
      let form = document.createElement("form");
      values.forEach(function (value) {
        let theInput = document.createElement("input");
        let theBreak = document.createElement("br");
        theInput.setAttribute('type', "radio");
        theInput.setAttribute("name", "expectation")
        theInput.setAttribute("value", value)
        let nameInput = document.createElement("p");
        nameInput.textContent = value;

        form.appendChild(theInput);
        form.appendChild(nameInput);
        form.appendChild(theBreak);

      })
      return form;
    },
    userAnswer: null
  },
  {
    id: 3,
    question: "Team and Leader",
    txt: "How strong is entrepreneur and a team? (100% is average)",
    type: "radio",
    answerQ: function () {
      return generateRadioInputs("team");
    },
    userAnswer: null
  },
  {
    id: 4,
    question: "Market Opportunity",
    txt: "How big is the market opportunity? (100% is average)",
    type: "radio",
    answerQ: function () {
      return generateRadioInputs("market");
    },
    userAnswer: null
  },
  {
    id: 5,
    question: "Innovation",
    txt: "How innovative is the product/technology? (100% is average)",
    type: "radio",
    answerQ: function () {
      return generateRadioInputs("innovation");
    },
    userAnswer: null
  },
  {
    id: 6,
    question: "Competitors",
    txt: "How competitive is environment? (100% is average)",
    type: "radio",
    answerQ: function () {
      return generateRadioInputs("competition");
    },
    userAnswer: null
  },
  {
    id: 7,
    question: "Strength",
    txt: "How strong is marketing plan/sales/partnerships? (100% is average)",
    type: "radio",
    answerQ: function () {
      return generateRadioInputs("strength");
    },
    userAnswer: null
  },
  {
    id: 8,
    question: "Additional investements",
    txt: "How much more investments do you need?",
    type: "input",
    answerQ: function () {
      let theInput = document.createElement("input");
      theInput.setAttribute("type", "number");
      return theInput;
    },
    userAnswer: null
  },

  {
    id: 9,
    question: "Positive factors",
    txt: "Do you have any other factor that affect or may affect your income in future? (for example, great reviews from early customers)",
    type: "radio",
    answerQ: function () {
      let values = ["yes", "no"];
      let form = document.createElement("form");
      values.forEach(function (value) {
        let theInput = document.createElement("input");
        theInput.setAttribute('type', "radio");
        theInput.setAttribute("name", "factors");
        theInput.setAttribute("value", value)
        theInput.setAttribute("class", "factors")
        let nameInput = document.createElement("p");
        nameInput.textContent = value;

        form.appendChild(theInput);
        form.appendChild(nameInput);
        console.log("theInput", theInput)
      })
      return form;

    },
    userAnswer: null
  }

]






function insertIntoDOM() {
  questionTitle.textContent = questions[currentQuestionIndex].question;
  questionText.textContent = questions[currentQuestionIndex].txt;
  answer.appendChild(questions[currentQuestionIndex].answerQ());

  document.getElementById('prev_button').addEventListener(
    'click',
    function () {
      prevElement();
    }
  );
  document.getElementById('next_button').addEventListener(
    'click',
    function () {
      nextElement();
    }
  );
}

function nextElement() {


  if (questions[currentQuestionIndex].type == "radio") {
    console.log("it is radio!");
    let input = answer.querySelector("input");
    console.log("form", input);
    let radioName = input.getAttribute("name");
    console.log("radio_name", radioName);
    let radioValue = getRadioCheckedValue(radioName);
    questions[currentQuestionIndex].userAnswer = radioValue;
    console.log("radioValue", radioValue);
  }

  if (questions[currentQuestionIndex].type == "input") {
    console.log("it is input!")
    let inputValue = answer.querySelector("input").value;
    console.log("inputValue", inputValue)
    questions[currentQuestionIndex].userAnswer = inputValue;
  }


  answer.textContent = "";
  let currentEl = nextItem();
  questionTitle.textContent = currentEl.question;
  questionText.textContent = currentEl.txt;
  answer.appendChild(questions[currentQuestionIndex].answerQ());
  console.log("current element", currentEl.id);

  insertSavedAnswers(currentEl);

  //COMMENT BACK WHEN READY THE REST
  if (currentEl.id == 9) {
    console.log("it is 9")
    let factorsRadio = document.getElementsByName("factors");
    // var factorsArray = Array.prototype.slice.call(factorsRadio);
    factorsRadio[0].addEventListener("click", function () {
      console.log("works");
      this.checked = true;
      document.getElementById('next_button').style.display = "none";
      //add total validation before submit appears 
      document.getElementById("submit").style.display = "inline-block";
    })
    factorsRadio[1].addEventListener("click", function () {
      console.log("works");
      this.checked = true;
      document.getElementById('next_button').style.display = "none";
      //add total validation before submit appears 
      document.getElementById("submit").style.display = "inline-block";
    })

  } else {
    document.getElementById('next_button').style.display = "inline-block";
    document.getElementById("submit").style.display = "none";
  }
}

function prevElement() {

  answer.textContent = "";

  let currentEl = prevItem();
  questionTitle.textContent = currentEl.question;
  questionText.textContent = currentEl.txt;

  answer.appendChild(questions[currentQuestionIndex].answerQ());

  insertSavedAnswers(currentEl);


  console.log("question", currentEl)

}

function insertSavedAnswers(currentEl) {
  if (questions[currentQuestionIndex].userAnswer) {

    if (questions[currentQuestionIndex].type == "input") {
      answer.querySelector("input").value = currentEl.userAnswer;
    }

    if (questions[currentQuestionIndex].type == "radio") {
      console.log("it is radio type! prev")
      console.log("UserAnswer", questions[currentQuestionIndex].userAnswer);
      let allRadios = answer.querySelectorAll("input");
      let radioArr = Array.prototype.slice.call(allRadios);
      for (let u = 0; u < radioArr.length; u++) {
        console.log("allRadios", radioArr[u].value);
        if (radioArr[u].value == questions[currentQuestionIndex].userAnswer) {
          console.log("radio value check", radioArr[u].value)
          radioArr[u].checked = true;
        }
      }


    }


  }
}


function getRadioCheckedValue(radio_name) {
  let oRadio = document.forms[0].elements[radio_name];

  for (let u = 0; u < oRadio.length; u++) {
    if (oRadio[u].checked) {
      return oRadio[u].value;
    }
  }

  return '';
}



function nextItem() {

  if (currentQuestionIndex + 1 < questions.length) {
    currentQuestionIndex++;
  }

  return questions[currentQuestionIndex];
}

function prevItem() {
  if (currentQuestionIndex - 1 < 0) {
    currentQuestionIndex = 0;
  } else {
    currentQuestionIndex--;
  }
  return questions[currentQuestionIndex];
}


function generateRadioInputs(nameStr) {
  let values = ["0", "50", "100", "150"];
  let form = document.createElement("form");
  values.forEach(function (value) {
    let theInput = document.createElement("input");
    theInput.setAttribute('type', "radio");
    theInput.setAttribute("name", nameStr);
    theInput.setAttribute("value", value)
    let nameInput = document.createElement("p");
    nameInput.textContent = value;

    form.appendChild(theInput);
    form.appendChild(nameInput);
  })
  return form;
}

function init() {
  insertIntoDOM();

}
