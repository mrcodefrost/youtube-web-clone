// import axios from 'axios';

// const BASE_URL = 'youtube-v31.p.rapidapi.com';


// const options = {
// 	port: null,
// 	// path: '/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50',
// 	headers: {
// 		'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
// 		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
// 	}
// };


// export const fetchFromAPI = async (url) => {
//     const {data} = await axios.get(`${BASE_URL}/${url}`, options);
//     return data;
// }

import axios from 'axios';
// const axios = require('axios');

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const fetchFromAPI = async (url) => {
	try {
		const { data } = await axios.get(`${BASE_URL}/${url}`, options);
		console.log(data);
		return data;
		
	} catch(error) {
		console.log(error);
	}
};