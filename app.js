const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs.options({
	address: {
		demand: true,
		alias: 'a',
		describe: 'Enter the address of the required location',
		string: true
	}
})
.help()
.alias('help', 'h')
.argv;


console.log(argv);

geocode.geocodeAddress(argv.a, ( error, results) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Address : ' + results.address);
		weather.getWeather(results.latitude, results.longitude, ( error, results) => {
			if (error) {
				console.log(error);
			} else {
				console.log(JSON.stringify(results, undefined, 2));
				console.log(`The temperature currently is ${results.temperature} and it is a ${results.summary} kind of day ... `);
			}
		});
	}
});




