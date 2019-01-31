"use strict";

window.addEventListener('load', function () {
  init();
})

// const team = "team";

let questions = [
  {
    id: 1,
    question: "Monthly income",
    txt: "How much do you averagely earn per month?",
    typeQ: "input",
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
    typeQ: "radio",
    answerQ: function () {
      let values = ["0", "50", "100", "150"];
      let form = document.createElement("form");
      values.forEach(function (value) {
        let theInput = document.createElement("input");
        theInput.setAttribute('type', "radio");
        theInput.setAttribute("name", "team");
        theInput.setAttribute("value", value)
        let nameInput = document.createElement("p");
        nameInput.textContent = value;

        form.appendChild(theInput);
        form.appendChild(nameInput);
      })
      return form;

    },
    userAnswer: null
  },
  {
    id: 4,
    question: "Market Opportunity",
    txt: "How big is the market opportunity? (100% is average)",
    typeQ: "radio",
    answerQ: function () {
      let values = ["0", "50", "100", "150"];
      let form = document.createElement("form");
      values.forEach(function (value) {
        let theInput = document.createElement("input");
        theInput.setAttribute('type', "radio");
        theInput.setAttribute("name", "market");
        theInput.setAttribute("value", value)
        let nameInput = document.createElement("p");
        nameInput.textContent = value;

        form.appendChild(theInput);
        form.appendChild(nameInput);
      })
      return form;

    },
    userAnswer: null
  },
  {
    id: 5,
    question: "Innovation",
    txt: "How innovative is the product/technology? (100% is average)",
    typeQ: "radio",
    answerQ: function () {
      let values = ["0", "50", "100", "150"];
      let form = document.createElement("form");
      values.forEach(function (value) {
        let theInput = document.createElement("input");
        theInput.setAttribute('type', "radio");
        theInput.setAttribute("name", "innovation");
        theInput.setAttribute("value", value)
        let nameInput = document.createElement("p");
        nameInput.textContent = value;

        form.appendChild(theInput);
        form.appendChild(nameInput);
      })
      return form;

    },
    userAnswer: null
  },
  {
    id: 6,
    question: "Competitors",
    txt: "How competitive is environment? (100% is average)",
    typeQ: "radio",
    answerQ: function () {
      let values = ["0", "50", "100", "150"];
      let form = document.createElement("form");
      values.forEach(function (value) {
        let theInput = document.createElement("input");
        theInput.setAttribute('type', "radio");
        theInput.setAttribute("name", "competition");
        theInput.setAttribute("value", value)
        let nameInput = document.createElement("p");
        nameInput.textContent = value;

        form.appendChild(theInput);
        form.appendChild(nameInput);
      })
      return form;

    },
    userAnswer: null
  },
  {
    id: 7,
    question: "Strength",
    txt: "How strong is marketing plan/sales/partnerships? (100% is average)",
    typeQ: "radio",
    answerQ: function () {
      let values = ["0", "50", "100", "150"];
      let form = document.createElement("form");
      values.forEach(function (value) {
        let theInput = document.createElement("input");
        theInput.setAttribute('type', "radio");
        theInput.setAttribute("name", "strength");
        theInput.setAttribute("value", value)
        let nameInput = document.createElement("p");
        nameInput.textContent = value;

        form.appendChild(theInput);
        form.appendChild(nameInput);
      })
      return form;

    },
    userAnswer: null
  },
  {
    id: 8,
    question: "Additional investements",
    txt: "How much more investments do you need?",
    typeQ: "radio",
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
    typeQ: "radio",
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



const qTitle = document.querySelector("#question");
const qText = document.querySelector("#questionText");
const answer = document.querySelector("#answer");
let i = 0;


function insertIntoDOM() {
  qTitle.textContent = questions[i].question;
  qText.textContent = questions[i].txt;
  answer.appendChild(questions[i].answerQ());
  if (questions[i].userAnswer) {
    console.log("goes to first if")
    answer.querySelector("input").value = questions[i].userAnswer;
    // if (questions[i].type == "input") {
    //   answer.querySelector("input").value = questions[i].userAnswer;
    // }
    // if (questions[i].type == "radio") {

    // }
  }
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

function prevElement() {
  // for (let i = 0; i < questions.length; i++) {
  //   answer.querySelector("input").value = questions[i].userAnswer;
  // }

  answer.textContent = "";

  let currentEl = prevItem();
  qTitle.textContent = currentEl.question;
  qText.textContent = currentEl.txt;
  answer.appendChild(questions[i].answerQ());
  if (questions[i].userAnswer) {
    console.log("there is an answer!")
    if (questions[i].type == "input") {
      answer.querySelector("input").value = questions[i].userAnswer;
    }
    if (questions[i].type == "radio") {
      console.log("answer is radio!")
      if (questions[i].userAnswer == answer.querySelector("input").value)
        answer.querySelector("input") == checked;
      // for (let i = 1; i < questions[i].length; i++) {
      //   console.log("answers are there?", questions[i].userAnswer)
      //   if (questions[i].userAnswer) {

      //   }
      // }
    }
  }

  console.log("question", currentEl)
  if (currentEl.id == 9) {
    console.log("it is 9")
    let factorsRadio = document.getElementsByName("factors");
    // var factorsArray = Array.prototype.slice.call(factorsRadio);
    factorsRadio[0].addEventListener("click", function () {
      console.log("works")
      this.checked = true;
      document.getElementById('next_button').style.display = "none";
      //add total validation before submit appears 
      document.getElementById("submit").style.display = "inline-block";
    })

    factorsRadio[1].addEventListener("click", function () {
      console.log("works")
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

function nextElement() {
  event.preventDefault();
  //save user input


  questions[i].userAnswer = answer.querySelector("input").value;
  answer.textContent = "";
  let currentEl = nextItem();
  qTitle.textContent = currentEl.question;
  qText.textContent = currentEl.txt;
  answer.appendChild(questions[i].answerQ());
  console.log("current element", currentEl.id)

  if (currentEl.id == 9) {
    console.log("it is 9")
    let factorsRadio = document.getElementsByName("factors");
    // var factorsArray = Array.prototype.slice.call(factorsRadio);
    factorsRadio[0].addEventListener("click", function () {
      console.log("works")
      this.checked = true;
      document.getElementById('next_button').style.display = "none";
      //add total validation before submit appears 
      document.getElementById("submit").style.display = "inline-block";
    })
    factorsRadio[1].addEventListener("click", function () {
      console.log("works")
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


function nextItem() {
  i = i + 1;
  i = i % questions.length;
  return questions[i];
}

function prevItem() {
  if (i === 0) {
    i = questions.length;
  }
  i = i - 1;
  return questions[i];
}


// function answerValues(nameStr) {
//   let values = ["0", "50", "100", "150"];
//   let form = document.createElement("form");
//   // let nameStr = JSON.stringify(nameStr);
//   values.forEach(function (value) {
//     let theInput = document.createElement("input");
//     theInput.setAttribute('type', "radio");
//     theInput.setAttribute("name", nameStr);
//     theInput.setAttribute("value", value)
//     let nameInput = document.createElement("p");
//     nameInput.textContent = value;

//     form.appendChild(theInput);
//     form.appendChild(nameInput);
//   })
//   return form;
// }

function init() {
  insertIntoDOM();

}
