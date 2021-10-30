import React from 'react';
import { useForm } from "react-hook-form";
const AddEvent = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`https://sheltered-citadel-55965.herokuapp.com/addEvent`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((result) => console.log(result));
    };
    return (
        <div className='login-form'>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>

                <input className='p-2 m-2' {...register("name")} required placeholder='Event Name' />
                
                <input className='p-2 m-2' {...register("duration", { required: true })} required placeholder='Event duration' />
                <input className='p-2 m-2' {...register("price", { required: true })} required placeholder='Event cost' />
                <input className='p-2 m-2' {...register("info", { required: true })} required placeholder='Event info' />

                {errors.exampleRequired && <span>This field is required</span>}

                <input className='btn btn-danger' type="submit" />
            </form>
        </div>
    );
};

export default AddEvent;