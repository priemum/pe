import React, { createContext, useState, useEffect } from 'react'
import { getData } from '../db/firestoreHundle'
export const AreasContext = createContext()

export const AreasProvider = (props) => {
    const [areas, setAreas] = useState([])
    useEffect(() => {
        getData('areas', setAreas)
      }, [])
  return (
    <AreasContext.Provider value={[areas, setAreas]}>{props.children}</AreasContext.Provider>
  )
}
