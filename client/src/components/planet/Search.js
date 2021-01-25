import React, { useState, useContext } from 'react';
import { PlanetContext } from "../../context/PlanetContext";
import { removeSpace } from "../../helper";
import PlanetCard from "./PlanetCard";
import Spinner from "../Spinner";



const Search = () => {

    const { terrains, setCurrentTerrain, planet } = useContext(PlanetContext);
    const [search, setSearch] = useState(false);
    const [spinner, setSpinner] = useState(false);

    const handleChange = (e) => {
        setSearch(true);
        setSpinner(true);
        setTimeout(() => {
            setCurrentTerrain(e.target.value);
            setSpinner(false);
        }, 2000);
        if(!e.target.value){
            setSearch(false)
        }
    }
    return (
        <div className="search-form">
            <h3 className="search-form__title">Buscar Planeta</h3>
            <div className="search-form__group">
                <select className="select" onChange={handleChange}>
                    <option value="">Selecciona un terreno</option>
                    {terrains?.map((ele, index) => <option key={`${ele}${index}`} value={ele}>{removeSpace(ele)}</option>)}
                </select>
            </div>
            {!search ? <p className="text-passengers">Para buscar un planeta selecciona un terreno</p> : search && spinner ? (<Spinner />) : <PlanetCard planet={planet} />}

        </div>
    );
}

export default Search;