import './ProductsList.css'
const ProductsList = ({ products, deleProduct }) => {
    return (
        <ul>
            {products.map(prod => (
                <li key={prod.id}>
                    <h4><span>Producto : </span> {prod.name} </h4>
                    <h4><span>Categoria : </span>{prod.category}</h4>
                    <h4><span>Precio : </span>{prod.price}</h4>
                    <h4><span>Disponibilidad : </span>{prod.isAvailable}</h4>
                    <h4><span>Id : </span>{prod.id}</h4>
                    <button onClick={ ()=> deleProduct(prod.id)}>Eliminar</button>
                </li>))}
        </ul>
    );
};

export default ProductsList;