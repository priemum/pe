import React from 'react'
import { useContext } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddBtn from '../components/AddBtn'
import { Input, SelectInput} from '../components/Input'
import { BranchesContext } from '../contexts/BranchesContext'

export const Invoices = () => {
    const [branches] = useContext(BranchesContext)
  return (
    <>
    <Link to='/accounting/add'>
        <AddBtn content='اضافة فاتورة جديدة'/>
    </Link>
    <Form className='my-form'>
      <SelectInput label='الفرع' data={branches}/>
      <SelectInput label='العميل' data={['الكل']}/>
      <Input labelName='رقم الفاتورة' type='text'/>
    </Form>
    </>
  )
}
