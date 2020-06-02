class Attempt {
  constructor(data) {
    this.id = data.id
    this.total_score = data.total_score;
    this.user_id = data.user_id
    this.albania = data.albania
    this.andorra = data.andorra
    this.austria = data.austria
    this.belarus = data.belarus
    this.belgium = data.belgium
    this.bosnia = data.bosnia
    this.bulgaria = data.bulgaria
    this.croatia = data.croatia
    this.cyprus = data.cyprus
    this.czechia = data.czechia
    this.denmark = data.denmark
    this.estonia = data.estonia
    this.finland = data.finland
    this.france = data.france
    this.germany = data.germany
    this.greece = data.greece
    this.hungary = data.hungary
    this.iceland = data.iceland
    this.ireland = data.ireland
    this.italy = data.italy
    this.kosovo = data.kosovo
    this.latvia = data.latvia
    this.liechtenstein = data.liechtenstein
    this.lithuania = data.lithuania
    this.luxembourg = data.luxembourg
    this.malta = data.malta
    this.moldova = data.moldova
    this.monaco = data.monaco
    this.montenegro = data.montenegro
    this.netherlands = data.netherlands
    this.north_macedonia = data.north_macedonia
    this.norway = data.norway
    this.poland = data.poland
    this.portugal = data.portugal
    this.romania = data.romania
    this.russia = data.russia
    this.san_marino = data.san_marino
    this.serbia = data.serbia
    this.slovakia = data.slovakia
    this.slovenia = data.slovenia
    this.spain = data.spain
    this.sweden = data.sweden
    this.switzerland = data.switzerland
    this.turkey = data.turkey
    this.ukraine = data.ukraine
    this.united_kingdom = data.united_kingdom
    this.vatican_city = data.vatican_city

    Attempt.all.push(this)
  }

  renderAttempt(createdTime) {
    let parentUl = document.getElementById('quiz-results-ul');
    let attemptLi = document.createElement('li');
    let prettyDate = createdTime.split('T')[0];
    let prettyTime = createdTime.split('T')[1].split('.')[0];
    attemptLi.innerHTML = `Date: ${prettyDate} Time: ${prettyTime} Score: ${this.total_score}` 
    parentUl.appendChild(attemptLi);
  }

  static displayAllScores(){

    let scoresUl = document.getElementById('all-user-scores');
    fetch('http://localhost:3000/api/v1/attempts')
    .then(resp => resp.json())
    .then(attempts => {
      attempts.data.map(attempt => {
        console.log('in fetch')
        const div = document.createElement('li')
        div.innerHTML = 'User: ' + attempt.attributes.user.username + ' Score: ' + attempt.attributes.total_score;
        scoresUl.appendChild(div); 
      })
    })
  }
}

Attempt.all = [];

