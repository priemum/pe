import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../components/Tabels'
import firebase from '../db/firestore'

/**
  const {id} = useParams()
    useEffect( () => {
      //get current id item
     id && getItem('couriers', id, setInputsValue)
    }, [id])

    useEffect(() => {
      //update current id item
      id && inputsValue.name != '' && firebase.firestore().collection('couriers').doc(id).update(inputsValue)
    },[inputsValue])
 */

export const useGetItem = (doc, currentIdValue, setCurrentIdValue) => {
//   const [currentIdValue, setInputsValue] = useState(inputsValue)
  const {id} = useParams()
  
  useEffect( () => {
    //get current id item
   id && getItem(doc , id, setCurrentIdValue)
  }, [id])

  useEffect(() => {
    //update current id item
    id && currentIdValue.name != '' && firebase.firestore().collection(doc).doc(id).update(currentIdValue)
  },[currentIdValue])
  console.log(id, currentIdValue[0])
  return {currentIdValue, id}
}
