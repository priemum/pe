import React from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
export const ZoneTable = ({data}) => {
   // FaEdit
  return (
    <Table striped bordered hover>
  <thead>
    <tr>
      <th className='bg-primary text-light'>تعديل</th>
      <th className='bg-primary text-light'>الوصف</th>
      <th className='bg-primary text-light'>اسم النطاق</th>
    </tr>
  </thead>
  <tbody>
   {data.map( zone =>
    (<tr>
      {console.log(zone)}
      <td><FaEdit /></td>
      <td>{zone.desc}</td>
      <td>{zone.domainName}</td>
    </tr>
    ))}
  </tbody>
</Table>
  )
}
