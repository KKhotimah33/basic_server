// include http module
const http = require('http');

// create server 
const server = http.createServer(function(req,res){
	//response 
	res.setHeader('Content-type','application/json');
	res.setHeader('Access-Control-Allow-Origin',"*");
	res.writeHead(200); // menunjukkan status code http 200 yang artinya ok

	//response data
	let dataObj = {"id":123, "name":"Nasrul","email":"nasrul@nurulfikri.co.id"};
	let data = JSON.stringify(dataObj);

	//akhir response
	res.end(data);

});

server.listen(1234,function(){
	console.log('Listening on port 1234');
})