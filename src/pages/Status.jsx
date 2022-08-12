import React from 'react'
import AddBtn from '../components/AddBtn'
import {ZoneTable} from '../components/TableCompo'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { StatusContext } from '../contexts/StatusContext'
import Tabels from '../components/Tabels'
const Status = () => {
  const [status] = useContext(StatusContext)
  
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