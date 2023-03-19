import React, { useState } from 'react';
import './App.css'
import InputControlled from './assets/components/inputControlled'
import ProductsForm from './assets/components/ProductsForm';
import ProductsList from './assets/components/ProductsList';

function App() {

    // READ
    const [products, setProducts ] = useState([{
        name: "Martillo",
        category: "Ferreteria",
        price: 5,
        isAvailable: true,
        id:1
    }])

    // CREATE
    const addProd = (data) => {
        setProducts([ ...products, data])
    }

    // DELETE
    const deleProd = (id) => {
        const filterProduct = products.filter( prod => prod.id != id)
        setProducts(filterProduct)
    }
    return (
        <div className="App">
            {/* <InputControlled /> */}
            <ProductsForm
            createProduc={(data)=> addProd(data)}
            />
            <ProductsList
            products={products}
            deleProduct={id =>deleProd(id)}
            />
        </div>
    )
}

export default App;