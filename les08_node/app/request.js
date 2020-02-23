// fetch({url : 'localhost:4000', method: 'POST', body: JSON.stringify({})})
//   .then(data => console.log(data));

const axios = require('axios');

axios.post('http://localhost:4000', { name: 'Alan'})
  .then(res => console.log(res.data));