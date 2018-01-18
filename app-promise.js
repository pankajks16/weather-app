const yargs = require('yargs');
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}}`;

axios.get(geocodeUrl).then((response) => {
	// console.log(JSON.stringify(response, undefined, 2));  // dont use --- 
														//it throws: TypeError: Converting circular structure to JSON
	if (response.data.status === 'ZERO_RESULTS') {
		throw new Error('Unable to find the address ... Plz check the address');
	} else if (response.data.status === 'OVER_QUERY_LIMIT') {
		throw new Error('Api temporary busy ... retry again for the response to come back');
	}

	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lng;
	var weatherUrl = 'https://api.darksky.net/forecast/a2a4b8062b34570b46a294a3d9c98672/'+lat+','+lng;
	console.log(response.data.results[0].formatted_address);	

	return axios.get(weatherUrl);
}).then((response) => {
	var temperature = response.data.currently.temperature;
	var weatherSummary = response.data.currently.summary;

	console.log(`The current temperature is ${temperature} °F and its mostly like ${weatherSummary}`); 
}).catch((e) => {
	if (e.code === 'ENOTFOUND') {
		console.log('The servers are unable to process the request....');
	} else {
		console.log(e.message);
	}
});
