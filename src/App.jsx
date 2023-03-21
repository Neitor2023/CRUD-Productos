import './App.css'
import ProductsForm from './assets/components/ProductsForm';
import ProductsList from './assets/components/ProductsList';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ConfDelete from './assets/components/ConfDelete';

function App() {
    const [prodUpdate, setProdUpdate] = useState(null)
    const [products, setProducts] = useState([])
    const [swForm, setSwForm] = useState(false)
    const [swConfDelete, setSwConfDelete] = useState(false)
    const [prodDele, setProdDele] = useState("")

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios
            .get("https://products-crud.academlo.tech/products/")
            .then(resp => setProducts(resp.data))
            .catch(error => console.error(error))
    }
    // READ

    // CREATE
    const addProd = (data) => {
        axios
            .post("https://products-crud.academlo.tech/products/", data)
            .then(() => getData())
            .catch(error => console.error(error))
    }

    // DELETE
    const deleProd = (id) => {
        axios
            .delete(`https://products-crud.academlo.tech/products/${id}/`)
            .then(() => getData())
            .catch(error => console.error(error))
        setProdUpdate(null)
    }

    const selesctProd = (products) => {
        setProdUpdate(products)
    }

    // UPDATE
    const prodActualization = data => {
        axios
            .put(`https://products-crud.academlo.tech/products/${data.id}/`, data)
            .then(() => {
                getData()
                setProdUpdate(null)
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="App">
            {
                swForm &&
                <ProductsForm
                    createProduc={(data) => addProd(data)}
                    selectedProd={prodUpdate}
                    updateProd={data => prodActualization(data)}
                    // setSwForm={swForm}
                    setSwFormApp={sw => setSwForm(sw)}
                />
            }
            <ProductsList
                products={products}
                setSwFormListApp={sw => setSwForm(sw)}
                selesctProd={(sw, products) => { setSwForm(sw), selesctProd(products) }}
                setSwConfDeleListApp={(sw, product) => { setSwConfDelete(sw), setProdDele(product)}}
            />
            {
                swConfDelete &&
                <ConfDelete
                    prodDele={prodDele}
                    deleProduct={(id, sw) => { deleProd(id), setSwConfDelete(sw) }}
                    cancelDele={sw => setSwConfDelete(sw)}
                />
            }
        </div>
    )
}

export default App;