import React, { createContext, useState } from 'react'

export const CustomerContext = createContext()

export const CustomerProvider = (props) => {
    const [customer, setCustomer] = useState([
        { 
            name: 'صفحة تيشيرتات Wingoo',
            date: '2022-04-18',
            respMan: 'محمود',
            zone: 'الفاهرة',
            phone: '00021555962469',
            notes: '',
        } 
    ])
  return (
    <CustomerContext.Provider value={[customer, setCustomer]}>{props.children}</CustomerContext.Provider>
  )
}