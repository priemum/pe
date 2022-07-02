import React, { useContext, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ZonesContext } from '../contexts/ZonesContext'
import {Input, Textarea} from './Input'

const AddingZone = () => {
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
            <Input name='name' labelName=':اسم النطاق' type='text' value={inputsValue} setValue={setInputsValue}/>
            <div className='d-flex align-items-center'>
            <Textarea name='desc' value={inputsValue} setValue={setInputsValue}/>
            
            </div>
            <Button type='submit'  className='d-block mx-auto'>حفظ</Button>
            
        </Form>
    </Container>
  )
}

export default AddingZone