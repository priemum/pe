import React, { createContext, useState } from 'react'

export const ZonesContext = createContext()

export const ZonesProvider = (props) => {
    const [zones, setZones] = useState([
      {
        domainName: 'القاهرة و الجيزة',
        desc: ''
      },
      {
        domainName: 'اسكندرية',
        desc: ''
      },
      {
        domainName: 'محافظات الدلتا',
        desc: ''
      },
      {
        domainName: 'مدن جديدة / ضواحي القاهره و الجيزه',
        desc: ''
      },
      {
        domainName: 'مدن القناه',
        desc: ''
      }
    ])
  return (
    <ZonesContext.Provider value={[zones, setZones]}>{props.children}</ZonesContext.Provider>
  )
}
