import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = ({createMovies}) => {
    const {register, handleSubmit} = useForm()

    const submit = (data) => {
        createMovies(data)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor='name'>Name</label>
                <input
                type="text"
                {...register("name")}
                id="name"
                placeholder='Escribe tu pelicula' />
            </div>
            <div>
                <label htmlFor='genre'>Genero</label>
                <input
                type="text"
                {...register("genre")}
                id="genre"
                placeholder='Escribe el genero' />
            </div>
            <div>
                <label htmlFor='duration'>Duration</label>
                <input
                type="text"
                {...register("duration")}
                id="duration"
                placeholder='Duracion' />
            </div>
            <div>
                <label htmlFor='release_date'>Fecha de lanzamiento</label>
                <input
                type="date"
                {...register("release_date")}
                id="release_date"
                placeholder='Fecha de Salida' />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;