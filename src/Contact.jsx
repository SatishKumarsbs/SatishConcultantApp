import React, { useState } from 'react';

const Contact=()=>{
    const [data, setData]=useState({
        fullname:'',
        phone:'',
        email:"",
        message:'',
    });

    const InputEvent=(event)=>{
        const{name,value}=event.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    };
    const formSubmit=(e)=>{
    e.preventDefault();
    alert(
        `My name is ${data.fullname}. my mobile number is ${data.phone}. my email is ${data.email}.here is i want to say ${data.message}`
    )    
    }
    return(
        <>
       <div className="my-5">
       <h1 className="text-center">Contat Us</h1>
       </div>
       <div className="container contact_div">
       <div className="row">
        <div className="col-md-6 col-10 mx-auto form">
        
        <form onSubmit={formSubmit}  >
        <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Full Name</label>
        <input name="fullname" value={data.fullname} onChange={InputEvent} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
        </div>

        <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Phone Number</label>
        <input name="phone" value={data.phone} onChange={InputEvent} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input name="email" value={data.email} onChange={InputEvent} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea name="message" value={data.message} onChange={InputEvent} className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
        </div>

        <div className="col-12 my-2">
        <button className="btn btn-outline-primary" type="submit">Submit</button>
        </div>

      </form>
        </div>
       </div>
       </div>
        </>
    )
}
export default Contact;