import React, { useState, useEffect, useMemo } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Button, Form, Table } from 'react-bootstrap'
import { Input } from './Input'
import firebase from '../db/firestore'
import { useNavigate } from 'react-router-dom'
import { getFirestore, doc, collection, getDoc, addDoc, setDoc } from 'firebase/firestore'

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

const Tabels = ({data, headers, collName, unEditable, nav, updateAndDelete, setUpdatedData, elementsCount}) => {
  const [rowId, setRowId] = useState(null)
  const [editedRow, setEditRow] = useState({
    name: '',
    desc: ''
  })
  const navigate = useNavigate()

  useEffect(() => {
    rowId && getItem(collName, rowId, setEditRow)
  }, [rowId])

  const TdCheck = ({isCheck}) => <Form.Check type='checkbox' checked={isCheck} />

  const SetDays = ({setDays}) => <ul className='d-flex flex-wrap pe-3'>
  {
    setDays && Object.keys(setDays).map(day => setDays[day] && <li className='w-100'>{day}</li>)
    
  }
</ul>

  const TdInput = ({data, name, itemIndex, setUpdatedData}) => {
    const [item, setItem] = useState(data[itemIndex].defaultPrices)
    // const customerPrices =  

    // useEffect(() => {
    //    setItem(customerPrices)
    // },[customerPrices])
  return <Input value={item} setValue={setItem} type='text' name={name} 
  // onFocus={() => setItem(item)} 
  onBlur={() => {
        
        item &&  setUpdatedData({
          ... data[itemIndex],
          defaultPrices: item
        })
      //   firebase.firestore().collection(collName).doc(data[itemIndex].id).update({
      // ... data[itemIndex],
      // defaultPrices: item}) 
      console.log(item);
      console.log(data);
  }}   
  />
}
  

  return (
    <Form onSubmit={e => {
      e.preventDefault()
      firebase.firestore().collection(collName).doc(rowId).update(editedRow) 
      setRowId(null)
    }}>
    
    <Table striped bordered hover responsive>
 <thead style={{whiteSpace: 'pre' }}>
     <tr>
    {headers.map( item => (
      <th className='bg-primary text-light w-100'>{item.label}</th>
      ))}
      <th className='bg-primary text-light w-100' style={{ display:`${updateAndDelete && !updateAndDelete.update? 'none' : 'table-cell'}`}}>تعديل</th>
      <th className='bg-primary text-light w-100' style={{ display:`${updateAndDelete && !updateAndDelete.delete? 'none' : 'table-cell'}`}}>حذف</th>
   </tr>
 </thead>
 <tbody style={{whiteSpace: 'pre' }}>
  {/* {console.log(headers.compo)} */}
   {
     data.map( (item, itemIndex) => (
       
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

            if(header.compo === 'TdInput') 
            return <td>
              <TdInput name={header.value} data={data} itemIndex={itemIndex} setUpdatedData={setUpdatedData}/>
            </td>
            
            if(header.compo === 'ConditionTd') 
            return <td>
              {
                item[header.value] ? <small>{header.trueValue}</small> : <small>{header.falseValue}</small>
              }
            </td>

            if(header.compo && typeof(header.compo))
            return <td>
              {header.compo}
            </td>

            if(!header.value)
            return <td>
              {item.label}
            </td>

            return <td>
            {item[header.value]}
            
            </td>
}) 
          }
        <td style={{ display:`${updateAndDelete && !updateAndDelete.update? 'none' : 'table-cell'}`}}>{
        unEditable ?  <FaEdit style={{cursor: 'pointer'}}  onClick={() => navigate(`/${nav}/${item.id}`)}/>
         :
          <FaEdit style={{cursor: 'pointer',}}  onClick={() => {console.log(item.id); setRowId(item.id)}}/>
          }</td>
        <td style={{display:`${updateAndDelete && !updateAndDelete.delete? 'none' : 'table-cell'}`}}><FaTrash style={{cursor: 'pointer',}}  onClick={() => {
          // decrement shippCount if count defind
          console.log(elementsCount);
          if(elementsCount){
            const db = getFirestore()
          setDoc(doc(db, collName, `${collName}-id-count`), {[`${collName}Count`]: Number(item.id) - 1})
        }
          //delete document
          firebase.firestore().collection(collName).doc(item.id).delete()
          }}/></td>
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