import React, {useState} from 'react';
import {Form, Col, Row} from 'react-bootstrap';

export function Input({labelName,value,type, setValue, name, readonly}) {
  const inputOnChange = e => {
    console.log(value)
       setValue({... value, [name] :`${e.target.value}`})}
    
    return (
  <Form.Group className="mb-2 d-flex flex-row-reverse form-group" controlId="formBasicEmail">
    <Form.Label>{labelName}</Form.Label>
    <Form.Control type={type} onChange={inputOnChange} readonly={readonly || false}/>
  </Form.Group>
    );
}
export function Textarea({name,value,type, setValue, label}){
  const inputOnChanget = e => {
    setValue({... value, [name] :`${e.target.value}`})
  }
return (
  <div className='d-flex mb-3'>
<textarea onChange={inputOnChanget}></textarea>
<label className='ms-auto my-5'>{label}</label>
</div>
);
}
export function SelectInput({name,value,type, setValue, data, label}){
  const inputOnChanget = e => {
    setValue({... value, [name] :`${e.target.value}`})
  }
return (
  <Form.Group className="mb-3 d-flex flex-row-reverse">
    <Form.Label>{label}</Form.Label>
    <Form.Control 
    as="select"
    onChange={inputOnChanget}
    >
      {data.map(zone => typeof(zone) === "object"? <option value={zone.name}>{zone.name}</option> : 
      <option value={zone}>{zone}</option>
      )}
    </Form.Control>
  </Form.Group>
);
}

export function FromToCompo({fromLabel, toLabel, type, label}) {

  return(
    <Row className='flex-row-reverse align-items-center'>
      <Col className={`${label ? 'd-block' : 'd-none'}`}>
      <span>
        {label}
      </span>
      </Col>
      <Col>
      <Input labelName={fromLabel} type={type}/>
      </Col>
      <Col>
      <Input labelName={toLabel} type={type}/>
      </Col>
  </Row>
  )
}

export function RadioInputs ({label, radioesArr, name}){

  return <Row>
  <Col>  
    <Form.Text>{label}</Form.Text>
  </Col>
  {
    radioesArr.map((radio, index) => <Col>
      <Form.Check
        inline
        label={radio}
        name={name}
        type='radio'
        id={`${name}${index}`}
      />
    </Col>)
  }
  </Row>
}

export function MultiSelect ({options}){
  return <Form.Control as="select" multiple value={options} >
  {options.map(option => (
    <option key={option.name} value={option.value}>
      {option.name}
    </option>
  ))}
</Form.Control>
}