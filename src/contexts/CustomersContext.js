import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../db/firestoreHundle'

export const CustomerContext = createContext()

export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState()
    useEffect(() => {
      getData('customers', setCustomers)
    }, [])
  return (
    <CustomerContext.Provider value={[customers, setCustomers]}>{props.children}</CustomerContext.Provider>
  )
}