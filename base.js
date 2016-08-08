var path = process.cwd();
var jsonResult = require(path+'/result');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host    :'localhost',
    port : 3306,
    user : 'root',
    database:'study'
});


exports.Login = function(res, id, password){

	connection.query("SELECT COUNT(*) AS cnt FROM user WHERE id = ? AND password = ?", [id, password], function(err, rows, fields) {  
		if(!err){
			var json_count = rows[0];
			var count = json_count.cnt;
				 if (count == 1){
				    	connection.query("SELECT * FROM user WHERE id = ? AND password = ?", [id, password], function(err, rows, fields) {  
				    		if(!err){
							res.send(jsonResult.success(rows[0]));
				    		}else{
				    			res.send(jsonResult.db_error());
				    		}
				    	});	
				 }else{
				 	res.send(jsonResult.null_data());
				 }
		}else{
			res.send(jsonResult.db_error());
		}
	});	
};
