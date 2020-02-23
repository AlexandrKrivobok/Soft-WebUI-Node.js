function loadData(link = './data.csv', isJSON = false) {
  // создание объекта AJAX

  const aja = new XMLHttpRequest();

  // настройка получения данных

  // aja.onreadystatechange = function() {
  //   if (this.readyState === 4 && this.status === 200){
  //     console.log(`readyState: ${this.readyState},
  //     status: ${this.status}`);
  //     console.log(this.responseText);
  //   }
  // }

  aja.onload = function() {
    if(this.status === 200) {
      showData(this.responseText, isJSON);
    }
  }

  // Настройка отправки данных

  aja.open('GET', link);

  // Отправка

  aja.send();
}

function showData(data, isJSON){
  const phones = isJSON? JSON.parse(data): data.split(/\n/).map(str => str.split(';'));
  console.table(phones);
}

loadData('./data.json', true);
loadData('https://randomuser.me/api/', true);