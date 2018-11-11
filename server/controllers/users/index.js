const db = require('../../utils/database');

/*
* The code that goes here is what actually connects to the database and runs queries
* */

db.connect(function(err) {
    if (err) throw err;

    //takes in name, email, password; could add more variables later if needed
    function create(name, emailAddress, password) {
        db.query("INSERT INTO pollinate VALUES ?", [name, emailAddress, password], function(err, result, fields) {
            if(err) throw err;
            console.log(result);
        }); //"create" query
    }

    function getById(id){
        db.query("SELECT * FROM pollinate WHERE accountID = ?", [id], function(err, result, fields){
            if(err) throw err;
            console.log(result);
        }); //selects by id
    }

    function getAll() {
        db.query("SELECT * FROM pollinate", function(err, result, fields) {
            if(err) throw err;
            console.log(result);
        }); //getAll
    }
});


