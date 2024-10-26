export const geo_url = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const current_weather = 'https://api.openweathermap.org/data/2.5';
export const weather_api_key = '3a5e7e8aecb0b3df79e2277dcbd78ee4'; 
export const geoApiOption = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1ee9025edfmsh9dc1e4b58c31ae0p152d06jsn4ae70e0486e3',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(geo_url, geoApiOption);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}