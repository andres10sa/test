import React from 'react';


const ShipCard = ({ ship }) => {

    return ship ? (
        <div className="card">
            <figure>
               <a target="blank" href={ship?.url}><img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/11/ala.jpg?itok=UCVk86Hj" alt="nave" /></a> 
            </figure>
            <section className="details">
                <div className="min-details">
                    <h1>{ship?.name}</h1>
                    <h1 className="price">{!isNaN(parseInt(ship?.cost_in_credits)) && '$'} {ship?.cost_in_credits}</h1>
                </div>

                <div className="options">
                    <div className="options-size">
                        <h1>Pasajeros</h1>
                        <ul>{ship?.passengers}</ul>
                    </div>

                    <div className="options-colors">
                        <h1>Velocidad</h1>
                        <ul> {ship?.max_atmosphering_speed}</ul>
                    </div>
                    <div className="options-colors">
                        <h1>Combustible</h1>
                        <ul> {ship?.consumables}</ul>
                    </div>
                </div>

            </section>
        </div>
    ) : (<div className='no-results'>
        <img className='img-results' src="https://unbxd.com/wp-content/uploads/2014/02/No-results-found.jpg" title="No encontramos la nave" alt="Not found" />
    </div>

        );
};

export default ShipCard;
