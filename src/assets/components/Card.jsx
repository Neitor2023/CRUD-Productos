import React from 'react';

const Card = ({ dataMovies }) => {
    return (
        <>
            {
                dataMovies.map(datamovie => {
                    return (
                        <div key={datamovie.id} className='card'>
                            <h2>{datamovie.name}</h2>
                            <ul>
                                <li><b>Genero:</b>{datamovie.genre}</li>
                                <li><b>Durantion:</b>{datamovie.duration}</li>
                                <li><b>Fecha de Lanzamiento:</b>{datamovie.release_date}</li>
                            </ul>
                            <button>Editar</button>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Card;