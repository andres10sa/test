import React, { createContext, useState, useEffect } from 'react';
import { getUsers } from "../helper";

//Context
export const FetchContext = createContext();

//Provider
const FetchProvider = (props) => {

    //State
    const [users, setUsers] = useState([]);//Listado de users que provienen de la API
    const [fetchAction, setFetchAction] = useState("orderName");//Acción que modifica la vista, por defecto se ordenan los usuario por nombre
    const [letters, setLetters] = useState([]);//Array con el listado de letras y su respectivo conteo
    const [higher, setHigher] = useState([]);//Valor de la letra más repetida


    useEffect(() => {
        getUsers(fetchAction, setUsers, setLetters, setHigher);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchAction])

    return (
        <FetchContext.Provider value={{ fetchAction, setFetchAction, users, setUsers, letters, higher }}>
            {props.children}
        </FetchContext.Provider>
    )
}

export default FetchProvider;