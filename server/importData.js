const csvtojson = require('csvtojson');
const fs = require('fs');
const convertNumberToMonth = require('./date');

const fetchDataAndConvert = () => {
  csvtojson()
    .fromFile('Data.csv')
    .then((json) => {
      const newArrayOfObj = json.map((item) => {
        let month = item['Date'].split('/')[1] * 1;
        return {
          indessx: item['?Index'],
          type: item['Type'],
          number: item['Number'],
          month: convertNumberToMonth(month - 1),
          date: item['Date'],
        };
      });

      fs.writeFileSync(
        'output.json',
        JSON.stringify(newArrayOfObj),
        'utf-8',
        (err) => {
          if (err) return err;
        }
      );
      console.log('Data successfully loaded!');
    });
};

if (process.argv[2] === '--import') {
  fetchDataAndConvert();
}
