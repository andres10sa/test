import React, { useContext } from 'react';
import { FetchContext } from "../../context/FetchContext";



const List = () => {

    const { letters, higher,fetchAction } = useContext(FetchContext);

    return (
        <div className="letters-table">
            <div className="table">
                <div className="table__header">
                    <div className="table__header__column">Letra</div>
                    <div className="table__header__column">Cantidad</div>
                </div>
                <div className="table__body">
                    {letters.map((row, index) => (
                        <div className={`table__body__row dark ${index % 2 === 0 ? 'dark' : 'light'} ${row['B'] === higher && fetchAction==='high' ? 'higher' : ''}`} key={`${row['A']}${index}`}>
                            <div className="table__body__row__item bold">{row['A']}</div>
                            <div className="table__body__row__item ">{row['B']}</div>
                        </div>
                    )
                    )}

                </div>
            </div>
        </div>
    );
}

export default List;