const countries_url = "http://localhost:3000/api/v1/countries"

document.addEventListener('DOMContentLoaded', () => {
  const wordbankBtn = document.getElementById('wordbank-btn');
  const usernameForm = document.getElementById('username-form');
  wordbankBtn.addEventListener('click', handleWordbank);
  usernameForm.addEventListener('submit', (e) => 
    findOrCreateUser(e));

});


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

function findOrCreateUser(e) {
  e.preventDefault();
  const name = document.getElementById('input-username').value;
  userPostFetch(name);
}

function userPostFetch(username) {
  console.log('in userPostFetch function');
  console.log(username);
}
