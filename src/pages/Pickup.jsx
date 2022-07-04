import React from 'react'
import { useContext } from 'react'
import { Button, ButtonGroup, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddBtn from '../components/AddBtn'
import { SelectInput, Input } from '../components/Input'
import { BranchesContext } from '../contexts/BranchesContext'
import { ZonesContext } from '../contexts/ZonesContext'



export const AddPickup = () => {
    const [branches, setBranches] = useContext(BranchesContext)

  return (
    <Form onSubmit={e => {
  e.preventDefault()
  
 }} className='my-form'>
        <SelectInput label='الفرع' data={branches}/>
        <SelectInput label='العميل' data={['اختار العميل']}/>
        <Input labelName='تاريخ الاذن' type='date'/>
        <Input labelName='البيان' type='text'/>
        <Row>
            <Col>
            <Input labelName='استلام البيك اب من الساعة' type='time'/>
            </Col>
            <Col>
            <Input labelName='الي' type='time'/>
            </Col>
        </Row>
        <Input labelName='عدد الشحنات' type='number'/>
        <Input labelName='عدد الفلايرات المطلوبة' type='number'/>
        <SelectInput label='وسيلة النقل' data={['موتيسيكل','سيارة']}/>
        <SelectInput label='الحالة' data={['في الانتظار','تم تبليغ المندوب', 'لاغي', 'تم التسليم في المخزن','تم التسليم من العميل', 'تم تاكيد الطلب من العميل']}/>
        <SelectInput label='اسم المندوب' data={['اختار المندوب']}/>
        <Col>
            <input id='dd' type='checkbox'/>
            <label htmlFor='dd'>اخطار العميل برسالة</label>
        </Col>
        <Button type='submit'>حفظ</Button>
    </Form>
  )
}

export const PickupList = () => {
    const [branches, setBranches] = useContext(BranchesContext)
    const [zones, setZones] = useContext(ZonesContext)
    return(
        <>
        <Link to=''>
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
        <Row>
            <Col>
            <Input labelName='الفترة من' type='date'/>
            </Col>
            <Col>
            <Input labelName='الي' type='date'/>
            </Col>
        </Row>
        <Input labelName='رقم الاذن' type='text'/>
        <ButtonGroup>
            <Button type='submit'>بحث</Button>
            <Button >طباعة</Button>
        </ButtonGroup>
        </Form>
        </>
    )
}
