const request = require('request');

// a2a4b8062b34570b46a294a3d9c98672 API key for weather api
// URL format: 
// API Request Types

// Forecast Request
//       https://api.darksky.net/forecast/[key]/[latitude],[longitude]

var getWeather = ( lat, lng, callback) => {
	request({
		url: 'https://api.darksky.net/forecast/a2a4b8062b34570b46a294a3d9c98672/'+lat+','+lng;
		json: true
	}, ( error, response, body) => {
		if ( !error && response.statusCode === 200 ) {
			callback(undefined, {
			Temperature: body.currently.temperature,
			Status code: response.statusCode;
			})
		} else {
			callback('Some error occured from server side ...');
		}
	});
};



