import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { Input } from './Input'
export const ZoneTable = ({data}) => {
   // FaEdit
  return (
    <Table striped bordered hover>
  <thead>
    <tr>
      <th className='bg-primary text-light'>اسم النطاق</th>
      <th className='bg-primary text-light'>الوصف</th>
      <th className='bg-primary text-light'>تعديل</th>
    </tr>
  </thead>
  <tbody>
   {data.map( zone =>
    (<tr>
      {console.log(zone)}
      <td>{zone.name}</td>
      <td>{zone.desc}</td>
      <td><FaEdit /></td>
    </tr>
    ))}
  </tbody>
</Table>
  )
}

export const AreaTable = ({data}) => {
  // FaEdit
 return (
   <Table striped bordered hover>
 <thead>
   <tr>
     <th className='bg-primary text-light'>تعديل</th>
     <th className='bg-primary text-light'>النطاق</th>
     <th className='bg-primary text-light'>اسم المنطقة</th>
   </tr>
 </thead>
 <tbody>
  {data.map( area =>
   (<tr>
     <td><FaEdit /></td>
     <td>{area.areaDomain}</td>
     <td>{area.areaName}</td>
   </tr>
   ))}
 </tbody>
</Table>
 )
}

export const CourierTable = ({data, setComm, comm}) => {
  // useEffect( () => {
  //   inputsValue.comm && setComm(inputsValue.comm)
  // },[inputsValue])
  // useEffect(() => setInputsValue({...inputsValue, comm: {
  //   ...inputsValue.comm,
  //   [commZone]:  {
  //   deliveryComm: comm['deliveryComm'],
  //  returnComm: comm['returnComm']
  // }}}),[comm])
  console.log('comm',comm)
  const [deliveryComm, setDeliveryComm] = useState({})
  const [returnComm, setReturnComm] = useState()
 return (
   <Table striped bordered hover>
 <thead>
   <tr>
     <th className='bg-primary text-light'>اسم النطاق</th>
     <th className='bg-primary text-light'>عمولة المندوب فى حالة التسليم</th>
     <th className='bg-primary text-light'>عمولة المندوب فى حالة المرتجع بمقابل</th>
   </tr>
 </thead>
 <tbody>
  {data.map( (zone, index) =>
   (<tr>
     <td>{zone.name}</td>
     <td><Input value={comm} setValue={setComm} name={`(${zone.name})ReliveryComm`}/></td>
     <td><Input value={comm && comm[`(${zone.name})ReturnComm`]} setValue={setComm} name={`(${zone.name})ReturnComm`}/></td>
   </tr>
   ))}
 </tbody>
</Table>
 )
}