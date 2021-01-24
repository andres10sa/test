import axios from "axios";

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
export const getUsers = async (fetchAction, setUsers, setList,setHigher) => {
    const url = process.env.REACT_APP_API
    try {
        //Listado de usuario obtenidos de la API
        const { data } = await axios.get(url);
        const property = fetchAction === 'orderLastname' ? 'last' : 'first';//Determina la propiedad por la cual se van a ordenar los usuarios
        setUsers(orderArray(data, 'name', property));//Guarda los usuarios en el state
        setListLetters(data, setList,setHigher);//Función que realiza el conteo de cada una de las letras 
    } catch (error) {
        console.log("Hubo un error: ", error)
    }
};



const setListLetters = async (users, setList,setHigher) => {


    let list = [];//Array que almacena el listado de letras de los nombres y apellidos de los usuarios
    let objectList = {};//Objeto que almacena las letras con su respectivo conteo

    //Esta función recorre el array formado por cada propiedad first y last de cada objeto formado en el bucle de abajo y los almacena en un array llamado list
    const saveLetter = (array, list) => {
        array.forEach((letter) => {
            const lowercase = letter.toLowerCase();
            list.push(lowercase)
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
        lettersAccount.push({['A']:property,['B']:objectList[property]})

    }
    lettersAccount.sort((a,b)=> a['A']<b['A'] ? -1 :a['A']>b['A'] ? 1 :0);//Ordena el listado de letras en orden ascendente
    
    //Calcular el mayor valor de repetición entre todas las letras
    let mayor=0;
    lettersAccount.forEach(ele=>{
        if(ele['B']>mayor){
            mayor=ele['B']
        }
    })
    setHigher(mayor);
    setList(lettersAccount);

}