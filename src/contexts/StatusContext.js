import React, { createContext, useState } from 'react'

export const StatusContext = createContext()

export const StatusProvider = (props) => {
    const [status, setStatus] = useState(
       [
     {
       name: 'Ro-Acc',
       desc: 'جاري ارسال المرتجع للراسل مع المندوب',
     },
     {
       name: 'Cash Delivered',
       desc: 'تم تسليم المبلغ للعميل',
     },
     {
       name: 'Collected',
       desc: 'تم تسليم المبلغ للفرع الرئيسي',
     },
     {
       name: 'Delivered',
       desc: 'تم تسليم الشحنة للمرسل اليه',
     },
     {
       name: 'OD',
       desc: 'تحت التسليم مع المندوب',
     },
     {
       name: 'CR',
       desc: 'العميل رفض الاستلام',
     },
     {
       name: 'OH',
       desc: 'مؤجل',
     },
     {
       name: 'RO',
       desc: 'مرتجع للفرع الرئيسي بدون مقابل من الراسل او دفعه المرسل اليه',
     },
    ]
    )
  return (
    <StatusContext.Provider value={[status, setStatus]}>{props.children}</StatusContext.Provider>
  )
}