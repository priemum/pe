import React from 'react'
import {Link} from 'react-router-dom'
import {Form} from 'react-bootstrap'
import AddBtn from '../components/AddBtn'
import {SelectInput, Input} from '../components/Input'
const Customers = () => {
  
  return(
    <Form>
     <Link to='/customers/add'><AddBtn content='إضافة عميل جديد'/></Link>
      <SelectInput label='الفرع' data={[]}/>
      <SelectInput label='نوع العميل' data={[]}/>
      <SelectInput label='مسؤول المبيعات' data={[]}/>
      <SelectInput label='مسؤول خدمة العملاء' data={[]}/>
      <Input label='اسم/تليفون/رقم العميل'/>
      <SelectInput label='الحالة' data={[]}/>
    </Form> 
    )
}
export default Customers