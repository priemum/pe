import React, {useContext, useState} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import AddBtn from '../components/AddBtn';
import {Input, SelectInput} from '../components/Input'
import Tabels from '../components/Tabels'
import { BranchesContext } from '../contexts/BranchesContext';
import {Link, useNavigate} from 'react-router-dom'
const Branches = () => {
  const [branches, setBranches] = useContext(BranchesContext)
  const [branch, setBranch] = useState({})
  const inputs = [
    {
      label: 'اسم الفرع',
      type: 'text',
    },
    {
      label: 'العنوان',
      type: 'text',
    },
    {
      label: 'رقم التليفون',
      type: 'text',
    },
    {
      label: 'رقم الفاكس',
      type: 'text',
    },
    {
      label: 'البريد الالكترونى',
      type: 'text',
    },
    {
      label: 'يبدأ ترقيم بوالص الفرع',
      type: 'text',
    }
    ]
    // console.log(inputs.map(input => {input.label : '__________'}))
  const headsArr = () => inputs.map(input => input.label)
  console.log(headsArr);
    return (
      <>
      <Form className='my-form' style={{overflow: 'scroll'}} onSubmit={(e) => {
        e.preventDefault()
        console.log({branches, branch});
        setBranches([... branches, branch])
      }}>
       {inputs.map((input, index) => <Input  key={index} labelName={input.label} type={input.type} value={branch[`${input.label}`] } setValue={setBranch} name={input.label}/> )}
    <Button type='submit' >حفظ</Button>
    </Form>
    {console.log(branches)}
        <Tabels data={branches} headers={headsArr()}/>
   </>
      )
}

export const Transfer = () => {
  const [branches, setBranches] = useContext(BranchesContext)
  return <>
 <Link to='/sheets/add'> <AddBtn content='اضافة شيت تسليم فرع'/>
 </Link>
    <SelectInput data={branches} label='الي فرع'/>
  </>
}





export const TransferFrom = () => {
  const [branches, setBranches] = useContext(BranchesContext)
  const navigate = useNavigate()
  return <>
 <Form className='my-form' onSubmit={e => {
  e.preventDefault()
  
 }}>
    <SelectInput data={branches} label='الي فرع'/>
    <Row>
      <Col md='6' sm='12'>
        <Input labelName='الي' type='date'/>
      </Col>
      <Col md='6' sm='12'>
        <Input labelName='الفترة من' type='date'/>
      </Col>
      <Col sm='12'>
        <Input labelName='رقم الشيت' type='text'/>
      </Col>
    </Row>
    <Button type='submit'>بحث</Button>
  </Form>
  </>
}



export const BranchReturn = () => {
  const [branches, setBranches] = useContext(BranchesContext)
  const navigate = useNavigate()
  return <>
  <Link to='/branchreturn/add'>
 <AddBtn content='إضافة امر توريد شحنات'/>
 </Link>
 <Form className='my-form' onSubmit={e => {
  e.preventDefault()
  
 }}>
    <SelectInput data={branches} label='الي فرع'/>
    <SelectInput data={branches} label='من فرع'/>
        <Input labelName='رقم البوليصة' type='text'/>
  </Form>
  </>
}

export default Branches