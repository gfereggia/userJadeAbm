var HttpStatus = require('http-status-codes');
 
exports.list = function(req, res){
	
	res
	    .status(HttpStatus.NOT_IMPLEMENTED)
	    .send({
	        error: HttpStatus.getStatusText(HttpStatus.NOT_IMPLEMENTED)
	    });
	 
	res
	    .status(HttpStatus.INTERNAL_SERVER_ERROR)
	    .send({
	        error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
	    });

};