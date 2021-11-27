import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			"x-rapidapi-host": "bayut.p.rapidapi.com",
			"x-rapidapi-key":
				"6c8f962a9emsh6a61ccdf913b97cp184875jsnd9aa9a9a1e37",
		},
	});
	return data;
};
