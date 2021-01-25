const axios = require("axios");
const fs = require("fs");

let data_test={results:[]};

// const getUsers = async () => {
//     try {
//         const { data: { results } } = await axios.get("https://randomuser.me/api/?results=10");
//         data.results = results;
//     } catch (error) {
//         console.log('GET USERS ERROR:', error)
//     }
// }

const getData = async (url) => {
    try {
        const { data: { results } } = await axios.get(url);
        data_test.results=[...data_test.results,...results]
        fs.writeFileSync("test.json", JSON.stringify(data_test));
    } catch (error) {
        console.log('GET USERS ERROR:', error)
    }
}
getData('https://randomuser.me/api/?results=10'); //Obtener data de los usuarios
getData('https://swapi.dev/api/starships/'); //Obtener data de las naves
getData('https://swapi.dev/api/planets/'); //Obtener data de los planetas



