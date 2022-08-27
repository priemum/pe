import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../db/firestoreHundle'

export const ComplexContext = createContext()

export const ComplexProvider = (props) => {
  const [complaints, setComplaints] = useState([])
    const [complType, setComplType] = useState([])
    const [complGeha, setComplGeha] = useState([])
    useEffect(() => {
      getData('complaints', setComplaints)
      getData('complaintsTypes', setComplType)
      getData('complaintsGeha', setComplGeha)
    }, [])
    
    return (
    <ComplexContext.Provider value={{complType, setComplType, complGeha, setComplGeha, complaints, setComplaints}}>{props.children}</ComplexContext.Provider>
  )
}