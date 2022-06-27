import React, { useContext, useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ZonesContext } from '../contexts/ZonesContext'
import { AreasContext } from '../contexts/AreasContext'
import {Input, Textarea, SelectInput} from './Input'
import { CourierTable } from './TableCompo'

export const AddingZone = () => {
  const [zones, setZones] = useContext(ZonesContext)
  const [inputsValue, setInputsValue] = useState({})
  const navigator = useNavigate()

const formSubmit = e => {
  e.preventDefault()
  console.log(inputsValue)
  setZones([... zones, inputsValue])
  navigator('/zones')
} 

return (
  <Container fluid className='add-card '>
      {console.log(inputsValue)}
        <Form onSubmit={formSubmit}>
            <Input name='domainName' labelName=':اسم النطاق' type='text' value={inputsValue} setValue={setInputsValue}/>
            <div className='d-flex align-items-center'>
            <Textarea name='desc' value={inputsValue} setValue={setInputsValue} label='ملاحظات'/>
            
            </div>
            <Button type='submit'  className='d-block mx-auto'>حفظ</Button>
            
        </Form>
    </Container>
  )
}

export const AddingArea = () => {
  const [areas, setAreas] = useContext(AreasContext)
  const [zones, setZones] = useContext(ZonesContext)
  const [inputsValue, setInputsValue] = useState({})
  const navigator = useNavigate()

const formSubmit = e => {
  e.preventDefault()
  console.log(inputsValue)
  setAreas([... areas, inputsValue])
  navigator('/areas')
} 

return (
  <Container fluid className='add-card '>
      {console.log(inputsValue)}
        <Form onSubmit={formSubmit}>
            <Input name='areaName' labelName='اسم المنطقة' type='text' value={inputsValue} setValue={setInputsValue}/>
            <div className='d-flex align-items-center'>
            <SelectInput data={zones} name='areaDomain' label='النطاق' value={inputsValue} setValue={setInputsValue}/>
            </div>
            <Button type='submit'  className='d-block mx-auto'>حفظ</Button>
            
        </Form>
    </Container>
  )
}

export const AddingCourier = () => {
  const [areas, setAreas] = useContext(AreasContext)
  const [zones, setZones] = useContext(ZonesContext)
  const [inputsValue, setInputsValue] = useState({})
  const navigator = useNavigate()

  const inputs = [
    {
      labelName: ':اسم المندوب',
      type: 'text'
    },
    {
      labelName: ':تليفون',
      type: 'text'
    },
    {
      labelName: ':اسم الدخول',
      type: 'text'
    },
    {
      labelName: ':كلمة المرور',
      type: 'text'
    },
  ]

const formSubmit = e => {
  e.preventDefault()
  console.log(inputsValue)
  setAreas([... areas, inputsValue])
  navigator('/areas')
} 

return (
  <Container fluid className='add-card '>
      {console.log(inputsValue)}
        <Row className='flex-row-reverse'>
          <Col>
            <Form>
            <SelectInput label='الفرع' data={[]}/>
              {inputs.map(input => <Input type={input.type} labelName={input.labelName}/>)}
              <Textarea label='ملاحظات'/>
              <Button>حفظ</Button>
            </Form>
          </Col>
          <Col>
          <CourierTable data={zones}/>
          </Col>
        </Row>
    </Container>
  )
}