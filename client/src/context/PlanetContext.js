import React, { useState, createContext,useEffect } from 'react';
import { getTerrains } from '../helper';

//Context
export const PlanetContext = createContext();

//Provider
const PlanetProvider = (props) => {

    const [planet, setPlanet] = useState(null);//Terreno encontrado según los parametros establecidos
    const [terrains, setTerrains] = useState([]);//Listado de terrenos disponibles
    const [currentTerrain,setCurrentTerrain]=useState('');//Terreno seleccionado para la busqueda

    useEffect(() => {
        getTerrains(setTerrains,currentTerrain,setPlanet);
    }, [currentTerrain]);

    return (
        <PlanetContext.Provider value={{ planet,terrains,setCurrentTerrain,currentTerrain }}>
            {props.children}
        </PlanetContext.Provider>
    );
}

export default PlanetProvider;





