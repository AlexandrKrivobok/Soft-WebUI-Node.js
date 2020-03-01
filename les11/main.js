//COOKIE
const dom = {
  inp : document.querySelector('#inp-info'),
  btn : document.querySelector('#btn-memo'),
};

dom.btn.addEventListener('click', () => {
  Cookie.set(Date.now(), dom.inp.value, 2);

  const arr = localStorage.getItem('inputs') || [];
  arr.push(dom.inp.value);
  localStorage.setItem('inputs', JSON.stringify(arr));
  dom.inp.value = '';
});

class Cookie {
  static del(cname) {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00UTC; path=/;`;
    return true;
  }

  static get(cname) {
    const name = `${cname}`;
    const ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      c = c.trim();
      if (c.indexOf(name) == 0) {
        return c.slice(name.length);
      }
    }

    return '';
  }
  
  static set(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  }
}

//LocalStorage
localStorage.setItem('name', 'Nick');

//SessionStorage


//IndexedDB