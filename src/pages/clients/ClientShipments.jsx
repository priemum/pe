import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Input } from '../../components/Input'

export const ClientShipmentsSearch = () => {
    const [inputsValue, setInputsValue] = useState({})
  return (
    <Form className='my-form'>
        <Input labelName=' كلمة البحث' name='searchValue' value={inputsValue} setValue={setInputsValue}/>
        <Form.Group className='d-flex flex-wrap'>
            <Form.Label>نوع البحث</Form.Label>
        <Form.Check
            className='mx-2 '
            reverse
            defaultChecked
            label="كود الشحن"
            name="group1"
            type='radio'
            id={`reverse-radio-1`}
          />
          <Form.Check
            className='mx-2 '
            reverse
            label="كود العميل"
            name="group1"
            type='radio'
            id={`reverse-radio-2`}
          />
          <Form.Check
            className='mx-2 '
            reverse
            label="اسم المرسل الية"
            name="group1"
            type='radio'
            id={`reverse-radio-3`}
          />
          <Form.Check
            className='mx-2 '
            reverse
            label="رقم المحمول"
            name="group1"
            type='radio'
            id={`reverse-radio-4`}
          />
          <Form.Check
            className='mx-2 '
            reverse
            label="ملاحظات"
            name="group1"
            type='radio'
            id={`reverse-radio-5`}
          />
        </Form.Group>
        <Button type='submit'>بحث</Button>
    </Form>
  )
}