import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ProductsForm = ({ createProduc, selectedProd, updateProd, setSwFormApp }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    useEffect(() => {
        if (selectedProd) {
            reset({
                id: selectedProd[0].id,
                name: selectedProd[0].name,
                category: selectedProd[0].category,
                price: selectedProd[0].price,
                isAvailable: selectedProd[0].isAvailable
            })
        } else {
            emptyForm()
        }
    }, [selectedProd])

    const submit = data => {
        if (selectedProd) {
            updateProd(data)
        } else {
            createProduc(data)
            emptyForm()
        }
        setSwFormApp(false)
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
        <div className='container'>
            <div className="form">
                <button className="btn_close" onClick={() => setSwFormApp(false)}>X</button>
                <form onSubmit={handleSubmit(submit)}>
                    <h3>Formulario</h3><br />
                    <div className="label">
                        <label htmlFor="name">Nombre del producto : </label>
                    </div>
                    <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Ingrese Nombre del producto"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <p role="alert" style={{ color: "tomato" }}>El nombre del producto es requerido</p>}
                    <div className="label">
                        <label htmlFor="category">Categoria : </label>
                    </div>
                    <input
                        name="category"
                        id="category"
                        type="text"
                        placeholder="Ingrese Categoria"
                        {...register("category", { required: true })}
                    />
                    {errors.category && <p role="alert" style={{ color: "tomato" }}>La Categoria es requerida</p>}
                    <div className="label">
                        <label htmlFor="price">Precio : </label>
                    </div>
                    <input
                        name="price"
                        id="price"
                        type="number"
                        min="1"
                        max="10000"
                        {...register("price", { required: true })}
                    />
                    {errors.price && <p role="alert" style={{ color: "tomato" }}>El Precio es requerido</p>}
                    <div className="isAvailable_css">
                        <label htmlFor="isAvailable">Disponibilidad:</label>
                        <input
                            name="isAvailable"
                            id="isAvailable"
                            type="checkbox"
                            {...register("isAvailable")}
                        />
                    </div>
                    <br />
                    <button className="btn_form" type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductsForm;