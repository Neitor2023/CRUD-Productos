import React from 'react';

const ConfDelete = ({ prodDele, cancelDele, deleProduct }) => {
    return (
        <div className='container_confDele'>
            <div className='dele'>
                <h3>DESEAS ELIMINAR {prodDele.name} ?</h3>
                <h4>Esta operación es irreversible</h4>
                <button onClick={() => deleProduct(prodDele.id, false)} >Eliminar</button>
                <button onClick={() => cancelDele(false)} >Cancelar</button>
            </div>
        </div>
    );
};

export default ConfDelete;