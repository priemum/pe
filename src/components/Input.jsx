import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

export function Input({labelName,value,type, setValue, name}) {
  const inputOnChange = e => {
    console.log(value)
       setValue({... value, [name] :`${e.target.value}`})}
    
    return (
  <Form.Group className="mb-2 d-flex flex-row-reverse form-group" controlId="formBasicEmail">
    <Form.Label>{labelName}</Form.Label>
    <Form.Control type={type} onChange={inputOnChange}/>
  </Form.Group>
    );
}
export function Textarea({name,value,type, setValue, label}){
  const inputOnChanget = e => {
    setValue({... value, [name] :`${e.target.value}`})
  }
return (
  <>
<textarea onChange={inputOnChanget}></textarea>
<label className='ms-auto my-5'>{label}</label>
</>
);
}
export function SelectInput({name,value,type, setValue, data, label}){
  const inputOnChanget = e => {
    setValue({... value, [name] :`${e.target.value}`})
  }
return (
  <Form.Group className="mb-3">
    <Form.Label>{label}</Form.Label>
    <Form.Control 
    as="select"
    onChange={inputOnChanget}
    >
      {data.map(zone => <option value={zone.domainName}>{zone.domainName}</option>)}
    </Form.Control>
  </Form.Group>
);
}