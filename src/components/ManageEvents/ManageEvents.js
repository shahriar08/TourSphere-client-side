import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
const ManageEvents = () => {


    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [name, setEventName] = useState('');
    const [price, setEventPrice] = useState(0);
    const [duration, setEventDuration] = useState(0)
    const onSubmit = () => {

        const productData = {
            eventName: name,
            eventPrice: price,
            eventDuration: duration,
            image:imageURL,
        };
        const url = `https://sheltered-citadel-55965.herokuapp.com/addEvent`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))
            .then(data => {
                alert('Product Added');
            })
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '750bacc17dfece9d99a0de0b0b7b1d63');
        imageData.append('image', event.target.files[0]);
    
        axios.post('https://api.imgbb.com/1/upload',
          imageData)
          .then(function (response) {
            setIMageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    
      }

    return (
        <div>
            <form className="form-group row" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-6">
                    <label className="my-1 mr-2 text-dark" for="inlineFormInputName1">Event Name</label>
                    <input onChange={event => setEventName(event.target.value)} type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName1" placeholder="Product Name"></input>
                </div>

                <div className="col-6">
                    <label className="my-1 mr-2 text-dark" for="inlineFormInputName2">Price</label>
                    <input onChange={event => setEventPrice(parseInt(event.target.value))} type="text" className="form-control mb-2 mr-sm-2" name="price" id="inlineFormInputName2" placeholder="Price"></input>
                </div>



                <div className="col-6">
                    <label className="my-1 mr-2 text-dark" for="inlineFormInputName3">Quantity</label>
                    <input onChange={event => setEventDuration(parseInt(event.target.value))} type="text" className="form-control mb-2 mr-sm-2" name="quantity" id="inlineFormInputName3" placeholder="Quantity"></input>
                </div>
                <div className="col-6">
                    <label className="my-1 mr-2 text-dark" for="inlineFormInputName4">Image <small>Give Some Time To Upload Then Press Add Product</small></label>
                    <input type="file" className="form-control mb-2 mr-sm-2" id="inlineFormInputName4" onChange={handleImageUpload}></input>
                </div>
                <div className="col-auto text-center">
                    <button type="submit" className="btn btn-primary mb-2">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default ManageEvents;