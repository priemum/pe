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

export const CourierTable = ({data, setInputsValue, inputsValue}) => {
  // useEffect(() => setInputsValue({...inputsValue, comm: {
    //   ...inputsValue.comm,
  //   [commZone]:  {
  //   deliveryComm: comm['deliveryComm'],
  //  returnComm: comm['returnComm']
  // }}}),[comm])
  const [comm, setComm] = useState({})
  const [deliveryComm, setDeliveryComm] = useState('')
  const [returnComm, setReturnComm] = useState('')
  const [domainComm, setDomainComm] = useState('')
  
  useEffect( () => {
    inputsValue.comm && setComm(inputsValue.comm)
  },[inputsValue])

  useEffect(() => {
    
    if(domainComm === '') return
    setInputsValue({... inputsValue,  
      comm : { ... comm,
      [domainComm.deliveryComm] : deliveryComm,
    }
  })
  },[deliveryComm])

  useEffect(() => {
    
    if(domainComm === '') return
    setInputsValue({... inputsValue,  
      comm : { ... comm,
      [domainComm.returnComm] : returnComm,
    }
  })
  },[returnComm])

  useEffect(() => {
    const comm = {}
    data.map( zone =>
      {
        const domain = zone.name;
       comm[domain] =  {
        deliveryComm: '',
        returnComm: ''
       }
      })
      if(domainComm === '') return
      setComm(comm)
  }, [])
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
   (<tr key={index}>
     <td>{zone.name}</td>
     <td><Input onFocus ={() => setDomainComm(zone.name)} value={ comm[zone.name] && comm[zone.name].deliveryComm} setValue={setDeliveryComm} name={`reliveryComm`}/></td>
     <td><Input onFocus ={() => setDomainComm(zone.name)} value={comm[zone.name] && comm[zone.name].returnComm} setValue={setReturnComm} name={`returnComm`}/></td>
   </tr>
   ))}
 </tbody>
</Table>
 )
}