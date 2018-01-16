const yargs = require('yargs');

var argv = yargs.options({ 
	num1: {
		demand: true,
		alias: 'a',
		describe: 'Enter the first number'
	},
	num2: {
		demand: true,
		alias: 'b',
		describe: 'Enter the second number'
	}
})
.help()
.argv;


// console.log(argv.a+argv.b);
// console.log(argv.a,argv.b);


var asyncAdd = (a,b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a + b);
			} else {
				reject('Enter the proper number format ...');
			}
		}, 2000);
	});
};


asyncAdd(argv.a,argv.b).then((success) => {
	console.log('Sucess addition is: ', success);
}, (fail) => {
	console.log('Error', fail);
});







// var somePromise = new Promise((resolve, reject) => {
// 	resolve('Hi this is success handler running ....');
// 	// reject('Hi this is error handler running ....');
// });

// somePromise.then((message) => {
// 	console.log('Success: ' + message);
// }, (error) => {
// 	console.log('Error: ' + error);
// });