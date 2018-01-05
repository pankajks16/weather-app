const request = require('request');
const yargs = require('yargs');

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

//console.log(argv.a);
const urlAddress = encodeURIComponent(argv.a);
request({
	url: `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}}`,
	json: true
}, ( error, response, body) => {
	//console.log(response);
	try{
	// console.log(JSON.stringify(body, undefined, 2));
	// console.log(response.statusCode);
	// console.log(body.status);

	// console.log(error);
	// console.log(body);
	console.log("STATUS:" + body.status);
	console.log(` Latitude: ${body.results[0].geometry.location.lat}`);
	console.log(` Longitude: ${body.results[0].geometry.location.lng}`);
	console.log(`Address: ${body.results[0].formatted_address}`); 
	} catch(e) {
		console.log("Unable to fetch the data from the URL");
	}
});