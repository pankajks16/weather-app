const request = require('request');

var geocodeAddress = (address) => {
	var encodedAddress = encodeURIComponent(address);

	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}}`,
		json: true	
	}, ( error, response, body) => {
		if (error) {
			console.log('Some error has occured !!!!!');
			console.log(error);
		} else if( body.status === 'ZERO_RESULTS') {
			console.log(' The address you are looking for is not available !!! Please check the address');
		} else if( body.status === 'OK') {
			console.log("STATUS:" + body.status);
			console.log(` Latitude: ${body.results[0].geometry.location.lat}`);
			console.log(` Longitude: ${body.results[0].geometry.location.lng}`);
			console.log(`Address: ${body.results[0].formatted_address}`); 
		}
	});

};

module.exports = {
	geocodeAddress
};