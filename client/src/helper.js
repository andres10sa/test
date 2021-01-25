import axios from "axios";

const url = process.env.REACT_APP_API_TEST;
//FETCH EXCERCISE

//Función que ordena el array de usuarios por la propiedad que se le asigne como argumento y que depende de la opción escogida
export const orderArray = (array, property, subProperty) => {
    const alphabeticalOrder = array?.sort((a, b) => {
        if (a[property][subProperty].toLowerCase() < b[property][subProperty].toLowerCase()) {
            return -1;
        }
        if (a[property][subProperty].toLowerCase() > b[property][subProperty].toLowerCase()) {
            return 1;
        }
        return 0;
    })
    return alphabeticalOrder;
}


//Obtener usuarios de la API
export const getUsers = async (fetchAction, setUsers, setList, setHigher) => {

    try {
        //Listado de usuario obtenidos de la API
        const { data } = await axios.get(url);
        const users = extractData(data, 'gender');//Función que extrae la data de los usuarios

        const property = fetchAction === 'orderLastname' ? 'last' : 'first';//Determina la propiedad por la cual se van a ordenar los usuarios
        setUsers(orderArray(users, 'name', property));//Guarda los usuarios en el state
        setListLetters(users, setList, setHigher);//Función que realiza el conteo de cada una de las letras 
    } catch (error) {
        console.log("Hubo un error: ", error)
    }
};



const setListLetters = async (users, setList, setHigher) => {


    let list = [];//Array que almacena el listado de letras de los nombres y apellidos de los usuarios
    let objectList = {};//Objeto que almacena las letras con su respectivo conteo

    //Esta función recorre el array formado por cada propiedad first y last de cada objeto formado en el bucle de abajo y los almacena en un array llamado list
    const saveLetter = (array, list) => {
        array.forEach((letter) => {
            const lowercase = letter.toLowerCase();
            lowercase !== ' ' && list.push(lowercase)
        })
    }


    users.forEach(user => {
        const arrayName = user.name.first.split('');//Cada nombre de cada objeto se convierte en un array que luego se pasa como argumento del a función saveLetter
        const arrayLastName = user.name.last.split('');//Cada apellido de cada objeto se convierte en un array que luego se pasa como argumento del a función saveLetter
        saveLetter(arrayName, list);
        saveLetter(arrayLastName, list);
    })

    //Este bucle almacena como propiedades las letras de los nonbres y apellidos de los usuarios y su respectivo conteo en el objeto objectList
    list.forEach(letter => {
        if (objectList[letter]) {
            objectList[letter] = objectList[letter] + 1
        } else {
            objectList[letter] = 1
        }
    })

    //Array que almacena los objetos llave valor con la palabra y el numero de veces que se repite
    let lettersAccount = [];
    for (const property in objectList) {
        lettersAccount.push({ ['A']: property, ['B']: objectList[property] })

    }
    lettersAccount.sort((a, b) => a['A'] < b['A'] ? -1 : a['A'] > b['A'] ? 1 : 0);//Ordena el listado de letras en orden ascendente

    //Calcular el numero de veces que aparece la letra más repetida
    let mayor = 0;
    lettersAccount.forEach(ele => mayor = ele['B'] > mayor ? ele['B'] : mayor);
    setHigher(mayor);
    setList(lettersAccount);
}


//SHIP EXCERCISE
//Función que hace las busqueda de la nave según los parametros establecidos en la busqueda
export const searchShip = async (setShip, passengers) => {
    const { data } = await axios.get(url);
    const ships = extractData(data, 'max_atmosphering_speed');

    let fast = 0;//Variable que almacenará la velocidad de la nave más rápida

    //El primer filtro busca las naves que cumplan con la capacidad de pasajeros establecida como parametro y con una capacidad de combustible superior o igual una semana
    const capacityShips = ships?.filter(ele => parseInt(ele?.passengers) === parseInt(passengers) && !ele?.consumables.includes('days'));

    //Si más de una nave cumple con las condiciones se aplica el if, de lo contrario el else.
    if (capacityShips?.length > 1) {
        //El segundo filtro consiste en determinar la nave más veloz en caso de haber varias
        //Hay velocidades que vienen con unidades, por ejemplo 1000 km, para ello toca extraer dicha parte y comparar unicamente los valores númericos
        capacityShips.forEach(ele => {
            let numberSpeed = '';//Variable que almacenará el valor numerico de la velocidad de cada nave
            let speed = ele.max_atmosphering_speed;//Valor de la velocidad de cada nave
            speed.split('').forEach(ele => numberSpeed += !isNaN(Number(ele)) ? ele : null);//Extrae las unidades de las velocidades que las tengan
            speed = numberSpeed;//Se actualiza el valor de la velocidad de cada nave incluyendo unicamente el valor númerico
            fast = parseInt(speed) > parseInt(fast) ? speed : fast;//La variable fast se setea con el valor de la nave más rápida
        });
        //Este find se encarga de retornar la nave más rápida,evaluando la posiblidad de que exista o no esta propiedad en el objeto (algunos nave viene con n/a como velocidad)
        setShip(capacityShips?.find(ele => ele?.max_atmosphering_speed === fast));
    } else {
        setShip(capacityShips[0])
    }
}


//FUNCIÓN PARA SEPARAR LA DATA
export const extractData = (array, property) => {
    let data = [];
    array.forEach(ele => {
        if (ele.hasOwnProperty(property)) {
            data.push(ele)
        }
    })
    return data;
}


//PLANET

export const getTerrains = async (setTerrains, currentTerrain, setPlanet) => {
    const { data } = await axios.get(url);
    const planets = extractData(data, 'terrain');
    let terrainTypes = [];
    planets.forEach(ele => {
        const terrain = ele.terrain;
        let data = terrain.includes(',') ? terrain.split(',') : [terrain];
        terrainTypes = [...terrainTypes, ...data]
    });
    if (currentTerrain) {
        const current = planets?.filter(ele => ele.terrain.includes(currentTerrain))
        if (current.length > 1) {
            let maxPopulation = 0;
            current.forEach(ele => {
                const population = parseInt(ele.population);
                if (!isNaN(population)) {
                    if (population > maxPopulation) {
                        maxPopulation = population;
                    }
                }
            })
            const selectedPlanet = current.find(ele => parseInt(ele.population) === parseInt(maxPopulation));
            setPlanet(selectedPlanet);

        } else {
            setPlanet(current[0])
        }
    } else {
        setPlanet(null);
    }


    setTerrains(terrainTypes);
}


//Función que elimia los espacios de los terrenos
export const removeSpace = (name) => {
    if (name[0] === ' ') name = name.slice(1)
    return name[0].toUpperCase() + name.slice(1);
}