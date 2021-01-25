import React, { useState, useContext } from 'react';
import { ShipContext } from "../../context/ShipContext";
import ShipCard from "./ShipCard";
import Spinner from "../Spinner";


const Search = () => {

    const { ship, setPassengers } = useContext(ShipContext);
    const [pass, setPass] = useState(null);
    const [spinner, setSpinner] = useState(false);

    const handleChange = (e) => {
        setPass(e.target.value);
        setSpinner(true);
        setTimeout(() => {
            setPassengers(e.target.value);
            setSpinner(false);
        }, 2000);
    }

    return (
        <div className="search-form">
            <h3 className="search-form__title">Buscar nave</h3>
            <div className="search-form__group">
                <input className="input" type="number" required onChange={handleChange} />
                <label className="label">Capacidad</label>
            </div>
            {!pass ? <p className="text-passengers">Para empezar ingresa el número de pasajeros de la nave</p> : pass && spinner ? (<Spinner />) : <ShipCard ship={ship} />}
        </div>
    );
}

export default Search;