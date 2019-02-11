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
    txt: "What is your average monthly income?",
    type: "input",
    answerQ: function () {
      let theInput = document.createElement("input");
      let theLabel = document.createElement("label");
      theLabel.setAttribute("for", "income")
      theInput.setAttribute("type", "number");
      theInput.setAttribute("placeholder", "Type your income here")
      return theInput;
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
      // let span = document.createElement("span");
      values.forEach(function (value) {
        let theInput = document.createElement("input");
        // theInput.setAttribute('type', "radio");
        theInput.setAttribute('type', "radio");
        theInput.setAttribute("name", "factors");
        theInput.setAttribute("value", value)
        // span.setAttribute("class", "slider");
        // label.setAttribute("class", "switch")
        let nameInput = document.createElement("p");
        nameInput.textContent = value;

        form.appendChild(theInput);
        // label.appendChild(span);
        form.appendChild(nameInput);

        console.log("theInput", theInput)
      })
      return form;

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
  // console.log("it is displayed")



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


  }

  answer.textContent = "";


  let currentEl = nextItem();
  questionTitle.textContent = currentEl.question;
  questionText.textContent = currentEl.txt;
  answer.appendChild(questions[currentQuestionIndex].answerQ());
  console.log("current element", currentEl.id);
  let context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

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
}




function prevElement() {

  answer.textContent = "";

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
  let slider = document.querySelector('input[type=range]');
  slider.addEventListener("change", function () {
    console.log("eventlistener for getValue")
    getValue();

  })
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

function saveUserData() {
  let formSignUp = document.querySelector("#signUp");
  l
  let userData = {
    name: "",
    company: "",
    email: "",
    phone: ""
  }
}


function init() {
  insertIntoDOM();
  document.getElementById("submit").addEventListener("click", function () {
    document.querySelector("#popUp").style.display = "block";
    let allOneUserAnswers = collectAllAnswers();
    console.log("userAnswer", allOneUserAnswers);

    let finalResult = calculateResult(allOneUserAnswers);
    console.log("final result function", finalResult)
  })


  answer.querySelector("input").addEventListener("keyup", function () {
    console.log("eventlistener from init!")
    if (answer.querySelector("input").value.length) {
      document.getElementById('next_button').disabled = false;
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
      'canvas',
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
      'canvas',
      'line',
      ['Now', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
      dataSetAverage, 'rgba(245, 230, 83, 1)'
    );
    slider.style.backgroundColor = "rgba(245, 230, 83, .5)";
    descriptionOfGrowth.textContent = "I expect average growth";
  } else if (value > 50 && value <= 75) {
    console.log("value is <75", value)
    createChart(
      'canvas',
      'line',
      ['Now', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],

      dataSetAboveAverage, 'rgba(3, 201, 169, 1)'
    );
    slider.style.backgroundColor = "rgba(3, 201, 169, .5)";
    descriptionOfGrowth.textContent = "I expect very good growth";
  } else {
    console.log("value is <100", value)
    createChart(
      'canvas',
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
  var ctx = document.getElementById(get_wrapper).getContext('2d');
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