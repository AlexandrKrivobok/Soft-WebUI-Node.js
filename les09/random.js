console.log('hw');
function getUser(){
  info.value = 'Происходит загрузка пользователя';
  loadUser();
}

function loadUser(){
  const aja = new XMLHttpRequest();
  aja.onload = function(){
    if (this.status == 200) {
      showUser(JSON.parse(this.responseText));
    } else {
      info.value = 'Ошибка загрузки данных'
    }
  }

  aja.open('GET', 'https://randomuser.me/api/');
  aja.send();
}

function showUser(data){
  info.value = `${data.results[0].name.first} ${data.results[0].dob.age}`;
  console.log(data);
}