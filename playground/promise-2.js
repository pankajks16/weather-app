const request = require('request');

var geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {
	var encodedAddress = encodeURIComponent(address);
	
	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}}`,
		json: true	
	}, ( error, response, body) => {
		console.log(body);
		if (error) {
			reject('Error occured from server side ... please check the URL too !!!');
		} else if( body.status === 'ZERO_RESULTS') {
			reject(' The address you are looking for is not available !!! Please check the address');
		} else if( body.status === 'OK') {
			resolve({
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			});
		}
	});
	});
};

geocodeAddress('560064').then((result) => {
	console.log(JSON.stringify(result, undefined, 2));
}, (err) => {
	console.log(err);
});
