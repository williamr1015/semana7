const API = 'https://api.themoviedb.org/3/list/50941077760ee35e1500000c?api_key=f6128a0b38d785049513f4d3208e92c5';

const getData = async(id) => {

    const apiURL = id ? `${API}${id}` : API;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch Error', error);
    };
};

export default getData;