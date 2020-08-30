const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
let DATA;

try {
  DATA = JSON.parse(fs.readFileSync('output.json', 'utf8'));
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log('Data not found!');
    console.log('Please Use following Command---');
    console.log('node importData.js --import');
  } else {
    throw err;
  }
}

app.get('/type/:type', (req, res, next) => {
  let typeOf = DATA.filter(function (item) {
    if (item.type === req.params.type.toUpperCase()) {
      return true;
    }
  });

  res.json(typeOf);
});

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
