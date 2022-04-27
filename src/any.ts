import axios from 'axios';
export {};

const url: string =
	'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

(async () => {
	const res = await axios.get(url);
	// const res = {
	// 	data: [{ id: 'aa', title: 4, description: true }],
	// };
	interface Article {
		id: number;
		title: string;
		description: string;
	}
	const data: Article[] = res.data;
	console.log(data);
})();
