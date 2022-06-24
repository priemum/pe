import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Input from '../components/Input'

const Company = () => {
    /*






    */
    const Inputs = [
        {
            label: ':اسم الشركة',
            type: 'text',
            value: '____________'
        },
        {
            label: ':العنوان',
            type: 'text',
            value: '____________'
        },
        {
            label: ':الدولة',
            type: 'text',
            value: 'مصر'
        },
        {
            label: ':المدينة',
            type: 'text',
            value: 'القاهرة'
        },
        {
            label: ':المنطقة',
            type: 'text',
            value: 'كوبري القبة'
        },
        {
            label: ':الرقم البريدى',
            type: 'text',
            value: '11281'
        },
        {
            label: ':رقم التليفون',
            type: 'text',
            value: '____________'
        },
        {
            label: ':رقم الفاكس',
            type: 'text',
            value: '____________'
        },
        {
            label: ':البريد الالكترونى',
            type: 'email',
            value: '____________'
        },
        {
            label: ':ويب سيت',
            type: 'text',
            value: '____________'
        },{
            label: ':صورة شعار الشركة',
            type: 'file',
            value: '____________'
        },
    ]
  return (
    <>
    <Form className='my-form'>
       {Inputs.map((input, index) => <Input key={index} labelName={input.label} type={input.type} value={input.value}/> )}
    </Form>
    <Button type='submit' >حفظ</Button>
    </>
  )
}

export default Company