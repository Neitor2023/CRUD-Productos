import React from 'react';

const ConfDelete = ({ prodDele, cancelDele, deleProduct }) => {
    return (
        <div className='container'>
            <div className='dele'>
                <h3>DESEAS ELIMINAR <br /> {prodDele.name} ?</h3>
                <h4>Esta operación es irreversible</h4>
                <button className="btn_delet" onClick={() => deleProduct(prodDele.id, false)} >Eliminar</button>
                <button className="btn_close" onClick={() => cancelDele(false)} ><strong className='x'>X</strong></button>
            </div>
        </div>
    );
};

export default ConfDelete;