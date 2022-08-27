import React from 'react'
import { useState } from 'react'
import { Input } from '../../components/Input'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CustomerContext } from '../../contexts/CustomersContext'

const Sign = ({setCustomer, users,nav}) => {
    const [customers] = useContext(CustomerContext)
    const [inputsValue, setInputsValue] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate()
    const foo = (customer) => {
      setCustomer(customer[0]) 
       navigate(nav)
    }
  return (
    <Form className='my-form' onSubmit={(e) => {
      e.preventDefault()
      try{
        if (users.length <= 0) return alert('check your internet connection')
        const user = users.filter(user => user.username === inputsValue.username)
        console.log(users)
        if(!user[0]) return alert('اسم مستخدم غير صحيح')
        user[0].password == inputsValue.password ? foo(user) : alert('كلمة مرور غير صحيحة')
      }catch(err){
        console.log(err)
      }
       
    }}>
        <Input labelName='اسم المستخدم' name='username' value={inputsValue} setValue={setInputsValue} type='text'/>
        <Input labelName='كلمة المرور' name='password' value={inputsValue} setValue={setInputsValue} type='password'/>
        <Button type='submit'>تسجيل دخول</Button>
        {window.location.href.indexOf('api') > -1 ?<h6>غير مسجل , <Link to=''>تسجيل عميل جديد</Link></h6> : <></>}
    </Form>
  )
}

export default Sign