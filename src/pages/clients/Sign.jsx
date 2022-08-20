import React from 'react'
import { useState } from 'react'
import { Input } from '../../components/Input'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CustomerContext } from '../../contexts/CustomersContext'

const Sign = ({setCustomer}) => {
    const [customers] = useContext(CustomerContext)
    const [inputsValue, setInputsValue] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate()
    const foo = (customer) => {
      setCustomer(customer[0]) 
       navigate('/api')
    }
  return (
    <Form className='my-form' onSubmit={(e) => {
      e.preventDefault()
       const customer = customers.filter(customer => customer.username === inputsValue.username)
       console.log(customer)
       if(!customer[0]) return alert('اسم مستخدم غير صحيح')
       customer[0].password == inputsValue.password ? foo(customer) : alert('كلمة مرور غير صحيحة')
       
    }}>
        <Input labelName='اسم المستخدم' name='username' value={inputsValue} setValue={setInputsValue} type='text'/>
        <Input labelName='كلمة المرور' name='password' value={inputsValue} setValue={setInputsValue} type='password'/>
        <Button type='submit'>تسجيل دخول</Button>
        <h6>غير مسجل , <Link to=''>تسجيل عميل جديد</Link></h6>
    </Form>
  )
}

export default Sign