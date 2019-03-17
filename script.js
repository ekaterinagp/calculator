'use strict';

window.addEventListener('load', function() {
  init();
});

let questions = [
  {
    id: 1,
    question: 'Monthly income',
    txt: 'What is your average monthly income?',
    type: 'input',
    answerQ: function() {
      let theInput = document.createElement('input');
      let theLabel = document.createElement('label');

      theLabel.setAttribute('for', 'income');
      theInput.setAttribute('type', 'number');
      theInput.setAttribute('id', 'incomeNumber');

      theInput.setAttribute('placeholder', 'Type your income here');
      return theInput;
    },
    canvasForChart: function() {
      let theCanvas = document.createElement('canvas');
      // theCanvas.setAttribute("width", 400);
      // theCanvas.setAttribute("height", 200);
      theCanvas.setAttribute('id', 'incomeChart');
      return theCanvas;
    },
    userAnswer: null
  },
  {
    id: 2,
    question: 'Expectation',
    txt: 'What kind of growth do you expect to reach in 5 years?',
    type: 'range',
    answerQ: function() {
      let form = document.createElement('form');
      let theInput = document.createElement('input');
      let description = document.createElement('p');
      description.setAttribute('id', 'descriptionOfGrowth');
      // divAnswer.removeAttribute("class", "addGrid");
      theInput.setAttribute('type', 'range');
      theInput.setAttribute('min', '1');
      theInput.setAttribute('max', '100');
      theInput.setAttribute('value', '0');
      theInput.classList.add('slider');

      // console.log("form created 2");

      form.appendChild(theInput);
      form.appendChild(description);

      return form;
    },
    canvasForChart: function() {
      let theCanvas = document.createElement('canvas');
      theCanvas.setAttribute('width', 400);
      theCanvas.setAttribute('height', 200);
      theCanvas.setAttribute('id', 'growthChart');
      theCanvas.setAttribute('position', 'absolute');
      theCanvas.setAttribute('top', '0');
      return theCanvas;
    },
    userAnswer: null
  },
  {
    id: 3,
    question: 'Team and Leader',
    txt: 'How strong is an entrepreneur and a team?',
    type: 'radio',
    answerQ: function() {
      let values = [
        {
          title: 'Fresh out of school and working towards a solution',
          img: 'a11.svg',
          imgFull: 'a1.svg'
        },
        {
          title: 'Minimum of 3 years of work experience each',
          img: 'b11.png',
          imgFull: 'b1.svg'
        },
        {
          title: 'Minimum of 7 years of experience in your specific field each',
          img: 'c11.svg',
          imgFull: 'c1.svg'
        },
        {
          title:
            'Subject matter experts with published thoughts on your industry',
          img: 'd11.svg',
          imgFull: 'd1.svg'
        }
      ];
      let form = document.createElement('form');
      form.setAttribute('id', 'team');

      values.forEach(function(value) {
        let divWrapper = document.createElement('div');
        let label = document.createElement('label');
        let theInput = document.createElement('input');
        let theBreak = document.createElement('br');
        let divAnswer = document.querySelector('#answer');
        divAnswer.setAttribute('class', 'addGrid');
        divWrapper.setAttribute('class', 'wrapper');
        label.setAttribute('class', 'labelClass');
        theInput.setAttribute('type', 'radio');
        theInput.setAttribute('name', 'team');
        theInput.setAttribute('value', value.title);
        let divWrapperP = document.createElement('div');
        let nameInput = document.createElement('div');
        let img = document.createElement('img');
        nameInput.style.display = 'inline';
        divWrapperP.setAttribute('class', 'btnRadio');
        nameInput.textContent = value.title;

        img.setAttribute('class', 'imgSize');
        img.setAttribute('src', 'img/' + value.img);

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
    question: 'Market Opportunity',
    txt: 'How big is the market opportunity?',
    type: 'radio',
    answerQ: function() {
      let values = [
        {
          title: 'Sustainable',
          img: 'a31.svg'
        },
        {
          title: 'Growing',
          img: 'b32.svg'
        },
        {
          title: 'Spectacular',
          img: 'c33.svg'
        },
        {
          title: 'Almost limitless',
          img: 'd34.svg'
        }
      ];
      let form = document.createElement('form');
      form.setAttribute('id', 'market');
      values.forEach(function(value) {
        let divWrapper = document.createElement('div');
        let label = document.createElement('label');
        let theInput = document.createElement('input');
        let theBreak = document.createElement('br');
        divWrapper.setAttribute('class', 'wrapper');
        label.setAttribute('class', 'labelClass');
        theInput.setAttribute('type', 'radio');
        theInput.setAttribute('name', 'market');
        theInput.setAttribute('value', value.title);
        let divWrapperP = document.createElement('div');
        let nameInput = document.createElement('div');
        let img = document.createElement('img');
        nameInput.style.display = 'inline';
        divWrapperP.setAttribute('class', 'btnRadio');
        nameInput.textContent = value.title;

        img.setAttribute('class', 'imgSize');
        img.setAttribute('src', 'img/' + value.img);

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
    question: 'Innovation',
    txt: 'How innovative is the product/technology?',
    type: 'radio',
    answerQ: function() {
      let values = [
        {
          title: 'There are many similar products/technologies',
          img: 'a23.svg'
        },
        {
          title: 'There are few similar products/technologies',
          img: 'b23.svg'
        },
        {
          title: 'There are only 1-3 similar products/technologies',
          img: 'c23.svg'
        },
        {
          title: 'It is unique product/technologies',
          img: 'd23.svg'
        }
      ];
      let form = document.createElement('form');
      form.setAttribute('id', 'uniqueness');
      let divAnswer = document.querySelector('#answer');
      divAnswer.removeAttribute('class', 'addGrid');
      values.forEach(function(value) {
        let divWrapper = document.createElement('div');
        let label = document.createElement('label');
        let theInput = document.createElement('input');
        let theBreak = document.createElement('br');
        divWrapper.setAttribute('class', 'wrapper');
        label.setAttribute('class', 'labelClass');
        theInput.setAttribute('type', 'radio');
        theInput.setAttribute('name', 'uniqueness');
        theInput.setAttribute('value', value.title);
        let divWrapperP = document.createElement('div');
        let nameInput = document.createElement('div');
        let img = document.createElement('img');
        // nameInput.style.display = "inline";
        divWrapperP.setAttribute('class', 'btnRadioInline');
        nameInput.textContent = value.title;
        img.setAttribute('class', 'imgInline');
        img.setAttribute('src', 'img/' + value.img);
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
    question: 'Competitors',
    txt: 'How competitive is environment?',
    type: 'radio',
    answerQ: function() {
      let values = [
        {
          title: 'Crowded space',
          img: 'd55.svg'
        },
        {
          title: 'Competitive',
          img: 'b58.svg'
        },
        {
          title: 'Single competitor',
          img: 'a51.svg'
        },
        {
          title: 'No competitors',
          img: 'a5.svg'
        }
      ];
      let form = document.createElement('form');
      form.setAttribute('id', 'competition');
      values.forEach(function(value) {
        let divWrapper = document.createElement('div');
        let label = document.createElement('label');
        let theInput = document.createElement('input');
        let theBreak = document.createElement('br');
        divWrapper.setAttribute('class', 'wrapper');
        label.setAttribute('class', 'labelClass');
        theInput.setAttribute('type', 'radio');
        theInput.setAttribute('name', 'competition');
        theInput.setAttribute('value', value.title);
        let divWrapperP = document.createElement('div');
        let nameInput = document.createElement('div');
        let img = document.createElement('img');
        nameInput.style.display = 'inline';
        divWrapperP.setAttribute('class', 'btnRadioInlineComp');
        nameInput.textContent = value.title;
        img.setAttribute('class', 'imgInlineComp');
        img.setAttribute('src', 'img/' + value.img);
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
    question: 'Strength',
    txt: 'How strong is marketing plan/sales/partnerships?',
    type: 'radio',
    answerQ: function() {
      let values = [
        {
          title: 'Good',
          img: 'a411.svg'
        },
        {
          title: 'Solid',
          img: 'b41.svg'
        },
        {
          title: 'Strong',
          img: 'c41.svg'
        },
        {
          title: 'Perfect',
          img: 'd41.svg'
        }
      ];
      let form = document.createElement('form');
      form.setAttribute('id', 'strength');
      // let divAnswer = document.querySelector("#answer");
      // divAnswer.removeAttribute("class", "addGrid");
      values.forEach(function(value) {
        let divWrapper = document.createElement('div');
        let label = document.createElement('label');
        let theInput = document.createElement('input');
        let theBreak = document.createElement('br');
        divWrapper.setAttribute('class', 'wrapper');
        label.setAttribute('class', 'labelClass');
        theInput.setAttribute('type', 'radio');
        theInput.setAttribute('name', 'strength');
        theInput.setAttribute('value', value.title);
        let divWrapperP = document.createElement('div');
        let nameInput = document.createElement('div');
        let img = document.createElement('img');
        nameInput.style.display = 'inline';
        divWrapperP.setAttribute('class', 'btnRadioInlineComp');
        nameInput.textContent = value.title;

        img.setAttribute('class', 'imgInline');
        img.setAttribute('src', 'img/' + value.img);
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
    question: 'Additional investements',
    txt: 'How much more investments do you need?',
    type: 'input',
    answerQ: function() {
      // let thePTitle = document.createElement("p");
      // thePTitle.innerHTML = "You need this more money";
      let theDiv = document.createElement('div');
      let theInput = document.createElement('input');
      let theLabel = document.createElement('label');
      theDiv.setAttribute('id', 'roundInputDiv');
      theLabel.setAttribute('for', 'investment');
      theInput.setAttribute('type', 'number');
      theInput.setAttribute('id', 'addInvestment');
      theDiv.setAttribute('class', 'round');
      theInput.setAttribute('placeholder', 'Type your number here');
      // theDiv.appendChild(thePTitle);
      let dollarSign = document.createElement('span');
      dollarSign.innerText = '$';
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
    question: 'Positive factors',
    txt:
      'Do you have any positive factor(s) that affect or may affect your income in future?',
    type: 'radio',
    answerQ: function() {
      let values = ['yes', 'no'];
      let form = document.createElement('form');
      form.setAttribute('id', 'factorsTwoOptions');
      values.forEach(function(value) {
        let divWrapper = document.createElement('div');
        let label = document.createElement('label');
        let theInput = document.createElement('input');
        let theBreak = document.createElement('br');
        // divWrapper.setAttribute("class", "wrapper");
        label.setAttribute('class', 'labelClass');
        theInput.setAttribute('type', 'radio');
        theInput.setAttribute('name', 'factors');
        theInput.setAttribute('value', value);
        let nameInput = document.createElement('p');
        nameInput.style.display = 'inline-block';
        nameInput.setAttribute('class', 'btnRadioTwoOptions');
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
    canvasForChart: function() {
      let theCanvas = document.createElement('canvas');
      let theSecond = document.createElement('canvas');
      theSecond.setAttribute('width', 400);
      theSecond.setAttribute('height', 200);
      theCanvas.setAttribute('width', 400);
      theCanvas.setAttribute('height', 200);
      theCanvas.setAttribute('id', 'factorsChart');
      theSecond.setAttribute('id', 'otherChart');

      return {
        theCanvas: theCanvas,
        theSecond: theSecond
      };
    },
    userAnswer: null
  }
];

const questionTitle = document.querySelector('#question');
const questionText = document.querySelector('#questionText');
const answer = document.querySelector('#answer');
const wrapForCanvas = document.querySelector('#chartPlaceHolder');
let currentQuestionIndex = 0;

function insertIntoDOM() {
  document.querySelector('#prev_button').style.display = 'none';

  questionTitle.textContent = questions[currentQuestionIndex].question;
  questionText.textContent = questions[currentQuestionIndex].txt;

  answer.appendChild(questions[currentQuestionIndex].answerQ());

  wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());

  document.getElementById('prev_button').addEventListener('click', function() {
    prevElement();
  });
  document.getElementById('next_button').addEventListener('click', function() {
    nextElement();
  });
}

function typeRadio() {
  if (questions[currentQuestionIndex].type == 'radio') {
    let input = answer.querySelector('input');
    let radioName = input.getAttribute('name');
    let radioValue = getRadioCheckedValue(radioName);
    // console.log("radiovalue and u?", radioValue);
    questions[currentQuestionIndex].userAnswer = radioValue[0];
    questions[currentQuestionIndex].userAnswerIndex = radioValue[1];

    // console.log("radioIndex", questions[currentQuestionIndex].userAnswerIndex);
  }
}

function typeRange() {
  if (questions[currentQuestionIndex].type == 'range') {
    // console.log("question number 2 for get Value");

    let slider = document.querySelector('input[type="range"]');
    // console.log("slider", slider);
    // disabledIfEmpty();
    slider.addEventListener('change', function() {
      // console.log("eventlistener for getValue");
      getValue();
    });
  }
}

function typeRageChart() {
  if (questions[currentQuestionIndex].type == 'range') {
    wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());
    let slider = document.querySelector('input[type=range]');
    slider.addEventListener('change', function() {
      // console.log("eventlistener for getValue");
      getValue();
    });
  }
}

// function chartforEight() {
//   if (questions[currentQuestionIndex].id == 8) {
//     // console.log("it is 8 and it needs to create a chart");
//     document.querySelector("#comparison").classList.remove("hide");
//     wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());
//     let valueForChart = questions[currentQuestionIndex].userAnswer;
//     // createInvestmentChart(valueForChart, "investmentChart");

//     // getValueForInvestment();
//   }
// }

function valueForEight() {
  if (questions[currentQuestionIndex].id == 8) {
    createInputForInvestment();
    answer
      .querySelector('#addInvestment')
      .addEventListener('keyup', function() {
        // console.log("eventlistener from init for investements");
        if (answer.querySelector('#addInvestment').value.length) {
          document.getElementById('next_button').disabled = false;
          getValueForInvestment();

          document.querySelector('#comparison').classList.remove('hide');
          let inputComparison = incomeVSinvestments();
        } else {
          document.getElementById('next_button').disabled = true;
        }
      });
  }
}

function typeInput() {
  if (questions[currentQuestionIndex].type == 'input') {
    // console.log("it is input!");
    let inputValue = answer.querySelector('input').value;
    // console.log("inputValue", inputValue)
    questions[currentQuestionIndex].userAnswer = inputValue;
  }
}

function inputAnswerInsert() {
  if (questions[currentQuestionIndex].type == 'input') {
    answer.querySelector('input').value =
      questions[currentQuestionIndex].userAnswer;
    if (questions[currentQuestionIndex].id == 8) {
      getValueForInvestment();
      document.querySelector('#comparison').classList.remove('hide');
      let inputComparison = incomeVSinvestments();
    }
  }
}

function rangeAnswerInsert() {
  if (questions[currentQuestionIndex].type == 'range') {
    console.log('rangeAnswerInsert');
    // buildChart(questions[currentQuestionIndex].userAnswer);
    let slider = document.querySelector('input[type=range]');
    slider.value = questions[currentQuestionIndex].userAnswer;
    getValue();
  }
}

function radioAnswerInsert() {
  if (questions[currentQuestionIndex].type == 'radio') {
    if (questions[currentQuestionIndex].id !== 9) {
      // console.log("it is radio type! and not 9");
      // console.log("UserAnswer", questions[currentQuestionIndex].userAnswer);
      let allRadios = answer.querySelectorAll('input');
      let radioArr = Array.prototype.slice.call(allRadios);
      for (let u = 0; u < radioArr.length; u++) {
        // console.log("allRadios", radioArr[u].value);
        if (radioArr[u].value == questions[currentQuestionIndex].userAnswer) {
          // console.log("radio value check", radioArr[u].value);
          radioArr[u].checked = true;
        }
      }
      showAnimation(questions[currentQuestionIndex].userAnswer);
    } else {
      // console.log("it is the last one");

      if (
        questions[currentQuestionIndex].userAnswer ||
        questions[currentQuestionIndex].userAnswer == 0
      ) {
        if (questions[currentQuestionIndex].userAnswer == 100) {
          document.querySelector('input[value=yes]').checked = true;
          createChartForFactors();
        } else {
          // console.log("it is else and answer 0 at last one");
          document.querySelector('input[value=no]').checked = true;
          createChartForOtherFactors();
        }
      }
    }
  }
}

function disableForInput() {
  if (questions[currentQuestionIndex].type == 'input') {
    // console.log("it is input and it is disabled!");
    answer.querySelector('input').addEventListener('keyup', function() {
      if (answer.querySelector('input').value.length) {
        document.getElementById('next_button').disabled = false;
      } else {
        // console.log("it is disabled!");
        document.getElementById('next_button').disabled = true;
      }
    });
  }
}
// let clickAdded = false;
function disableForRadio() {
  console.log('disableForRadio called');

  if (
    questions[currentQuestionIndex].type == 'radio' &&
    !questions[currentQuestionIndex].userAnswer
  ) {
    console.log('disableForRadio called.. type radio');
    // console.log("disable it is radio");

    document.getElementById('next_button').disabled = true;

    eventlistenerForRadio();
    // document.getElementById("next_button").disabled = false;
  }
}

function eventlistenerForRadio() {
  console.log('eventlistener run for radio');
  // if (questions[currentQuestionIndex].type == "radio") {
  document.querySelector('form').addEventListener('click', function() {
    // if (clickAdded) return;
    // clickAdded = true;
    console.log('i click!');
    let allRadios = document.querySelectorAll('input[type=radio]');
    console.log({ allRadios });
    // let clickedRadio = allRadios.find(radio => radio.checked == true);
    // console.log("clickedRadio", clickedRadio.value);
    // console.log("allRadios", allRadios);
    for (let i = 0; i < allRadios.length; i++) {
      console.log({ i });
      if (allRadios[i].checked == true) {
        let radioValue = allRadios[i].value;
        console.log('radio value', allRadios[i].value);
        questions[currentQuestionIndex].answer = radioValue;
        if (questions[currentQuestionIndex].id !== 9) {
          showAnimation(radioValue);
        }
      }
    }
    document.getElementById('next_button').disabled = false;
  });
  // }
}

function showAnimation(value) {
  // console.log("figureDiv")
  document.querySelector('.divForFigure').innerHTML = '';
  if (value == 'Minimum of 3 years of work experience each') {
    // document.querySelector(".figureDiv").innerHTML = "";
    // let divForFigure = document.createElement("div");
    // divForFigure.setAttribute("class", "figureDiv");
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/b1.svg');
    figure.setAttribute('class', 'bigFigure');
    // divForFigure.appendChild(figure);
    // answer.appendChild(divForFigure);
    document.querySelector('.divForFigure').appendChild(figure);
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
  if (value == 'Fresh out of school and working towards a solution') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/a1.svg');
    figure.setAttribute('class', 'bigFigure');
    document.querySelector('.divForFigure').appendChild(figure);
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
  if (value == 'Minimum of 7 years of experience in your specific field each') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/c1.svg');
    figure.setAttribute('class', 'bigFigure');
    document.querySelector('.divForFigure').appendChild(figure);
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
    value == 'Subject matter experts with published thoughts on your industry'
  ) {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/d1.svg');
    figure.setAttribute('class', 'bigFigure');
    document.querySelector('.divForFigure').appendChild(figure);
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
  if (value == 'Sustainable') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/a31.svg');
    figure.setAttribute('class', 'bigFigure');
    figure.style.top = '-10em';
    figure.style.paddingTop = '7em';
    document.querySelector('.divForFigure').appendChild(figure);
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
  if (value == 'Growing') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/b32.svg');
    figure.setAttribute('class', 'bigFigure');
    document.querySelector('.divForFigure').appendChild(figure);
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
  if (value == 'Spectacular') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/c33.svg');
    figure.setAttribute('class', 'bigFigure');
    document.querySelector('.divForFigure').appendChild(figure);
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
  if (value == 'Almost limitless') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/d34.svg');
    figure.setAttribute('class', 'bigFigure');
    figure.style.paddingBottom = '45%';
    document.querySelector('.divForFigure').appendChild(figure);
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
  if (value == 'There are many similar products/technologies') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/a23.svg');
    figure.setAttribute('class', 'bigFigureVehicle');
    // divForFigure.appendChild(figure);
    // answer.appendChild(divForFigure);

    document.querySelector('.divForFigure').appendChild(figure);
    let vehicleDrive = new TimelineMax({ repeat: -1, force3D: true });
    // bikeDrive.to(figure, 22, { left: "100%", ease: Linear.easeNone }, 1);
    let xTo = document.querySelector('.box').offsetWidth + figure.offsetWidth;
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
  if (value == 'There are few similar products/technologies') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/b23.svg');
    figure.setAttribute('class', 'bigFigureVehicle');
    document.querySelector('.divForFigure').appendChild(figure);
    let vehicleDrive = new TimelineMax({ repeat: -1, force3D: true });
    let xTo = document.querySelector('.box').offsetWidth + figure.offsetWidth;
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
  if (value == 'There are only 1-3 similar products/technologies') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/c23.svg');
    figure.setAttribute('class', 'bigFigureVehicle');
    document.querySelector('.divForFigure').appendChild(figure);
    let vehicleDrive = new TimelineMax({ repeat: -1, force3D: true });
    let xTo = document.querySelector('.box').offsetWidth + figure.offsetWidth;
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
  if (value == 'It is unique product/technologies') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/d23.svg');
    figure.setAttribute('class', 'bigFigureVehicle');
    document.querySelector('.divForFigure').appendChild(figure);
    let vehicleDrive = new TimelineMax({ repeat: -1, force3D: true });
    let xTo = document.querySelector('.box').offsetWidth + figure.offsetWidth;
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
  if (value == 'Crowded space') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/d55.svg');
    figure.setAttribute('class', 'bigFigureBounce');
    document.querySelector('.divForFigure').appendChild(figure);
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
  if (value == 'Competitive') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/b58.svg');
    figure.setAttribute('class', 'bigFigureBounce');
    // figure.style.paddingTop = "5%";
    document.querySelector('.divForFigure').appendChild(figure);
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
  if (value == 'Single competitor') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/a51.svg');
    figure.setAttribute('class', 'bigFigureBounce');
    document.querySelector('.divForFigure').appendChild(figure);
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
  if (value == 'No competitors') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/a5.svg');
    figure.setAttribute('class', 'bigFigureBounce');
    document.querySelector('.divForFigure').appendChild(figure);
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
  if (value == 'Good') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/a411.svg');
    figure.setAttribute('class', 'bigFigureBounceSmall');
    figure.style.paddingTop = '8%';
    // figure.style.top = "-10em";
    document.querySelector('.divForFigure').appendChild(figure);
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
        scale: 1
      },
      0.01
    );
  }
  if (value == 'Solid') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/b41.svg');
    figure.setAttribute('class', 'bigFigureBounceSmall');
    figure.style.paddingTop = '8%';
    document.querySelector('.divForFigure').appendChild(figure);
    TweenMax.fromTo(
      figure,
      1,

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
  if (value == 'Strong') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/c41.svg');
    figure.setAttribute('class', 'bigFigureBounceSmall');
    figure.style.paddingTop = '8%';
    document.querySelector('.divForFigure').appendChild(figure);
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
        scale: 1.3
      },
      0.01
    );
  }
  if (value == 'Perfect') {
    let figure = document.createElement('img');
    figure.setAttribute('src', 'img/d41.svg');
    figure.setAttribute('class', 'bigFigureBounceSmall');
    figure.style.paddingTop = '5em';
    document.querySelector('.divForFigure').appendChild(figure);
    TweenMax.fromTo(
      figure,
      1,

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
}

function disableForRange() {
  if (questions[currentQuestionIndex].type == 'range') {
    // console.log("it is range");
    // console.log("value of input range", answer.querySelector("input").value);
    // if (answer.querySelector("input").value == 1) {
    //   console.log("value of input range", answer.querySelector("input").value)
    //   document.getElementById('next_button').disabled = true;
    // }

    if (answer.querySelector('input').value == 1)
      document.getElementById('next_button').disabled = true;
  }
}

function nextElement() {
  // console.log("type of input", questions[currentQuestionIndex].type)

  document.querySelector('#comparison').classList.add('hide');
  document.querySelector('#prev_button').style.display = 'inline-block';

  typeRadio();
  typeInput();
  // eventlistenerForRadio();
  answer.textContent = '';
  wrapForCanvas.innerHTML = '';

  let currentEl = nextItem();

  questionTitle.textContent = currentEl.question;
  questionText.textContent = currentEl.txt;
  answer.appendChild(questions[currentQuestionIndex].answerQ());
  createDivForFigure();
  // if (questions[currentQuestionIndex].id == 8) {
  //   createInputForInvestment();
  // }

  if (
    questions[currentQuestionIndex].canvasForChart !== null &&
    questions[currentQuestionIndex].id !== 9
  ) {
    wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());
    document.querySelector('#chartPlaceHolder').style.height = '40vh';
  } else {
    document.querySelector('#chartPlaceHolder').style.height = '0px';
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
    document.querySelector('#next_button').textContent = 'Next';

  document.querySelector('#comparison').classList.add('hide');
  answer.textContent = '';
  wrapForCanvas.innerHTML = '';

  let currentEl = prevItem();
  questionTitle.textContent = currentEl.question;
  questionText.textContent = currentEl.txt;

  answer.appendChild(questions[currentQuestionIndex].answerQ());
  if (questions[currentQuestionIndex].id == 1)
    document.querySelector('#prev_button').style.display = 'none';

  // console.log("question", currentEl);
  document.getElementById('next_button').disabled = false;
  timeline(questions);
  // console.log(
  //   "questions[currentQuestionIndex]",
  //   questions[currentQuestionIndex]
  // );
  createDivForFigure();
  disableForRadio();
  typeRageChart();
  valueForEight();
  // eventlistenerForRadio();
  insertSavedAnswers(currentEl);

  ifLastElement(currentEl);
  if (questions[currentQuestionIndex].id == 1) {
    wrapForCanvas.appendChild(questions[currentQuestionIndex].canvasForChart());
    getValueForBarChart();
    answer.querySelector('input').addEventListener('blur', function() {
      getValueForBarChart();
    });
  }
  if (questions[currentQuestionIndex].id == 8) {
    answer.querySelector('#addInvestment').addEventListener('blur', function() {
      getValueForInvestment();
    });
  }
  if (questions[currentQuestionIndex].type == 'radio') {
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
    let figureDiv = document.createElement('div');
    figureDiv.setAttribute('class', 'divForFigure');
    answer.appendChild(figureDiv);
  }
}

function insertSavedAnswers() {
  console.log({
    'questions[currentQuestionIndex]': questions[currentQuestionIndex]
  });
  createDivForFigure();
  // showAnimation();

  if (questions[currentQuestionIndex].id !== 9) {
    document.querySelector('#next_button').textContent = 'Next';
  }
  if (questions[currentQuestionIndex].userAnswer) {
    inputAnswerInsert();
    radioAnswerInsert();
    rangeAnswerInsert();
  }
  if (
    questions[currentQuestionIndex].id == 3 ||
    questions[currentQuestionIndex].id == 4
  ) {
    console.log({ answer });
    // answer.removeAttribute("class", "addGrid");

    answer.classList.add('addGrid');
  } else {
    answer.classList.remove('addGrid');
  }
  // if (questions[currentQuestionIndex].id == 8) {
  //   createInputForInvestment();
  // }
}

function ifLastElement(currentEl) {
  let canvasForLast = questions[8].canvasForChart(),
    firstCanvas = canvasForLast.theCanvas,
    secondCanvas = canvasForLast.theSecond;

  if (questions[currentQuestionIndex].userAnswer) {
    document.getElementById('next_button').style.display = 'none';

    document.getElementById('submit').style.display = 'inline-block';
  }

  if (currentEl.id == questions.length) {
    document.querySelector('#next_button').textContent = 'Submit';
    // console.log("it is 9");
    let factorsRadio = document.getElementsByName('factors');
    factorsRadio[0].addEventListener('click', function() {
      document.querySelector('#chartPlaceHolder').innerHTML = '';
      // console.log("works");
      let input = answer.querySelector('input');
      // console.log("form", input);
      let radioName = input.getAttribute('name');
      // console.log("radio_name", radioName);
      let radioValue = getRadioCheckedValue(radioName);

      if (radioValue[0] == 'yes') {
        radioValue = 100;
        questions[currentQuestionIndex].userAnswer = radioValue;
        createChartForFactors(firstCanvas);
        document.querySelector('#factorsChart').style.display = 'block';
        if (document.querySelector('#otherChart')) {
          document.querySelector('#otherChart').style.display = 'none';
        }
      }
      // console.log("radioValue", radioValue);
      this.checked = true;

      document.getElementById('next_button').style.display = 'none';

      document.getElementById('submit').style.display = 'inline-block';
    });
    factorsRadio[1].addEventListener('click', function() {
      // console.log("works");
      document.querySelector('#chartPlaceHolder').innerHTML = '';
      let input = answer.querySelector('input');
      // console.log("form", input);
      let radioName = input.getAttribute('name');
      // console.log("radio_name", radioName);
      let radioValue = getRadioCheckedValue(radioName);

      if (radioValue[0] == 'no') {
        radioValue = '0';
        questions[currentQuestionIndex].userAnswer = radioValue;

        createChartForOtherFactors(secondCanvas);
        document.querySelector('#otherChart').style.display = 'block';
        if (document.querySelector('#factorsChart')) {
          document.querySelector('#factorsChart').style.display = 'none';
        }
      }

      // console.log("radioValue", radioValue);
      this.checked = true;

      document.getElementById('next_button').style.display = 'none';

      document.getElementById('submit').style.display = 'inline-block';
    });
  } else {
    insertSavedAnswers(currentEl);
    document.getElementById('next_button').style.display = 'inline-block';
    document.getElementById('submit').style.display = 'none';
  }
}

function getRadioCheckedValue(radio_name) {
  let oRadio = document.forms[0].elements[radio_name];

  for (let u = 0; u < oRadio.length; u++) {
    if (oRadio[u].checked) {
      // console.log("u index", u);
      return [oRadio[u].value, u];
    }
  }
  // console.log("radio value returned?", oRadio[u].value);
  return '';
}

function disabledIfEmpty() {
  document.getElementById('next_button').disabled = true;

  // console.log(
  //   "questions[currentQuestionIndex].type",
  //   questions[currentQuestionIndex].type
  // );
  disableForInput();
  disableForRadio();
  disableForRange();

  if (questions[currentQuestionIndex].userAnswer) {
    // console.log("userAnswer", questions[currentQuestionIndex].userAnswer);
    document.getElementById('next_button').disabled = false;
  }
}

function createInputForInvestment() {
  console.log('createInputForInvest runs!');
  if (questions[currentQuestionIndex].id == '8') {
    let divIncome = document.createElement('div');
    // let pForIncome = document.createElement("p");
    // pForIncome.setAttribute("class", "pIncome");
    // pForIncome.innerHTML = "Your yearly income";
    divIncome.setAttribute('class', 'round');
    // document.querySelector(".box").appendChild(pForIncome);
    // let additionalInvestement = document.createElement("div");
    // additionalInvestement.setAttribute("class", "round");
    // additionalInvestement.setAttribute("id", "investment");
    // let additonalInput = document.createElement("p");
    // additonalInput.innerHTML = value;
    let yearlyIncome = document.createElement('p');
    yearlyIncome.setAttribute('class', 'roundInput');
    yearlyIncome.innerHTML =
      'Your yearly income is ' + questions[0].userAnswer * 12 + '$';
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

//Calculation part
function calculateResult(array) {
  let answer1 = array[0] * 12;
  let answerModified = turnToNumber(1);
  console.log('answerModified', answerModified);
  let answer2 = (answer1 * answerModified) / 100 + answer1;
  console.log('answer2', answer2);
  let terminalValue = answer2 * 2;
  console.log('treminalValue', terminalValue);
  let postMV = terminalValue / 20;
  console.log('postMV', postMV);
  let preMV = postMV - array[0];
  console.log('preMV', preMV);
  let answerThreeModified = turnIndexToNumber(2);
  let answer3 = (answerThreeModified * 30) / 10000;
  console.log('answer3', answer3);
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
  let timelineInput = document.querySelector('#timeline');
  let allQuestionsDigit = questions.length;
  // console.log("allQuestionsDigit", allQuestionsDigit);
  let currentQuestionDigit = questions[currentQuestionIndex].id;
  // console.log("currentQuestionDigit", currentQuestionDigit);

  timelineInput.textContent = currentQuestionDigit + '/' + allQuestionsDigit;
}

function init() {
  timeline(questions);
  insertIntoDOM();

  document.getElementById('submit').addEventListener('click', function() {
    document.querySelector('#popUp').style.display = 'block';
    // let allOneUserAnswers = collectAllAnswers();
    // console.log("userAnswer", allOneUserAnswers);

    let finalResult = calculateResult(collectAllAnswers());
    console.log('final result function', finalResult);
  });

  answer.querySelector('input').addEventListener('keyup', function() {
    // console.log("eventlistener from init!");
    if (answer.querySelector('input').value.length) {
      document.getElementById('next_button').disabled = false;
      getValueForBarChart();
    } else {
      // console.log("it is disabled!");
      document.getElementById('next_button').disabled = true;
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
let descriptionOfGrowth = document.querySelector('#descriptionGrowth');
let slider = document.querySelector('input[type=range]');

function getValue() {
  console.log('function runs getvalue');
  let elem = document.querySelector('input[type="range"]');
  let newValue = elem.value;
  // console.log("newValue", newValue);
  buildChart(newValue);
  questions[currentQuestionIndex].userAnswer = newValue;
  // console.log("new user value", questions[currentQuestionIndex].userAnswer);
}

function buildChart(value) {
  let slider = document.querySelector('input[type=range]');
  document.querySelector('#chartPlaceHolder').style.height = '40vh';
  let descriptionOfGrowth = document.querySelector('#descriptionOfGrowth');
  // console.log("lets see what new value is");
  if (value <= 25) {
    // console.log("value is <25", value);
    createChart(
      'growthChart',
      'line',
      ['Now', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
      dataSetAdequate,
      'rgba(241, 90, 34, 1)'
    );
    // slider.classList.remove = ".slider::-webkit-slider-thumb";
    slider.style.backgroundColor = 'rgba(241, 90, 34, .5)';
    descriptionOfGrowth.textContent = 'I expect adequate growth';
  } else if (value > 25 && value <= 50) {
    // console.log("value is <50", value);
    createChart(
      'growthChart',
      'line',
      ['Now', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
      dataSetAverage,
      'rgba(245, 230, 83, 1)'
    );
    slider.style.backgroundColor = 'rgba(245, 230, 83, .5)';
    descriptionOfGrowth.textContent = 'I expect average growth';
  } else if (value > 50 && value <= 75) {
    // console.log("value is <75", value);
    createChart(
      'growthChart',
      'line',
      ['Now', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],

      dataSetAboveAverage,
      'rgba(3, 201, 169, 1)'
    );
    slider.style.backgroundColor = 'rgba(3, 201, 169, .5)';
    descriptionOfGrowth.textContent = 'I expect very good growth';
  } else {
    // console.log("value is <100", value);
    createChart(
      'growthChart',
      'line',
      ['Now', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
      dataSetAmazing,
      'rgba(0, 230, 64, 1)'
    );
    slider.style.backgroundColor = 'rgba(0, 230, 64, .5)';
    descriptionOfGrowth.textContent = 'I expect amazing growth';
  }
  document.getElementById('next_button').disabled = false;
}

function createChart(
  get_wrapper,
  type_of_chart,
  labels_of_chart,
  data_of_charts,
  background_color
) {
  console.log('chart is created', data_of_charts);
  let ctx = document.getElementById(get_wrapper).getContext('2d');
  var myChart = new Chart(ctx, {
    type: type_of_chart,
    data: {
      labels: labels_of_chart,
      datasets: [
        {
          label: 'Average',
          data: [0, 60, 100, 110, 130, 150],
          backgroundColor: 'rgba(63,	152,	255,.3)	',
          // borderColor: 'rgba(19, 247, 228,1)',
          borderWidth: 2,
          bevelWidth: 3,
          bevelHighlightColor: 'rgba(255, 255, 255, 0.75)',
          bevelShadowColor: 'rgba(0, 0, 0, 0.5)'
          // pointBackgroundColor: 'rgba(19, 247, 228,1)',
          // pointBorderColor: 'rgba(19, 247, 228,1)',
          // pointBorderWidth: 5,
        },
        {
          label: 'Original data',
          data: data_of_charts,
          animationSteps: 6000,
          // easing: 'easeInOutElastic',
          backgroundColor: background_color,
          // borderColor: 'rgba(19, 247, 228,1)',
          borderWidth: 2,
          shadowOffsetX: 3,
          shadowOffsetY: 3,
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
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
        easing: 'easeInOutCubic'
      },
      tooltips: {
        callbacks: {
          label: function(t, d) {
            var xLabel = d.datasets[t.datasetIndex].label;
            var yLabel = d.datasets[t.datasetIndex].data[t.index];
            return xLabel + ': %' + yLabel;
          }
        }
      },
      responsive: true,
      maintainAspectRatio: true
    }
  });
}

function getValueForBarChart() {
  let inputToCheck = document.querySelector('#incomeNumber');
  let theValue = inputToCheck.value;
  // console.log("theValue", theValue);
  theValue = Number(theValue);
  createBarChart(theValue, 'incomeChart');
}

function getValueForInvestment() {
  // console.log("it is #8");
  if (questions[currentQuestionIndex].id == 8) {
    let inputToCheck = document.querySelector('#addInvestment');
    let theValue = inputToCheck.value;
    theValue = Number(theValue);

    questions[currentQuestionIndex].userAnswer = theValue;
    // createInputForInvestment(theValue);
  }
}

function createBarChart(value, placeHolder) {
  let barChartIncomeCanvas = document.getElementById(placeHolder);

  let barChart = new Chart(barChartIncomeCanvas, {
    type: 'bar',
    data: {
      labels: ['Income'],
      datasets: [
        {
          label: 'Your income',
          data: [value],
          backgroundColor: 'blue',
          bevelWidth: 3,
          bevelHighlightColor: 'rgba(255, 255, 255, 0.75)',
          bevelShadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        {
          label: 'Average income',

          data: [50000],
          backgroundColor: 'green',
          shadowOffsetX: 3,
          shadowOffsetY: 3,
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          hoverInnerGlowWidth: 20,
          hoverInnerGlowColor: 'rgb(255, 255, 0)',
          hoverOuterGlowWidth: 20,
          hoverOuterGlowWidth: 'rgb(255, 255, 0)'
        },
        {
          label: 'Max income',
          data: [100000],
          backgroundColor: '#EEEEEE',
          shadowOffsetX: 3,
          shadowOffsetY: 3,
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          hoverInnerGlowWidth: 20,
          hoverInnerGlowColor: 'rgb(255, 255, 0)',
          hoverOuterGlowWidth: 20,
          hoverOuterGlowWidth: 'rgb(255, 255, 0)'
        }
      ]
    },
    options: {
      legend: {
        display: true,
        labels: {
          fontColor: 'white',
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

function createInvestmentChart(value, placeHolder) {
  let barChartIncomeCanvas = document.getElementById(placeHolder);

  let barChart = new Chart(barChartIncomeCanvas, {
    type: 'bar',
    data: {
      labels: ['Additional investments'],
      datasets: [
        {
          label: 'Additional investements',
          data: [value],
          backgroundColor: 'blue'
        },
        {
          label: 'Your yearly income',
          data: [questions[0].userAnswer * 12],
          backgroundColor: 'green'
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
  document.querySelector('#chartPlaceHolder').style.height = '40vh';
  new Chart(firstCanvas, {
    type: 'bar',
    data: {
      labels: [
        'Good reviews',
        'Strong Partners',
        'Stabel revenue',
        'Destribution channels',
        'Traction'
      ],
      datasets: [
        {
          backgroundColor: [
            '#3e95cd',
            '#8e5ea2',
            '#3cba9f',
            '#e8c3b9',
            '#c45850'
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
        text: 'Positive factors'
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
      },
      responsive: true,
      maintainAspectRatio: true
    }
  });
}

function createChartForOtherFactors() {
  let canvasForLast = questions[8].canvasForChart();
  let secondCanvas = canvasForLast.theSecond;
  wrapForCanvas.appendChild(secondCanvas);
  document.querySelector('#chartPlaceHolder').style.height = '40vh';
  new Chart(secondCanvas, {
    type: 'bar',
    data: {
      labels: [
        'Big debt',
        'Not experienced team',
        'Defective product',
        'Lack of financial planning',
        'Low margins'
      ],
      datasets: [
        {
          backgroundColor: [
            '#FFA500',
            '#FFDEAD',
            '#FF4500',
            '#CD853F',
            '#BC8F8F'
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
        text: 'Negative factors'
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
      },
      responsive: true,
      maintainAspectRatio: true
    }
  });
}

////GET VALUE AND CREATE CHARTS END

//calculate percantage of yearly income and investments asked
function incomeVSinvestments() {
  let incomePerYear = questions[0].userAnswer * 12;
  console.log('incomePerYear', incomePerYear);
  let investmentsAsked = questions[7].userAnswer;
  console.log('asked investments', investmentsAsked);
  let percantageFrom = (investmentsAsked * 100) / incomePerYear;
  console.log('percantageFrom', percantageFrom);
  percantageFrom = parseFloat(percantageFrom.toFixed(2));
  document.querySelector('#number').textContent =
    'Investments you need is' +
    ' ' +
    percantageFrom +
    '%' +
    ' ' +
    'of your yearly income';

  if (percantageFrom < 50) {
    console.log('smaller than 50%');
    TweenMax.to(document.querySelector('#roundInputDiv'), 1, {
      scale: 0.7
    });
  } else if (percantageFrom >= 50 && percantageFrom < 100) {
    console.log('smaller than 100%');
    TweenMax.to(document.querySelector('#roundInputDiv'), 1, {
      scale: 0.9
    });
  } else if (percantageFrom >= 100 && percantageFrom < 150) {
    console.log('smaller than 200%');
    TweenMax.to(document.querySelector('#roundInputDiv'), 1, {
      scale: 1.1
    });
  } else {
    console.log('bigger than 200!');
    TweenMax.to(document.querySelector('#roundInputDiv'), 1, {
      scale: 1.3
    });
  }
}
