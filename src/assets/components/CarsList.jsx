import React from 'react';
import '/src/assets/components/CarsList.css'

const CarsList = ({carsList}) => {

    const orderedList = carsList.sort((a, b) => a.brand.localeCompare(b.nrand))

    return (
        <div>
            <h2>Listado de vehiculos</h2>
            <p><strong>Cantidad de Registros: </strong>{carsList.length}</p>
            <button >+Nuevo Registro</button>
            <ul>
                {
                    orderedList.map( car => (
                        <li key={Date.now} className='cardList'>
                            <h4><span>Brand : </span>{car.brand}</h4>
                            <h4><span>Model : </span>{car.model}</h4>
                            <h4><span>Year : </span>{car.year}</h4>
                            <h4><span>Price : </span>{car.price}</h4>
                        </li>
                    ))
                }                
            </ul>
        </div>
    );
};
export default CarsList;
{/* <h3>{usersList[0]?.brand}</h3>
<h3>{usersList[0]?.model}</h3>
<h3>{usersList[0]?.color}</h3>
<h3>{usersList[0]?.year}</h3>
<h3>{usersList[0]?.price}</h3> */}
