const request = require('request');

request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=estuate%20software%20pvt%20ltd%20yelahanka%20new%20town%20bengaluru',
	json: true
}, ( error, response, body) => {
	//console.log(response);
	console.log((body.results)[0].formatted_address);
});
