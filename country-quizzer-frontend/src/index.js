const countriesUrl = "http://localhost:3000/api/v1/countries";
const usersUrl = "http://localhost:3000/api/v1/users";
const attemptsUrl = "http://localhost:3000/api/v1/attempts";

document.addEventListener('DOMContentLoaded', () => {
  const wordbankBtn = document.getElementById('wordbank-btn');
  const usernameForm = document.getElementById('username-form');
  const quizForm = document.getElementById('quiz-form');

  wordbankBtn.addEventListener('click', handleCountryWordbank);
  usernameForm.addEventListener('submit', (e) => findOrCreateUser(e));
  quizForm.addEventListener('submit', (e) => submitQuiz(e));
  Attempt.displayAllScores();
});

function submitQuiz(e) {
  e.preventDefault();
  const quizInputs = document.getElementsByClassName('quiz-input');
  const name = document.getElementById('body-header').innerHTML.split(', ')[1].slice(0,-1);
  makeAttemptObject(quizInputs, name);
}

function makeAttemptObject(quizInputs, name) {
  userId = parseInt(document.getElementById('user-id').innerHTML);
  handleQuizInputs(quizInputs)
  .then(attemptObj => {
    let count = 0;
    for (const key in attemptObj) {
      if (attemptObj[key] === true) {
        count += 1;
      }
    }
    attemptObj.total_score = count;
    attemptObj.user_id = userId;
    attemptObj.username = name;
    return attemptObj;
  })
  .then(res => attemptPostFetch(res))
}

function handleQuizInputs(quizInputs) {
  return fetch(countriesUrl)
  .then(response => response.json())
  .then(countries => {
    let attemptObj = {};
    let countriesObj = {}; 
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
        if (inputName === inputNameNoSpace) {
          attemptObj[inputName] = true;
        } else {
          const adjustedName = inputName.replace(/[^A-Za-z]/g, "_");
          attemptObj[adjustedName] = true;
         }
      } else {
        if (countriesName === countriesNameNoSpace) {
        attemptObj[countriesName] = false;
        } else {
        const adjustedName = countriesName.replace(/[^A-Za-z]/g, "_");
        attemptObj[adjustedName] = false;
        }
      }
    }
    return attemptObj; 
  })
  .catch(err => {
    showError(err);
  });
}

function attemptPostFetch(attemptObj) { 
  fetch(attemptsUrl, {
    method: "POST",
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify(attemptObj)
  }) 
  .then(response => response.json())
  .then(attempt => {
    time = attempt.created_at
    let newAttempt = new Attempt(attempt);
    newAttempt.renderAttempt(time);
  })
  .catch(err => {
    showError(err);
  });
}

function showError(err) {
  let errorDiv = document.getElementById('error-div');
  errorDiv.innerHTML = err;
}

function findOrCreateUser(e) {
  e.preventDefault();
  const name = document.getElementById('input-username').value;
  userPostFetch(name);  
}

function userPostFetch(name) {
  fetch(usersUrl, {
    method: "POST",
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify({username: name})
  }) 
  .then(response => response.json())
  .then(user => {
    renderUser(user);
    new User (user);
    document.getElementById("quiz-container").classList.remove("hidden");
    document.getElementById("score-heading").classList.remove("hidden");
    document.getElementById("wordbank-btn").classList.remove("hidden")
  })
  .catch(err => {
    showError(err);
  });
}

function renderUser(user) {
  const h1 = document.getElementById('body-header');
  const formDiv = document.getElementById('user-form-div');
  const userDiv = document.getElementById('user-id');
  h1.innerHTML = `Good luck, ${user.username}!`;
  userDiv.innerHTML = user.id;
  formDiv.remove();
}

function handleCountryWordbank(){
  let button = document.getElementById('wordbank-btn');
  let wordbankUl = document.getElementById('wordbank-ul');
  
  if (button.innerHTML === "Use Wordbank") {
    fetch(countriesUrl)
    .then(response => response.json())
    .then(countries => {
      countries.data.forEach(country => {
        let newCountry = new Country(country, country.attributes);
        newCountry.renderCountry(); 
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