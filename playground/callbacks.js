console.log('Callbacks demo started ....');

var func = (name, callback) => {
	console.log(`Welcome to the demo .... Hello : ${name}`);

	console.log('executed main function ... Going to execute callback function now ');


	setTimeout(()=> { callback(name); }, 2000);
	
	console.log('Finished call back function and finally ended our main function ...');
};


var demo = (arg) => {
	console.log('The passed arg is :' + arg);
	console.log('Callabck function is being executed ...');

};


func('PANKAJ', demo);
