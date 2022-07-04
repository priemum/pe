import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import AddBtn from '../components/AddBtn'
import { Input, SelectInput } from '../components/Input'
import {BranchesContext} from '../contexts/BranchesContext'
const Couriers = () => {
  const [branches, setBranches] = useContext(BranchesContext)
  return (
    <div>
        <Link to='/couriers/add'><AddBtn content='اضافة مندوب جديد'/></Link>
        <Form>
            <SelectInput label='الفرع' data={branches}/>
            <Input labelName='اسم/تليفون المندوب'/>
        </Form>
    </div>
  )
}

export default Couriers