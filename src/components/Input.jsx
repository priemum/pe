import React, {useState} from 'react';
import Select from 'react-select';
import {Form, Col, Row} from 'react-bootstrap';

export function Input({labelName,value,type, setValue, name, readonly, onFocus, onBlur}) {
 
  const inputOnChange = e => {
    console.log(value);
  (typeof(value) === 'object') ? setValue(value=>{return {... value, [name] :`${e.target.value}`}})
  :
   setValue(`${e.target.value}`);

  }
    
    
    return (
  <Form.Group className="mb-2 d-flex form-group" controlId="formBasicEmail">
    <Form.Label style={{display: `${labelName ? 'block' : 'none'}`}}>{labelName}</Form.Label>
    <Form.Control onBlur={onBlur} onFocus={onFocus} type={type}  onChange={inputOnChange} readOnly={readonly || false} value={value && typeof(value) === 'object' ? value[`${name}`] : value}/>
  </Form.Group>
    );
}
export function Textarea({name,value,type, setValue, label}){
  const inputOnChanget = e => {
    setValue({... value, [name] :`${e.target.value}`})
  }
return (
  <Form.Group className=' w-100 mb-3 '>
<Form.Label className='ms-5'>{label}</Form.Label>
<Form.Control as="textarea" value={value && value[name]} rows={3}  onChange={inputOnChanget}></Form.Control>
</Form.Group>
);
}
export function SelectInput({name,value,selectedValue, setValue, data, label}){
  
  const inputOnChanget = e => {
    setValue({... value, [name] :`${e.target.value}`})
  }

return (
  <Form.Group className="mb-3 d-flex w-100">
    <Form.Label>{label}</Form.Label>
    <Form.Select 
    value={selectedValue && selectedValue[name] }
    aria-label="Default select example"
    as="select"
    onChange={inputOnChanget}
    
    >
      <option value=''>اختار</option>
      {data.map(zone => typeof(zone) === "object"? <option  value={zone.name}>{zone.name}</option> : 
      <option  value={zone}>{zone}</option>
      )}
    </Form.Select>
  </Form.Group>
);
}

export function FromToCompo({fromLabel, toLabel, type, label}) {

  return(
    <Row className=' align-items-center'>
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
  <Col style={{display: `${label ? 'block' : 'none'}`}}>  
    <Form.Text>{label}</Form.Text>
  </Col>
  {
    radioesArr.map((radio, index) => <Col className='w-100'>
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

export function CheckboxInputs ({label, checkboxArr, name}){

  return <Row>
  <Col style={{display: `${label ? 'block' : 'none'}`}}>  
    <Form.Text>{label}</Form.Text>
  </Col>
  {
    checkboxArr.map((checkbox, index) => <Col className='w-100'>
      <Form.Check
        inline
        label={checkbox}
        name={name}
        type='checkbox'
        id={`${name}${index}`}
      />
    </Col>)
  }
  </Row>
}

export function MultiSelect ({data, label}){
  const options =  []
     data.map(ob => options.push({value: `${ob['areaName']}`, label: `${ob['areaName'].toUpperCase()}`}))
  return <Col className='d-flex w-100 my-3'>
  <Form.Label>{label}</Form.Label>
  <Select
  isMulti
  name={label}
  options={options}
  className="basic-multi-select w-100"
  classNamePrefix="select"
/>
</Col>
}