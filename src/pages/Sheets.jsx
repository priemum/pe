import React from 'react'
import { useContext } from 'react'
import { Button, Col, Form, FormCheck, Row } from 'react-bootstrap'
import { FromToCompo, Input, RadioInputs, SelectInput,  } from '../components/Input'
import { BranchesContext } from '../contexts/BranchesContext'
import { CouriersContext } from '../contexts/CouriersContext'
import { ZonesContext } from '../contexts/ZonesContext'


export const Sheets = () => {
  const [branches, setBranches] = useContext(BranchesContext)
  const [zones, setZones] = useContext(ZonesContext)
  const [couriers, setCouriers] = useContext(CouriersContext)
  return (
    <Form className='my-form'>
      <Row className='flex-column'>
        {[
          {
            label: 'الفرع',
            data: branches
          },
          {
            label: 'النطاق',
            data: zones
          },
          {
            label: 'المندوب',
            data: couriers
          },
        ].map(el => <Col>
          <SelectInput label={el.label} data={el.data}/>
        </Col>
          )}
          <Col>
          <FromToCompo label='الفترة' fromLabel='من' toLabel='الي' type='date'/>
          </Col>
          <Col className='d-flex'>
          <Input labelName='رقم الشيت'/>
          <Button className='mb-2'>بحث</Button>
          </Col>
      </Row>
    </Form>
  )
}

export const ReturnStatusUpdate = () => {

  return <Form className='my-form'>
    <RadioInputs radioesArr={['رقم الشيت', 'رقم البوليصة']} name='ReturnStatusUpdateRadio'/>
    <Input type='text'/>
    <Button>طباعة</Button>
    <Button type='submit' className='mx-1'>حفظ</Button>
  </Form>
}

export const PendingSheets = () => {
  const [branches, setBranches] = useContext(BranchesContext)
  const [zones, setZones] = useContext(ZonesContext)
  const [couriers, setCouriers] = useContext(CouriersContext)
  return (
    <Form className='my-form'>
      <Row className='flex-column'>
        {[
          {
            label: 'الفرع',
            data: branches
          },
          {
            label: 'النطاق',
            data: zones
          },
          {
            label: 'المندوب',
            data: couriers
          },
        ].map(el => <Col>
          <SelectInput label={el.label} data={el.data}/>
        </Col>
          )}
</Row>
<Button>بحث</Button>
</Form>
  )}

  export const CourierStatusUpdate = () => {
      const [couriers] = useContext(CouriersContext)
    return <Form className='my-form'>
      <SelectInput label='اسم المندوب' data={couriers}/>
    </Form>
  }

  export const SheetsCollections = () => {
    return <>
    <Form>
      <Input labelName='رقم الشيت'/>
    </Form>
    <Button>طباعة</Button>
    <Button type='submit' className='mx-1'>حفظ</Button>
    <Row className=''>
    {['عدد البوالص','اجمالى المبلغ','اسم المندوب'].map(e => <Col><p style={{whiteSpace: 'pre'}}>{e}</p><span className='text-danger'>{e == 'اسم المندوب' ? '' : 0}</span></Col>)}
    </Row>
    </>
  }