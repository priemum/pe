import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../db/firestoreHundle'

export const ZonesContext = createContext()

export const ZonesProvider = (props) => {
    const [zones, setZones] = useState([])
    useEffect(() => {
      getData('zones', setZones)
    }, [])
  return (
    <ZonesContext.Provider value={[zones, setZones]}>{props.children}</ZonesContext.Provider>
  )
}
