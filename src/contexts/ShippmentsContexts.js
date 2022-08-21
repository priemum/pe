import React, { createContext, useState, useEffect } from 'react'
import { getData } from '../db/firestoreHundle'
export const ShippmentsContext = createContext()

export const ShippmentsProvider = (props) => {
    const [shippments, setShippments] = useState([])
    useEffect(() => {
        getData('shippments', setShippments)
      }, [])
  return (
    <ShippmentsContext.Provider value={[shippments, setShippments]}>{props.children}</ShippmentsContext.Provider>
  )
}