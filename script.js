"use strict";

window.addEventListener("load", function() {
  init();
});

let questions = [
  {
    id: 1,
    question: "Monthly income",
    txt: "What is your average monthly income?",
    type: "input",
    answerQ: function() {
      let theInput = document.createElement("input");
      let theLabel = document.createElement("label");
      theLabel.setAttribute("for", "income");
      theInput.setAttribute("type", "number");
      theInput.setAttribute("id", "incomeNumber");
      theInput.setAttribute("placeholder", "Type your income here");
      return theInput;
    },
    canvasForChart: function() {
      let theCanvas = document.createElement("canvas");
      // theCanvas.setAttribute("width", 400);
      // theCanvas.setAttribute("height", 200);
      theCanvas.setAttribute("id", "incomeChart");
      return theCanvas;
    },
    userAnswer: null
  },
  {
    id: 2,
    question: "Expectation",
    txt: "What kind of growth do you expect to reach in 5 years?",
    type: "range",
    answerQ: function() {
      let form = document.createElement("form");
      let theInput = document.createElement("input");
      let description = document.createElement("p");
      description.setAttribute("id", "descriptionOfGrowth");
      theInput.setAttribute("type", "range");
      theInput.setAttribute("min", "1");
      theInput.setAttribute("max", "100");
      theInput.setAttribute("value", "0");
      theInput.classList.add("slider");

      console.log("form created 2");

      form.appendChild(theInput);
      form.appendChild(description);

      return form;
    },
    canvasForChart: function() {
      let theCanvas = document.createElement("canvas");
      theCanvas.setAttribute("width", 400);
      theCanvas.setAttribute("height", 200);
      theCanvas.setAttribute("id", "growthChart");
      theCanvas.setAttribute("position", "absolute");
      theCanvas.setAttribute("top", "0");
      return theCanvas;
    },
    userAnswer: null
  },
  {
    id: 3,
    question: "Team and Leader",
    txt: "How strong is an entrepreneur and a team?",
    type: "radio",
    answerQ: function() {
      let values = [
        {
          title: "Fresh out of school and working towards a solution",
          img: "graduate.svg"
        },
        {
          title: "Minimum of 3 years of work experience each",
          img: "young.svg"
        },
        {
          title: "Minimum of 7 years of experience in your specific field each",
          img: "exper.svg"
        },
        {
          title:
            "Subject matter experts with published thoughts on your industry",
          img: "old.svg"
        }
      ];
      let form = document.createElement("form");
      form.setAttribute("id", "team");
      values.forEach(function(value) {
        let divWrapper = document.createElement("div");
        let label = document.createElement("label");
        let theInput = document.createElement("input");
        let theBreak = document.createElement("br");
        divWrapper.setAttribute("class", "wrapper");
        label.setAttribute("class", "labelClass");
        theInput.setAttribute("type", "radio");
        theInput.setAttribute("name", "team");
        theInput.setAttribute("value", value.title);
        let nameInput = document.createElement("p");
        let img = document.createElement("img");
        nameInput.style.display = "inline-grid";
        nameInput.setAttribute("class", "btnRadio");
        nameInput.textContent = value.title;

        img.setAttribute("class", "imgSize");
        img.setAttribute("src", "img/" + value.img);

        nameInput.appendChild(img);
        form.appendChild(divWrapper);
        label.appendChild(theInput);
        label.appendChild(nameInput);
        divWrapper.appendChild(label);
        divWrapper.appendChild(theBreak);
      });
      return form;
    },
    canvasForChart: null,

    userAnswer: null,
    userAnswerIndex: null
  },
  {
    id: 4,
    question: "Market Opportunity",
    txt: "How big is the market opportunity?",
    type: "radio",
    answerQ: function() {
      let values = [
        {
          title: "Sustainable",
          img: "first.svg"
        },
        {
          title: "Growing",
          img: "second.svg"
        },
        {
          title: "Spectacular",
          img: "third.svg"
        },
        {
          title: "Almost limitless",
          img: "fourth.svg"
        }
      ];
      let form = document.createElement("form");
      form.setAttribute("id", "market");
      values.forEach(function(value) {
        let divWrapper = document.createElement("div");
        let label = document.createElement("label");
        let theInput = document.createElement("input");
        let theBreak = document.createElement("br");
        divWrapper.setAttribute("class", "wrapper");
        label.setAttribute("class", "labelClass");
        theInput.setAttribute("type", "radio");
        theInput.setAttribute("name", "market");
        theInput.setAttribute("value", value.title);
        let nameInput = document.createElement("p");
        let img = document.createElement("img");
        nameInput.style.display = "inline-grid";
        nameInput.setAttribute("class", "btnRadio");
        nameInput.textContent = value.title;

        img.setAttribute("class", "imgSize");
        img.setAttribute("src", "img/" + value.img);

        nameInput.appendChild(img);
        form.appendChild(divWrapper);
        label.appendChild(theInput);
        label.appendChild(nameInput);
        divWrapper.appendChild(label);
        divWrapper.appendChild(theBreak);
      });
      return form;
    },

    canvasForChart: null,
    userAnswer: null,
    userAnswerIndex: null
  },
  {
    id: 5,
    question: "Innovation",
    txt: "How innovative is the product/technology?",
    type: "radio",
    answerQ: function() {
      let values = [
        {
          title: "There are many similar products/technologies",
          img: "bike.svg"
        },
        {
          title: "There are few similar products/technologies",
          img: "scooter.svg"
        },
        {
          title: "There are only 1-3 similar products/technologies",
          img: "car.svg"
        },
        {
          title: "It is unique product/technologies",
          img: "rock.svg"
        }
      ];
      let form = document.createElement("form");
      form.setAttribute("id", "uniqueness");
      values.forEach(function(value) {
        let divWrapper = document.createElement("div");
        let label = document.createElement("label");
        let theInput = document.createElement("input");
        let theBreak = document.createElement("br");
        divWrapper.setAttribute("class", "wrapper");
        label.setAttribute("class", "labelClass");
        theInput.setAttribute("type", "radio");
        theInput.setAttribute("name", "uniqueness");
        theInput.setAttribute("value", value.title);
        let nameInput = document.createElement("p");
        let img = document.createElement("img");
        nameInput.style.display = "inline-grid";
        nameInput.setAttribute("class", "btnRadio");
        nameInput.textContent = value.title;
        img.setAttribute("class", "imgSize");
        img.setAttribute("src", "img/" + value.img);
        nameInput.appendChild(img);
        form.appendChild(divWrapper);
        label.appendChild(theInput);
        label.appendChild(nameInput);
        divWrapper.appendChild(label);
        divWrapper.appendChild(theBreak);
      });
      return form;
    },
    canvasForChart: null,
    userAnswer: null,
    userAnswerIndex: null
  },
  {
    id: 6,
    question: "Competitors",
    txt: "How competitive is environment?",
    type: "radio",
    answerQ: function() {
      let values = [
        {
          title: "Crowded space",
          img: "crowded.png"
        },
        {
          title: "Competitive",
          img: "competitive.png"
        },
        {
          title: "Single competitor",
          img: "single.png"
        },
        {
          title: "Blue ocean",
          img: "blue.png"
        }
      ];
      let form = document.createElement("form");
      form.setAttribute("id", "competition");
      values.forEach(function(value) {
        let divWrapper = document.createElement("div");
        let label = document.createElement("label");
        let theInput = document.createElement("input");
        let theBreak = document.createElement("br");
        divWrapper.setAttribute("class", "wrapper");
        label.setAttribute("class", "labelClass");
        theInput.setAttribute("type", "radio");
        theInput.setAttribute("name", "competition");
        theInput.setAttribute("value", value.title);
        let nameInput = document.createElement("p");
        let img = document.createElement("img");
        nameInput.style.display = "inline-grid";
        nameInput.setAttribute("class", "btnRadio");
        nameInput.textContent = value.title;
        img.setAttribute("class", "imgSize");
        img.setAttribute("src", "img/" + value.img);
        nameInput.appendChild(img);
        form.appendChild(divWrapper);
        label.appendChild(theInput);
        label.appendChild(nameInput);
        divWrapper.appendChild(label);
        divWrapper.appendChild(theBreak);
      });
      return form;
    },
    canvasForChart: null,
    userAnswer: null,
    userAnswerIndex: null
  },
  {
    id: 7,
    question: "Strength",
    txt: "How strong is marketing plan/sales/partnerships?",
    type: "radio",
    answerQ: function() {
      let values = [
        {
          title: "Good",
          img: "begin.svg"
        },
        {
          title: "Solid",
          img: "rare.svg"
        },
        {
          title: "Strong",
          img: "medium.svg"
        },
        {
          title: "Perfect",
          img: "strong.svg"
        }
      ];
      let form = document.createElement("form");
      form.setAttribute("id", "strength");
      values.forEach(function(value) {
        let divWrapper = document.createElement("div");
        let label = document.createElement("label");
        let theInput = document.createElement("input");
        let theBreak = document.createElement("br");
        divWrapper.setAttribute("class", "wrapper");
        label.setAttribute("class", "labelClass");
        theInput.setAttribute("type", "radio");
        theInput.setAttribute("name", "strength");
        theInput.setAttribute("value", value.title);
        let nameInput = document.createElement("p");
        let img = document.createElement("img");
        nameInput.style.display = "inline-grid";
        nameInput.setAttribute("class", "btnRadio");
        nameInput.textContent = value.title;

        img.setAttribute("class", "imgSize");
        img.setAttribute("src", "img/" + value.img);
        nameInput.appendChild(img);
        form.appendChild(divWrapper);
        label.appendChild(theInput);
        label.appendChild(nameInput);
        divWrapper.appendChild(label);
        divWrapper.appendChild(theBreak);
      });
      return form;
    },
    canvasForChart: null,
    userAnswer: null,
    userAnswerIndex: null
  },
  {
    id: 8,
    question: "Additional investements",
    txt: "How much more investments do you need?",
    type: "input",
    answerQ: function() {
      let theInput = document.createElement("input");
      let theLabel = document.createElement("label");
      theLabel.setAttribute("for", "investment");
      theInput.setAttribute("type", "number");
      theInput.setAttribute("id", "addInvestment");
      theInput.setAttribute("placeholder", "Type your number here");
      return theInput;
    },
    canvasForChart: function() {
      let theCanvas = document.createElement("canvas");
      theCanvas.setAttribute("width", 400);
      theCanvas.setAttribute("height", 200);
      theCanvas.setAttribute("id", "investmentChart");
      return theCanvas;
    },
    userAnswer: null
  },

  {
    id: 9,
    question: "Positive factors",
    txt:
      "Do you have any positive factor(s) that affect or may affect your income in future?",
    type: "radio",
    answerQ: function() {
      let values = ["yes", "no"];
      let form = document.createElement("form");
      form.setAttribute("id", "factorsTwoOptions");
      values.forEach(function(value) {
        let divWrapper = document.createElement("div");
        let label = document.createElement("label");
        let theInput = document.createElement("input");
        let theBreak = document.createElement("br");
        // divWrapper.setAttribute("class", "wrapper");
        label.setAttribute("class", "labelClass");
        theInput.setAttribute("type", "radio");
        theInput.setAttribute("name", "factors");
        theInput.setAttribute("value", value);
        let nameInput = document.createElement("p");
        nameInput.style.display = "inline-block";
        nameInput.setAttribute("class", "btnRadioTwoOptions");
        nameInput.textContent = value;
        form.appendChild(divWrapper);
        label.appendChild(theInput);
        label.appendChild(nameInput);
        divWrapper.appendChild(label);
        divWrapper.appendChild(theBreak);

        console.log("theInput", theInput);
      });
      return form;
    },
    canvasForChart: function() {
      let theCanvas = document.createElement("canvas");
      let theSecond = document.createElement("canvas");
      theSecond.setAttribute("width", 400);
      theSecond.setAttribute("height", 200);
      theCanvas.setAttribute("width", 400);
      theCanvas.setAttribute("height", 200);
      theCanvas.setAttribute("id", "factorsChart");
      theSecond.setAttribute("id", "otherChart");

      return {
        theCanvas: theCanvas,
        theSecond: theSecond
      };
    },
    userAnswer: null
  }
];

const questionTitle = document.querySelector("#question");
const questionText = document.querySelector("#questionText");
const answer = document.querySelector("#answer");
const wrapForCanvas = document.querySelector("#chartPlaceHolder");
let currentQuestionIndex = 0;

function insertIntoDOM() {
  document.querySelector("#prev_button").style.display = "none";

  questionTitle.textContent = questions[currentQuestionIndex].question;
  questionText.textContent = questions[currentQuestionIndex].txt;

  answer.appendChild(questions[currentQuestionIndex].answerQ());

  wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());

  // TweenMax.from("#incomeNumber", 1, {
  //   css: {
  //     scale: 0.05,
  //     opacity: 0,
  //     rotation: 180
  //   },
  //   ease: Quad.easeInOut
  // }),
  //   0,
  //   -400;

  document.getElementById("prev_button").addEventListener("click", function() {
    prevElement();
  });
  document.getElementById("next_button").addEventListener("click", function() {
    nextElement();
  });
}

function typeRadio() {
  if (questions[currentQuestionIndex].type == "radio") {
    let input = answer.querySelector("input");
    let radioName = input.getAttribute("name");
    let radioValue = getRadioCheckedValue(radioName);
    console.log("radiovalue and u?", radioValue);
    questions[currentQuestionIndex].userAnswer = radioValue[0];
    questions[currentQuestionIndex].userAnswerIndex = radioValue[1];

    console.log("radioIndex", questions[currentQuestionIndex].userAnswerIndex);
  }
}

function typeRange() {
  if (questions[currentQuestionIndex].type == "range") {
    console.log("question number 2 for get Value");

    let slider = document.querySelector('input[type="range"]');
    console.log("slider", slider);
    disabledIfEmpty();
    slider.addEventListener("change", function() {
      console.log("eventlistener for getValue");
      getValue();
    });
  }
}

function typeRageChart() {
  if (questions[currentQuestionIndex].type == "range") {
    wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());
    let slider = document.querySelector("input[type=range]");
    slider.addEventListener("change", function() {
      // console.log("eventlistener for getValue");
      getValue();
    });
  }
}

function chartforEight() {
  if (questions[currentQuestionIndex].id == 8) {
    console.log("it is 8 and it needs to create a chart");
    document.querySelector("#comparison").classList.remove("hide");
    wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());
    let valueForChart = questions[currentQuestionIndex].userAnswer;
    createInvestmentChart(valueForChart, "investmentChart");

    // getValueForInvestment();
  }
}

function valueForEight() {
  if (questions[currentQuestionIndex].id == 8) {
    console.log("it is 8!");
    answer
      .querySelector("#addInvestment")
      .addEventListener("keyup", function() {
        // console.log("eventlistener from init for investements");
        if (answer.querySelector("#addInvestment").value.length) {
          document.getElementById("next_button").disabled = false;
          getValueForInvestment();

          document.querySelector("#comparison").classList.remove("hide");
          let inputComparison = incomeVSinvestments();
        } else {
          document.getElementById("next_button").disabled = true;
        }
      });
  }
}

function typeInput() {
  if (questions[currentQuestionIndex].type == "input") {
    console.log("it is input!");
    let inputValue = answer.querySelector("input").value;
    // console.log("inputValue", inputValue)
    questions[currentQuestionIndex].userAnswer = inputValue;
  }
}

function inputAnswerInsert() {
  if (questions[currentQuestionIndex].type == "input") {
    answer.querySelector("input").value =
      questions[currentQuestionIndex].userAnswer;
    if (questions[currentQuestionIndex].id == 8) {
      getValueForInvestment();
      document.querySelector("#comparison").classList.remove("hide");
      let inputComparison = incomeVSinvestments();
    }
  }
}

function rangeAnswerInsert() {
  if (questions[currentQuestionIndex].type == "range") {
    buildChart(questions[currentQuestionIndex].userAnswer);
    let slider = document.querySelector("input[type=range]");
    slider.value = questions[currentQuestionIndex].userAnswer;
    getValue();
  }
}

function radioAnswerInsert() {
  if (questions[currentQuestionIndex].type == "radio") {
    if (questions[currentQuestionIndex].id !== 9) {
      console.log("it is radio type! and not 9");
      console.log("UserAnswer", questions[currentQuestionIndex].userAnswer);
      let allRadios = answer.querySelectorAll("input");
      let radioArr = Array.prototype.slice.call(allRadios);
      for (let u = 0; u < radioArr.length; u++) {
        // console.log("allRadios", radioArr[u].value);
        if (radioArr[u].value == questions[currentQuestionIndex].userAnswer) {
          console.log("radio value check", radioArr[u].value);
          radioArr[u].checked = true;
        }
      }
    } else {
      console.log("it is the last one");

      if (
        questions[currentQuestionIndex].userAnswer ||
        questions[currentQuestionIndex].userAnswer == 0
      ) {
        if (questions[currentQuestionIndex].userAnswer == 100) {
          document.querySelector("input[value=yes]").checked = true;
          createChartForFactors();
        } else {
          console.log("it is else and answer 0 at last one");
          document.querySelector("input[value=no]").checked = true;
          createChartForOtherFactors();
        }
      }
    }
  }
}

function disableForInput() {
  if (questions[currentQuestionIndex].type == "input") {
    console.log("it is input and it is disabled!");
    answer.querySelector("input").addEventListener("keyup", function() {
      if (answer.querySelector("input").value.length) {
        document.getElementById("next_button").disabled = false;
      } else {
        console.log("it is disabled!");
        document.getElementById("next_button").disabled = true;
      }
    });
  }
}

function disableForRadio() {
  if (questions[currentQuestionIndex].type == "radio") {
    console.log("disable it is radio");
    document.getElementById("next_button").disabled = true;
    // console.log("allRadios", allRadios)
    // for (let i = 0; i < allRadios.length; i++) {
    document.querySelector("form").addEventListener("click", function() {
      let allRadios = document.querySelectorAll("input");
      for (let i = 0; i < allRadios.length; i++) {
        if (allRadios[i].checked == true) {
          document.getElementById("next_button").disabled = false;
        }
      }
    });
  }
}

function disableForRange() {
  if (questions[currentQuestionIndex].type == "range") {
    console.log("it is range");
    console.log("value of input range", answer.querySelector("input").value);
    // if (answer.querySelector("input").value == 1) {
    //   console.log("value of input range", answer.querySelector("input").value)
    //   document.getElementById('next_button').disabled = true;
    // }

    if (answer.querySelector("input").value == 1)
      document.getElementById("next_button").disabled = true;
  }
}

function nextElement() {
  // console.log("type of input", questions[currentQuestionIndex].type)

  document.querySelector("#comparison").classList.add("hide");
  document.querySelector("#prev_button").style.display = "inline-block";

  typeRadio();
  typeInput();

  answer.textContent = "";
  wrapForCanvas.innerHTML = "";

  let currentEl = nextItem();

  questionTitle.textContent = currentEl.question;
  questionText.textContent = currentEl.txt;
  answer.appendChild(questions[currentQuestionIndex].answerQ());

  if (
    questions[currentQuestionIndex].canvasForChart !== null &&
    questions[currentQuestionIndex].id !== 9
  ) {
    wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());
    document.querySelector("#chartPlaceHolder").style.height = "40vh";
  } else {
    document.querySelector("#chartPlaceHolder").style.height = "0px";
  }

  // console.log("current element", currentEl.id);
  valueForEight();
  insertSavedAnswers(currentEl);
  disabledIfEmpty();
  timeline(questions);
  typeRange();
  ifLastElement(currentEl);
}

function prevElement() {
  if (questions[currentQuestionIndex].id !== 9)
    document.querySelector("#next_button").textContent = "Next";

  document.querySelector("#comparison").classList.add("hide");
  answer.textContent = "";
  wrapForCanvas.innerHTML = "";

  let currentEl = prevItem();
  questionTitle.textContent = currentEl.question;
  questionText.textContent = currentEl.txt;

  answer.appendChild(questions[currentQuestionIndex].answerQ());
  if (questions[currentQuestionIndex].id == 1)
    document.querySelector("#prev_button").style.display = "none";

  // console.log("question", currentEl);
  document.getElementById("next_button").disabled = false;
  timeline(questions);
  // console.log(
  //   "questions[currentQuestionIndex]",
  //   questions[currentQuestionIndex]
  // );

  typeRageChart();
  valueForEight();
  chartforEight();
  insertSavedAnswers(currentEl);
  ifLastElement(currentEl);
  if (questions[currentQuestionIndex].id == 1) {
    wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());
    getValueForBarChart();
    answer.querySelector("input").addEventListener("blur", function() {
      getValueForBarChart();
    });
  }
  if (questions[currentQuestionIndex].id == 8) {
    answer.querySelector("#addInvestment").addEventListener("blur", function() {
      getValueForInvestment();
    });
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

function insertSavedAnswers() {
  if (questions[currentQuestionIndex].id !== 9) {
    document.querySelector("#next_button").textContent = "Next";
  }
  if (questions[currentQuestionIndex].userAnswer) {
    inputAnswerInsert();
    radioAnswerInsert();
    rangeAnswerInsert();
  }
}

function ifLastElement(currentEl) {
  let canvasForLast = questions[8].canvasForChart(),
    firstCanvas = canvasForLast.theCanvas,
    secondCanvas = canvasForLast.theSecond;

  if (questions[currentQuestionIndex].userAnswer) {
    document.getElementById("next_button").style.display = "none";

    document.getElementById("submit").style.display = "inline-block";
  }

  if (currentEl.id == questions.length) {
    document.querySelector("#next_button").textContent = "Submit";
    console.log("it is 9");
    let factorsRadio = document.getElementsByName("factors");
    factorsRadio[0].addEventListener("click", function() {
      document.querySelector("#chartPlaceHolder").innerHTML = "";
      console.log("works");
      let input = answer.querySelector("input");
      console.log("form", input);
      let radioName = input.getAttribute("name");
      console.log("radio_name", radioName);
      let radioValue = getRadioCheckedValue(radioName);

      if (radioValue[0] == "yes") {
        radioValue = 100;
        questions[currentQuestionIndex].userAnswer = radioValue;
        createChartForFactors(firstCanvas);
        document.querySelector("#factorsChart").style.display = "block";
        if (document.querySelector("#otherChart")) {
          document.querySelector("#otherChart").style.display = "none";
        }
      }
      console.log("radioValue", radioValue);
      this.checked = true;

      document.getElementById("next_button").style.display = "none";

      document.getElementById("submit").style.display = "inline-block";
    });
    factorsRadio[1].addEventListener("click", function() {
      console.log("works");
      document.querySelector("#chartPlaceHolder").innerHTML = "";
      let input = answer.querySelector("input");
      console.log("form", input);
      let radioName = input.getAttribute("name");
      console.log("radio_name", radioName);
      let radioValue = getRadioCheckedValue(radioName);

      if (radioValue[0] == "no") {
        radioValue = "0";
        questions[currentQuestionIndex].userAnswer = radioValue;

        createChartForOtherFactors(secondCanvas);
        document.querySelector("#otherChart").style.display = "block";
        if (document.querySelector("#factorsChart")) {
          document.querySelector("#factorsChart").style.display = "none";
        }
      }

      console.log("radioValue", radioValue);
      this.checked = true;

      document.getElementById("next_button").style.display = "none";

      document.getElementById("submit").style.display = "inline-block";
    });
  } else {
    insertSavedAnswers(currentEl);
    document.getElementById("next_button").style.display = "inline-block";
    document.getElementById("submit").style.display = "none";
  }
}

function getRadioCheckedValue(radio_name) {
  let oRadio = document.forms[0].elements[radio_name];

  for (let u = 0; u < oRadio.length; u++) {
    if (oRadio[u].checked) {
      console.log("u index", u);
      return [oRadio[u].value, u];
    }
  }
  // console.log("radio value returned?", oRadio[u].value);
  return "";
}

function disabledIfEmpty() {
  document.getElementById("next_button").disabled = true;

  console.log(
    "questions[currentQuestionIndex].type",
    questions[currentQuestionIndex].type
  );
  disableForInput();
  disableForRadio();
  disableForRange();

  if (questions[currentQuestionIndex].userAnswer) {
    console.log("userAnswer", questions[currentQuestionIndex].userAnswer);
    document.getElementById("next_button").disabled = false;
  }
}

//CONVERT, COLLECT AND CALCULATE

function turnToNumber(currentQuestionIndex) {
  if (questions[currentQuestionIndex].userAnswer <= 25) {
    questions[currentQuestionIndex].userAnswer = 115;
  } else if (
    questions[currentQuestionIndex].userAnswer > 25 &&
    questions[currentQuestionIndex].userAnswer <= 50
  ) {
    questions[currentQuestionIndex].userAnswer = 130;
  } else if (
    questions[currentQuestionIndex].userAnswer > 50 &&
    questions[currentQuestionIndex].userAnswer <= 75
  ) {
    questions[currentQuestionIndex].userAnswer = 300;
  } else if (
    questions[currentQuestionIndex].userAnswer > 75 &&
    questions[currentQuestionIndex].userAnswer <= 100
  ) {
    questions[currentQuestionIndex].userAnswer = 450;
  }

  console.log("answer in switch", questions[currentQuestionIndex].userAnswer);
  return questions[currentQuestionIndex].userAnswer;
}

function turnIndexToNumber(currentQuestionIndex) {
  if (questions[currentQuestionIndex].userAnswerIndex == 0) {
    questions[currentQuestionIndex].userAnswer = 0;
  } else if (questions[currentQuestionIndex].userAnswerIndex == 1) {
    questions[currentQuestionIndex].userAnswer = 50;
  } else if (questions[currentQuestionIndex].userAnswerIndex == 2) {
    questions[currentQuestionIndex].userAnswer = 100;
  } else {
    questions[currentQuestionIndex].userAnswer = 150;
  }
  return questions[currentQuestionIndex].userAnswer;
}

function collectAllAnswers() {
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
  let answerModified = turnToNumber(1);
  console.log("answerModified", answerModified);
  let answer2 = (answer1 * answerModified) / 100 + answer1;
  console.log("answer2", answer2);
  let terminalValue = answer2 * 2;
  console.log("treminalValue", terminalValue);
  let postMV = terminalValue / 20;
  console.log("postMV", postMV);
  let preMV = postMV - array[0];
  console.log("preMV", preMV);
  let answerThreeModified = turnIndexToNumber(2);
  let answer3 = (answerThreeModified * 30) / 10000;
  console.log("answer3", answer3);
  let answerFourModified = turnIndexToNumber(3);
  let answer4 = (answerFourModified * 25) / 10000;
  let answerFiveModified = turnIndexToNumber(4);
  let answer5 = (answerFiveModified * 15) / 10000;
  let answerSixModified = turnIndexToNumber(5);
  let answer6 = (answerSixModified * 10) / 10000;
  let answerSeventhModified = turnIndexToNumber(6);
  let answer7 = (answerSeventhModified * 10) / 10000;
  // //figure out how to make it prettier
  let answer81 = (answerSeventhModified * 100) / array[0];
  let answer8 = (answer81 * 5) / 10000;
  let answer9 = (array[8] * 5) / 10000;
  let sumOfFactors =
    answer3 + answer4 + answer5 + answer6 + answer7 + answer8 + answer9;
  let preFinalResult = sumOfFactors * preMV;
  let finalResult = parseFloat(preFinalResult.toFixed(2));
  // console.log("sumOfFactors", sumOfFactors)
  return finalResult;
}
//END OF CALCULATION

function timeline(questions) {
  let timelineInput = document.querySelector("#timeline");
  let allQuestionsDigit = questions.length;
  // console.log("allQuestionsDigit", allQuestionsDigit);
  let currentQuestionDigit = questions[currentQuestionIndex].id;
  console.log("currentQuestionDigit", currentQuestionDigit);

  timelineInput.textContent = currentQuestionDigit + "/" + allQuestionsDigit;
}

function init() {
  timeline(questions);
  insertIntoDOM();

  document.getElementById("submit").addEventListener("click", function() {
    document.querySelector("#popUp").style.display = "block";
    // let allOneUserAnswers = collectAllAnswers();
    // console.log("userAnswer", allOneUserAnswers);

    let finalResult = calculateResult(collectAllAnswers());
    console.log("final result function", finalResult);
  });

  answer.querySelector("input").addEventListener("keyup", function() {
    console.log("eventlistener from init!");
    if (answer.querySelector("input").value.length) {
      document.getElementById("next_button").disabled = false;
      getValueForBarChart();
    } else {
      console.log("it is disabled!");
      document.getElementById("next_button").disabled = true;
    }
  });
}

//GET VALUE AND CREATE CHARTS

// Chart.defaults.global.legend.display = false;
// Chart.defaults.global.animationSteps = 600;
let dataSetAdequate = [0, 25, 50, 75, 95, 115];
let dataSetAverage = [0, 50, 90, 100, 120, 140];
let dataSetAboveAverage = [0, 100, 150, 200, 250, 300];
let dataSetAmazing = [0, 120, 200, 300, 400, 450];
let descriptionOfGrowth = document.querySelector("#descriptionGrowth");
let slider = document.querySelector("input[type=range]");

function getValue() {
  console.log("function runs getvalue");
  let elem = document.querySelector('input[type="range"]');
  let newValue = elem.value;
  console.log("newValue", newValue);
  buildChart(newValue);
  questions[currentQuestionIndex].userAnswer = newValue;
  console.log("new user value", questions[currentQuestionIndex].userAnswer);
}

function buildChart(value) {
  let slider = document.querySelector("input[type=range]");
  let descriptionOfGrowth = document.querySelector("#descriptionOfGrowth");
  console.log("lets see what new value is");
  if (value <= 25) {
    console.log("value is <25", value);
    createChart(
      "growthChart",
      "line",
      ["Now", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
      dataSetAdequate,
      "rgba(241, 90, 34, 1)"
    );
    // slider.classList.remove = ".slider::-webkit-slider-thumb";
    slider.style.backgroundColor = "rgba(241, 90, 34, .5)";
    descriptionOfGrowth.textContent = "I expect adequate growth";
  } else if (value > 25 && value <= 50) {
    console.log("value is <50", value);
    createChart(
      "growthChart",
      "line",
      ["Now", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
      dataSetAverage,
      "rgba(245, 230, 83, 1)"
    );
    slider.style.backgroundColor = "rgba(245, 230, 83, .5)";
    descriptionOfGrowth.textContent = "I expect average growth";
  } else if (value > 50 && value <= 75) {
    console.log("value is <75", value);
    createChart(
      "growthChart",
      "line",
      ["Now", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],

      dataSetAboveAverage,
      "rgba(3, 201, 169, 1)"
    );
    slider.style.backgroundColor = "rgba(3, 201, 169, .5)";
    descriptionOfGrowth.textContent = "I expect very good growth";
  } else {
    console.log("value is <100", value);
    createChart(
      "growthChart",
      "line",
      ["Now", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
      dataSetAmazing,
      "rgba(0, 230, 64, 1)"
    );
    slider.style.backgroundColor = "rgba(0, 230, 64, .5)";
    descriptionOfGrowth.textContent = "I expect amazing growth";
  }
  document.getElementById("next_button").disabled = false;
}

function createChart(
  get_wrapper,
  type_of_chart,
  labels_of_chart,
  data_of_charts,
  background_color
) {
  console.log("chart is created", data_of_charts);
  let ctx = document.getElementById(get_wrapper).getContext("2d");
  var myChart = new Chart(ctx, {
    type: type_of_chart,
    data: {
      labels: labels_of_chart,
      datasets: [
        {
          label: "Average",
          data: [0, 60, 100, 110, 130, 150],
          backgroundColor: "rgba(63,	152,	255,.3)	",
          // borderColor: 'rgba(19, 247, 228,1)',
          borderWidth: 2
          // pointBackgroundColor: 'rgba(19, 247, 228,1)',
          // pointBorderColor: 'rgba(19, 247, 228,1)',
          // pointBorderWidth: 5,
        },
        {
          label: "Original data",
          data: data_of_charts,
          animationSteps: 6000,
          // easing: 'easeInOutElastic',
          backgroundColor: background_color,
          // borderColor: 'rgba(19, 247, 228,1)',
          borderWidth: 2,
          // pointBackgroundColor: 'rgba(19, 247, 228,1)',
          // pointBorderColor: 'rgba(19, 247, 228,1)',
          pointBorderWidth: 0
        }
      ]
    },
    options: {
      scales: {
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false
            },
            ticks: {
              display: false,
              max: 450,
              min: 0,
              stepSize: 150
            }
          }
        ]
      },
      animation: {
        duration: 1000,
        xAxis: true,
        yAxis: true,
        easing: "easeInOutCubic"
      },
      tooltips: {
        callbacks: {
          label: function(t, d) {
            var xLabel = d.datasets[t.datasetIndex].label;
            var yLabel = d.datasets[t.datasetIndex].data[t.index];
            return xLabel + ": %" + yLabel;
          }
        }
      }
    }
  });
}

function getValueForBarChart() {
  let inputToCheck = document.querySelector("#incomeNumber");
  let theValue = inputToCheck.value;
  console.log("theValue", theValue);
  theValue = Number(theValue);
  createBarChart(theValue, "incomeChart");
}

function getValueForInvestment() {
  console.log("it is #8");
  if (questions[currentQuestionIndex].id == 8) {
    let inputToCheck = document.querySelector("#addInvestment");
    let theValue = inputToCheck.value;
    theValue = Number(theValue);
    questions[currentQuestionIndex].userAnswer = theValue;
    createInvestmentChart(theValue, "investmentChart");
  }
}

function createBarChart(value, placeHolder) {
  let barChartIncomeCanvas = document.getElementById(placeHolder);

  let barChart = new Chart(barChartIncomeCanvas, {
    type: "bar",
    data: {
      labels: ["Income"],
      datasets: [
        {
          label: "Your income",
          data: [value],
          backgroundColor: "blue"
        },
        {
          label: "Average income",
          data: [50000],
          backgroundColor: "green"
        },
        {
          label: "Max income",
          data: [100000],
          backgroundColor: "#EEEEEE"
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      tooltips: {
        enabled: true
      },
      scales: {
        xAxes: [
          {
            display: true,
            stacked: false,
            ticks: {
              beginAtZero: true,
              stepSize: 10000
            }
          }
        ],
        yAxes: [
          {
            display: true,
            stacked: false,
            ticks: {
              beginAtZero: true,
              stepSize: 10000,
              display: false
            }
          }
        ]
      }
    }
  });
}

function createInvestmentChart(value, placeHolder) {
  let barChartIncomeCanvas = document.getElementById(placeHolder);

  let barChart = new Chart(barChartIncomeCanvas, {
    type: "bar",
    data: {
      labels: ["Additional investments"],
      datasets: [
        {
          label: "Additional investements",
          data: [value],
          backgroundColor: "blue"
        },
        {
          label: "Your yearly income",
          data: [questions[0].userAnswer * 12],
          backgroundColor: "green"
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      tooltips: {
        enabled: true
      },
      scales: {
        xAxes: [
          {
            display: false,
            stacked: true,
            ticks: {
              beginAtZero: true,
              stepSize: 10000
            }
          }
        ],
        yAxes: [
          {
            display: false,
            stacked: true,
            ticks: {
              beginAtZero: true,
              stepSize: 10000
            }
          }
        ]
      }
    }
  });
}

function createChartForFactors() {
  let canvasForLast = questions[8].canvasForChart();
  let firstCanvas = canvasForLast.theCanvas;
  // let secondCanvas = canvasForLast.theSecond;
  wrapForCanvas.appendChild(firstCanvas);
  document.querySelector("#chartPlaceHolder").style.height = "40vh";
  new Chart(firstCanvas, {
    type: "bar",
    data: {
      labels: [
        "Good reviews",
        "Strong Partners",
        "Stabel revenue",
        "Destribution channels",
        "Traction"
      ],
      datasets: [
        {
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850"
          ],
          data: [50, 45, 60, 55, 49]
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Positive factors"
      },
      scales: {
        xAxes: [
          {
            display: true,
            stacked: false,
            ticks: {
              beginAtZero: true,
              stepSize: 10,
              suggestedMax: 100
            }
          }
        ],
        yAxes: [
          {
            display: true,
            stacked: false,
            ticks: {
              beginAtZero: true,
              stepSize: 10,
              display: false
            }
          }
        ]
      }
    }
  });
}

function createChartForOtherFactors() {
  let canvasForLast = questions[8].canvasForChart();
  let secondCanvas = canvasForLast.theSecond;
  wrapForCanvas.appendChild(secondCanvas);
  document.querySelector("#chartPlaceHolder").style.height = "40vh";
  new Chart(secondCanvas, {
    type: "bar",
    data: {
      labels: [
        "Big debt",
        "Not experienced team",
        "Defective product",
        "Lack of financial planning",
        "Low margins"
      ],
      datasets: [
        {
          backgroundColor: [
            "#FFA500",
            "#FFDEAD",
            "#FF4500",
            "#CD853F",
            "#BC8F8F"
          ],
          data: [50, 45, 60, 55, 49]
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Negative factors"
      },
      scales: {
        xAxes: [
          {
            display: true,
            stacked: false,
            ticks: {
              beginAtZero: true,
              stepSize: 15,
              suggestedMax: 100
            }
          }
        ],
        yAxes: [
          {
            display: true,
            stacked: false,
            ticks: {
              beginAtZero: true,
              stepSize: 10,
              display: false
            }
          }
        ]
      }
    }
  });
}

////GET VALUE AND CREATE CHARTS END

//calculate percantage of yearly income and investments asked
function incomeVSinvestments() {
  let incomePerYear = questions[0].userAnswer * 12;
  console.log("incomePerYear", incomePerYear);
  let investmentsAsked = questions[7].userAnswer;
  console.log("asked investments", investmentsAsked);
  let percantageFrom = (investmentsAsked * 100) / incomePerYear;
  console.log("percantageFrom", percantageFrom);
  percantageFrom = parseFloat(percantageFrom.toFixed(2));
  document.querySelector("#number").textContent =
    "Investments you need is" +
    " " +
    percantageFrom +
    "%" +
    " " +
    "of your yearly income";
}
