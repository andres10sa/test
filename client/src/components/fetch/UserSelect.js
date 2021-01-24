import React, { useContext } from 'react';
import { FetchContext } from "../../context/FetchContext";


const UserSelect = () => {
    const { setFetchAction } = useContext(FetchContext);

    return (
        <div className="select-container">
            <select className="select-container__select" name="fetch" onChange={(e) => setFetchAction(e.target.value)}>
                <option value="orderName">Ordenar por nombre</option>
                <option value="orderLastname">Ordenar por apellido</option>
                <option value="list">Listado de letras</option>
                <option value="high">Letra más repetida</option>
            </select>
        </div>

    );
}

export default UserSelect;