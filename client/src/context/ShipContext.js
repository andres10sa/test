import React, { createContext, useState, useEffect } from 'react';
import { searchShip } from "../helper";




//Context
export const ShipContext = createContext();

//Provider
const ShipProvider = (props) => {

    //State
    const [ship, setShip] = useState({});
    const [passengers, setPassengers] = useState(null);

    useEffect(() => {
        passengers>=0 && searchShip(setShip, passengers);
    }, [passengers])

  

    return (
        <ShipContext.Provider value={{ ship, setPassengers }}>
            {props.children}
        </ShipContext.Provider>
    )
}

export default ShipProvider;