var Request = require("request");

exports.list = function(req, res){
    
    Request.get("https://www.bancoprovincia.com.ar/Principal/Dolar", (error, response, body) => {
    
        if(error) {
            return console.dir(error);
        }

        var obj = JSON.parse(body);
        
        obj.size = function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };

        for (var i = 0; i < obj.size(obj) - 1; i++) {
            console.dir(obj[i]);
        }

        //console.log(obj);
        //console.dir(obj.size(obj) - 1);
         res.json(obj);
    });
};