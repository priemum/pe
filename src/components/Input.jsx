import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

function Input({labelName,value,type}) {
  const [user, setUser] = useState()
    const inputOnChange = e => {
        
        // for changing value of userReg by making new object and get all old data values and put on it
         setUser({... user, [e.target.name] :`${e.target.value}`})
        console.log(user)
    }
    return (
  <Form.Group className="mb-2 d-flex flex-row-reverse form-group" controlId="formBasicEmail">
    <Form.Label>{labelName}</Form.Label>
    <Form.Control type={type} onChange={inputOnChange}/>
  </Form.Group>
    );
}

export default Input;