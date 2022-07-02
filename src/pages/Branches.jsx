import React, {useContext, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import AddBtn from '../components/AddBtn';
import {Input, SelectInput} from '../components/Input'
import Tabels from '../components/Tabels'
import { BranchesContext } from '../contexts/BranchesContext';

const Branches = () => {
  const [branches, setBranches] = useContext(BranchesContext)
  const [branch, setBranch] = useState(null)
  const inputs = [
    {
      label: 'اسم الفرع',
      type: 'text',
    },
    {
      label: 'العنوان',
      type: 'text',
    },
    {
      label: 'رقم التليفون',
      type: 'text',
    },
    {
      label: 'رقم الفاكس',
      type: 'text',
    },
    {
      label: 'البريد الالكترونى',
      type: 'text',
    },
    {
      label: 'يبدأ ترقيم بوالص الفرع',
      type: 'text',
    }
    ]
  const headsArr = [
    "يبدأ ترقيم بوالص الفرع",
    "البريد الالكترونى",
    "رقم الفاكس",
    "رقم التليفون",
    "العنوان",
    "اسم الفرع",
  ]  
    return (
      <>
      <Form className='my-form' style={{overflow: 'scroll'}} onSubmit={(e) => {
        e.preventDefault()

        setBranches([... branches, branch])
      }}>
       {inputs.map((input, index) => <Input key={index} labelName={input.label} type={input.type} value={branch} setValue={setBranch} name={input.label}/> )}
    <Button type='submit' >حفظ</Button>
    </Form>
        <Tabels data={branches} headers={headsArr}/>
   </>
      )
}

export const Transfer = () => {
  const [branches, setBranches] = useContext(BranchesContext)
  return <>
  <AddBtn content='اضافة شيت تسليم فرع'/>
    <SelectInput data={branches}/>
  </>
}

export default Branches