import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Input, SelectInput } from '../components/Input'
import Tabels from '../components/Tabels'
import { BranchesContext } from '../contexts/BranchesContext'
import { ZonesContext } from '../contexts/ZonesContext'
import firebase from '../db/firestore'
import Loader from '../components/Loader'
import { CustomerContext } from '../contexts/CustomersContext'

export const DefaultPrices = () => {
  const tableForm = useRef()
  const [branches] = useContext(BranchesContext)
  const [zones] = useContext(ZonesContext)
  const [defaultPrices, setDefaultPrices] = useState(null)
  const [updatedDefaultPrices, setUpdatedDefaultPrices] = useState(null)

  const headersArr = [
    {label: 'اسم النطاق', value: 'name'},
    {label: 'قيمة الشحن', value: 'shipValue', compo: 'TdInput'},
    {label: 'قيمة شحن الكيلوجرام زيادة', value: 'extraKgCost', compo: 'TdInput'},
    {label: 'قيمة الشحن للمرتجع', value: 'returnShipValue', compo: 'TdInput'},
    {label: 'تطبيق علي كل العملاء', value: 'returnShipValue', compo: <Button style={{whiteSpace: 'pre' }}>تطبيق علي كل العملاء</Button>},
  ] 

  useEffect( () => {
    setDefaultPrices(zones)
  },[zones])
    
  
  useEffect(() => {
   if(updatedDefaultPrices) firebase.firestore().collection('zones').doc(updatedDefaultPrices.id).update(updatedDefaultPrices)
  },[updatedDefaultPrices])
  

    return ( 
    <Form ref={tableForm} className='my-form' onSubmit={e => {
  e.preventDefault()
 }}> 
        <SelectInput data={branches} label='الفرع'/>
        {console.log(defaultPrices)}
        {defaultPrices !== null ? <Tabels data={defaultPrices}  headers={headersArr} collName='zones' updateAndDelete={{
          delete: false,
          update: false,
        }} setUpdatedData={setUpdatedDefaultPrices}/> : <Loader />}
        <div className='d-flex  align-items-center pb-2'>
            <Input labelName='قيمة الشحن على وزن' type='text'/><Form.Text>كيلو جرام</Form.Text>
        </div>
        <Button type='submit'>حفظ</Button>
    </Form>
  )
}

export const CustomerPrices = () => {
    const [branches] = useContext(BranchesContext)
    const [customers] = useContext(CustomerContext)
    const [currentCustomer, setCurrentCustomer] = useState(null)
    const [currentCustomerName, setCurrentCustomerName] = useState(null)
  const [updatedDefaultPrices, setUpdatedDefaultPrices] = useState(null)

    const headersArr = [
      {label: 'اسم النطاق', value: 'name'},
      {label: 'قيمة الشحن', value: 'shipValue', compo: 'TdInput'},
      {label: 'قيمة شحن الكيلوجرام زيادة', value: 'extraKgCost', compo: 'TdInput'},
      {label: 'قيمة الشحن للمرتجع', value: 'returnShipValue', compo: 'TdInput'},
      {label: 'ظهور', value: 'appere', compo: <Form.Check type='checkbox' checked={currentCustomer ? currentCustomer[0].appere : false} onChange={() => {
        firebase.firestore().collection('customers').doc(currentCustomer[0].id).update({
        ... currentCustomer[0],
        appere: !currentCustomer[0].appere})
        console.log(currentCustomer[0]); 
      }}/>},
    ] 

    // useEffect(() => {
    //   setcurrentCustomer(customers)
    //   console.log(currentCustomer);
    // },[customers])
    useEffect(() => {
      console.log(currentCustomer);
      if(customers && currentCustomerName){
         const cus = customers.filter(c =>  c.name ===  currentCustomerName.name)
         console.log(cus)
      setCurrentCustomer(cus[0].defaultPrices);
}},[currentCustomerName, customers])
    
useEffect(() => {
  if(currentCustomerName){
    const cus = customers.filter(c =>  c.name ===  currentCustomerName.name)
    const updatedPrice = Object.values(cus[0].defaultPrices).map(obj => {
        if(obj.name === updatedDefaultPrices.name) 
        return updatedDefaultPrices

      return  obj
    })

    cus[0].defaultPrices = updatedPrice;
    console.log(cus[0]);
    cus[0] && firebase.firestore().collection('customers').doc(cus[0].id).update(cus[0])
}
},[updatedDefaultPrices])

    return (
      <Form className='my-form' onSubmit={e => {
  e.preventDefault()
  
 }}>
          <SelectInput data={branches} label='الفرع'/>
          <SelectInput data={customers || []} label='العميل' value={currentCustomerName} setValue={setCurrentCustomerName} name='name'/>
          {<Tabels data={currentCustomer || []} setUpdatedData={setUpdatedDefaultPrices} headers={headersArr} collName='customers' updateAndDelete={{
          delete: false,
          update: false,
        }}/> }
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
