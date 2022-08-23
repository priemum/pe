import React, {useContext, useRef} from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import AddBtn from '../components/AddBtn'
import { Input, SelectInput } from '../components/Input'
import Tabels from '../components/Tabels'
import { BranchesContext } from '../contexts/BranchesContext'
import { getData } from '../db/firestoreHundle'
import { getFirestore, addDoc, collection } from 'firebase/firestore'

export const URoles = () => {
    const [groups, setGroups] = useState([])

    useEffect(() => {
        getData('usersgroups', setGroups)
    },[])
  return (
    <>
    <Link to='/Admin/RoleData'>
        <AddBtn content='إضافة مجموعة جديدة' />
    </Link>
    <Tabels headers={[{label: 'اسم المجموعة', value: 'label'}]} data={groups} collName='usersgroups'/>
    </>
  )
}

export const CreateUser = () => {
    const [inputsValue, setInputsValue] = useState({
        name: '',
        mail: '',
        phone: '',
        username: '',
        branches: '',
        password: '',
        retypePassword: '',
        activeAccount: true,
        group: ''
        })
    const inputs = [{label: 'الإسم بالكامل', name: 'name'}, {label: 'البريد الإلكترونى', name: 'mail'}, {label: 'التليفون', name: 'phone'}, {label: 'اسم المستخدم', name: 'username'}]
    const [branches] = useContext(BranchesContext)
    const [groups, setGroups] = useState([])

    useEffect(() => {
        getData('usersgroups', setGroups)
    },[])

    const f1 = useRef()
    const f2 = useRef()
    return <>
    <Form className='my-form' ref={f1} onSubmit={e => {
        e.preventDefault()
        const db = getFirestore()
const docRef = addDoc(collection(db, 'users'), inputsValue)
        navigator('/Admin/URoles')

    }}>
        {inputs.map(input => <Input labelName={input.label} type='text' value={inputsValue} setValue={setInputsValue} name={input.name}/>)}
        <SelectInput label='المجموعة' data={groups} value={inputsValue} setValue={setInputsValue} name='group'/>
        <Form.Group className='d-flex'>
            <Form.Label>الفروع</Form.Label>
            <Form.Group className='d-flex'>
            {branches.map((branch, index) => <Form.Check label={branch.name} name='branches' id={'branch' + index} type='checkbox'/>)}
            </Form.Group>
        </Form.Group>
    </Form> 
    <Form className='my-form' ref={f2} onSubmit={e => {
        e.preventDefault()
        const db = getFirestore()
const docRef = addDoc(collection(db, 'users'), inputsValue)
        navigator('/Admin/URoles')

    }}>
        {[{label: 'كلمة السر', name: 'password'}, {label: 'تأكيد كلمة السر', name: 'retypePassword'}].map(input => <Input labelName={input.label} type='text' value={inputsValue} setValue={setInputsValue} name={input.name}/>)}
        <Form.Check label='
تفعيل الحساب' name='activeAccount' id='activeAccount' type='checkbox' checked={inputsValue.activeAccount}/>
    </Form> 
    <Button onClick={() => {
        console.log(f1.current, f2.current)
    }}>حفظ</Button>
    </>
}

export const AddingGroup = () => {
    const [inputsValue, setInputsValue] = useState({})
    const navigator = useNavigate()
    return <Form onSubmit={e => {
        e.preventDefault()
        const db = getFirestore()
const docRef = addDoc(collection(db, 'usersgroups'), inputsValue)
        navigator('/Admin/URoles')
    }}>
        <Input labelName= 'اسم المجموعة' value={inputsValue} setValue={setInputsValue} name= 'label'/>
        <Button type="submit">حفظ</Button>
    </Form>
}