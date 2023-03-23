import React from 'react';

const ConfDelete = ({ prodDele, cancelDele, deleProduct }) => {
    return (
        <div className='container'>
            <div className='dele'>
                <h2>DESEAS ELIMINAR ?</h2><br />
                <h3>{prodDele.name}, {prodDele.category} </h3>
                <h3>Esta operación es irreversible</h3>
                <button onClick={() => deleProduct(prodDele, false)} >Eliminar</button>
                <button className="btn_close" onClick={() => cancelDele(false)} ><strong className='x'>X</strong></button>
            </div>
        </div>
    );
};

export default ConfDelete;