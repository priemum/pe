import React, { createContext, useState } from 'react'

export const CouriersContext = createContext()

export const CouriersProvider = (props) => {
    const [couriers, setCouriers] = useState([
        {
            name: 'عبد الرحمن عصام الدين / اكتوبر',
            phone: '01141997937',
            notes: '',
        } 
    ])
  return (
    <CouriersContext.Provider value={[couriers, setCouriers]}>{props.children}</CouriersContext.Provider>
  )
}