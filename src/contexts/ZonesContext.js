import React, { createContext, useState } from 'react'

export const ZonesContext = createContext()

export const ZonesProvider = (props) => {
    const [zones, setZones] = useState([
      {
        name: 'القاهرة و الجيزة',
        desc: ''
      },
      {
        name: 'اسكندرية',
        desc: ''
      },
      {
        name: 'محافظات الدلتا',
        desc: ''
      },
      {
        name: 'مدن جديدة / ضواحي القاهره و الجيزه',
        desc: ''
      },
      {
        name: 'مدن القناه',
        desc: ''
      }
    ])
  return (
    <ZonesContext.Provider value={[zones, setZones]}>{props.children}</ZonesContext.Provider>
  )
}
