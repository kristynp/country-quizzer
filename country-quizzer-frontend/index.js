const countries_url = "http://localhost:3000/api/v1/countries";
const users_url = "http://localhost:3000/api/v1/users";
const attempts_url = "http://localhost:3000/api/v1/attempts";
let countries_fetch = {};

document.addEventListener('DOMContentLoaded', () => {
  const wordbankBtn = document.getElementById('wordbank-btn');
  const usernameForm = document.getElementById('username-form');
  const quizForm = document.getElementById('quiz-form');

  wordbankBtn.addEventListener('click', handleWordbank);
  usernameForm.addEventListener('submit', (e) => findOrCreateUser(e));
  quizForm.addEventListener('submit', (e) => submitQuiz(e));
});

function submitQuiz(e) {
  e.preventDefault();
  const quizInputs = document.getElementsByClassName('quiz-input');
  const name = document.getElementById('body-header').innerHTML.split(', ')[1].slice(0,-1);
  const attemptObject = makeAttemptObject(quizInputs, name);
  //attemptPostFetch(attemptObject);
}

function makeAttemptObject(quizInputs, name) {
  handleQuizInputs(quizInputs)
  .then(attemptObj => {
    let count = 0;
    for (const key in attemptObj) {
      if (attemptObj[key] === true) {
        count += 1;
      }
    }
    attemptObj.total_score = count;
    attemptObj.username = name;
    return attemptObj;
  })
  .then(res => console.log(res))

}

function handleQuizInputs(quizInputs) {
  return fetch(countries_url)
  .then(response => response.json())
  .then(countries => {
    let attemptObj = {};
    let countriesObj = {}; // {1: "Russia, 2: "Finland", ...}
    countries.data.forEach(country => {
      const mapNum = country.attributes.map_id;
      const cName = country.attributes.name;
      countriesObj[mapNum] = cName;
    });
    for (const input of quizInputs) { 
      const mapId = input.name.split('_')[1]; //gives map id #
      const countriesName = countriesObj[mapId].toLowerCase()
      const countriesNameNoSpace = countriesName.replace(/[^A-Za-z]/g, "");
      const inputName = input.value.toLowerCase();
      const inputNameNoSpace = input.value.toLowerCase().replace(/[^A-Za-z]/g, "")
      if (countriesNameNoSpace === inputNameNoSpace) {
        // compare input name with input name no space.
        if (inputName === inputNameNoSpace) {
        // if they are the same, use input name as key value is true
          attemptObj[inputName] = true;
        } else {
        // if they are NOT the same, substitue the " " for '_' for setting key, and value as true
          const adjustedName = inputName.replace(/[^A-Za-z]/g, "_");
          attemptObj[adjustedName] = true;
         }
      } else {
        //compare value of country name with country name no space
        if (countriesName === countriesNameNoSpace) {
        // if they are the same, use country name as key, value is false
        attemptObj[countriesName] = false;
        } else {
        //if they are NOT the same, substitue the " " for '_' for setting key, and value as false
        const adjustedName = countriesName.replace(/[^A-Za-z]/g, "_");
        attemptObj[adjustedName] = false;
        }
      }
    }
    return attemptObj; 
  })
}

function attemptPostFetch(attemptObj) { 
  fetch(attempts_url, {
    method: "POST",
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify(attemptObj)
  }) 
  // .then(response => response.json())
  // .then(attempt => {
  //   console.log(attempt);
  //})
}

function findOrCreateUser(e) {
  e.preventDefault();
  const name = document.getElementById('input-username').value;
  userPostFetch(name);
}

function userPostFetch(name) {
  fetch(users_url, {
    method: "POST",
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify({username: name})
  }) 
  .then(response => response.json())
  .then(user => {
    renderUser(user);
  })
}

function renderUser(user) {
  const h1 = document.getElementById('body-header');
  const formDiv = document.getElementById('user-form-div');
  h1.innerHTML = `Good luck, ${user.username}!`
  formDiv.remove();
}

function handleWordbank(){
  let button = document.getElementById('wordbank-btn');
  let wordbankUl = document.getElementById('wordbank-ul');
  
  if (button.innerHTML === "Use Wordbank") {
    fetch(countries_url)
    .then(response => response.json())
    .then(countries => {
      countries.data.forEach(country => {
        let li = document.createElement('li');
        li.innerHTML = country.attributes.name;
        wordbankUl.appendChild(li);
      })
      button.innerHTML = "Hide Wordbank"
    })
  }  else {
    while (wordbankUl.firstChild) {
      wordbankUl.removeChild(wordbankUl.firstChild);
    }
    button.innerHTML = "Use Wordbank";
  }
}


