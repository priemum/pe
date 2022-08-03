import React, { useState, useEffect } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Button, Form, Table } from 'react-bootstrap'
import { Input } from './Input'
import firebase from '../db/firestore'
import { useNavigate } from 'react-router-dom'
import { getFirestore, doc, collection, getDoc } from 'firebase/firestore'

export const getItem = (nav, id, setInputsValue) => {
  const db = getFirestore()
  const docRef = doc(db, nav, id)
 try {
   getDoc(docRef).then(doc => {
     const item = doc.data()
     console.log(id)
     console.log(item)
    //  if(!item) return 
    //  if(item) return setInputsValue(item)
    setInputsValue(item)
  })
  
 } catch (error) {
  console.log(error)
 }
  
}

const EditableRow = ({editedRow, setEditRow,  setRowId, headers}) => {
  
return <tr>
      {
        headers.map((header, index) => (<td >
          <Input key={header.value} type='text' name={header.value} value={editedRow} setValue={setEditRow}/>
          </td>)) 
      }
      <td><Button type='submit'>حفظ</Button></td>
      <td><Button type='button' onClick={() => {setRowId(null)}}>الغاء</Button></td>
 </tr>
}

const Tabels = ({data, headers, collName, unEditable, nav}) => {
  const [rowId, setRowId] = useState(null)
  const [editedRow, setEditRow] = useState({
    name: '',
    desc: ''
  })
  useEffect(() => {
    rowId && getItem(collName, rowId, setEditRow)
  }, [rowId])
  const navigate = useNavigate()


  const TdCheck = ({isCheck}) => <Form.Check type='checkbox' checked={isCheck} />

  const SetDays = ({setDays}) => <ul className='d-flex flex-wrap pe-3'>
  {
      Object.keys(setDays).map(day => setDays[day] && <li className='w-100'>{day}</li>)
    
  }
</ul>

  return (
    <Form onSubmit={e => {
      e.preventDefault()
      firebase.firestore().collection(collName).doc(rowId).update(editedRow)
      setRowId(null)
    }}>
    
    <Table striped bordered hover >
 <thead>
     <tr>
    {headers.map( item => (
      <th className='bg-primary text-light w-100'>{item.label}</th>
      ))}
      <th className='bg-primary text-light w-100'>تعديل</th>
      <th className='bg-primary text-light w-100'>حذف</th>
   </tr>
 </thead>
 <tbody>
  {/* {console.log(headers.compo)} */}
   {
     data.map( (item) => (
       
          <>
         { rowId === item.id ?  <EditableRow editedRow ={editedRow} setEditRow ={setEditRow} headers={headers} setRowId={setRowId} collName={collName}/> :
       <tr key={item.id}>
        {
          headers.map((header) => {
            if(header.compo === 'TdCheck') 
              return <td>
                <TdCheck isCheck={item.active}/>
              </td>

            if(header.compo === 'SetDays') 
            return <td>
              <SetDays setDays={item.setDays}/>
            </td>

            return <td>
            {/* {console.log(header.compo, header.check)} */}
            {item[header.value]}
            </td>
}) 
          }
        <td>{
        unEditable ?  <FaEdit style={{cursor: 'pointer'}}  onClick={() => navigate(`/${nav}/${item.id}`)}/>
         :
          <FaEdit style={{cursor: 'pointer'}}  onClick={() => setRowId(item.id)}/>
          }</td>
        <td><FaTrash style={{cursor: 'pointer'}}  onClick={() => firebase.firestore().collection(collName).doc(item.id).delete()}/></td>
   </tr>}
  </>
    ))
   }
 </tbody>
</Table>
</Form>
  )
}

export default Tabels