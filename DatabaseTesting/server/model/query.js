var connection = require('./connection')

exports.getAll = function(done){
    connection.get(connection.READ, function(err, connection){
        if (err) throw err;
        connection.query('SELECT * FROM sqltest', function (err, rows) {
            if (err) return done(err)
            done(null, rows)
    })
  })
}

router.get('/', (req, res, next)=>{

    createTable((err, rows)=>{
        if(err) res.send(err);
        else
        res.send(rows);
    });

});