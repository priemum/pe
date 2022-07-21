import React, { createContext, useState } from 'react'

export const ComplexContext = createContext()

export const ComplexProvider = (props) => {
    const [complType, setComplType] = useState(['شكوي','اقتراح','استفسار'])
    const [complGeha, setComplGeha] = useState(['العمليات','الحسابات','خدمة العملاء'])
    const [complaints, setComplaints] = useState([{
      complNumber: '1',
      complDate: '2021/03/07',
      complType: 'استفسار',
      clientName: 'ORBIVA BRAND',
      complSubject: 'erewrewrerew',
      complGeha: 'العمليات',
      complAnswer: 'etwetewtw3etwe',
      addBy: '',
      updateBy: '',
      updatedDate: '2021/03/07',
    }])
  
    return (
    <ComplexContext.Provider value={{complType, setComplType, complGeha, setComplGeha, complaints, setComplaints}}>{props.children}</ComplexContext.Provider>
  )
}