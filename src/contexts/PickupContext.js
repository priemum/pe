import React, { createContext, useState, useEffect } from 'react'
import { getData } from '../db/firestoreHundle'
export const PickupContext = createContext()

export const PickupProvider = (props) => {
    const [pickups, setPickups] = useState([])
    useEffect(() => {
        getData('pickups', setPickups)
      }, [])
  return (
    <PickupContext.Provider value={[pickups, setPickups]}>{props.children}</PickupContext.Provider>
  )
}