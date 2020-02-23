const myLink = 'https://randomuser.me/api/?results=1000';
let result = [];

function loadUsers(link) {
  const req = new XMLHttpRequest();
  req.onload = function() {
    if (this.status == 200) {
      showInfo(JSON.parse(this.responseText).results);
    } else {
      console.log('Ошибка загрузки данных');
    }
  }

  req.open('GET', link);
  req.send();
}

function showInfo(data) {
  let youngestCounter = 999;
  let youngestStr = '';
  
  let oldestCounter = 0;
  let oldestStr = '';

  let menCounter = 0;
  let womenCounter = 0;
  let menTotalAge = 0;
  let womenTotalAge = 0;

  let cities = {};
  let cityUsersMax = 0;
  let maxUsersCity = '';

  data.forEach(e => {
    if (youngestCounter > e.dob.age) {
      youngestCounter = e.dob.age;
      youngestStr = `1. The youngest User: age: ${e.dob.age}, name: ${e.name.first}, lastname: ${e.name.last}`;
    }

    if (oldestCounter < e.dob.age) {
      oldestCounter = e.dob.age;
      oldestStr = `2. The oldest User: age: ${e.dob.age}, name: ${e.name.first}, lastname: ${e.name.last}`;
    }

    if (e.gender === 'male') {
      menCounter++;
      menTotalAge += e.dob.age;
    }

    if (e.gender === 'female') {
      womenCounter++;
      womenTotalAge += e.dob.age;
    }

    if (!cities[e.location.city]) {
      cities[e.location.city] = 1;
    } else {
      cities[e.location.city] += 1;
    }

    for (city in cities) {
      if (cities[city] > cityUsersMax) {
        cityUsersMax = cities[city];
        maxUsersCity = `The city of max Users count is: ${city}, Users count in it is: ${cityUsersMax}`;
      };
    }
  });

  let result = `${youngestStr}
${oldestStr}
3. men count is: ${menCounter}
4. women count is: ${womenCounter}
5. men avarage age is: ${menTotalAge/data.length}
6. women avarage age is: ${womenTotalAge/data.length}
7. ${maxUsersCity}`

  document.getElementById('pre').append(result);
}

loadUsers(myLink);