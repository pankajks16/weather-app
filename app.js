//const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');

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

geocode.geocodeAddress(argv.a);