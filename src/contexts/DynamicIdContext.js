import { addDoc, collection, doc, getFirestore, setDoc } from 'firebase/firestore'
import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../db/firestoreHundle'

export const DynamicIdContext = createContext()

export const DynamicIdProvider = (props) => {
  const [shippmentsId, setShippmentsId] = useState(1)
    const [dynamicsId, setDynamicsId] = useState({
        shippmentsId: 1
    })
    useEffect(() => {
        getData('dynamicsId', setDynamicsId)
        console.log(dynamicsId);
      },[])
      console.log(shippmentsId);
    useEffect(() => {
         const db = getFirestore()
         setDoc(doc(db, 'dynamicsId', '1'), {shippmentsId: shippmentsId})
         
    },[shippmentsId])
    
  return (
    <DynamicIdContext.Provider value={{dynamicsId, setShippmentsId}}>{props.children}</DynamicIdContext.Provider>
  )
}
