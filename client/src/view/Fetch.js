import React, { useContext } from "react";
import Users from "../components/fetch/Users";
import Select from "../components/fetch/UserSelect";
import LettersList from "../components/fetch/LettersList";
import { FetchContext } from "../context/FetchContext";


const UsersView = () => {
    const { fetchAction } = useContext(FetchContext);
    return (
        <div className="fetch-view">
            <Select />
            <h3 className="cards-container__title">Fetch</h3>
            {fetchAction === 'orderName' || fetchAction === 'orderLastname' ? (<Users />) : (<LettersList />)}

        </div>
    );
};

export default UsersView;
