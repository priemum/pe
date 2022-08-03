import React from 'react'
import AddBtn from '../components/AddBtn'
import {ZoneTable} from '../components/TableCompo'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { StatusContext } from '../contexts/StatusContext'
import Tabels from '../components/Tabels'
const Status = () => {
  const [status] = useContext(StatusContext)
  const statuses = [
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
  return(
   <div>
    <Link to='/status/add'>
    <AddBtn content='إضافة حالة جديدة'/>
    </Link>
    <Tabels data={status} collName='status' headers={[{label: 'اسم الحالة', value: 'name'}, {label: 'الوصف', value: 'desc'}]}/>
   </div>
    )
}

export default Status