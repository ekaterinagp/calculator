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
  // disabledIfEmpty();
  if (questions[currentQuestionIndex].id == 1) {
    document.querySelector("#prev_button").style.display = "none";

  }

  questionTitle.textContent = questions[currentQuestionIndex].question;
  questionText.textContent = questions[currentQuestionIndex].txt;
  answer.appendChild(questions[currentQuestionIndex].answerQ());
  console.log("it is displayed")



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

  document.querySelector("#prev_button").style.display = "inline-block";
  if (questions[currentQuestionIndex].type == "radio") {

    console.log("it is radio!");
    let input = answer.querySelector("input");
    console.log("form", input);
    let radioName = input.getAttribute("name");
    console.log("radio_name", radioName);
    let radioValue = getRadioCheckedValue(radioName);
    // let checkedValue = turnToNumber(radioValue);
    // questions[currentQuestionIndex].userAnswer = checkedValue;
    // console.log("is it a number now?", checkedValue)

    questions[currentQuestionIndex].userAnswer = radioValue;
    // console.log("radioValue", checkedValue);

  }

  if (questions[currentQuestionIndex].type == "input") {
    console.log("it is input!")

    // document.getElementById('next_button').style.display = "none";
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

  ifLastElement(currentEl);
  disabledIfEmpty();

}




function prevElement() {
  if (questions[currentQuestionIndex].id == 1) {
    console.log("currentID", questions[currentQuestionIndex].id)
    document.querySelector("#prev_button").style.display = "none";
  }
  answer.textContent = "";

  let currentEl = prevItem();
  questionTitle.textContent = currentEl.question;
  questionText.textContent = currentEl.txt;

  answer.appendChild(questions[currentQuestionIndex].answerQ());

  insertSavedAnswers(currentEl);

  ifLastElement(currentEl);
  console.log("question", currentEl)
  document.getElementById('next_button').disabled = false;

}

function insertSavedAnswers(currentEl, radioValue) {
  if (questions[currentQuestionIndex].userAnswer) {
    // if (questions[currentQuestionIndex].userAnswer !== Number) {
    //   console.log("answer is not a number!")
    //   turnToValues(radioValue);
    // }

    if (questions[currentQuestionIndex].type == "input") {
      answer.querySelector("input").value = currentEl.userAnswer;
    }

    if (questions[currentQuestionIndex].type == "radio") {
      console.log("it is radio type! prev")
      console.log("UserAnswer", questions[currentQuestionIndex].userAnswer);
      let allRadios = answer.querySelectorAll("input");
      let radioArr = Array.prototype.slice.call(allRadios);
      for (let u = 0; u < radioArr.length; u++) {
        // console.log("allRadios", radioArr[u].value);
        if (radioArr[u].value == questions[currentQuestionIndex].userAnswer) {
          console.log("radio value check", radioArr[u].value)
          radioArr[u].checked = true;
        }
      }
    }
  }
}

function ifLastElement(currentEl) {

  if (questions[currentQuestionIndex].userAnswer) {
    document.getElementById('next_button').style.display = "none";

    document.getElementById("submit").style.display = "inline-block";
  }


  if (currentEl.id == questions.length) {
    //not dynamic, turn to dynamic
    console.log("it is 9")
    let factorsRadio = document.getElementsByName("factors");
    // let factorsArray = Array.prototype.slice.call(factorsRadio);
    factorsRadio[0].addEventListener("click", function () {
      console.log("works");
      let input = answer.querySelector("input");
      console.log("form", input);
      let radioName = input.getAttribute("name");
      console.log("radio_name", radioName);
      let radioValue = getRadioCheckedValue(radioName);

      if (radioValue == "yes") {
        radioValue = 100
        questions[currentQuestionIndex].userAnswer = radioValue;
      }
      console.log("radioValue", radioValue);
      this.checked = true;


      document.getElementById('next_button').style.display = "none";
      //add total validation before submit appears 
      document.getElementById("submit").style.display = "inline-block";

    })
    factorsRadio[1].addEventListener("click", function () {
      console.log("works");
      let input = answer.querySelector("input");
      console.log("form", input);
      let radioName = input.getAttribute("name");
      console.log("radio_name", radioName);
      let radioValue = getRadioCheckedValue(radioName);


      if (radioValue == "no") {
        radioValue = 0
        questions[currentQuestionIndex].userAnswer = radioValue;
      }
      console.log("radioValue", radioValue);
      this.checked = true;

      document.getElementById('next_button').style.display = "none";
      //ADD FULL VALIDATION HERE
      document.getElementById("submit").style.display = "inline-block";
    })

  } else {
    insertSavedAnswers(currentEl);
    document.getElementById('next_button').style.display = "inline-block";
    document.getElementById("submit").style.display = "none";
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

function disabledIfEmpty() {
  document.getElementById('next_button').disabled = true;

  console.log("questions[currentQuestionIndex].type", questions[currentQuestionIndex].type)
  if (questions[currentQuestionIndex].type == "input") {
    console.log("it is input and it is disabled!")
    answer.querySelector("input").addEventListener("keyup", function () {
      if (answer.querySelector("input").value.length) {
        document.getElementById('next_button').disabled = false;
      } else {
        console.log("it is disabled!");
        document.getElementById('next_button').disabled = true;
      }
    })

    //   })
    // })
  }

  if (questions[currentQuestionIndex].type == "radio") {
    console.log("disable it is radio")
    document.getElementById('next_button').disabled = true;
    // console.log("allRadios", allRadios)
    // for (let i = 0; i < allRadios.length; i++) {
    document.querySelector("form").addEventListener("click", function () {
      let allRadios = document.querySelectorAll("input");
      for (let i = 0; i < allRadios.length; i++) {
        if (allRadios[i].checked == true) {
          document.getElementById('next_button').disabled = false;
        }
      }

    })
  }
  // }
  if (questions[currentQuestionIndex].userAnswer) {
    console.log("userAnswer", questions[currentQuestionIndex].userAnswer)
    document.getElementById('next_button').disabled = false;
  }

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

function turnToNumber() {

  if (questions[currentQuestionIndex].userAnswer != Number) {
    switch (questions[currentQuestionIndex].userAnswer) {
      case "Slower Growth":
        questions[currentQuestionIndex].userAnswer = 115;
        break;
      case "Average Growth":
        questions[currentQuestionIndex].userAnswer = 130;
        break;
      case "Above Average Growth":
        questions[currentQuestionIndex].userAnswer = 300;
        break;
      case "Amazing Growth":
        questions[currentQuestionIndex].userAnswer = 450;
        break;
    }
  }
  console.log("answer in switch", questions[currentQuestionIndex].userAnswer)
  return questions[currentQuestionIndex].userAnswer;
}



function collectAllAnswers(radioValue) {

  let allOneUserAnswers = [];
  for (let i = 0; i < questions.length; i++) {

    // let userAnswer = Number(questions[i].userAnswer);
    let userAnswer = questions[i].userAnswer;
    allOneUserAnswers.push(userAnswer);
  }

  return allOneUserAnswers;
  // console.log("userAnswer", allOneUserAnswers);
}

//Calculation part
function calculateResult(array) {
  let answer1 = array[0] * 12;
  // let answerModified = turnToNumber();
  // console.log("answerModified", answerModified)
  let answer2 = ((answer1 * array[1]) / 100) + answer1;
  console.log("answer2", answer2)
  let terminalValue = answer2 * 2;
  console.log("treminalValue", terminalValue)
  let postMV = (terminalValue / 20);
  console.log("postMV", postMV)
  let preMV = postMV - array[0];
  console.log("preMV", preMV)
  let answer3 = array[2] * 30 / 10000;
  let answer4 = array[3] * 25 / 10000;
  let answer5 = array[4] * 15 / 10000;
  let answer6 = array[5] * 10 / 10000;
  let answer7 = array[6] * 10 / 10000;
  //figure out how to make it prettier
  let answer81 = (array[7] * 100) / array[0];
  let answer8 = (answer81 * 5) / 10000;
  let answer9 = array[8] * 5 / 10000;
  let sumOfFactors = answer3 + answer4 + answer5 + answer6 + answer7 + answer8 + answer9;
  let preFinalResult = sumOfFactors * preMV;
  let finalResult = parseFloat(preFinalResult.toFixed(2))
  console.log("sumOfFactors", sumOfFactors)
  return finalResult;
}





function init() {
  insertIntoDOM();
  document.getElementById("submit").addEventListener("click", function () {

    let allOneUserAnswers = collectAllAnswers();
    console.log("userAnswer", allOneUserAnswers);

    let finalResult = calculateResult(allOneUserAnswers);
    console.log("final result function", finalResult)
  })


  // const allInputFields = answer.querySelectorAll("input");
  // allInputFields.forEach(singleInput => {
  //   singleInput.addEventListener("keyup", function () {
  //     disabledIfEmpty();
  //   })
  // })

  answer.querySelector("input").addEventListener("keyup", function () {
    console.log("eventlistener from init!")
    if (answer.querySelector("input").value.length) {
      document.getElementById('next_button').disabled = false;
    } else {
      console.log("it is disabled!");
      document.getElementById('next_button').disabled = true;
    }
  })


}
