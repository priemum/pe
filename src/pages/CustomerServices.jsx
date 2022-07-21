import React, {useContext} from 'react'
import { Form, Button, Col} from 'react-bootstrap'
import Tabels from '../components/Tabels'
import { SelectInput, Input, FromToCompo} from '../components/Input'
import { BranchesContext } from '../contexts/BranchesContext'
import { ZonesContext } from '../contexts/ZonesContext'
import { StatusContext } from '../contexts/StatusContext'
import { ComplexContext } from '../contexts/ComplexContexts'
import { CustomerContext } from '../contexts/CustomersContext'
import { Link } from 'react-router-dom'
import AddBtn from '../components/AddBtn'
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
  const {complTypes} = useContext(ComplexContext)
  const headers = ['نوع الشكوي']
  return <>
 <Form className='my-form'>
   <Input labelName ='نوع الشكوي' type='text'/>
   <Button>بحث</Button>
  </Form>
  <Tabels headers={headers} data={complTypes}/>
  </>
}

export const Complgeha = () => {
  const {complGeha} = useContext(ComplexContext)

  const headers = [' جهة الشكوي']
  return <>
 <Form className='my-form'>
   <Input labelName ='جهة الشكوي' type='text'/>
   <Button>حفظ</Button>
  </Form>
  <Tabels headers={headers} data={complGeha}/>
  </>
}

export const Complaint = () => {
  const [branches] = useContext(BranchesContext)
  const {complType, complGeha} = useContext(ComplexContext)
  const [customers] = useContext(CustomerContext)
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
