import axios from 'axios';

const BASE_URL = 'youtube-v31.p.rapidapi.com';


const options = {
	port: null,
	path: '/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};


export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}

// const req = http.request(options, function (res) {
// 	const chunks = [];

// 	res.on('data', function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on('end', function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });

// req.end();