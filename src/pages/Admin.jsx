import React, {useContext, useRef} from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AddBtn from '../components/AddBtn'
import { Input, SelectInput } from '../components/Input'
import Tabels, { getItem } from '../components/Tabels'
import { BranchesContext } from '../contexts/BranchesContext'
import { getData } from '../db/firestoreHundle'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import firebase from '../db/firestore'


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
    const navigator= useNavigate()
    useEffect(() => {
        getData('usersgroups', setGroups)
    },[])
    const {id} = useParams()
    useEffect( () => {
     id && getItem('users', id, setInputsValue)
    }, [id])
    
    useEffect(() => {
      id && inputsValue.name != '' && firebase.firestore().collection('users').doc(id).update(inputsValue)
    },[inputsValue])

    return <>
    <Form className='my-form' onSubmit={e => {
        e.preventDefault()
        const db = getFirestore()
const docRef = addDoc(collection(db, 'users'), inputsValue)
        navigator('/Admin/URoles')

    }}>
        {inputs.map(input => <Input labelName={input.label} type='text' value={inputsValue} setValue={setInputsValue} name={input.name}/>)}
        
        <SelectInput label='المجموعة' data={groups.map(g => g.label || [])} value={inputsValue} setValue={setInputsValue} name='group'/>
        <Form.Group className='d-flex'>
            <Form.Label>الفروع</Form.Label>
            <Form.Group className='d-flex'>
            {branches.map((branch, index) => <Form.Check label={branch.name} name='branches' id={'branch' + index} type='checkbox'/>)}
            </Form.Group>
        </Form.Group>
    </Form> 
    <Form className={`my-form ${id ? 'd-none' : 'd-block'}`} onSubmit={e => {
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
       const db = getFirestore()
const docRef = addDoc(collection(db, 'users'), inputsValue)
        navigator('/Admin/URoles')
    }}>حفظ</Button>
    </>
}

export const Users = () => {
  const [users, setUsers] = useState([])
  const headersArr = [
    {
      label: 'اسم المستخدم',
      value: 'name'
    },
    {
      label: 'حالة المستخدم',
      compo: 'ConditionTd',
      value: 'activeAccount',
      trueValue : 'فعال',
      falseValue: 'غير فعال',
    },
    {
      label: 'المجموعة',
      value: 'group'
    },
    {
      label: 'البريد الإلكتروني',
      value: 'mail'
    },
    {
      label: 'التليفون',
      value: 'phone'
    },
    {
      label: 'التاريخ',
      value: 'date'
    },
    {
      label: 'تغيير كلمة المرور',
      compo: <Button>تغيير كلمة المرور</Button>
    },
    ]
  useEffect(() => {
        getData('users', setUsers)
    },[])
  return <>
  <Link to='/Admin/CreateUser'>
        <AddBtn content='إضافة مستخدم جديد' />
    </Link>
    <Tabels unEditable={true} headers={headersArr} data={users} collName='users' nav='Admin/CreateUser'/>
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
        <Input labelName= 'اسم المجموعة' value={inputsValue} setValue={setInputsValue} name= 'name'/>
        <Button type="submit">حفظ</Button>
    </Form>
}