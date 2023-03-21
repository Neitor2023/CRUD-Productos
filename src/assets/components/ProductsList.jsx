import './ProductsList.css'
const ProductsList = ({ products, deleProduct, selesctProd, setSwFormListApp, setSwConfDeleListApp }) => {
    const orderedList = products.sort((a, b) => a.name.localeCompare(b.name))
    return (
        <div>
            <div className='sumary'>
                <h1>Listado de Productos</h1>
                <h2><strong>Productos Registrados: </strong>{products.length}</h2>
                <button onClick={() => setSwFormListApp(true)}> <strong>+</strong> Nuevo Producto</button>
            </div>
            <div className='card_list'>
                {orderedList.map(prod => (

                    <div className='card'>
                        <div>
                            <h3><span>{prod.name}</span></h3><br />
                            <div className='sub_car'>
                            <div className='det_list'>
                                <ul className='list'>
                                    <li key={prod.id}>
                                        <h4><span>{prod.category}</span></h4>
                                        <h4><span>Existencia: </span>{(prod.isAvailable) ? "Si hay" : "No Hay"}</h4>
                                        <h4><span>Precio: </span>{prod.price}</h4>
                                        <h4><span>Id : </span>{prod.id}</h4>
                                    </li>
                                </ul>
                            </div>
                            <div className='btn_list'>
                                <button onClick={() => setSwConfDeleListApp(true, prod)}>
                                    <i className='bx bx-trash bx-sm' color='red'></i>
                                </button>
                                <button onClick={() => selesctProd(true, products.filter(pro => pro.id == prod.id))}>
                                    <i className='bx bxs-edit-alt bx-sm' ></i>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsList;