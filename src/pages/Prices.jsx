import React from 'react'
import { useContext } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Input, SelectInput } from '../components/Input'
import { BranchesContext } from '../contexts/BranchesContext'

export const DefaultPrices = () => {
  const [branches, setBranches] = useContext(BranchesContext)
    return (
    <Form className='my-form'>
        <SelectInput data={branches} label='الفرع'/>
        <div className='d-flex flex-row-reverse align-items-center'>
            <Input labelName='قيمة الشحن على وزن' type='text'/><h6>كيلو جرام</h6>
        </div>
        <Button type='submit'>حفظ</Button>
    </Form>
  )
}

export const CustomerPrices = () => {
    const [branches, setBranches] = useContext(BranchesContext)
      return (
      <Form className='my-form'>
          <SelectInput data={branches} label='الفرع'/>
          <SelectInput data={branches} label='العميل'/>
          <Row>
              <Col>
              <Input labelName='تاريخ انتهاء العرض' type='date'/>
              </Col>
            <Col>
              <Input labelName='قيمة الشحن على وزن' type='text'/><small>كيلو جرام</small>
              </Col>
          </Row>
          <Button type='submit'>حفظ</Button>
          <Button >طباعة</Button>
      </Form>
    )
  }