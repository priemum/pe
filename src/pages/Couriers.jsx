import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import AddBtn from '../components/AddBtn'
import { Input, SelectInput } from '../components/Input'

const Couriers = () => {
  return (
    <div>
        <Link to='/couriers/add'><AddBtn content='اضافة مندوب جديد'/></Link>
        <Form>
            <SelectInput label='الفرع' data={[]}/>
            <Input labelName='اسم/تليفون المندوب'/>
        </Form>
    </div>
  )
}

export default Couriers