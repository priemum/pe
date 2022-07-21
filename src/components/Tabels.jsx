import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { Table } from 'react-bootstrap'

const Tabels = ({data, headers}) => {
    /*
    "اسم الفرع": "ــــــــــــــــــ"
​
"البريد الالكترونى": "ــــــــــــــــــ"
​
"العنوان": "ــــــــــــــــــ"
​
"رقم التليفون": "ــــــــــــــــــ"
​ 
"رقم الفاكس": "ــــــــــــــــــ"
​
"يبدأ ترقيم بوالص الفرع": "ــــــــــــــــــ"
    */
   console.log(data);
  return (
    <Table striped bordered hover responsive='sm'>
 <thead>
     <tr>
    {headers.map( key => (
      <th className='bg-primary text-light'>{key}</th>
      ))}
      <th className='bg-primary text-light'>تعديل</th>
   </tr>
 </thead>
 <tbody>
  {data.map( d => typeof(d) === 'object' ? <tr>
    {
      Object.values(d).map(val => <td>{val}</td>)
    }
    <td><FaEdit /></td>
   </tr> : <tr>
    <td>{d}</td>
    <td><FaEdit /></td>
   </tr>
   )}
 </tbody>
</Table>
  )
}

export default Tabels