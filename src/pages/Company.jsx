import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {Input} from '../components/Input'

const Company = () => {
    const [company, setCompany] = useState([])
    /*






    */
    const Inputs = [
        {
            label: ':اسم الشركة',
            type: 'text',
            value: '____________',
            name: 'companyName'
        },
        {
            label: ':العنوان',
            type: 'text',
            value: '____________',
            name: 'companyAddress'
        },
        {
            label: ':الدولة',
            type: 'text',
            value: 'مصر',
            name: 'companyCountery'
        },
        {
            label: ':المدينة',
            type: 'text',
            value: 'القاهرة',
            name: 'companyCity'
        },
        {
            label: ':المنطقة',
            type: 'text',
            value: 'كوبري القبة',
            name: 'companyArea'
        },
        {
            label: ':الرقم البريدى',
            type: 'text',
            value: '11281',
            name: 'companyPost'
        },
        {
            label: ':رقم التليفون',
            type: 'text',
            value: '____________',
            name: 'companyPhone'
        },
        {
            label: ':رقم الفاكس',
            type: 'text',
            value: '____________',
            name: 'companyFax'
        },
        {
            label: ':البريد الالكترونى',
            type: 'email',
            value: '____________',
            name: 'companyEmail'
        },
        {
            label: ':ويب سيت',
            type: 'text',
            value: '____________',
            name: 'companySite'
        },{
            label: ':صورة شعار الشركة',
            type: 'file',
            value: '____________',
            name: 'companyLogo'
        },
    ]
  return (
    <>
    <Form className='my-form' style={{overflow: 'scroll'}} onSubmit={(e) => {
        e.preventDefault()
        console.log(company)}}>
       {Inputs.map((input, index) => <Input key={index} labelName={input.label} type={input.type} value={company} setValue={setCompany} name={input.name}/> )}
    <Button type='submit' >حفظ</Button>
    </Form>
    </>
  )
}

export default Company