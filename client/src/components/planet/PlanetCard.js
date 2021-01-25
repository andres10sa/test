import React from 'react';


const ShipCard = ({ planet }) => {


    return planet ? (
        <div className="card">
            <figure>
                <a target="blank" href={planet?.url}><img src="https://www.tendencias21.es/photo/art/grande/8030293-12502202.jpg?v=1437035337" alt="nave" /></a>
            </figure>
            <section className="details">
                <div className="min-details">
                    <h1>Nombre</h1>
                    <h1>{planet.name}</h1>
                </div>

                <div className="options">
                    <div className="options-size">
                        <h1>Diametro</h1>
                        <ul>{planet?.diameter} Km</ul>
                    </div>

                    <div className="options-colors">
                        <h1>{planet?.terrain.includes(',')?'Terrenos':'Terreno'}</h1>
                        <ul>{planet?.terrain[0].toUpperCase()+planet.terrain.slice(1)}</ul>
                    </div>
                    <div className="options-colors">
                        <h1>Población</h1>
                        <ul>{planet?.population === 'unknown' ? 'Desconocida' : planet.population + ' Habitantes'} </ul>
                    </div>
                </div>

            </section>
        </div>
    ) : (<div className='no-results'>
        <img className='img-results' src="https://unbxd.com/wp-content/uploads/2014/02/No-results-found.jpg" title="No encontramos el planeta :c" alt="Not found" />
    </div>);
};

export default ShipCard;
