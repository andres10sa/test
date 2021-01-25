import React, { useContext } from "react";
import Users from "../components/fetch/Users";
import Select from "../components/fetch/UserSelect";
import LettersList from "../components/fetch/LettersList";
import { FetchContext } from "../context/FetchContext";


const UsersView = () => {
    const { fetchAction, users } = useContext(FetchContext);

    return users.length ? (
        <div className="fetch-view">
            <Select />
            <h3 className="cards-container__title">Fetch</h3>
            {fetchAction === 'orderName' || fetchAction === 'orderLastname' ? (<Users />) : (<LettersList />)}
        </div>
    ) : <div className='not-fetch'></div>;
};

export default UsersView;
