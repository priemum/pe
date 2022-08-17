import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../db/firestoreHundle'
export const StatusContext = createContext()

export const StatusProvider = (props) => {
    const [status, setStatus] = useState([])
    useEffect(() => {
      getData('status', setStatus)
    }, [])
  return (
    <StatusContext.Provider value={[status, setStatus]}>{props.children}</StatusContext.Provider>
  )
}