import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { userContext } from '../../App';

const Shipment = () => {
    const [loggedInUser , setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); 
    return (
      
      <form onSubmit={handleSubmit(onSubmit)} className="form-body">
        <input className='form_input' name="name" defaultValue={loggedInUser.name} ref={register} placeholder="Enter Your name"/>

        <input className='form_input' defaultValue={loggedInUser.email} name="email" ref={register({ required: true })} disabled/>
        {errors.email && <span>This field is required</span>}

        <input className='form_input' name="address" ref={register({ required: true })} placeholder="Enter Your Address"/>
        {errors.address && <span>This field is required</span>}

        <input className='form_input' name="number" ref={register({ required: true })} placeholder="Enter Your Number"/>
        {errors.number && <span>This field is required</span>}

        <input className='form_btn' type="submit" />
      </form>

    )};

export default Shipment;