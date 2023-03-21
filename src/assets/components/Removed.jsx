import React from 'react';

const Removed = ({cancelRemoved}) => {
    return (
        <div className='container'>
            <div className='dele'>
                <h3>PRODUCTO ELIMINADO</h3>
                <button className="btn_delet" onClick={() => cancelRemoved(false)}>Aceptar</button>
                {/* <button className="btn_delet" onClick={() => deleProduct(prodDele.id, false)} >Aceptar</button> */}
                <button className="btn_close" onClick={() => cancelRemoved(false)} ><strong className='x'>X</strong></button>
            </div>
        </div>
    );
};

export default Removed;