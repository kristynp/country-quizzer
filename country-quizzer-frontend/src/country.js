class Country {
  constructor(country, countryAttributes) {
    this.id = country.id;
    this.name = countryAttributes.name;
    this.map_id = countryAttributes.map_id;
    Country.all.push(this);
  }

  renderCountry() {
    let wordbankUl = document.getElementById('wordbank-ul');
    let li = document.createElement('li');
    li.innerHTML = this.name;
    wordbankUl.appendChild(li);
  }

}

Country.all = [];