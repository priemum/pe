import React, { createContext, useState } from 'react'

export const ZonesContext = createContext()

export const ZonesProvider = (props) => {
    const [zones, setZones] = useState([])
  return (
    <ZonesContext.Provider value={[zones, setZones]}>{props.children}</ZonesContext.Provider>
  )
}
