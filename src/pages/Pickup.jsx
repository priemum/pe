import React from 'react'
import { useContext, useState } from 'react'
import { Button, ButtonGroup, Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import AddBtn from '../components/AddBtn'
import { SelectInput, Input, FromToCompo, Textarea } from '../components/Input'
import { BranchesContext } from '../contexts/BranchesContext'
import { ZonesContext } from '../contexts/ZonesContext'
import { CustomerContext } from '../contexts/CustomersContext'
import { CouriersContext } from '../contexts/CouriersContext'
import { StatusContext } from '../contexts/StatusContext'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { PickupContext } from '../contexts/PickupContext'
import Tabels from '../components/Tabels'


export const AddPickup = () => {
    const [branches] = useContext(BranchesContext)
    const [customers] = useContext(CustomerContext)
    const [couriers] = useContext(CouriersContext)
    const [status] = useContext(StatusContext)
    
    // const [pickupTime1, setPickupTime1] = useState('12:00')
    const [pickupTime, setPickupTime] = useState({
        from: '10:00',
        to: '12:00'
    })
    const date = new Date()
    const navigator = useNavigate()
    const [inputsValue, setInputsValue] = useState({
        pickupCode: '',
        branch: '',
        customer: '',
        pickupDate: `${date.toLocaleDateString()}`,
        statement: '',
        pickupTime1: pickupTime.from,
        pickupTime2: pickupTime.to,
        shipmentsNum: '1',
        flyersNum: '0',
        transport: '',
        status: '',
        couriers: '',
        sms: false,
        area: ''
    })
  return (
    <Form onSubmit={e => {
  e.preventDefault()
  const db = getFirestore()
const docRef = addDoc(collection(db, 'pickups'), inputsValue)
navigator && navigator(`/pickuplist`)
 }} className='my-form'>
        <SelectInput label='الفرع' data={branches} value={inputsValue} setValue={setInputsValue} name='branch'/>
        <SelectInput label='العميل' data={customers || []} value={inputsValue} setValue={setInputsValue} name='customer'/>
        <Input labelName='تاريخ الاذن' type='text' value={inputsValue} setValue={setInputsValue} name='pickupDate' onFocus={e => e.target.type = 'date'} onBlur={e => e.target.type = 'text'}/>
        <Input labelName='البيان' type='text' value={inputsValue} setValue={setInputsValue} name='statement'/>
        <FromToCompo fromLabel='استلام البيك اب من الساعة' toLabel='الي' type='time' value={pickupTime} setValue={setPickupTime} name=''/>
        {/* <Form.Group className='d-flex'>
            <Form.Label>استلام البيك اب من الساعة</Form.Label>
            <Form.Text>من</Form.Text>
            <TimePicker onChange={(timeValue) => {setPickupTime1(timeValue);}} value={pickupTime1} />
            <Form.Text>الي</Form.Text>
            <TimePicker onChange={setPickupTime2} value={pickupTime2} />
        </Form.Group> */}
        <Input labelName='عدد الشحنات' type='number' value={inputsValue} setValue={setInputsValue} name='shipmentsNum'/>
        <Input labelName='عدد الفلايرات المطلوبة' type='number' value={inputsValue} setValue={setInputsValue} name='flyersNum'/>
        <SelectInput label='وسيلة النقل' data={['موتيسيكل','سيارة']} value={inputsValue} setValue={setInputsValue} name='transport'/>
        <SelectInput label='الحالة' data={status.map(st => st.desc)} value={inputsValue} setValue={setInputsValue} name='status'/>
        <SelectInput label='اسم المندوب' data={couriers} value={inputsValue} setValue={setInputsValue} name='couriers'/>
        <Col>
            <Form.Check type='checkbox' inline reverse checked={inputsValue.sms}  label='اخطار العميل برسالة' onChange={e => setInputsValue({
                ... inputsValue,
                sms: !inputsValue.sms
            })}/>
        </Col>
        <Button type='submit'>حفظ</Button>
    </Form>
  )
}

export const PickupList = () => {
    const [branches] = useContext(BranchesContext)
    const [zones] = useContext(ZonesContext)
    const [pickups] = useContext(PickupContext)
    const [customers] = useContext(CustomerContext)
    const headersArr = [
        {
            label: 'رقم الاذن',
            value: 'pickupCode'
        },
        {
            label: 'تاريخ الاذن',
            value: 'pickupDate'
        },
        {
            label: 'اسم العميل',
            value: 'customer'
        },
        {
            label: 'منطقة العميل',
            value: 'area'
        },
        {
            label: 'التليفون',
            value: 'phone'
        },
        {
            label: 'من',
            value: 'pickupTime1'
        },
        {
            label: 'الى',
            value: 'pickupTime2'
        },
        {
            label: 'عدد الشحنات',
            value: 'shipmentsNum'
        },
        {
            label: 'عدد الفلايرات المطلوبة',
            value: 'flyersNum'
        },
        {
            label: 'المندوب',
            value: 'couriers'
        },
        {
            label: 'الحالة',
            value: 'status'
        },
        {
            label: 'اضافة',
            value: 'addBy'
        },
        {
            label: 'عدلة',
            value: 'updatedBy'
        },
    ]
    return(
        <>
        <Link to='/pickupdata'>
        <AddBtn content='إضافة اذن بيك اب جديد'/>
        </Link>
        <Form onSubmit={e => {
  e.preventDefault()
  
 }} className='my-form'>
        <SelectInput label='الفرع' data={branches}/>
        <SelectInput label='العميل' data={['اختار العميل']}/>
        <SelectInput label='النطاق' data={zones}/>
        <SelectInput label='اسم المندوب' data={['اختار المندوب']}/>
        <SelectInput label='الحالة' data={['في الانتظار','تم تبليغ المندوب', 'لاغي', 'تم التسليم في المخزن','تم التسليم من العميل', 'تم تاكيد الطلب من العميل']}/>
        <FromToCompo toLabel='الي' fromLabel='الفترة من' type='date'/>
        <Input labelName='رقم الاذن' type='text'/>
        <ButtonGroup>
            <Button type='submit'>بحث</Button>
            <Button >طباعة</Button>
        </ButtonGroup>
        </Form>
        {
          customers && console.log(customers.filter(el => el.name))
        }
        <Tabels data={pickups} headers={headersArr}/>
        </>
    )
}


export const CustomersRequest = () => {
    const [branches, setBranches] = useContext(BranchesContext)
    const [zones, setZones] = useContext(ZonesContext)
    return(
        <>
        <Link to='/pickupdata'>
        <AddBtn content='إضافة اذن بيك اب جديد'/>
        </Link>
        <Form onSubmit={e => {
  e.preventDefault()
  
 }} className='my-form'>
        <SelectInput label='طلبات بيك اب' data={['الكل']}/>
        <SelectInput label='الفرع' data={branches}/>
        <SelectInput label='العميل' data={['اختار العميل']}/>
        <div>
                  <Textarea label='اكواد البوالص في سطور'/>
                  <Button className='me-auto d-block'>ادراج</Button>
                  </div>
        <Col>
            <input id='dd' type='checkbox'/>
            <label htmlFor='dd'>اخطار العميل برسالة</label>
        </Col>
        <ButtonGroup>
            <Button type='submit'>قبول</Button>
            <Button >رفض</Button>
        </ButtonGroup>
        </Form>
        </>
    )
}

export const CustomersFlyers = () => {
    const [branches, setBranches] = useContext(BranchesContext)

    return (
        <>
        <Link to='/customersflyers/add'>
            <AddBtn content='إضافة اذن صرف فلايرات جديد'/>
        </Link>
        <Form className='my-form'>
        <SelectInput label='الفرع' data={branches}/>
        <SelectInput label='العميل' data={['اختار العميل']}/>
        </Form>
        </>
    )
}

export const FlyersBalances = () => {
    const [branches, setBranches] = useContext(BranchesContext)
    return(
        <Form className='my-form'>
        <SelectInput label='الفرع' data={branches}/>
        <SelectInput label='العميل' data={['اختار العميل']}/>
        </Form>
    )
}