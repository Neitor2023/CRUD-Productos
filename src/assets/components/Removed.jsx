import React from 'react';

const Removed = ({removeData, cancelRemoved}) => {
    return (
        <div className='container'>
            <div className='dele'>
                <h3>EL PRODUCTO</h3>
                <h2> {removeData.name} </h2>
                <h2> {removeData.category} </h2>
                <h4>HA SIDO ELIMINADO CON EXITO</h4>
                <button onClick={() => cancelRemoved(false)}>Aceptar</button>
                {/* <button className="btn_delet" onClick={() => deleProduct(prodDele.id, false)} >Aceptar</button> */}
                <button className="btn_close" onClick={() => cancelRemoved(false)} ><strong className='x'>X</strong></button>
            </div>
        </div>
    );
};

export default Removed;