const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // fs.readFile('./data.json', (err, data) => {
  //   if (err) console.error(err);
  //   // console.log(data);
  //   // console.log(data.toString('utf8'));

  //   res.end(data.toString('utf8'));
  // });

  // const dataJSON = fs.readFileSync('./data.json'); // плохо, потому что синхронный код
  let data = '';

  req.on('data', chunk => {
    console.log(chunk);
    data += chunk.toString('utf8');
  });

  req.on('end', () => {
    res.end(data);
  });

});

server.listen( 4000, () => console.log('Server has started'));