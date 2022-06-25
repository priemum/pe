import React from 'react'
import { Container, Form } from 'react-bootstrap'
import Input from './Input'

const AddingCard = () => {
  return (
    <Container fluid className='add-card text-light'>
        <Form>
            <Input labelName=':اسم النطاق' type='text'/>
            <div>
            <textarea></textarea>
            <label>الوصف</label>
            </div>
        </Form>
    </Container>
  )
}

export default AddingCard