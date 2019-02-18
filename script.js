"use strict";

window.addEventListener('load', function () {
  init();
})

const questionTitle = document.querySelector("#question");
const questionText = document.querySelector("#questionText");
const answer = document.querySelector("#answer");
const wrapForCanvas = document.querySelector("#chartPlaceHolder");
let currentQuestionIndex = 0;

let questions = [
  {
    id: 1,
    question: "Monthly income",
    txt: "What is your average monthly income?",
    type: "input",
    answerQ: function () {
      let theInput = document.createElement("input");
      let theLabel = document.createElement("label");
      theLabel.setAttribute("for", "income")
      theInput.setAttribute("type", "number");
      theInput.setAttribute("id", "incomeNumber");
      theInput.setAttribute("placeholder", "Type your income here")
      return theInput;
    },
    canvasForChart: function () {
      let theCanvas = document.createElement("canvas");
      theCanvas.setAttribute("width", 400);
      theCanvas.setAttribute("height", 200);
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
    answerQ: function () {
      let form = document.createElement("form");
      let theInput = document.createElement("input");
      let description = document.createElement("p");
      description.setAttribute("id", "descriptionOfGrowth")
      theInput.setAttribute("type", "range");
      theInput.setAttribute("min", "1");
      theInput.setAttribute("max", "100");
      theInput.setAttribute("value", "0");
      theInput.classList.add("slider");
      // theInput.id.add("growthRange");
      console.log("form created 2")

      form.appendChild(theInput);
      form.appendChild(description);
      // let values = ["Slower Growth", "Average Growth", "Above Average Growth", "Amazing"]
      // let form = document.createElement("form");
      // form.setAttribute("id", "expectation")
      // values.forEach(function (value) {
      //   let theInput = document.createElement("input");
      //   let theBreak = document.createElement("br");
      //   theInput.setAttribute('type', "radio");
      //   theInput.setAttribute("name", "expectation")
      //   theInput.setAttribute("value", value)
      //   let nameInput = document.createElement("p");
      //   nameInput.textContent = value;

      //   form.appendChild(theInput);
      //   form.appendChild(nameInput);
      //   form.appendChild(theBreak);

      // })

      return form;
    }, canvasForChart: function () {
      let theCanvas = document.createElement("canvas");
      theCanvas.setAttribute("width", 400);
      theCanvas.setAttribute("height", 200);
      theCanvas.setAttribute("id", "growthChart");
      return theCanvas;
    },
    userAnswer: null
  },
  {
    id: 3,
    question: "Team and Leader",
    txt: "How strong is an entrepreneur and a team?",
    type: "radio",
    answerQ: function () {
      let values = [{
        title: "Fresh out of school and working towards a solution",
        img: "graduate.png"
      },
      {
        title: "Minimum of 3 years of work experience each",
        img: "employer.png"
      },
      {
        title: "Minimum of 7 years of experience in your specific field each",
        img: "middle.png"
      },
      {
        title: "Subject matter experts with published thoughts on your industry",
        img: "einstein.png"
      }
      ];
      let form = document.createElement("form");
      form.setAttribute("id", "team");
      values.forEach(function (value) {
        let divWrapper = document.createElement("div");
        let label = document.createElement("label");
        let theInput = document.createElement("input");
        let theBreak = document.createElement("br");
        divWrapper.setAttribute("class", "wrapper");
        label.setAttribute("class", "labelClass");
        theInput.setAttribute('type', "radio");
        theInput.setAttribute("name", "team");
        theInput.setAttribute("value", value.title)
        let nameInput = document.createElement("p");
        let img = document.createElement("img");
        nameInput.style.display = "inline-grid";
        nameInput.setAttribute("class", "btnRadio");
        nameInput.textContent = value.title;

        img.setAttribute("class", "imgSize");
        img.setAttribute("src", "img/" + value.img);

        nameInput.appendChild(img)
        form.appendChild(divWrapper);
        label.appendChild(theInput);
        label.appendChild(nameInput);
        divWrapper.appendChild(label);
        divWrapper.appendChild(theBreak);



      })
      return form;
    },
    canvasForChart: function () {
      let theCanvas = document.createElement("canvas");
      theCanvas.setAttribute("width", 400);
      theCanvas.setAttribute("height", 200);
      theCanvas.setAttribute("id", "teamChart");
      return theCanvas;
    },
    userAnswer: null
  },
  {
    id: 4,
    question: "Market Opportunity",
    txt: "How big is the market opportunity?",
    type: "radio",
    answerQ: function () {
      let values = [{
        title: "Sustainable",
        img: "sustainable.png",
      }, {
        title: "Growing",
        img: "growing.png"
      },
      {
        title: "Spectacular",
        img: "spec.png"
      },
      {
        title: "Almost limitless",
        img: "limitless.png"
      }];
      let form = document.createElement("form");
      form.setAttribute("id", "market");
      values.forEach(function (value) {
        let divWrapper = document.createElement("div");
        let label = document.createElement("label");
        let theInput = document.createElement("input");
        let theBreak = document.createElement("br");
        divWrapper.setAttribute("class", "wrapper");
        label.setAttribute("class", "labelClass");
        theInput.setAttribute('type', "radio");
        theInput.setAttribute("name", "market");
        theInput.setAttribute("value", value.title)
        let nameInput = document.createElement("p");
        let img = document.createElement("img");
        nameInput.style.display = "inline-grid";
        nameInput.setAttribute("class", "btnRadio");
        nameInput.textContent = value.title;

        img.setAttribute("class", "imgSize");
        img.setAttribute("src", "img/" + value.img);

        nameInput.appendChild(img)
        form.appendChild(divWrapper);
        label.appendChild(theInput);
        label.appendChild(nameInput);
        divWrapper.appendChild(label);
        divWrapper.appendChild(theBreak);
      })
      return form;
    },

    canvasForChart: function () {
      let theCanvas = document.createElement("canvas");
      theCanvas.setAttribute("width", 400);
      theCanvas.setAttribute("height", 200);
      theCanvas.setAttribute("id", "marketChart");
      return theCanvas;
    },
    userAnswer: null
  },
  {
    id: 5,
    question: "Innovation",
    txt: "How innovative is the product/technology?",
    type: "radio",
    answerQ: function () {
      let values = [{
        title: "There are many similar products/technologies",
        img: "many.png"
      },
      {
        title: "There are few similar products/technologies",
        img: "several.png"
      },
      {
        title: "There are only 1-3 similar products/technologies",
        img: "none.png"
      },
      {
        title: "It is unique product/technologies",
        img: "unique.png"
      }
      ];
      let form = document.createElement("form");
      form.setAttribute("id", "uniqueness");
      values.forEach(function (value) {
        let divWrapper = document.createElement("div");
        let label = document.createElement("label");
        let theInput = document.createElement("input");
        let theBreak = document.createElement("br");
        divWrapper.setAttribute("class", "wrapper");
        label.setAttribute("class", "labelClass");
        theInput.setAttribute('type', "radio");
        theInput.setAttribute("name", "uniqueness");
        theInput.setAttribute("value", value.title)
        let nameInput = document.createElement("p");
        let img = document.createElement("img");
        nameInput.style.display = "inline-grid";
        nameInput.setAttribute("class", "btnRadio");
        nameInput.textContent = value.title;
        img.setAttribute("class", "imgSize");
        img.setAttribute("src", "img/" + value.img);
        nameInput.appendChild(img)
        form.appendChild(divWrapper);
        label.appendChild(theInput);
        label.appendChild(nameInput);
        divWrapper.appendChild(label);
        divWrapper.appendChild(theBreak);



      })
      return form;
    },
    canvasForChart: function () {
      let theCanvas = document.createElement("canvas");
      theCanvas.setAttribute("width", 400);
      theCanvas.setAttribute("height", 200);
      theCanvas.setAttribute("id", "uniqueChart");
      return theCanvas;
    },
    userAnswer: null
  },
  {
    id: 6,
    question: "Competitors",
    txt: "How competitive is environment?",
    type: "radio",
    answerQ: function () {
      let values = [{
        title: "Crowded space",
        img: "crowded.png",
      }, {
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
      }];
      let form = document.createElement("form");
      form.setAttribute("id", "competition");
      values.forEach(function (value) {
        let divWrapper = document.createElement("div");
        let label = document.createElement("label");
        let theInput = document.createElement("input");
        let theBreak = document.createElement("br");
        divWrapper.setAttribute("class", "wrapper");
        label.setAttribute("class", "labelClass");
        theInput.setAttribute('type', "radio");
        theInput.setAttribute("name", "competition");
        theInput.setAttribute("value", value.title)
        let nameInput = document.createElement("p");
        let img = document.createElement("img");
        nameInput.style.display = "inline-grid";
        nameInput.setAttribute("class", "btnRadio");
        nameInput.textContent = value.title;
        img.setAttribute("class", "imgSize");
        img.setAttribute("src", "img/" + value.img);
        nameInput.appendChild(img)
        form.appendChild(divWrapper);
        label.appendChild(theInput);
        label.appendChild(nameInput);
        divWrapper.appendChild(label);
        divWrapper.appendChild(theBreak);
      })
      return form;
    }, canvasForChart: function () {
      let theCanvas = document.createElement("canvas");
      theCanvas.setAttribute("width", 400);
      theCanvas.setAttribute("height", 200);
      theCanvas.setAttribute("id", "competitionChart");
      return theCanvas;
    },
    userAnswer: null
  },
  {
    id: 7,
    question: "Strength",
    txt: "How strong is marketing plan/sales/partnerships?",
    type: "radio",
    answerQ: function () {
      let values = [{
        title: "Good",
        img: "first.png",
      }, {
        title: "Solid",
        img: "second.png"
      },
      {
        title: "Strong",
        img: "third.png"
      },
      {
        title: "Perfect",
        img: "fourth.png"
      }];
      let form = document.createElement("form");
      form.setAttribute("id", "strength");
      values.forEach(function (value) {
        let divWrapper = document.createElement("div");
        let label = document.createElement("label");
        let theInput = document.createElement("input");
        let theBreak = document.createElement("br");
        divWrapper.setAttribute("class", "wrapper");
        label.setAttribute("class", "labelClass");
        theInput.setAttribute('type', "radio");
        theInput.setAttribute("name", "strength");
        theInput.setAttribute("value", value.title)
        let nameInput = document.createElement("p");
        let img = document.createElement("img");
        nameInput.style.display = "inline-grid";
        nameInput.setAttribute("class", "btnRadio");
        nameInput.textContent = value.title;

        img.setAttribute("class", "imgSize");
        img.setAttribute("src", "img/" + value.img);
        nameInput.appendChild(img)
        form.appendChild(divWrapper);
        label.appendChild(theInput);
        label.appendChild(nameInput);
        divWrapper.appendChild(label);
        divWrapper.appendChild(theBreak);
      })
      return form;
    }, canvasForChart: function () {
      let theCanvas = document.createElement("canvas");
      theCanvas.setAttribute("width", 400);
      theCanvas.setAttribute("height", 200);
      theCanvas.setAttribute("id", "marketChart");
      return theCanvas;
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
      let theLabel = document.createElement("label");
      theLabel.setAttribute("for", "investment")
      theInput.setAttribute("type", "number");
      theInput.setAttribute("id", "addInvestment");
      theInput.setAttribute("placeholder", "Type your number here")
      return theInput;
    }, canvasForChart: function () {
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
    txt: "Do you have any positive factor(s) that affect or may affect your income in future?",
    type: "radio",
    answerQ: function () {
      let values = ["yes", "no"];
      let form = document.createElement("form");


      values.forEach(function (value) {
        let theLabel = document.createElement("label");
        let theInput = document.createElement("input");
        let span = document.createElement("span");
        theInput.setAttribute('type', "radio");
        theInput.setAttribute("name", "factors");
        theInput.setAttribute("value", value);
        span.setAttribute("class", "checkmark");
        theLabel.setAttribute("class", "container");
        let nameInput = document.createElement("p");
        nameInput.textContent = value;

        theLabel.appendChild(theInput);
        theLabel.appendChild(span);

        theLabel.appendChild(nameInput);
        form.appendChild(theLabel);
        console.log("theInput", theInput)
      })
      return form;

    }, canvasForChart: function () {
      let theCanvas = document.createElement("canvas");
      theCanvas.setAttribute("width", 400);
      theCanvas.setAttribute("height", 200);
      theCanvas.setAttribute("id", "factorsChart");
      return theCanvas;
    },
    userAnswer: null
  }

]




function insertIntoDOM() {
  timeline();

  if (questions[currentQuestionIndex].id == 1) {
    document.querySelector("#prev_button").style.display = "none";

  }

  questionTitle.textContent = questions[currentQuestionIndex].question;
  questionText.textContent = questions[currentQuestionIndex].txt;

  answer.appendChild(questions[currentQuestionIndex].answerQ());

  wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());
  // console.log("it is displayed")
  TweenMax.from(('#incomeNumber'), 1, { css: { scale: .05, opacity: 0, rotation: 180 }, ease: Quad.easeInOut }), 0, -400;

  // TweenMax.fromTo(("#incomeNumber"), 1.5,
  //   {
  //     x: -1200,
  //     y: 0,
  //   }, {
  //     x: 0,
  //     y: 0,
  //     delay: 2,
  //   }, { css: { rotation: 180 } }, 1);


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

// function checkValueInput() {
//   console.log("checkValue runs")
//   let inputToCheck = document.querySelector("#incomeNumber");
//   if (inputToCheck.value > 100000) {
//     inputToCheck.style.backgroundColor = "lime";
//     TweenMax.to(inputToCheck, 2, { rotation: 360, scale: 1.1 });
//   } else if (inputToCheck.value > 10000) {
//     console.log("more than 10000");
//     inputToCheck.style.backgroundColor = "green";
//     TweenMax.to(inputToCheck, 2, { rotation: 360, scale: 2 });
//   }
//   else {
//     inputToCheck.style.backgroundColor = "orange";
//     TweenMax.to(inputToCheck, 2, { rotation: 360, scale: 0.9 });
//   }
// }


function nextElement() {
  console.log("type of input", questions[currentQuestionIndex].type)


  document.querySelector("#prev_button").style.display = "inline-block";
  if (questions[currentQuestionIndex].type == "radio") {

    console.log("it is radio!");
    let input = answer.querySelector("input");
    // console.log("form", input);
    let radioName = input.getAttribute("name");
    // console.log("radio_name", radioName);
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
    // console.log("inputValue", inputValue)
    questions[currentQuestionIndex].userAnswer = inputValue;
    // let context = canvas.getContext('2d');
    // context.clearRect(0, 0, canvas.width, canvas.height);

  }


  answer.textContent = "";
  wrapForCanvas.innerHTML = "";
  // let a = questions[currentQuestionIndex - 1].canvasForChart;
  // a.hidden();

  let currentEl = nextItem();

  questionTitle.textContent = currentEl.question;
  questionText.textContent = currentEl.txt;
  answer.appendChild(questions[currentQuestionIndex].answerQ());

  wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());
  console.log("current element", currentEl.id);
  // if (questions[currentQuestionIndex] !== 2) {
  //   let context = canvas.getContext('2d');
  //   context.clearRect(0, 0, canvas.width, canvas.height);
  // }

  if (questions[currentQuestionIndex].id == 8) {
    console.log("it is 8!")
    answer.querySelector("#addInvestment").addEventListener("blur", function () {
      console.log("eventlistener from init for investements")
      if (answer.querySelector("#addInvestment").value.length) {
        document.getElementById('next_button').disabled = false;
        getValueForInvestment();
      } else {
        console.log("it is disabled from investements");
        document.getElementById('next_button').disabled = true;
      }
    })
  }
  insertSavedAnswers(currentEl);

  ifLastElement(currentEl);
  disabledIfEmpty();
  timeline();

  if (questions[currentQuestionIndex].type == "range") {
    console.log("question number 2 for get Value")

    let slider = document.querySelector('input[type="range"]');
    console.log("slider", slider)
    disabledIfEmpty();
    slider.addEventListener("change", function () {
      console.log("eventlistener for getValue")
      getValue();

    })

  }
  if (questions[currentQuestionIndex].type == "button") {
    console.log("it is button")
    let allButtons = document.querySelectorAll(".btnRadio");
    console.log("allbuttons", allButtons)
    allButtons.forEach(button => {
      button.addEventListener("click", function () {
        console.log("button clicked", button.previousSibling.value)
        questions[currentQuestionIndex].userAnswer = button.value;
        button.classList.toggle("classColor");
        document.getElementsByName("team").disabled = "true";
        console.log("questions[currentQuestionIndex].userAnswer", questions[currentQuestionIndex].userAnswer)

      })
    })
    // document.addEventListener("click", function () {
    //   let buttonValue = getButtonValue("team");
    //   console.log("button value", buttonValue);
    // })

  }
}



// function hideChart(idStr) {
//   console.log("has to be hidden");
//   let canvas = document.getElementById(idStr);
//   console.log("canvas", canvas)
//   canvas.style.display = "none";

// }

function prevElement() {

  answer.textContent = "";
  wrapForCanvas.innerHTML = "";

  let currentEl = prevItem();
  questionTitle.textContent = currentEl.question;
  questionText.textContent = currentEl.txt;

  answer.appendChild(questions[currentQuestionIndex].answerQ());
  if (questions[currentQuestionIndex].id == 1) {
    console.log("currentID", questions[currentQuestionIndex].id)
    document.querySelector("#prev_button").style.display = "none";
  }
  insertSavedAnswers(currentEl);

  ifLastElement(currentEl);
  console.log("question", currentEl)
  document.getElementById('next_button').disabled = false;
  timeline();
  if (questions[currentQuestionIndex].type == "range") {
    wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());
    let slider = document.querySelector('input[type=range]');
    slider.addEventListener("change", function () {
      console.log("eventlistener for getValue")
      getValue();

    })
  }
  if (questions[currentQuestionIndex].id == 1) {

    wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());
    getValueForBarChart();
  }

  if (questions[currentQuestionIndex].id == 8) {

    wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());
    getValueForInvestment();
  }
  // if (questions[currentQuestionIndex].id == 2) {

  //   wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());
  //   // console.log("questions[currentQuestionIndex].canvasForChart()", questions[currentQuestionIndex].canvasForChart())
  //   // getValue();
  // }

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
    if (questions[currentQuestionIndex].type == "range") {
      console.log("get user answer", questions[currentQuestionIndex].userAnswer)
      buildChart(questions[currentQuestionIndex].userAnswer)
      let slider = document.querySelector('input[type=range]');
      slider.value = questions[currentQuestionIndex].userAnswer;
      getValue();
      // let theInput = document.querySelector("input");
      // theInput.setAttribute("value", questions[currentQuestionIndex].userAnswer)
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
        createChartForFactors();
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
        createChartForOtherFactors();
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

function getButtonValue(name) {
  console.log("all buttons name", name)
  let allBtn = document.getElementsByName(name);
  console.log("allBtn", allBtn)
  allBtn = Array.prototype.slice.call(allBtn);
  console.log("allBtn array", allBtn)
  for (let u = 0; u < allBtn.length; u++) {
    if (allBtn[u].clicked) {
      console.log("clicked button", allBtn[u].clicked)
      return allBtn[u].value;
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
          // if (questions[currentQuestionIndex].id == 3) {
          //   getValueForRadio();
          // }
          // if (questions[currentQuestionIndex].id == 4) {
          //   getValueForRadioMarket();
          // }

        }
      }

    })
  }
  if (questions[currentQuestionIndex].type == "range") {
    console.log("it is range")
    console.log("value of input range", answer.querySelector("input").value)
    if (answer.querySelector("input").value == 1) {
      console.log("value of input range", answer.querySelector("input").value)
      document.getElementById('next_button').disabled = true;

    }
    // else {
    //   document.getElementById('next_button').disabled = false;
    //   console.log("value of input range", answer.querySelector("input").value)
    // }
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

// function generateButtonInputs() {
//   let values = ["Fresh out of school and working towards a solution", "Minimum of 3 years of work experience each", "Minimum of 7 years of experience in your specific field each", "Subject matter experts with published thoughts on your industry"];
//   let form = document.createElement("form");
//   form.setAttribute("id", "team");
//   values.forEach(function (value) {
//     let theButton = document.createElement("input");
//     theButton.setAttribute("value", value);
//     theButton.setAttribute("name", "team");
//     theButton.setAttribute("type", "radio");
//     theButton.classList.add("inputBtn");
//     theButton.innerHTML = value;
//     form.appendChild(theButton);
//   })
//   return form;
// }

// function generateValues() {
//   let values = [];
//   if (questions[currentQuestionIndex].id == 3) {
//     let values = ["Fresh out of school and working towards a solution", "Minimum of 3 years of work experience each", "Minimum of 7 years of experience in your specific field each", "Subject matter experts with published thoughts on your industry"];
//   } else {
//     let values = ["0", "50", "100", "150"];
//   }
//   return values;
// }

function generateRadioInputs(nameStr) {


  let values = ["0", "50", "100", "150"];
  let form = document.createElement("form");
  form.setAttribute("id", nameStr)
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

function turnToNumber(currentQuestionIndex) {

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
  console.log("answerModified", answerModified)
  let answer2 = ((answer1 * answerModified) / 100) + answer1;
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


function timeline() {
  let timelineInput = document.querySelector("#timeline");
  let allQuestionsDigit = questions.length;
  // console.log("allQuestionsDigit", allQuestionsDigit);
  let currentQuestionDigit = questions[currentQuestionIndex].id;
  console.log("currentQuestionDigit", currentQuestionDigit)

  timelineInput.textContent = currentQuestionDigit + "/" + allQuestionsDigit;
  return timelineInput.textContent;
}


// To save user data 
// function saveUserData() {
//   let formSignUp = document.querySelector("#signUp");
//   l
//   let userData = {
//     name: "",
//     company: "",
//     email: "",
//     phone: ""
//   }
// }


function init() {

  insertIntoDOM();


  document.getElementById("submit").addEventListener("click", function () {
    document.querySelector("#popUp").style.display = "block";
    let allOneUserAnswers = collectAllAnswers();
    console.log("userAnswer", allOneUserAnswers);

    let finalResult = calculateResult(allOneUserAnswers);
    console.log("final result function", finalResult)
  })


  answer.querySelector("input").addEventListener("blur", function () {
    console.log("eventlistener from init!")
    if (answer.querySelector("input").value.length) {
      document.getElementById('next_button').disabled = false;
      getValueForBarChart();


    } else {
      console.log("it is disabled!");
      document.getElementById('next_button').disabled = true;
    }
  })





  // slider.addEventListener("click", function () {
  //   getValue();
  // })

}

//creat charts


Chart.defaults.global.legend.display = false;
// Chart.defaults.global.animationSteps = 600;
let dataSetAdequate = [0, 25, 50, 75, 95, 115];
let dataSetAverage = [0, 50, 90, 100, 120, 140];
let dataSetAboveAverage = [0, 100, 150, 200, 250, 300];
let dataSetAmazing = [0, 120, 200, 300, 400, 450]
let descriptionOfGrowth = document.querySelector("#descriptionGrowth");
let slider = document.querySelector('input[type=range]');

function getValue() {
  console.log("function runs getvalue")
  let newValue = 0;
  let elem = document.querySelector('input[type="range"]');

  let clicked = false;
  elem.addEventListener("click", function () {
    console.log("clicked")
    newValue = elem.value;
    clicked = true;
    console.log("newValue", newValue)
    buildChart(newValue);
    questions[currentQuestionIndex].userAnswer = newValue;
    console.log("new user value", questions[currentQuestionIndex].userAnswer)
    // return newValue;
    elem.value = newValue;
  })

}

function buildChart(value) {
  let slider = document.querySelector('input[type=range]');
  let descriptionOfGrowth = document.querySelector("#descriptionOfGrowth");
  console.log("lets see what new value is")
  if (value <= 25) {
    console.log("value is <25", value)
    createChart(
      'growthChart',
      'line',
      ['Now', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
      dataSetAdequate, 'rgba(241, 90, 34, 1)'
    );
    // slider.classList.remove = ".slider::-webkit-slider-thumb";
    slider.style.backgroundColor = "rgba(241, 90, 34, .5)";
    descriptionOfGrowth.textContent = "I expect adequate growth";

  } else if (value > 25 && value <= 50) {
    console.log("value is <50", value)
    createChart(
      'growthChart',
      'line',
      ['Now', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
      dataSetAverage, 'rgba(245, 230, 83, 1)'
    );
    slider.style.backgroundColor = "rgba(245, 230, 83, .5)";
    descriptionOfGrowth.textContent = "I expect average growth";
  } else if (value > 50 && value <= 75) {
    console.log("value is <75", value)
    createChart(
      'growthChart',
      'line',
      ['Now', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],

      dataSetAboveAverage, 'rgba(3, 201, 169, 1)'
    );
    slider.style.backgroundColor = "rgba(3, 201, 169, .5)";
    descriptionOfGrowth.textContent = "I expect very good growth";
  } else {
    console.log("value is <100", value)
    createChart(
      'growthChart',
      'line',
      ['Now', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
      dataSetAmazing, 'rgba(0, 230, 64, 1)'
    );
    slider.style.backgroundColor = "rgba(0, 230, 64, .5)";
    descriptionOfGrowth.textContent = "I expect amazing growth";
  }
  document.getElementById('next_button').disabled = false;
}



function createChart(get_wrapper, type_of_chart, labels_of_chart, data_of_charts, background_color) {
  console.log("chart is created", data_of_charts)
  let ctx = document.getElementById(get_wrapper).getContext('2d');
  var myChart = new Chart(ctx, {
    type: type_of_chart,
    data: {
      labels: labels_of_chart,
      datasets: [{
        label: "Average",
        data: [0, 60, 100, 110, 130, 150],
        backgroundColor: 'rgba(63,	152,	255,.3)	',
        // borderColor: 'rgba(19, 247, 228,1)',
        borderWidth: 2,
        // pointBackgroundColor: 'rgba(19, 247, 228,1)',
        // pointBorderColor: 'rgba(19, 247, 228,1)',
        // pointBorderWidth: 5,
      }, {
        label: "Original data",
        data: data_of_charts,
        animationSteps: 6000,
        // easing: 'easeInOutElastic',
        backgroundColor: background_color,
        // borderColor: 'rgba(19, 247, 228,1)',
        borderWidth: 2,
        // pointBackgroundColor: 'rgba(19, 247, 228,1)',
        // pointBorderColor: 'rgba(19, 247, 228,1)',
        pointBorderWidth: 0,
      }
      ]
    },
    options: {
      scales: {
        xAxes: [{
          gridLines: {
            drawBorder: false,
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            drawBorder: false,
            display: false
          },
          ticks: {
            // display: false,
            max: 450,
            min: 0,
            stepSize: 150
          }
        }]
      },
      animation: {
        duration: 2500,
        xAxis: true,
        yAxis: true,
        easing: 'easeInOutElastic'
      },
      tooltips: {
        callbacks: {
          label: function (t, d) {
            var xLabel = d.datasets[t.datasetIndex].label;
            var yLabel = d.datasets[t.datasetIndex].data[t.index];
            return xLabel + ': %' + yLabel;
          }
        }
      }
    }
  });
};

function getValueForBarChart() {

  let inputToCheck = document.querySelector("#incomeNumber");
  let theValue = inputToCheck.value;
  console.log("theValue", theValue)
  theValue = Number(theValue);
  createBarChart(theValue, 'incomeChart');
}

function getValueForInvestment() {
  console.log("it is #8")
  if (questions[currentQuestionIndex].id == 8) {
    let inputToCheck = document.querySelector("#addInvestment");
    let theValue = inputToCheck.value;
    theValue = Number(theValue);
    createInvestmentChart(theValue, 'investmentChart');
  }

}

function createBarChart(value, placeHolder) {
  let barChartIncomeCanvas = document.getElementById(placeHolder);

  let barChart = new Chart(barChartIncomeCanvas, {
    type: 'bar',
    data: {
      labels: ["Income"],
      datasets: [
        {
          label: 'Your income',
          data: [value],
          backgroundColor: 'blue',
        },
        {
          label: 'Average income',
          data: [50000],
          backgroundColor: 'green',
        },
        {
          label: 'Max income',
          data: [100000],
          backgroundColor: '#EEEEEE',
        }],
    }, options: {
      legend: {
        display: true
      },
      tooltips: {
        enabled: true
      },
      scales: {
        xAxes: [{
          display: true,
          stacked: false,
          ticks: {
            beginAtZero: true,
            stepSize: 10000,
          }
        }],
        yAxes: [{
          display: true,
          stacked: false,
          ticks: {
            beginAtZero: true,
            stepSize: 10000,
          }
        }],
      }
    }


  });
}

function createInvestmentChart(value, placeHolder) {
  let barChartIncomeCanvas = document.getElementById(placeHolder);

  let barChart = new Chart(barChartIncomeCanvas, {
    type: 'bar',
    data: {
      labels: ["Additional investments"],
      datasets: [
        {
          label: 'Additional investements',
          data: [value],
          backgroundColor: 'blue',
        },
        {
          label: 'Your yearly income',
          data: [questions[1].userAnswer * 12],
          backgroundColor: 'green',
        }
      ],
    }, options: {
      legend: {
        display: true
      },
      tooltips: {
        enabled: true
      },
      scales: {
        xAxes: [{
          display: true,
          stacked: false,
          ticks: {
            beginAtZero: true,
            stepSize: 10000,
          }
        }],
        yAxes: [{
          display: true,
          stacked: false,
          ticks: {
            beginAtZero: true,
            stepSize: 10000,
          }
        }],
      }
    }


  });
}

function createChartForFactors() {

  new Chart(document.getElementById("factorsChart"), {
    type: 'bar',
    data: {
      labels: ["Good reviews", "Strong Partners", "Stabel revenue", "Destribution channels", "Traction"],
      datasets: [
        {

          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
          data: [50, 45, 60, 55, 49]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Positive factors'
      },
      scales: {
        xAxes: [{
          display: true,
          stacked: false,
          ticks: {
            beginAtZero: true,
            stepSize: 10,
            suggestedMax: 100,
          }
        }],
        yAxes: [{
          display: true,
          stacked: false,
          ticks: {
            beginAtZero: true,
            stepSize: 10,
            display: false
          }
        }],
      }
    }
  });
}

function createChartForOtherFactors() {

  new Chart(document.getElementById("factorsChart"), {
    type: 'bar',
    data: {
      labels: ["Poorely performing sector", "Poor managing team", "Defective product", "Lack of financial planning", "Low margins"],
      datasets: [
        {

          backgroundColor: ["#FFA500", "#FFDEAD", "#FF4500", "#CD853F", "#BC8F8F"],
          data: [50, 45, 60, 55, 49]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Negative factors'
      },
      scales: {
        xAxes: [{
          display: true,
          stacked: false,
          ticks: {
            beginAtZero: true,
            stepSize: 15,
            suggestedMax: 100,
          }
        }],
        yAxes: [{
          display: true,
          stacked: false,
          ticks: {
            beginAtZero: true,
            stepSize: 10,
            display: false
          }
        }],
      }
    }
  });
}

// function getValueForRadio() {
//   let input = answer.querySelector("input");
//   let radioName = input.getAttribute("name");
//   let radioValue = getRadioCheckedValue(radioName);
//   console.log("radioValue for chart", radioValue);
//   let newValue = radioValue;
//   console.log("newradioValue for chart", newValue);
//   if (newValue == "Fresh out of school and working towards a solution") {
//     newValue = 25;
//   } else if (newValue == "Minimum of 3 years of work experience each") {
//     newValue = 50;
//   } else if (newValue == "Minimum of 7 years of experience in your specific field each") {
//     newValue = 75
//   } else {
//     newValue = 100;
//   }
//   createPieChart(newValue, 'teamChart');
// }

// function createPieChart(value, placeHolder) {
//   console.log("value piechart", value)
//   // let dataValue = [value, 100 - value];
//   let pieChartCanvas = document.getElementById(placeHolder);
//   let pieChart = new Chart(pieChartCanvas, {
//     type: 'polarArea',
//     data: {
//       labels: ["Your team ", "Ideal team"],
//       datasets: [
//         {
//           fill: true,
//           backgroundColor: [
//             '#2E8B57',
//             '#7FFF00'
//           ],
//           data: [value, 100],
//           label: ["Your team", "Ideal Team"]


//         }
//       ]
//     }, options: {
//       tooltips: {
//         enabled: false,
//       },
//       legend: {
//         display: true
//       },
//     }


//   });

// }

// function getValueForRadioMarket() {
//   let input = answer.querySelector("input");
//   let radioName = input.getAttribute("name");
//   let radioValue = getRadioCheckedValue(radioName);
//   console.log("radioValue for chart", radioValue);
//   let newValue = radioValue;
//   console.log("newradioValue for chart", newValue);
//   if (newValue == "Sustainable") {
//     newValue = 10;
//   } else if (newValue == "Growing") {
//     newValue = 50;
//   } else if (newValue == "Spectacular") {
//     newValue = 100
//   } else {
//     newValue = 150;
//   }
//   createBarChartMarket(newValue, 'marketChart');
// }

// function createBarChartMarket(value, placeholderStr) {
//   let barChartMarketCanvas = document.getElementById(placeholderStr);
//   let barMarketChart = new Chart(barChartMarketCanvas, {
//     type: 'horizontalBar',
//     data: {
//       labels: ["Market"],
//       datasets: [
//         {
//           label: "Your market opprotunity",
//           data: [value],
//           backgroundColor: 'blue',
//         },
//         {
//           label: "Average market opportunity",
//           data: [100],
//           backgroundColor: '#EEEEEE',
//         },
//         {
//           label: "Limitless market opportunity",
//           data: [150],
//           backgroundColor: 'green',
//         }],
//     }, options: {
//       legend: {
//         display: true
//       },
//       tooltips: {
//         enabled: true
//       },
//       scales: {
//         xAxes: [{
//           display: true,
//           stacked: false,
//           ticks: {
//             beginAtZero: true,
//             stepSize: 10

//           }
//         }],
//         yAxes: [{
//           display: true,
//           stacked: false,
//           ticks: {
//             beginAtZero: true,
//             stepSize: 10

//           }
//         }],
//       }
//     }

//   });
// }

