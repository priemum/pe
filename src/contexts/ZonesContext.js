import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../db/firestoreHundle'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { useCallback } from 'react'

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
