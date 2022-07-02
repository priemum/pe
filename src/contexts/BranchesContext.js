import React, { createContext, useState } from 'react'

export const BranchesContext = createContext()

export const BranchesProvider = (props) => {
    const [branches, setBranches] = useState([{
        shipmentIndex: "ــــــــــــــــــ",
        fax: "ــــــــــــــــــ",
        phone: "ــــــــــــــــــ",
        address: "ــــــــــــــــــ",
        email: "ــــــــــــــــــ",
        name: "الرئيسي",
      }])
  return (
    <BranchesContext.Provider value={[branches, setBranches]}>{props.children}</BranchesContext.Provider>
  )
}
