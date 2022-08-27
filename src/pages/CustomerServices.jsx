import React, {useContext, useState} from 'react'
import { Form, Button, Col} from 'react-bootstrap'
import Tabels from '../components/Tabels'
import { SelectInput, Input, FromToCompo} from '../components/Input'
import { BranchesContext } from '../contexts/BranchesContext'
import { ZonesContext } from '../contexts/ZonesContext'
import { StatusContext } from '../contexts/StatusContext'
import { ComplexContext } from '../contexts/ComplexContexts'
import { CustomerContext } from '../contexts/CustomersContext'
import { Link, useNavigate } from 'react-router-dom'
import AddBtn from '../components/AddBtn'
import { formSubmit } from '../components/AddingCard'

export const CustomersSearch = () => {
  const [branches] = useContext(BranchesContext)
  const [zones] = useContext(ZonesContext)
  const [status] = useContext(StatusContext)
  return <Form className="my-form">
   <SelectInput label='الفرع' data={branches}/>
   <SelectInput label='النطاق' data={zones}/>
   <Input labelName='كود البوليصة' type='text'/>
   <SelectInput label='اسم العميل' data={[]}/>
   <Input labelName='اسم المرسل اليه' type='text'/>
   <Input labelName='تليفون المرسل اليه' type='text'/>
   <SelectInput label='حالة البوايصة' data={status}/>
   <Input labelName='Client Ref' type='text'/>
   <FromToCompo label='الفترة' fromLabel='من' toLabel='الي' type='date' />
   <SelectInput label='سبب الحالة' data={['اختار']}/>
   <Button>بحث</Button>
  </Form>
}

export const Tracking = () => {
  
  return <Form className='my-form'>
   <Input labelName='كود البوليصة' type='text'/>
  </Form>
}

export const Compltypes = () => {
  const {complType} = useContext(ComplexContext)
  const navigator = useNavigate()
  const headers = [{label: 'نوع الشكوي', value: 'type'}]
  const [inputsValue, setInputsValue] = useState({type: ''})
  return <>
 <Form className='my-form' onSubmit={formSubmit('complaintsTypes', inputsValue, navigator, 'customerservices/compltypes')}>
  {console.log(complType)}
   <Input labelName ='نوع الشكوي' type='text' name='type' value={inputsValue} setValue={setInputsValue}/>
   <Button type='submit'>حفظ</Button>
  </Form>
  <Tabels collName='complaintsTypes' headers={headers} data={complType || []}/>
  </>
}

export const Complgeha = () => {
  const {complGeha} = useContext(ComplexContext)

  const navigator = useNavigate()
  const headers = [{label: ' جهة الشكوي', value:'geha'}]
  const [inputsValue, setInputsValue] = useState({geha: ''})
  return <>
 <Form className='my-form' onSubmit={formSubmit('complaintsGeha', inputsValue, navigator, 'customerservices/complgeha')}>
   <Input labelName ='جهة الشكوي' type='text' value={inputsValue} setValue={setInputsValue} name='geha'/>
   <Button type='submit'>حفظ</Button>
  </Form>
  <Tabels collName='complaintsGeha' headers={headers} data={complGeha}/>
  </>
}

export const Complaint = () => {
  const [branches] = useContext(BranchesContext)
  const {complType, complGeha, complaints} = useContext(ComplexContext)
  const [customers] = useContext(CustomerContext)
  const headersArr = [
    {
      label: 'رقم الشكوى',
      value: 'complaintCode',
    },
    {
      label: 'تاريخ الشكوى',
      value: 'date',
    },
    {
      label: 'نوع الشكوى',
      value: 'complaintType',
    },
    {
      label: 'اسم العميل',
      value: 'customer',
    },
    {
      label: 'الموضوع',
      value: 'subject',
    },
    {
      label: 'جهة الشكوى',
      value: 'complaintGeha',
    },
    {
      label: 'الرد على الشكوى',
      value: 'answer',
    },
    {
      label: 'اضافها',
      value: 'addBy',
    },
    {
      label: 'عدلها',
      value: 'updatedBy',
    },
    {
      label: 'تاريخ اخر تعديل',
      value: 'lastUpdateDate',
    },
  ]
  const customersArr = (arr) => arr.map(cust => cust.name)

  return <>
  <Col className='d-flex justify-content-between'>
  <Button>طباعة</Button>
  <Link to='/customerservices/complaint/add'>
    <AddBtn content='إضافة شكوى جديدة'/>
  </Link>
  </Col>
  <Form className='my-form'>
  <SelectInput data={branches} label='الفرع'/>
  <SelectInput data={customersArr(customers)} label='العميل'/>
  <SelectInput data={complType} label='نوع الشكاوي'/>
  <SelectInput data={complGeha} label='جهة الشكاوي'/>
    <Input labelName='رقم الشكوى' type='text'/>
  </Form>
  <Tabels data={complaints} headers={headersArr}/>
  </>
}

export const ComplaintArchive = () => {
  const [branches] = useContext(BranchesContext)
  const {complType, complGeha, complaints} = useContext(ComplexContext)
  const [customers] = useContext(CustomerContext)
  const customersArr = (arr) => arr.map(cust => cust.name)

  const tableHeaders = ['رقم الشكوى', 'تاريخ الشكوى', 'نوع الشكوى', 'اسم العميل', 'الموضوع', 'جهة الشكوى', 'الرد على الشكوى', 'اضافها', 'عدلها', 'تاريخ اخر تعديل']
  return <>
  <Col className='d-flex justify-content-between'>
  <Button>طباعة</Button>
  <Link to='/customerservices/complaint/add'>
    <AddBtn content='إضافة شكوى جديدة'/>
  </Link>
  </Col>
  <Form className='my-form'>
  <SelectInput data={branches} label='الفرع'/>
  <SelectInput data={customersArr(customers)} label='العميل'/>
  <SelectInput data={complType} label='نوع الشكاوي'/>
  <SelectInput data={complGeha} label='جهة الشكاوي'/>
  </Form>
  <Tabels headers={tableHeaders} data={complaints}/>
  </>
}
