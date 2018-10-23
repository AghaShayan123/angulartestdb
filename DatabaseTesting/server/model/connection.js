var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'testingdb'
});

connection.connect((err) => {
  if(err){
          throw err;
  }
  console.log('MySql connected ......');
});

module.exports = connection;