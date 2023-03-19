// import { useState } from "react";
import { useForm } from "react-hook-form";
// import React from 'react';

const ProductsForm = ({createProduc}) => {

    const { register, handleSubmit, formState: { errors }, reset} = useForm()


    const submit = data => {

        data.id= Date.now()
        createProduc(data)
        emptyForm()
    }

    const fillForm = () => {
        reset(
            {
                name: "Martillo",
                category: "Ferreteria",
                price: 5,
                isAvailable: true
            }
        )
    }

    const emptyForm = () => {
        reset(
            {
                name: "",
                category: "",
                price: 0,
                isAvailable: false
            }
        )

    }

    return (
        <div>
            <form onSubmit={ handleSubmit( submit )}>
                <div>
                    <label htmlFor="name">Nombre del producto : </label>
                    <input 
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Ingrese Nombre del producto"
                    // required
                    {...register("name",{required:true})}
                    />
                    {errors.name && <p role="alert" style={{color:"tomato"}}>El nombre del producto es requerido</p>}
                </div>
                <div>
                    <label htmlFor="category">Categoria : </label>
                    <input 
                    name="category"
                    id="category"
                    type="text"
                    // required
                    {...register("category", {required:true})}
                    />
                    {errors.category && <p role="alert" style={{color:"tomato"}}>La Categoria es requerida</p>}
                </div>
                <div>
                    <label htmlFor="price">Precio : </label>
                    <input 
                    name="price"
                    id="price"
                    type="number"
                    min="1"
                    max="100"
                    // required
                    {...register("price",{required:true})}
                    />
                    {errors.price && <p role="alert" style={{color:"tomato"}}>El Precio es requerido</p>}
                </div>
                <div>
                    <label htmlFor="isAvailable">Disponibilidad : </label>
                    <input 
                    name="isAvailable"
                    id="isAvailable"
                    type="checkbox"
                    {...register("isAvailable")}
                    />
                </div>
                <button type="submit">
                    Enviar formulario
                </button>
            </form>
            {/* <button onClick={fillForm}>Llenar formulario</button> */}
        </div>
    );
};

export default ProductsForm;


// const ProductsForm = () => {
//     const [ name, setName ] = useState("")
//     const [ category, setCategory ] = useState("")
//     const [ price, setPrice ] = useState("")
//     const [ isAvailable, setisAvailable ] = useState(true)
    
//     const handleSubmit = (e) => {
//         const data = {
//             id: Date.now(),
//             name: name,
//             category: category,
//             price: Number(price),
//             isAvailable: isAvailable
//         }
//         console.log("Se envio el formulario ",data)
//         e.preventDefault()
//         reset()
//     }

//     const reset = () => {
//         setName("")
//         setCategory("")
//         setPrice("")
//         setisAvailable(false)
//         alert("Formulario enviado!")
//     }
//     return (
//         <form onSubmit={ e => handleSubmit(e) }>
//             <div>
//                 <label htmlFor="name">Nombre del producto : </label>
//                 <input 
//                 name="name"
//                 id="name"
//                 type="text"
//                 value={name}
//                 onChange={ e => setName(e.target.value)}
//                 required
//                 />
//             </div>
            // <div>
            //     <label htmlFor="category">Categoria : </label>
            //     <input 
            //     name="category"
            //     id="category"
            //     type="text"
            //     value={category}
            //     onChange={e => setCategory(e.target.value)}
            //     required
            //     />
            // </div>
            // <div>
            //     <label htmlFor="price">Precio : </label>
            //     <input 
            //     name="price"
            //     id="price"
            //     type="number"
            //     value={price}
            //     onChange={e => setPrice(e.target.value)}
            //     required
            //     min="1"
            //     max="100"
            //     />
            // </div>
            // <div>
            //     <label htmlFor="isAvailable">Disponibilidad : </label>
            //     <input 
            //     name="isAvailable"
            //     id="isAvailable"
            //     type="checkbox"
            //     checked={isAvailable}
            //     onChange={e => setisAvailable(e.target.checked)} 
            //     />
            // </div>
            // <button type="submit">Enviar formulario</button>
//             {/* <input type="submit" value="Enviar formulario"/> */}
//         </form>
//         );
// };

// export default ProductsForm;