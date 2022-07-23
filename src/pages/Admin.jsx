import React, {useContext} from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddBtn from '../components/AddBtn'
import { Input } from '../components/Input'
import Tabels from '../components/Tabels'
import { BranchesContext } from '../contexts/BranchesContext'

const groups = ['الحسابات','المديرين','العمليات','خدمة العملاء','مدخلين البيانات','فرع']

export const URoles = () => {
  return (
    <>
    <Link to='/Admin/CreateUser'>
        <AddBtn content='إضافة مجموعة جديدة' />
    </Link>
    <Tabels headers={['اسم المجموعة']} data={groups}/>
    </>
  )
}

export const CreateUser = () => {
    const inputs = ['الإسم بالكامل', 'البريد الإلكترونى', 'التليفون', 'اسم المستخدم']
    const [branches] = useContext(BranchesContext)

    return <>
    <Form className='my-form'>
        {inputs.map(input => <Input labelName={input} type='text'/>)}
        <Form.Group className='d-flex'>
            <Form.Label>الفروع</Form.Label>
            <Form.Group className='d-flex'>
            {branches.map((branch, index) => <Form.Check label={branch.name} name='branches' id={'branch' + index} type='checkbox'/>)}
            </Form.Group>
        </Form.Group>
    </Form> 
    <Form className='my-form'>
        {['كلمة السر', 'تأكيد كلمة السر'].map(input => <Input labelName={input} type='text'/>)}
        <Form.Check label='
تفعيل الحساب' name='activeAccount' id='activeAccot' type='checkbox'/>
    </Form> 
    </>
}