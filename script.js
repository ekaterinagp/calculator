"use strict";
const startBtn = document.querySelector("#start");

startBtn.addEventListener("click", function() {
  document.querySelector("#intro").style.display = "none";
  init();
});

let questions = [
  {
    id: 1,
    question: "Monthly revenue",
    txt: "What is your average monthly revenue?",
    type: "input",
    answerQ: function() {
      let theInput = document.createElement("input");
      let theLabel = document.createElement("label");
      let dollarSign = document.createElement("span");
      dollarSign.setAttribute("class", "dollarSign");
      dollarSign.innerText = "$";
      theLabel.setAttribute("for", "income");
      // theInput.setAttribute("pattern", "(?!0+)d+");
      theInput.setAttribute("min", "5");
      theInput.setAttribute("required", "true");
      theInput.setAttribute("type", "number");
      theInput.setAttribute("id", "incomeNumber");
      answer.appendChild(dollarSign);
      theInput.setAttribute("placeholder", "Type your revenue here");
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
      // divAnswer.removeAttribute("class", "addGrid");
      theInput.setAttribute("type", "range");
      theInput.setAttribute("min", "1");
      theInput.setAttribute("max", "100");
      theInput.setAttribute("value", "0");
      theInput.classList.add("slider");

      // console.log("form created 2");

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
    txt:
      "How strong is your team overall? Experience, leadership, and competence.",
    type: "radio",
    answerQ: function() {
      let values = [
        {
          title: "Fresh out of school and working towards a solution",
          img: "a11.svg",
          imgFull: "a1.svg"
        },
        {
          title: "Minimum of 3 years of work experience each",
          img: "b11.png",
          imgFull: "b1.svg"
        },
        {
          title: "Minimum of 7 years of experience in your specific field each",
          img: "c11.svg",
          imgFull: "c1.svg"
        },
        {
          title:
            "Subject matter experts with published thoughts on your industry",
          img: "d11.svg",
          imgFull: "d1.svg"
        }
      ];
      let form = document.createElement("form");
      form.setAttribute("id", "team");
      form.setAttribute("class", "listenTo");
      values.forEach(function(value) {
        let divWrapper = document.createElement("div");
        let label = document.createElement("label");
        let theInput = document.createElement("input");
        let theBreak = document.createElement("br");
        let divAnswer = document.querySelector("#answer");
        divAnswer.setAttribute("class", "addGrid");
        divWrapper.setAttribute("class", "wrapper");
        label.setAttribute("class", "labelClass");
        theInput.setAttribute("type", "radio");
        theInput.setAttribute("name", "team");
        theInput.setAttribute("value", value.title);
        let divWrapperP = document.createElement("div");
        let nameInput = document.createElement("p");
        let img = document.createElement("img");
        nameInput.style.display = "inline";
        divWrapperP.setAttribute("class", "btnRadio");
        nameInput.innerHTML = value.title;

        img.setAttribute("class", "imgSize");
        img.setAttribute("src", "img/" + value.img);

        divWrapperP.appendChild(nameInput);
        divWrapperP.appendChild(img);
        // nameInput.appendChild(img);
        form.appendChild(divWrapper);

        label.appendChild(theInput);
        label.appendChild(divWrapperP);
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
          img: "a31.svg"
        },
        {
          title: "Growing",
          img: "b32.svg"
        },
        {
          title: "Spectacular",
          img: "c33.svg"
        },
        {
          title: "Almost limitless",
          img: "d34.svg"
        }
      ];
      let form = document.createElement("form");
      form.setAttribute("class", "listenTo");
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
        let divWrapperP = document.createElement("div");
        let nameInput = document.createElement("div");
        let img = document.createElement("img");
        nameInput.style.display = "inline";
        divWrapperP.setAttribute("class", "btnRadio");
        nameInput.textContent = value.title;

        img.setAttribute("class", "imgSize");
        img.setAttribute("src", "img/" + value.img);

        divWrapperP.appendChild(nameInput);
        divWrapperP.appendChild(img);
        // nameInput.appendChild(img);
        form.appendChild(divWrapper);
        label.appendChild(theInput);
        label.appendChild(divWrapperP);
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
          img: "a23.svg"
        },
        {
          title: "There are few similar products/technologies",
          img: "b23.svg"
        },
        {
          title: "There are only 1-3 similar products/technologies",
          img: "c23.svg"
        },
        {
          title: "It is unique product/technologies",
          img: "d23.svg"
        }
      ];
      let form = document.createElement("form");
      form.setAttribute("class", "listenTo");
      form.setAttribute("id", "uniqueness");
      let divAnswer = document.querySelector("#answer");
      divAnswer.removeAttribute("class", "addGrid");
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
        let divWrapperP = document.createElement("div");
        let nameInput = document.createElement("div");
        let img = document.createElement("img");
        // nameInput.style.display = "inline";
        divWrapperP.setAttribute("class", "btnRadioInline");
        nameInput.textContent = value.title;
        img.setAttribute("class", "imgInline");
        img.setAttribute("src", "img/" + value.img);
        divWrapperP.appendChild(nameInput);
        divWrapperP.appendChild(img);
        // nameInput.appendChild(img);
        form.appendChild(divWrapper);
        label.appendChild(theInput);
        label.appendChild(divWrapperP);
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
          img: "d55.svg"
        },
        {
          title: "Competitive",
          img: "b58.svg"
        },
        {
          title: "Single competitor",
          img: "a51.svg"
        },
        {
          title: "No competitors",
          img: "a5.svg"
        }
      ];
      let form = document.createElement("form");
      form.setAttribute("class", "listenTo");
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
        let divWrapperP = document.createElement("div");
        let nameInput = document.createElement("div");
        let img = document.createElement("img");
        nameInput.style.display = "inline";
        divWrapperP.setAttribute("class", "btnRadioInlineComp");
        nameInput.textContent = value.title;
        img.setAttribute("class", "imgInlineComp");
        img.setAttribute("src", "img/" + value.img);
        divWrapperP.appendChild(nameInput);
        divWrapperP.appendChild(img);
        // nameInput.appendChild(img);
        form.appendChild(divWrapper);
        label.appendChild(theInput);
        label.appendChild(divWrapperP);
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
    txt:
      "How strong is your marketing, business development traction, and partnerships?",
    type: "radio",
    answerQ: function() {
      let values = [
        {
          title: "Good",
          img: "a411.svg"
        },
        {
          title: "Solid",
          img: "b41.svg"
        },
        {
          title: "Strong",
          img: "c41.svg"
        },
        {
          title: "Perfect",
          img: "d41.svg"
        }
      ];
      let form = document.createElement("form");
      form.setAttribute("class", "listenTo");
      form.setAttribute("id", "strength");
      // let divAnswer = document.querySelector("#answer");
      // divAnswer.removeAttribute("class", "addGrid");
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
        let divWrapperP = document.createElement("div");
        let nameInput = document.createElement("div");
        let img = document.createElement("img");
        nameInput.style.display = "inline";
        divWrapperP.setAttribute("class", "btnRadioInlineComp");
        nameInput.textContent = value.title;

        img.setAttribute("class", "imgInline");
        img.setAttribute("src", "img/" + value.img);
        divWrapperP.appendChild(nameInput);
        divWrapperP.appendChild(img);
        // nameInput.appendChild(img);
        form.appendChild(divWrapper);
        label.appendChild(theInput);
        label.appendChild(divWrapperP);
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
    txt: "How much more investment capital do you need?",
    type: "input",
    answerQ: function() {
      // let thePTitle = document.createElement("p");
      // thePTitle.innerHTML = "You need this more money";
      let theDiv = document.createElement("div");
      let theInput = document.createElement("input");
      let theLabel = document.createElement("label");
      theDiv.setAttribute("id", "roundInputDiv");
      theLabel.setAttribute("for", "investment");
      theInput.setAttribute("type", "number");
      theInput.setAttribute("id", "addInvestment");
      theDiv.setAttribute("class", "round");
      theInput.setAttribute("placeholder", "Type your number here");
      // theDiv.appendChild(thePTitle);
      let dollarSign = document.createElement("span");
      dollarSign.setAttribute("color", "black");
      dollarSign.innerText = "$";
      theDiv.appendChild(theInput);
      theDiv.appendChild(dollarSign);
      // answer.appendChild(pTitle);
      // theInput.appendChild(span);
      return theDiv;
    },
    canvasForChart: null,
    userAnswer: null
  },

  {
    id: 9,
    question: "Positive and negative factors",
    txt:
      "Are there any factors that may significantly affect your revenue in the future?",
    type: "radio",
    answerQ: function() {
      let values = ["Positive", "Negative"];
      let form = document.createElement("form");
      form.setAttribute("class", "listenTo");
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

        // console.log("theInput", theInput);
      });
      return form;
    },
    canvasForChart: null,
    userAnswer: null
  }
];

const questionTitle = document.querySelector("#question");
const questionText = document.querySelector("#questionText");
const answer = document.querySelector("#answer");
const wrapForCanvas = document.querySelector("#chartPlaceHolder");
let currentQuestionIndex = 0;

let viewWidth = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0
);
console.log({ viewWidth });

function setNextBtnDisabled(bool) {
  document.getElementById("next_button").disabled = bool;
}

function insertIntoDOM() {
  document.querySelector("#prev_button").style.display = "none";

  questionTitle.textContent = questions[currentQuestionIndex].question;
  questionText.textContent = questions[currentQuestionIndex].txt;

  answer.appendChild(questions[currentQuestionIndex].answerQ());

  wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());

  document.getElementById("prev_button").addEventListener("click", function() {
    prevElement();
  });
  document.getElementById("next_button").addEventListener("click", function() {
    nextElement();
  });
}

function saveRadioAnswer() {
  let input = answer.querySelector("input");
  let radioName = input.getAttribute("name");
  let radioValue = getRadioCheckedValue(radioName);
  questions[currentQuestionIndex].userAnswer = radioValue[0];
  questions[currentQuestionIndex].userAnswerIndex = radioValue[1];
}

function listenForSliderChange() {
  let slider = document.querySelector('input[type="range"]');
  slider.addEventListener("change", function() {
    getValue();
  });
}

function typeRangeChart() {
  wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());
  let slider = document.querySelector("input[type=range]");
  slider.addEventListener("change", function() {
    getValue();
  });
}

function valueForEight() {
  createInputForInvestment();
  answer.querySelector("#addInvestment").addEventListener("keyup", function() {
    if (answer.querySelector("#addInvestment").value.length) {
      setNextBtnDisabled(false);
      getValueForInvestment();

      document.querySelector("#comparison").classList.remove("hide");
      incomeVSinvestments();
    } else {
      setNextBtnDisabled(true);
    }
  });
}

function saveInputAnswer() {
  let inputValue = answer.querySelector("input").value;
  questions[currentQuestionIndex].userAnswer = inputValue;
}

function inputAnswerInsert() {
  if (questions[currentQuestionIndex].type == "input") {
    answer.querySelector("input").value =
      questions[currentQuestionIndex].userAnswer;
    if (questions[currentQuestionIndex].id == 8) {
      getValueForInvestment();
      document.querySelector("#comparison").classList.remove("hide");
      incomeVSinvestments();
    }
  }
}

function rangeAnswerInsert() {
  if (questions[currentQuestionIndex].type == "range") {
    let slider = document.querySelector("input[type=range]");
    slider.value = questions[currentQuestionIndex].userAnswer;
    getValue();
  }
}

function radioAnswerInsert() {
  if (questions[currentQuestionIndex].type == "radio") {
    if (questions[currentQuestionIndex].id !== 9) {
      let allRadios = answer.querySelectorAll("input");
      let radioArr = Array.prototype.slice.call(allRadios);
      for (let u = 0; u < radioArr.length; u++) {
        if (radioArr[u].value == questions[currentQuestionIndex].userAnswer) {
          radioArr[u].checked = true;
        }
      }
      if (viewWidth > 699) {
        showAnimation(questions[currentQuestionIndex].userAnswer);
      }
    } else {
      // // if (questions[currentQuestionIndex].id == 9) {
      // //   // document.querySelector("#hiddenDivFactors").style.display = "block";
      // let divForFactors = document.querySelector("#hiddenDivFactors");
      // answer.appendChild(divForFactors);
      // ifLastElement();
      // // }
      if (
        questions[currentQuestionIndex].userAnswer ||
        questions[currentQuestionIndex].userAnswer == 0
      ) {
        document.querySelector("#submit").style.display = "block";

        let divForFactors = document.getElementById("divForFactors");
        if (!divForFactors) {
          divForFactors = document.createElement("div");
          divForFactors.setAttribute("id", "divForFactors");
          divForFactors.setAttribute("class", "hiddenDivFactors");
        }
        // let divForFactors = document.createElement("div");
        // divForFactors.setAttribute("class", "hiddenDivFactors");
        {
          if (questions[currentQuestionIndex].userAnswer == 100) {
            document.querySelector("input[value=Positive]").checked = true;
            displayPositiveFactors(divForFactors);
          } else {
            document.querySelector("input[value=Negative]").checked = true;
            displayNegativeFactors(divForFactors);
          }
        }
      }
      // }
    }
  }
}

function disableForInput() {
  if (questions[currentQuestionIndex].type == "input") {
    answer.querySelector("input").addEventListener("keyup", function() {
      if (answer.querySelector("input").value.length) {
        setNextBtnDisabled(false);
      } else {
        setNextBtnDisabled(true);
      }
    });
  }
}
function disableForRadio() {
  if (
    questions[currentQuestionIndex].type == "radio" &&
    !questions[currentQuestionIndex].userAnswer
  ) {
    setNextBtnDisabled(true);
  }
}

function eventlistenerForRadio() {
  if (questions[currentQuestionIndex].id !== 9) {
    console.log("eventlistener runs");
    document.querySelector(".listenTo").addEventListener("click", function() {
      let allRadios = document.querySelectorAll("input[type=radio]");

      for (let i = 0; i < allRadios.length; i++) {
        if (allRadios[i].checked == true) {
          let radioValue = allRadios[i].value;
          questions[currentQuestionIndex].answer = radioValue;
          console.log({ radioValue });
          if (questions[currentQuestionIndex].id !== 9) {
            if (viewWidth > 699) {
              console.log("bigger than 410 and that is why should run");
              showAnimation(radioValue);
            }
          }
        }
      }
      setNextBtnDisabled(false);
    });
  }
}

function showAnimation(value) {
  console.log("animation run");
  document.querySelector(".divForFigure").innerHTML = "";
  if (value == "Minimum of 3 years of work experience each") {
    console.log({ value });

    let figure = document.createElement("img");
    figure.setAttribute("src", "img/b1.svg");
    figure.setAttribute("class", "bigFigure");
    document.querySelector(".divForFigure").appendChild(figure);
    TweenMax.fromTo(
      figure,
      1,
      {
        x: 300,
        y: 30
      },
      {
        x: 200,
        y: 30,
        rotation: -20,
        ease: Power3.easeOut
      },
      0.01
    );
  }
  if (value == "Fresh out of school and working towards a solution") {
    console.log({ value });
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/a1.svg");
    figure.setAttribute("class", "bigFigure");
    document.querySelector(".divForFigure").appendChild(figure);
    TweenMax.fromTo(
      figure,
      1,
      {
        x: 300,
        y: 30
      },
      {
        x: 200,
        y: 30,
        rotation: -20,
        ease: Power3.easeOut
      },
      0.01
    );
  }
  if (value == "Minimum of 7 years of experience in your specific field each") {
    console.log({ value });
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/c1.svg");
    figure.setAttribute("class", "bigFigure");
    document.querySelector(".divForFigure").appendChild(figure);
    TweenMax.fromTo(
      figure,
      1,
      {
        x: 300,
        y: 30
      },
      {
        x: 200,
        y: 30,
        rotation: -20,
        ease: Power3.easeOut
      },
      0.01
    );
  }
  if (
    value == "Subject matter experts with published thoughts on your industry"
  ) {
    console.log({ value });
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/d1.svg");
    figure.setAttribute("class", "bigFigure");
    document.querySelector(".divForFigure").appendChild(figure);
    TweenMax.fromTo(
      figure,
      1,
      {
        x: 300,
        y: 30
      },
      {
        x: 200,
        y: 30,
        rotation: -20,
        ease: Power3.easeOut
      },
      0.01
    );
  }
  if (value == "Sustainable") {
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/a31.svg");
    figure.setAttribute("class", "bigFigure");
    figure.style.top = "-10em";
    figure.style.paddingTop = "7em";
    document.querySelector(".divForFigure").appendChild(figure);
    TweenMax.fromTo(
      figure,
      1.5,

      {
        x: 100,
        y: 400,
        opacity: 0.1,
        scale: 0.3
      },
      {
        x: 100,
        y: 150,
        // rotation: -20,
        ease: Circ.easeOut,
        opacity: 1,
        scale: 0.8
      },
      0.01
    );
  }
  if (value == "Growing") {
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/b32.svg");
    figure.setAttribute("class", "bigFigure");
    document.querySelector(".divForFigure").appendChild(figure);
    TweenMax.fromTo(
      figure,
      1.5,

      {
        x: 100,
        y: 400,
        opacity: 0.1,
        scale: 0.3
      },
      {
        x: 100,
        y: 150,
        // rotation: -20,
        ease: Circ.easeOut,
        opacity: 1,
        scale: 1.1
      },
      0.01
    );
  }
  if (value == "Spectacular") {
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/c33.svg");
    figure.setAttribute("class", "bigFigure");
    document.querySelector(".divForFigure").appendChild(figure);
    TweenMax.fromTo(
      figure,
      1.5,

      {
        x: 100,
        y: 400,
        opacity: 0.1,
        scale: 0.3
      },
      {
        x: 100,
        y: 150,
        // rotation: -20,
        ease: Circ.easeOut,
        opacity: 1,
        scale: 1.3
      },
      0.01
    );
  }
  if (value == "Almost limitless") {
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/d34.svg");
    figure.setAttribute("class", "bigFigure");
    // figure.style.paddingBottom = "45%";
    document.querySelector(".divForFigure").appendChild(figure);
    TweenMax.fromTo(
      figure,
      1.5,

      {
        x: 100,
        y: 400,
        opacity: 0.1,
        scale: 0.3
      },
      {
        x: 100,
        y: 150,
        // rotation: -20,
        ease: Elastic.easeOut.config(1, 0.3),
        opacity: 1,
        scale: 1.5
      },
      0.01
    );
  }
  if (value == "There are many similar products/technologies") {
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/a23.svg");
    figure.setAttribute("class", "bigFigureVehicle");
    // divForFigure.appendChild(figure);
    // answer.appendChild(divForFigure);

    document.querySelector(".divForFigure").appendChild(figure);
    let vehicleDrive = new TimelineMax({ repeat: -1, force3D: true });
    // bikeDrive.to(figure, 22, { left: "100%", ease: Linear.easeNone }, 1);
    let xTo = document.querySelector(".box").offsetWidth + figure.offsetWidth;
    vehicleDrive.fromTo(
      figure,
      4,
      {
        x: -200,
        y: 150
      },
      {
        x: xTo,
        y: 150,

        ease: Linear.easeOut
      }
    );
    // .to(figure, 0.1, { x: "+=10", yoyo: true, repeat: -1 })
    // .to(figure, 0.1, { x: "-=10", yoyo: true, repeat: -1 });
    // TweenMax.to(figure, 0.1, { x: "+=20", yoyo: true, repeat: -1 });
    // TweenMax.to(figure, 0.1, { x: "-=20", yoyo: true, repeat: -1 });
  }
  if (value == "There are few similar products/technologies") {
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/b23.svg");
    figure.setAttribute("class", "bigFigureVehicle");
    document.querySelector(".divForFigure").appendChild(figure);
    let vehicleDrive = new TimelineMax({ repeat: -1, force3D: true });
    let xTo = document.querySelector(".box").offsetWidth + figure.offsetWidth;
    vehicleDrive.fromTo(
      figure,
      3,
      {
        x: -800,
        y: 150
      },
      {
        x: xTo,
        y: 150,
        // rotation: -20,
        // left: "100%",
        ease: Linear.easeOut
      }
    );
  }
  if (value == "There are only 1-3 similar products/technologies") {
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/c23.svg");
    figure.setAttribute("class", "bigFigureVehicle");
    document.querySelector(".divForFigure").appendChild(figure);
    let vehicleDrive = new TimelineMax({ repeat: -1, force3D: true });
    let xTo = document.querySelector(".box").offsetWidth + figure.offsetWidth;
    vehicleDrive.fromTo(
      figure,
      1,
      {
        x: -800,
        y: 150
      },
      {
        x: xTo,
        y: 150,
        // rotation: -20,
        // left: "100%",
        ease: Linear.easeOut
      },
      0.01
    );
  }
  if (value == "It is unique product/technologies") {
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/d23.svg");
    figure.setAttribute("class", "bigFigureVehicle");
    document.querySelector(".divForFigure").appendChild(figure);
    let vehicleDrive = new TimelineMax({ repeat: -1, force3D: true });
    let xTo = document.querySelector(".box").offsetWidth + figure.offsetWidth;
    // bikeDrive.to(figure, 22, { left: "100%", ease: Linear.easeNone }, 1);
    vehicleDrive.fromTo(
      figure,
      1,
      {
        x: -800,
        y: 200
      },
      {
        x: xTo,
        y: -300,
        // rotation: 360,
        // left: "100%",
        ease: Linear.easeOut
      },
      0.01
    );
  }
  if (value == "Crowded space") {
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/d55.svg");
    figure.setAttribute("class", "bigFigureBounce");
    document.querySelector(".divForFigure").appendChild(figure);
    TweenMax.fromTo(
      figure,
      1.5,

      {
        x: 50,
        y: 400,
        opacity: 0.1,
        scale: 0.3
      },
      {
        x: 0,
        y: 150,
        // rotation: -20,
        ease: Bounce.easeOut,
        opacity: 1,
        scale: 1.1
      },
      0.01
    );
  }
  if (value == "Competitive") {
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/b58.svg");
    figure.setAttribute("class", "bigFigureBounce");
    // figure.style.paddingTop = "5%";
    document.querySelector(".divForFigure").appendChild(figure);
    TweenMax.fromTo(
      figure,
      1.5,

      {
        x: 50,
        y: 400,
        opacity: 0.1,
        scale: 0.3
      },
      {
        x: 0,
        y: 150,
        // rotation: -20,
        ease: Bounce.easeOut,
        opacity: 1,
        scale: 1.1
      },
      0.01
    );
  }
  if (value == "Single competitor") {
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/a51.svg");
    figure.setAttribute("class", "bigFigureBounce");
    document.querySelector(".divForFigure").appendChild(figure);
    TweenMax.fromTo(
      figure,
      1.5,

      {
        x: 50,
        y: 400,
        opacity: 0.1,
        scale: 0.3
      },
      {
        x: 0,
        y: 150,
        // rotation: -20,
        ease: Bounce.easeOut,
        opacity: 1,
        scale: 1.1
      },
      0.01
    );
  }
  if (value == "No competitors") {
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/a5.svg");
    figure.setAttribute("class", "bigFigureBounce");
    document.querySelector(".divForFigure").appendChild(figure);
    TweenMax.fromTo(
      figure,
      1.5,

      {
        x: 50,
        y: 400,
        opacity: 0.1,
        scale: 0.3
      },
      {
        x: 0,
        y: 150,
        // rotation: -20,
        ease: Bounce.easeOut,
        opacity: 1,
        scale: 1.1
      },
      0.01
    );
  }
  if (value == "Good") {
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/a411.svg");
    figure.setAttribute("class", "bigFigureBounceSmall");
    figure.style.paddingTop = "8%";
    // figure.style.top = "-10em";
    document.querySelector(".divForFigure").appendChild(figure);
    TweenMax.fromTo(
      figure,
      1.5,

      {
        x: 100,
        y: 400
      },
      {
        x: 100,
        y: 150,
        // rotation: -20,
        ease: Circ.easeOut
        // opacity: 1,
      },
      0.01
    );
  }
  if (value == "Solid") {
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/b41.svg");
    figure.setAttribute("class", "bigFigureBounceSmall");
    figure.style.paddingTop = "8%";
    document.querySelector(".divForFigure").appendChild(figure);
    TweenMax.fromTo(
      figure,
      1,

      {
        x: 100,
        y: 400
      },
      {
        x: 100,
        y: 150,
        // rotation: -20,
        ease: Circ.easeOut
      },
      0.01
    );
  }
  if (value == "Strong") {
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/c41.svg");
    figure.setAttribute("class", "bigFigureBounceSmall");
    figure.style.paddingTop = "8%";
    document.querySelector(".divForFigure").appendChild(figure);
    TweenMax.fromTo(
      figure,
      1.5,

      {
        x: 100,
        y: 400
      },
      {
        x: 100,
        y: 150,
        // rotation: -20,
        ease: Elastic.easeOut.config(1, 0.3)
      },
      0.01
    );
  }
  if (value == "Perfect") {
    let figure = document.createElement("img");
    figure.setAttribute("src", "img/d41.svg");
    figure.setAttribute("class", "bigFigureBounceSmall");
    figure.style.paddingTop = "5em";
    document.querySelector(".divForFigure").appendChild(figure);
    TweenMax.fromTo(
      figure,
      1,

      {
        x: 100,
        y: 400
        // opacity: 0.1,
        // scale: 0.3
      },
      {
        x: 100,
        y: 150,
        // rotation: -20,
        ease: Elastic.easeOut.config(1, 0.3)
        // opacity: 1,
        // scale: 1.5
      },
      0.01
    );
  }
}

function disableForRange() {
  if (questions[currentQuestionIndex].type == "range") {
    if (answer.querySelector("input").value == 1) setNextBtnDisabled(true);
  }
}

function nextElement() {
  document.querySelector("#comparison").classList.add("hide");
  document.querySelector("#prev_button").style.display = "inline-block";

  if (questions[currentQuestionIndex].type == "radio") {
    saveRadioAnswer();
  }
  if (questions[currentQuestionIndex].type == "input") {
    saveInputAnswer();
  }

  // Clear
  answer.textContent = "";
  wrapForCanvas.innerHTML = "";

  // Get the next element and make it current
  let currentEl = nextItem();

  // Insert current question
  questionTitle.textContent = currentEl.question;
  questionText.innerHTML = currentEl.txt;
  answer.appendChild(questions[currentQuestionIndex].answerQ());
  createDivForFigure();

  // Start listener for radio
  if (questions[currentQuestionIndex].type == "radio") {
    console.log("it is radio listen for events");
    eventlistenerForRadio();
  }

  // Start listener for slider
  if (questions[currentQuestionIndex].type == "range") {
    listenForSliderChange();
  }

  if (
    questions[currentQuestionIndex].canvasForChart !== null &&
    questions[currentQuestionIndex].id !== 9
  ) {
    wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());
    document.querySelector("#chartPlaceHolder").style.height = "40vh";
  } else {
    document.querySelector("#chartPlaceHolder").style.height = "0px";
  }

  if (questions[currentQuestionIndex].id == 8) {
    valueForEight();
  }

  if (
    questions[currentQuestionIndex].id == 3 ||
    questions[currentQuestionIndex].id == 4
  ) {
    answer.classList.add("addGrid");
  } else {
    answer.classList.remove("addGrid");
  }

  if (questions[currentQuestionIndex].id !== 9) {
    document.querySelector("#next_button").textContent = "Next";
  }
  // If saved answers already exists - insert
  if (questions[currentQuestionIndex].userAnswer) {
    insertSavedAnswers();
  }

  disabledIfEmpty();
  timeline(questions);
  if (questions[currentQuestionIndex].id == 9) {
    // let divForFactors = document.createElement("div");
    // answer.appendChild(divForFactors);
    ifLastElement();
  }
}

function prevElement() {
  document.querySelector("#comparison").classList.add("hide");
  answer.textContent = "";
  wrapForCanvas.innerHTML = "";

  let currentEl = prevItem();
  questionTitle.textContent = currentEl.question;
  questionText.innerHTML = currentEl.txt;

  answer.appendChild(questions[currentQuestionIndex].answerQ());
  if (questions[currentQuestionIndex].id !== 9) {
    console.log("it is not 9 and that is why should be next");
    document.querySelector("#submit").style.display = "none";
    document.querySelector("#next_button").style.display = "inline-block";
    document.querySelector("#next_button").textContent = "Next";
  }
  if (questions[currentQuestionIndex].type == "range") {
    typeRangeChart();
  }

  timeline(questions);
  createDivForFigure();
  disabledIfEmpty();

  if (
    questions[currentQuestionIndex].id == 3 ||
    questions[currentQuestionIndex].id == 4
  ) {
    answer.classList.add("addGrid");
  } else {
    answer.classList.remove("addGrid");
  }

  if (questions[currentQuestionIndex].userAnswer) {
    insertSavedAnswers();
  }
  if (questions[currentQuestionIndex].id == 9) {
    ifLastElement();
  }

  if (questions[currentQuestionIndex].id == 1) {
    document.querySelector("#prev_button").style.display = "none";
    wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());
    getValueForBarChart();
    answer.querySelector("input").addEventListener("blur", function() {
      getValueForBarChart();
    });
  }
  if (questions[currentQuestionIndex].id == 8) {
    valueForEight();

    answer.querySelector("#addInvestment").addEventListener("blur", function() {
      getValueForInvestment();
    });
  }
  if (questions[currentQuestionIndex].type == "radio") {
    eventlistenerForRadio();
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

function createDivForFigure() {
  if (
    questions[currentQuestionIndex].id == 3 ||
    questions[currentQuestionIndex].id == 4 ||
    questions[currentQuestionIndex].id == 5 ||
    questions[currentQuestionIndex].id == 6 ||
    questions[currentQuestionIndex].id == 7
  ) {
    let figureDiv = document.createElement("div");
    figureDiv.setAttribute("class", "divForFigure");
    answer.appendChild(figureDiv);
  }
}

function insertSavedAnswers() {
  inputAnswerInsert();
  radioAnswerInsert();
  rangeAnswerInsert();
}

function ifLastElement() {
  // <div id="hiddenDivFactors" class="hiddenDivFactors hidden"></div>

  let divForFactors = document.getElementById("divForFactors");
  if (!divForFactors) {
    divForFactors = document.createElement("div");
    divForFactors.setAttribute("id", "divForFactors");
    divForFactors.setAttribute("class", "hiddenDivFactors");
  }

  // document.querySelector("#hiddenDivFactors").classList.remove("hidden");
  document.querySelector("#chartPlaceHolder").style.display = "none";
  if (questions[8].userAnswer) {
    document.getElementById("next_button").style.display = "none";
    document.getElementById("submit").style.display = "inline-block";
  }

  if (questions[currentQuestionIndex].id == 9) {
    document.querySelector("#next_button").textContent = "Submit";

    let factorsRadio = document.getElementsByName("factors");

    factorsRadio[0].addEventListener("click", function() {
      // document.querySelector(".hiddenDivFactors").innerHTML = "";
      divForFactors.innerHTML = "";

      let input = answer.querySelector("input");

      let radioName = input.getAttribute("name");

      let radioValue = getRadioCheckedValue(radioName);

      if (radioValue[0] == "Positive") {
        radioValue = 100;
        questions[currentQuestionIndex].userAnswer = radioValue;
        displayPositiveFactors(divForFactors);
      }

      this.checked = true;

      document.getElementById("next_button").style.display = "none";

      document.getElementById("submit").style.display = "inline-block";
    });
    factorsRadio[1].addEventListener("click", function() {
      // document.querySelector(".hiddenDivFactors").innerHTML = "";
      divForFactors.innerHTML = "";

      let input = answer.querySelector("input");

      let radioName = input.getAttribute("name");

      let radioValue = getRadioCheckedValue(radioName);

      if (radioValue[0] == "Negative") {
        radioValue = "0";
        questions[currentQuestionIndex].userAnswer = radioValue;

        displayNegativeFactors(divForFactors);
      }

      // console.log("radioValue", radioValue);
      this.checked = true;

      document.getElementById("next_button").style.display = "none";

      document.getElementById("submit").style.display = "inline-block";
    });
  } else {
    // insertSavedAnswers();
    document.getElementById("next_button").style.display = "inline-block";
    document.getElementById("submit").style.display = "none";
  }
}

function getRadioCheckedValue(radio_name) {
  let formToCheck = document.querySelector(".listenTo");
  let oRadio = formToCheck.elements[radio_name];

  for (let u = 0; u < oRadio.length; u++) {
    if (oRadio[u].checked) {
      // console.log("u index", u);
      return [oRadio[u].value, u];
    }
  }
  // console.log("radio value returned?", oRadio[u].value);
  return "";
}

function displayPositiveFactors(divForFactors) {
  // let divForFactors = document.querySelector(".hiddenDivFactors");
  // divForFactors.setAttribute("class", "divPositive");
  let values = [
    "Good reviews",
    "Strong Partners",
    "Stable revenue",
    "Distribution channels",
    "Traction"
  ];
  let divForReviews = document.createElement("div");
  divForReviews.setAttribute("class", "iconsDiv");
  let goodReviews = document.createElement("p");
  goodReviews.innerHTML = values[0];
  let reviewImg = document.createElement("img");
  reviewImg.setAttribute("src", "img/icons/reviews.png");
  divForReviews.appendChild(goodReviews);
  divForReviews.appendChild(reviewImg);
  divForFactors.appendChild(divForReviews);

  TweenMax.fromTo(
    divForReviews,
    0.5,
    {
      opacity: 0,
      scale: 0.5
    },
    {
      // x: -100,
      // y: 100,
      ease: Linear.easeOut,
      opacity: 1,
      scale: 1.1,
      delay: 0.01
    },
    0.01
  );
  let partnersDiv = document.createElement("div");
  partnersDiv.setAttribute("class", "iconsDiv");
  let strongPartners = document.createElement("p");
  strongPartners.innerHTML = values[1];
  let partnerImg = document.createElement("img");
  partnerImg.setAttribute("src", "img/icons/partners.png");
  partnersDiv.appendChild(strongPartners);
  partnersDiv.appendChild(partnerImg);
  divForFactors.appendChild(partnersDiv);
  TweenMax.fromTo(
    partnersDiv,
    0.5,
    {
      opacity: 0,
      scale: 0.5
    },
    {
      // x: -50,
      // y: 100,
      ease: Linear.easeOut,
      opacity: 1,
      scale: 1.1,
      delay: 0.6
    },
    1
  );
  let revenueDiv = document.createElement("div");
  revenueDiv.setAttribute("class", "iconsDiv");
  let stableRevenue = document.createElement("p");
  stableRevenue.innerHTML = values[2];
  let revenueImg = document.createElement("img");
  revenueImg.setAttribute("src", "img/icons/revenue.png");
  revenueDiv.appendChild(stableRevenue);
  revenueDiv.appendChild(revenueImg);
  divForFactors.appendChild(revenueDiv);
  TweenMax.fromTo(
    revenueDiv,
    0.5,
    {
      opacity: 0,
      scale: 0.5
    },
    {
      // x: 0,
      // y: 100,
      ease: Linear.easeOut,
      opacity: 1,
      scale: 1.1,
      delay: 1.1
    },
    1
  );
  let divForChannels = document.createElement("div");
  divForChannels.setAttribute("class", "iconsDiv");
  let channels = document.createElement("p");
  channels.innerHTML = values[3];
  let channelsImg = document.createElement("img");
  channelsImg.setAttribute("src", "img/icons/channels.png");
  divForChannels.appendChild(channels);
  divForChannels.appendChild(channelsImg);
  divForFactors.appendChild(divForChannels);
  TweenMax.fromTo(
    divForChannels,
    0.5,
    {
      opacity: 0,
      scale: 0.5
    },
    {
      // x: 50,
      // y: 100,
      ease: Linear.easeOut,
      opacity: 1,
      scale: 1.1,
      delay: 1.6
    },
    1
  );
  // let tractionDiv = document.createElement("div");
  // tractionDiv.setAttribute("class", "iconsDiv");
  // let tractions = document.createElement("p");
  // tractions.innerHTML = values[4];
  // let tractionImg = document.createElement("img");
  // tractionImg.setAttribute("src", "img/icons/traction.png");
  // tractionDiv.appendChild(tractions);
  // tractionDiv.appendChild(tractionImg);
  // divForFactors.appendChild(tractionDiv);
  // TweenMax.fromTo(
  //   tractionDiv,
  //   1,
  //   {
  //     opacity: 0,
  //     scale: 0.5
  //   },
  //   {
  //     // x: 100,
  //     // y: 100,
  //     ease: Linear.easeOut,
  //     opacity: 1,
  //     scale: 1.1,
  //     delay: 4
  //   },
  //   10
  // );

  answer.appendChild(divForFactors);
}

function displayNegativeFactors(divForFactors) {
  // let divForFactors = document.querySelector(".hiddenDivFactors");
  // divForFactors.setAttribute("class", "divPositive");
  let values = [
    "Big debt",
    "Lack of experience",
    "Defective product",
    "Lack of financial planning",
    "Low margins"
  ];
  let divForDebt = document.createElement("div");
  divForDebt.setAttribute("class", "iconsDiv");
  let bigDebt = document.createElement("p");
  bigDebt.innerHTML = values[0];
  let iconImg = document.createElement("img");
  iconImg.setAttribute("src", "img/icons/debt.png");

  divForDebt.appendChild(bigDebt);
  divForDebt.appendChild(iconImg);
  divForFactors.appendChild(divForDebt);
  TweenMax.fromTo(
    divForDebt,
    0.5,
    {
      opacity: 0,
      scale: 0.5
    },
    {
      ease: Linear.easeOut,
      opacity: 1,
      scale: 1.1,
      delay: 0.01
    },
    0.01
  );
  let divForExperience = document.createElement("div");
  divForExperience.setAttribute("class", "iconsDiv");
  let noExperience = document.createElement("p");
  noExperience.innerHTML = values[1];
  let expImg = document.createElement("img");
  expImg.setAttribute("src", "img/icons/lack.png");
  divForExperience.appendChild(noExperience);
  divForExperience.appendChild(expImg);
  divForFactors.appendChild(divForExperience);
  TweenMax.fromTo(
    divForExperience,
    0.5,
    {
      opacity: 0,
      scale: 0.5
    },
    {
      ease: Linear.easeOut,
      opacity: 1,
      scale: 1.1,
      delay: 0.6
    },
    1
  );
  let divForDefective = document.createElement("div");
  divForDefective.setAttribute("class", "iconsDiv");
  let defective = document.createElement("p");
  defective.innerHTML = values[2];
  let defectiveImg = document.createElement("img");
  defectiveImg.setAttribute("src", "img/icons/defective.png");
  divForDefective.appendChild(defective);
  divForDefective.appendChild(defectiveImg);
  divForFactors.appendChild(divForDefective);
  TweenMax.fromTo(
    divForDefective,
    0.5,
    {
      opacity: 0,
      scale: 0.5
    },
    {
      ease: Linear.easeOut,
      opacity: 1,
      scale: 1.1,
      delay: 1.1
    },
    1
  );
  // let divForPlan = document.createElement("div");
  // divForPlan.setAttribute("class", "iconsDiv");
  // let finPlan = document.createElement("p");
  // finPlan.innerHTML = values[3];
  // let planImg = document.createElement("img");
  // planImg.setAttribute("src", "img/icons/lackOfPlanning.png");
  // divForPlan.appendChild(finPlan);
  // divForPlan.appendChild(planImg);
  // divForFactors.appendChild(divForPlan);
  // TweenMax.fromTo(
  //   divForPlan,
  //   1,
  //   {
  //     opacity: 0,
  //     scale: 0.5
  //   },
  //   {
  //     ease: Linear.easeOut,
  //     opacity: 1,
  //     scale: 1.1,
  //     delay: 3
  //   },
  //   8
  // );
  let marginDiv = document.createElement("div");
  marginDiv.setAttribute("class", "iconsDiv");
  let lowMargin = document.createElement("p");
  lowMargin.innerHTML = values[4];
  let marginImg = document.createElement("img");
  marginImg.setAttribute("src", "img/icons/lowMargins.png");
  marginDiv.appendChild(lowMargin);
  marginDiv.appendChild(marginImg);
  divForFactors.appendChild(marginDiv);
  TweenMax.fromTo(
    marginDiv,
    0.5,
    {
      opacity: 0,
      scale: 0.5
    },
    {
      ease: Linear.easeOut,
      opacity: 1,
      scale: 1.1,
      delay: 1.6
    },
    1
  );
  answer.appendChild(divForFactors);
}

function disabledIfEmpty() {
  setNextBtnDisabled(true);
  disableForInput();
  disableForRadio();
  disableForRange();

  if (questions[currentQuestionIndex].userAnswer) {
    setNextBtnDisabled(false);
  }
}

function createInputForInvestment() {
  console.log("createInputForInvest runs!");
  if (questions[currentQuestionIndex].id == "8") {
    let divIncome = document.createElement("div");
    // let pForIncome = document.createElement("p");
    // pForIncome.setAttribute("class", "pIncome");
    // pForIncome.innerHTML = "Your yearly income";
    divIncome.setAttribute("class", "round");
    divIncome.setAttribute("id", "roundBig");
    // document.querySelector(".box").appendChild(pForIncome);
    // let additionalInvestement = document.createElement("div");
    // additionalInvestement.setAttribute("class", "round");
    // additionalInvestement.setAttribute("id", "investment");
    // let additonalInput = document.createElement("p");
    // additonalInput.innerHTML = value;
    let yearlyIncome = document.createElement("p");
    yearlyIncome.setAttribute("class", "roundInput");
    yearlyIncome.innerHTML =
      "Annual income is " + questions[0].userAnswer * 12 + "$";
    divIncome.appendChild(yearlyIncome);
    // additionalInvestement.appendChild(additonalInput);
    answer.appendChild(divIncome);
    // answer.appendChild(additionalInvestement);
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

  // console.log("answer in switch", questions[currentQuestionIndex].userAnswer);
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

function timeline(questions) {
  let timelineInput = document.querySelector("#timeline");
  let allQuestionsDigit = questions.length;
  let currentQuestionDigit = questions[currentQuestionIndex].id;
  timelineInput.textContent = currentQuestionDigit + "/" + allQuestionsDigit;
}

function init() {
  timeline(questions);
  insertIntoDOM();

  document.getElementById("submit").addEventListener("click", function() {
    document.querySelector("#popUp").style.display = "block";
    // let allOneUserAnswers = collectAllAnswers();
    // console.log("userAnswer", allOneUserAnswers);
    document.getElementById("prev_button").style.display = "none";
    let finalResult = calculateResult(collectAllAnswers());
    //COMMENT IT OUT
    console.log("final result function", finalResult);
  });

  answer.querySelector("input").addEventListener("keyup", function() {
    // console.log("eventlistener from init!");
    if (answer.querySelector("input").value.length) {
      setNextBtnDisabled(false);
      getValueForBarChart();
    } else {
      // console.log("it is disabled!");
      setNextBtnDisabled(true);
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
  buildChart(newValue);
  questions[currentQuestionIndex].userAnswer = newValue;
}

function buildChart(value) {
  let slider = document.querySelector("input[type=range]");
  document.querySelector("#chartPlaceHolder").style.height = "40vh";
  let descriptionOfGrowth = document.querySelector("#descriptionOfGrowth");
  // console.log("lets see what new value is");
  if (value <= 25) {
    // console.log("value is <25", value);
    createChart(
      "growthChart",
      "line",
      ["Now", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
      dataSetAdequate,
      "rgba(241, 90, 34, 1)"
    );
    // slider.classList.remove = ".slider::-webkit-slider-thumb";
    slider.style.backgroundColor = "rgba(241, 90, 34, .5)";
    descriptionOfGrowth.textContent = "You expect adequate growth";
  } else if (value > 25 && value <= 50) {
    // console.log("value is <50", value);
    createChart(
      "growthChart",
      "line",
      ["Now", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
      dataSetAverage,
      "rgba(245, 230, 83, 1)"
    );
    slider.style.backgroundColor = "rgba(245, 230, 83, .5)";
    descriptionOfGrowth.textContent = "You expect average growth";
  } else if (value > 50 && value <= 75) {
    // console.log("value is <75", value);
    createChart(
      "growthChart",
      "line",
      ["Now", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],

      dataSetAboveAverage,
      "rgba(3, 201, 169, 1)"
    );
    slider.style.backgroundColor = "rgba(3, 201, 169, .5)";
    descriptionOfGrowth.textContent = "You expect very good growth";
  } else {
    // console.log("value is <100", value);
    createChart(
      "growthChart",
      "line",
      ["Now", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
      dataSetAmazing,
      "rgba(0, 230, 64, 1)"
    );
    slider.style.backgroundColor = "rgba(0, 230, 64, .5)";
    descriptionOfGrowth.textContent = "You expect amazing growth";
  }
  setNextBtnDisabled(false);
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
          label: "Average growth",
          data: [0, 60, 100, 110, 130, 150],
          backgroundColor: "rgba(63,	152,	255,.3)	",
          // borderColor: 'rgba(19, 247, 228,1)',
          borderWidth: 2
          // bevelWidth: 3,
          // bevelHighlightColor: "rgba(255, 255, 255, 0.75)",
          // bevelShadowColor: "rgba(0, 0, 0, 0.5)"
          // pointBackgroundColor: 'rgba(19, 247, 228,1)',
          // pointBorderColor: 'rgba(19, 247, 228,1)',
          // pointBorderWidth: 5,
        },
        {
          label: "Your growth",
          data: data_of_charts,
          animationSteps: 6000,
          // easing: 'easeInOutElastic',
          backgroundColor: background_color,
          // borderColor: 'rgba(19, 247, 228,1)',
          borderWidth: 2,
          // shadowOffsetX: 3,
          // shadowOffsetY: 3,
          // shadowBlur: 10,
          // shadowColor: "rgba(0, 0, 0, 0.5)",
          // pointBackgroundColor: 'rgba(19, 247, 228,1)',
          // pointBorderColor: 'rgba(19, 247, 228,1)',
          pointBorderWidth: 0
        }
      ]
    },
    options: {
      legend: {
        display: true,
        labels: {
          fontColor: "white",
          fontSize: 15
        }
      },
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
      },
      responsive: true,
      maintainAspectRatio: true
    }
  });
}

function getValueForBarChart() {
  let inputToCheck = document.querySelector("#incomeNumber");
  let theValue = inputToCheck.value;
  // console.log("theValue", theValue);
  theValue = Number(theValue);
  createBarChart(theValue, "incomeChart");
}

function getValueForInvestment() {
  // console.log("it is #8");
  if (questions[currentQuestionIndex].id == 8) {
    let inputToCheck = document.querySelector("#addInvestment");
    let theValue = inputToCheck.value;
    theValue = Number(theValue);

    questions[currentQuestionIndex].userAnswer = theValue;
    // createInputForInvestment(theValue);
  }
}

function createBarChart(value, placeHolder) {
  let barChartIncomeCanvas = document.getElementById(placeHolder);

  let barChart = new Chart(barChartIncomeCanvas, {
    type: "bar",
    data: {
      labels: ["Revenue"],
      datasets: [
        {
          label: "Your revenue",
          data: [value],
          backgroundColor: "blue"
          // bevelWidth: 3,
          // bevelHighlightColor: "rgba(255, 255, 255, 0.75)",
          // bevelShadowColor: "rgba(0, 0, 0, 0.5)"
        },
        {
          label: "Average revenue",

          data: [50000],
          backgroundColor: "green"
          // shadowOffsetX: 3,
          // shadowOffsetY: 3,
          // shadowBlur: 10,
          // shadowColor: "rgba(0, 0, 0, 0.5)",
          // hoverInnerGlowWidth: 20,
          // hoverInnerGlowColor: "rgb(255, 255, 0)",
          // hoverOuterGlowWidth: 20,
          // hoverOuterGlowWidth: "rgb(255, 255, 0)"
        },
        {
          label: "Max revenue",
          data: [100000],
          backgroundColor: "#EEEEEE"
          // shadowOffsetX: 3,
          // shadowOffsetY: 3,
          // shadowBlur: 10,
          // shadowColor: "rgba(0, 0, 0, 0.5)",
          // hoverInnerGlowWidth: 20,
          // hoverInnerGlowColor: "rgb(255, 255, 0)",
          // hoverOuterGlowWidth: 20,
          // hoverOuterGlowWidth: "rgb(255, 255, 0)"
        }
      ]
    },
    options: {
      legend: {
        display: true,
        labels: {
          fontColor: "white",
          fontSize: 15
        }
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
      },
      responsive: true,
      maintainAspectRatio: true
    }
  });
}

// function createInvestmentChart(value, placeHolder) {
//   let barChartIncomeCanvas = document.getElementById(placeHolder);

//   let barChart = new Chart(barChartIncomeCanvas, {
//     type: "bar",
//     data: {
//       labels: ["Additional investments"],
//       datasets: [
//         {
//           label: "Additional investements",
//           data: [value],
//           backgroundColor: "blue"
//         },
//         {
//           label: "Your yearly income",
//           data: [questions[0].userAnswer * 12],
//           backgroundColor: "green"
//         }
//       ]
//     },
//     options: {
//       legend: {
//         display: true
//       },
//       tooltips: {
//         enabled: true
//       },
//       scales: {
//         xAxes: [
//           {
//             display: false,
//             stacked: true,
//             ticks: {
//               beginAtZero: true,
//               stepSize: 10000
//             }
//           }
//         ],
//         yAxes: [
//           {
//             display: false,
//             stacked: true,
//             ticks: {
//               beginAtZero: true,
//               stepSize: 10000
//             }
//           }
//         ]
//       }
//     }
//   });
// }

// function createChartForFactors() {
//   let canvasForLast = questions[8].canvasForChart();
//   let firstCanvas = canvasForLast.theCanvas;
//   // let secondCanvas = canvasForLast.theSecond;
//   wrapForCanvas.appendChild(firstCanvas);
//   document.querySelector("#chartPlaceHolder").style.height = "40vh";
//   new Chart(firstCanvas, {
//     type: "bar",
//     data: {
//       labels: [
//         "Good reviews",
//         "Strong Partners",
//         "Stabel revenue",
//         "Destribution channels",
//         "Traction"
//       ],
//       datasets: [
//         {
//           backgroundColor: [
//             "#3e95cd",
//             "#8e5ea2",
//             "#3cba9f",
//             "#e8c3b9",
//             "#c45850"
//           ],
//           data: [50, 45, 60, 55, 49]
//         }
//       ]
//     },
//     options: {
//       legend: {
//         display: false
//       },
//       title: {
//         display: true,
//         text: "Positive factors"
//       },
//       scales: {
//         xAxes: [
//           {
//             display: true,
//             stacked: false,
//             ticks: {
//               beginAtZero: true,
//               stepSize: 10,
//               suggestedMax: 100
//             }
//           }
//         ],
//         yAxes: [
//           {
//             display: true,
//             stacked: false,
//             ticks: {
//               beginAtZero: true,
//               stepSize: 10,
//               display: false
//             }
//           }
//         ]
//       },
//       responsive: true,
//       maintainAspectRatio: true
//     }
//   });
// }

// function createChartForOtherFactors() {
//   let canvasForLast = questions[8].canvasForChart();
//   let secondCanvas = canvasForLast.theSecond;
//   wrapForCanvas.appendChild(secondCanvas);
//   document.querySelector("#chartPlaceHolder").style.height = "40vh";
//   new Chart(secondCanvas, {
//     type: "bar",
//     data: {
//       labels: [
//         "Big debt",
//         "Not experienced team",
//         "Defective product",
//         "Lack of financial planning",
//         "Low margins"
//       ],
//       datasets: [
//         {
//           backgroundColor: [
//             "#FFA500",
//             "#FFDEAD",
//             "#FF4500",
//             "#CD853F",
//             "#BC8F8F"
//           ],
//           data: [50, 45, 60, 55, 49]
//         }
//       ]
//     },
//     options: {
//       legend: {
//         display: false
//       },
//       title: {
//         display: true,
//         text: "Negative factors"
//       },
//       scales: {
//         xAxes: [
//           {
//             display: true,
//             stacked: false,
//             ticks: {
//               beginAtZero: true,
//               stepSize: 15,
//               suggestedMax: 100
//             }
//           }
//         ],
//         yAxes: [
//           {
//             display: true,
//             stacked: false,
//             ticks: {
//               beginAtZero: true,
//               stepSize: 10,
//               display: false
//             }
//           }
//         ]
//       },
//       responsive: true,
//       maintainAspectRatio: true
//     }
//   });
// }

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
    "of your annual income";

  if (percantageFrom < 50) {
    console.log("smaller than 50%");
    TweenMax.to(document.querySelector("#roundInputDiv"), 1, {
      scale: 0.7
    });
  } else if (percantageFrom >= 50 && percantageFrom < 100) {
    console.log("smaller than 100%");
    TweenMax.to(document.querySelector("#roundInputDiv"), 1, {
      scale: 0.9
    });
  } else if (percantageFrom >= 100 && percantageFrom < 150) {
    console.log("smaller than 200%");
    TweenMax.to(document.querySelector("#roundInputDiv"), 1, {
      scale: 1.1
    });
  } else {
    console.log("bigger than 200!");
    TweenMax.to(document.querySelector("#roundInputDiv"), 1, {
      scale: 1.2
    });
  }
}

//calculate result

//THIS IS NEEDED FOR Back-end
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
  //this is THE RESULT
  let finalResult = parseFloat(preFinalResult.toFixed(2));
  // console.log("sumOfFactors", sumOfFactors)
  return finalResult;
}
//END OF CALCULATION

//save data from submit form

let signUpForm = document.querySelector("#signUp");

let nameInput = signUpForm.querySelector("#userName");

let companyInput = signUpForm.querySelector("#userCompany");

let emailInput = signUpForm.querySelector("#userEmail");
let phoneInput = signUpForm.querySelector("#userPhone");
let submitBtn = document.querySelector("input[type=submit");

function checkInputValue() {
  if (nameInput.value && companyInput.value && emailInput.value) {
    submitBtn.backgroundColor = "green";
  }
}

function saveUserData() {
  // checkInputValue();
  // submitBtn.addEventListener("click", function(e) {
  //   e.preventDefault();
  const userObject = {
    name: null,
    company: null,
    email: null,
    phone: null
  };
  userObject.name = nameInput.value;
  userObject.company = companyInput.value;
  userObject.email = emailInput.value;
  userObject.phone = phoneInput.value;
  console.log({ userObject });
  // });
}
