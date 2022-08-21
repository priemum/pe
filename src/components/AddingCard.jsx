import React, { useContext, useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate, useParams} from 'react-router-dom'
import { ZonesContext } from '../contexts/ZonesContext'
import { AreasContext } from '../contexts/AreasContext'
import { BranchesContext } from '../contexts/BranchesContext'
import { CouriersContext } from '../contexts/CouriersContext'
import {Input, Textarea, SelectInput, FromToCompo, RadioInputs, MultiSelect, CheckboxInputs} from './Input'
import { CourierTable } from './TableCompo'
import { ComplexContext } from '../contexts/ComplexContexts'
import { CustomerContext } from '../contexts/CustomersContext'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import Tabels, { getItem } from './Tabels'
import { useEffect } from 'react'
import firebase from '../db/firestore'
import { StatusContext } from '../contexts/StatusContext'


const formSubmit = (nav, inputsValue, navigator) => e => {
  e.preventDefault()
  console.log(inputsValue);
const db = getFirestore()
const docRef = addDoc(collection(db, nav), inputsValue)
navigator && navigator(`/${nav}`)
} 
export const AddingZone = ({nav, labelName}) => {
  const [inputsValue, setInputsValue] = useState({
    name: '',
    desc: '',
    defaultPrices: {
      shipValue: '',
    extraKgCost: '',
    returnShipValue: ''
    }
  })
  const navigator = useNavigate()
return (
  <Container fluid className='add-card '>
    <Form onSubmit={formSubmit(`${nav}`, inputsValue, navigator)} className='my-form'>
            <Input name='name' labelName={labelName} type='text' value={inputsValue} setValue={setInputsValue}/>
            <div className='d-flex align-items-center'>
              <Textarea name='desc' value={inputsValue} setValue={setInputsValue} label='ملاحظات'/>
            
            </div>
            <Button type='submit'  className='d-block mx-auto'>حفظ</Button>
            
        </Form>
    </Container>
  )
}

export const AddingArea = () => {
  const [zones] = useContext(ZonesContext)
  const [inputsValue, setInputsValue] = useState({})
  const navigator = useNavigate()
return (
  <Container fluid className='add-card '>
        <Form onSubmit={formSubmit('areas', inputsValue, navigator)}>
            <Input name='name' labelName='اسم المنطقة' type='text' value={inputsValue} setValue={setInputsValue}/>
            <div className='d-flex align-items-center'>
            <SelectInput data={zones} name='domain' label='النطاق' value={inputsValue} setValue={setInputsValue}/>
            </div>
            <Button type='submit'  className='d-block mx-auto'>حفظ</Button>
            
        </Form>
    </Container>
  )
}

export const AddingCourier = () => {
  const [couriers, setCouriers] = useContext(CouriersContext)
  const [zones, setZones] = useContext(ZonesContext)
  const [branches, setBranches] = useContext(BranchesContext)
  
  const navigator = useNavigate()
  const {id} = useParams()
  const [inputsValue, setInputsValue] = useState({
    branches: '',
    name: '',
    phone: '',
    notes: '',
    username: '',
    password: '',
    comm: {},
    unactive: false
  })
    useEffect( () => {
     id && getItem('couriers', id, setInputsValue)
    }, [id])

    useEffect(() => {
      id && inputsValue.name != '' && firebase.firestore().collection('couriers').doc(id).update(inputsValue)
    },[inputsValue])

  const inputs = [
    {
      labelName: ':اسم المندوب',
      type: 'text',
      name: 'name'
    },
    {
      labelName: ':تليفون',
      type: 'text',
      name: 'phone'
    },
    {
      labelName: ':اسم الدخول',
      type: 'text',
      name: 'username'
    },
    {
      labelName: ':كلمة المرور',
      type: 'text',
      name: 'password'
    },
  ]
  return (
  <Container fluid className='add-card '>
        <Row className=''>
          <Col>
            <Form onSubmit={formSubmit('couriers', inputsValue, navigator)}>
            <SelectInput label='الفرع' data={branches} setValue={setInputsValue} name='branches' selectedValue={inputsValue} value={inputsValue}/>
             
             
              {inputs.map(input => <Input type={input.type} labelName={input.labelName} name={input.name} value={inputsValue} setValue={setInputsValue}/>)}

              <Textarea label='ملاحظات' name='notes' setValue={setInputsValue} value={inputsValue}/>
              <Form.Check 
              reverse
              type='checkbox'
               label='غير فعال '
                id='unactiveCourier' name='unactiveCourier'
              checked={inputsValue.unactive}
              onChange={() => setInputsValue({...inputsValue, unactive: !inputsValue.unactive})}
              />
              <Button type='submit' className={`${id ? 'd-none' : 'd-block'}`}>حفظ</Button>
            </Form>
          </Col>
          <Col>
          <CourierTable data={zones} inputsValue={inputsValue} setInputsValue={setInputsValue}/>
          </Col>
        </Row>
    </Container>
  )
}

export const AddingCustomer = () => {
  const [areas] = useContext(AreasContext)
  const [zones] = useContext(ZonesContext)
  const [branches] = useContext(BranchesContext)
  const [inputsValue, setInputsValue] = useState({
    accountNumber: '',
    accountType: {
      comp: false,
      person: false
    },
    areas: '',
    branches: '',
    name: '',
    resPerson: '',
    zones: '',
    mainAddress: '',
    secondAddress: '',
    thierdAddress: '',
    teleNumber: '',
    phone: '',
    fax: '',
    mail: '',
    subMethod: {
      office: false,
      couriers: false,
      bank: false,
    },
    targetedShipments: '',
    setDays: {
      str: false,
      sun: false,
      mon: false,
      thu: false,
      wed: false,
      thr: false,
      fri: false,
    },
    sendSms: false,
    active: false,
    activeOnNetwork: false,
    registerSms: false,
    username: '',
    password: '',
    defaultPrices:  zones ? zones.map(zone =>  ({
        name: `${zone.name}`,
        defaultPrices: { shipValue: '',
        extraKgCost: '',
        returnShipValue: ''}
        })) : [],
    }
  )
  const navigator = useNavigate()
  const { id } = useParams()
  useEffect( () => {
    id && getItem('customers', id, setInputsValue)
   }, [id])

  useEffect(() => {
    id && inputsValue.accountNumber != '' && firebase.firestore().collection('customers').doc(id).update(inputsValue)
  },[inputsValue])

return (
  <Container fluid className='add-card '>
      {console.log(inputsValue)}
        <Form onSubmit={formSubmit('customers', inputsValue, navigator)}>
        <Input name='accountNumber' labelName='رقم حساب العميل *:' type='text' value={inputsValue} setValue={setInputsValue}/>
        <Input name='name' labelName='اسم العميل *:' type='text' value={inputsValue} setValue={setInputsValue}/>
        <Form.Group name='accountType'>
        <Form.Label>نوع الحساب</Form.Label>
         <Form.Check name='k' onChange={() => setInputsValue({...inputsValue, accountType: {
            comp: !inputsValue.accountType.comp,
            person: false
          }})} checked={inputsValue.accountType.comp} label='شركات' type='radio' />
         <Form.Check name='k' onChange={() => setInputsValue({...inputsValue, accountType: {
            person: !inputsValue.accountType.person,
            comp: false
          }})} checked={inputsValue.accountType.person} label='افراد' type='radio' />
        </Form.Group>
        <SelectInput value={inputsValue} label='الفرع' data={branches} setValue={setInputsValue} name='branches' selectedValue={inputsValue} />
        <Input name='resPerson' labelName='الشخص المسئول *:' type='text' value={inputsValue} setValue={setInputsValue}/>
        <SelectInput value={inputsValue} label='النطاق' data={zones} setValue={setInputsValue} name='zones' selectedValue={inputsValue}/>
        <SelectInput value={inputsValue} label='المنطقة' data={areas} setValue={setInputsValue} name='areas' selectedValue={inputsValue}/>
        <Textarea name='mainAddress' value={inputsValue} setValue={setInputsValue} label='العنوان الرئيسي'/>
        <Textarea name='secondAddress' value={inputsValue} setValue={setInputsValue} label='العنوان 2'/>
        <Textarea name='thierdAddress' value={inputsValue} setValue={setInputsValue} label='العنوان 3'/>
        <Input name='teleNumber' labelName='رقم التليفون :' type='text' value={inputsValue} setValue={setInputsValue}/>
        <Input name='phone' labelName='رقم المحمول' type='text' value={inputsValue} setValue={setInputsValue}/>
        <Input name='fax' labelName='رقم الفاكس' type='text' value={inputsValue} setValue={setInputsValue}/>
        <Input name='mail' labelName='البريد الالكتروني' type='text' value={inputsValue} setValue={setInputsValue}/>
        <SelectInput label='خدمة العملاء:' data={[]}/>
        <SelectInput label='مسئول المبيعات :' data={[]}/>
        <Form.Group>
        <Form.Label>طريقة التوريد *:</Form.Label>
         <Form.Check checked={inputsValue.subMethod.office} name='m' label='تسليم مكتب' type='radio' id='m' onChange={() => setInputsValue({...inputsValue, subMethod: {
            office: !inputsValue.subMethod.office,
            couriers: false,
            bank: false
          }})}/>
         <Form.Check checked={inputsValue.subMethod.couriers} name='m' label='عن طريق المندوب' type='radio' id='m' onChange={() => setInputsValue({...inputsValue, subMethod: {
            couriers: !inputsValue.subMethod.couriers,
            office: false,
            bank: false
          }})}/>
         <Form.Check checked={inputsValue.subMethod.bank} name='m' label='ايداع بنكي' type='radio' id='m' onChange={() => setInputsValue({...inputsValue, subMethod: {
            bank: !inputsValue.subMethod.bank,
            couriers: false,
            office: false
          }})}/>
        </Form.Group>
        <Input name='targetedShipments' labelName='عدد البوالص المستهدفة شهريا (التارجت)' type='text' value={inputsValue} setValue={setInputsValue}/>
        <Form.Group>
        <Form.Label>ايام التسوية*:</Form.Label>
         <Form.Check name='day' checked={inputsValue.setDays.str} onChange={() => setInputsValue({...inputsValue, setDays: {
            ...inputsValue.setDays,
            str: !inputsValue.setDays.str
          }})} label='السبت' type='checkbox' />
         <Form.Check name='day' checked={inputsValue.setDays.sun} onChange={() => setInputsValue({...inputsValue, setDays: {
            ...inputsValue.setDays,
            sun: !inputsValue.setDays.sun
          }})} label='الاحد' type='checkbox' />
         <Form.Check name='day' checked={inputsValue.setDays.mon} onChange={() => setInputsValue({...inputsValue, setDays: {
            ...inputsValue.setDays,
            mon: !inputsValue.setDays.mon
          }})} label='الاثنين' type='checkbox' />
         <Form.Check name='day' checked={inputsValue.setDays.thu} onChange={() => setInputsValue({...inputsValue, setDays: {
            ...inputsValue.setDays,
            thu: !inputsValue.setDays.thu
          }})} label='الثلاثاء' type='checkbox' />
         <Form.Check name='day' checked={inputsValue.setDays.wed} onChange={() => setInputsValue({...inputsValue, setDays: {
            ...inputsValue.setDays,
            wed: !inputsValue.setDays.wed
          }})} label='الاربعاء' type='checkbox' />
         <Form.Check name='day' checked={inputsValue.setDays.thr} onChange={() => setInputsValue({...inputsValue, setDays: {
            ...inputsValue.setDays,
            thr: !inputsValue.setDays.thr
          }})} label='الخميس' type='checkbox' />
         <Form.Check name='day' checked={inputsValue.setDays.fri} onChange={() => setInputsValue({...inputsValue, setDays: {
            ...inputsValue.setDays,
            fri: !inputsValue.setDays.fri
          }})} label='الجمعة' type='checkbox' />
        </Form.Group>
        
         <Form.Check name='sendSms' onChange={() => setInputsValue({...inputsValue, sendSms: !inputsValue.sendSms})} checked={inputsValue.sendSms} label='Sms للمرسل الية :' type='checkbox' />
         <Form.Check name='active' onChange={() => setInputsValue({...inputsValue, active: !inputsValue.active})} checked={inputsValue.active} label='فعال' type='checkbox' />
         <Input name='username' labelName='اسم الدخول' type='text' value={inputsValue} setValue={setInputsValue}/>
         <Input name='password' labelName='كلمة المرور' type='text' value={inputsValue} setValue={setInputsValue}/>
         <Form.Check onChange={() => setInputsValue({...inputsValue, activeOnNetwork: !inputsValue.activeOnNetwork})} checked={inputsValue.activeOnNetwork} label='تنشيط الحساب على الانترنت :
' name='activeOnNetwork' type='checkbox' />
         <Form.Check name='registerSms' label='ارسل رسالة sms للعميل بالتسجيل :
' type='checkbox' onChange={() => setInputsValue({...inputsValue, registerSms: !inputsValue.registerSms})} checked={inputsValue.registerSms}/>
        <Button type='submit' className={`${id ? 'd-none' : 'd-block'}`}>حفظ</Button>
        </Form>
    </Container>
  )
}

export const AddingBranchReturn = () => {
  const [branches, setBranches] = useContext(BranchesContext)
  
  const formSubmit = e => {
    e.preventDefault()
    console.log()
  }
  return(
    <>
        <Form  className='my-form' onSubmit={formSubmit}>
      <Input labelName='رقم التوريد' type='number' readonly={true}/>
      <Input labelName='تاريخ التوريد' type='date' />
      <SelectInput data={branches} label='من فرع'/>
      <SelectInput data={branches} label='الي فرع'/>
      <Row>
        <Col>
        <Textarea label='بوالص لم يتم توريدها'/>
        </Col>
        <Col>
        <Button>ادراج</Button>
        </Col>
      </Row>
      <Row>
<Col>
عدد البوالص : <small className='text-danger'>0</small></Col>
        <Col>
        اجمالى المبلغ : <small className='text-danger'>0</small></Col>
<Col>
اجمالى قيمة الشحن : <small className='text-danger'>0</small></Col>
<Col>
الصافى : <small className='text-danger'>0</small></Col>
      </Row>
      <Input labelName=':البيان'/>
      <Button type='submit'>حفظ</Button>
    </Form>
      <Form className='my-form'>
    <fieldset className='border'>
      <legend>تأكيد استلام البوالص فى امر التوريد</legend>
      <Row>
        <Col>
        <Textarea label='البوالص التي تم استلامها'/>
        </Col>
        <Col>
        <Button>ادراج</Button>
        </Col>
      </Row>
      <Row>
<Col>
عدد البوالص : <small className='text-danger'>0</small></Col>
        <Col>
        اجمالى المبلغ : <small className='text-danger'>0</small></Col>
<Col>
اجمالى قيمة الشحن : <small className='text-danger'>0</small></Col>
<Col>
الصافى : <small className='text-danger'>0</small></Col>
      </Row>
      <Button type='submit'>استلام</Button>
    </fieldset>
      </Form>
    </>
  )
}

export const AddFlyerData = () => {
  const [branches, setBranches] = useContext(BranchesContext)

  return <Form className='my-form'>
    <SelectInput label='الفرع' data={branches}/>
        <SelectInput label='العميل' data={['اختار العميل']}/>
    <Input labelName='تاريخ الصرف' type='date'/>
    <Input labelName='عدد الفلايرات' type='text'/>
    <FromToCompo label='ارقام البوالص' fromLabel='من' toLabel='الي'/> 
    <Input labelName='ملاحظات' type='text'/>
    <Button type='submit'>حفظ</Button>
     </Form>
}

export const AddShipment = () => {
  const navigator = useNavigate() 
  const [branches] = useContext(BranchesContext)
  const [areas] = useContext(AreasContext)
  const [zones] = useContext(ZonesContext)
  const [customers] = useContext(CustomerContext)
  const [status] = useContext(StatusContext)
  const date = new Date()
  console.log(date.toDateString());
  const [inputsValue, setInputsValue] = useState({
    shipmentRadioes: '',
    shippType: '',
    shippCode: '',
    pickupDate: `${date.toLocaleDateString()}`,
    pickupNum: '',
    clientName: '',
    customerName: '',
    statement: '',
    phone: '',
    area: '',
    cost: '',
    status: '',
    addBy:  '',
    updatedBy: '',
    zone: '',
    address: '',
    phone: '',
    phone2: '',
    price: '',
    shipCost: '',
    amount: '',
    piecesNum: '1',
    weight: '1',
    branches: '',
    clientRef: '',
    codeTypeRadioes: '',
  })

  return <Form className='my-form' onSubmit={formSubmit('shippments', inputsValue, navigator)}>
    <fieldset>
      <legend>
      بيانات البوليصة
      </legend>
      <Col md={6}>
      <RadioInputs label='نوع التكويد' radioesArr={['اتوماتيك','يدوى']} defaultCheckedIndex={0} name='shipmentRadioes'  value={inputsValue} setValue={setInputsValue} />
      </Col>
      <Col md={6}>
      <SelectInput label='الفرع' data={branches} selectedValue={branches[0]} value={inputsValue} setValue={setInputsValue} name='branches'/>
      </Col>
      <Col md={6}>
      <SelectInput label='رقم البيك اب' data={['لا يوجد', '14', '15']}  value={inputsValue} setValue={setInputsValue} name='pickupNum' />
      </Col>
      <Col md={6}>
      <Input labelName='رقم البوليصة' readonly={true} value='auto' type='text' setValue={setInputsValue} name='shippCode'/>
      </Col>
      <Col md={6}>
      </Col>
      <Input labelName='Client Ref' type='text' value={inputsValue} setValue={setInputsValue} name='clientRef'/>
      <Input labelName='تاريخ البيك اب' type='text' onFocus={e => e.target.type = 'date'} onBlur={e => e.target.type = 'text'} value={inputsValue} setValue={setInputsValue} name='pickupDate'/>
      <Col md={6}>
      <SelectInput label='نوع البوليصة' data={['مبلغ مقابل طرد', 'طرد مقابل طرد', 'طرد بدون مقابل']}  value={inputsValue} setValue={setInputsValue} name='shippType'/>
      </Col>
      <Col md={6}>
      <Input labelName='الوزن' type='text' value={inputsValue} setValue={setInputsValue} name='weight'/>
      </Col>
      <Col md={6}>
      <Input labelName='عدد القطع' type='text' value={inputsValue} setValue={setInputsValue} name='piecesNum'/>
      </Col>
      <Col md={6}>
      <Textarea label='البيان' value={inputsValue} setValue={setInputsValue} name='statement'/>
      </Col>
      <Col md={6}>
      <SelectInput label='الحالة الحالية' data={status || []} value={inputsValue} setValue={setInputsValue} name='status'/>
      </Col>
    </fieldset>
    <fieldset>
      <legend>
      بيانات المرسل الية
      </legend>
      <Row>
      <Col md={6}>
      <Input type='text' labelName='اسم المرسل اليه' value={inputsValue} setValue={setInputsValue} name='customerName'/>
      </Col>
      <Col md={6}>
      <SelectInput label='النطاق' data={zones || []} value={inputsValue} setValue={setInputsValue} name='zone'/>
      </Col>
      <Col md={6}>
      <Textarea label='العنوان' value={inputsValue} setValue={setInputsValue} name='address'/>
      </Col>
      <Col md={6}>
      <SelectInput label='المنطقة' data={areas || []} value={inputsValue} setValue={setInputsValue} name='area'/>
      </Col>
      <Col md={6}>
      <Input type='text' labelName='رقم الموبايل'  value={inputsValue} setValue={setInputsValue} name='phone'/>
      </Col>
      <Col md={6}>
      <Input type='text' labelName='رقم الموبايل2'  value={inputsValue} setValue={setInputsValue} name='phone2'/>
      </Col>
      </Row>
    </fieldset>
    <fieldset>
      <legend>
      بيانات العميل
      </legend>
      <Col md='6'>
      <SelectInput label='العميل' data={customers || []} value={inputsValue} setValue={setInputsValue} name='clientName'/>
      </Col>
      <Col md='6'>
      <RadioInputs label='نوع التكويد' radioesArr={['المبلغ بدون قيمة الشحن','المبلغ شامل قيمة الشحن']} name='codeTypeRadioes' value={inputsValue} setValue={setInputsValue} />
      </Col>
      <Col md='4'>
      <Input type='text' labelName='المبلغ'  value={inputsValue} setValue={setInputsValue} name='cost'/>
      </Col>
      <Col md='4'>
      <Input type='text' labelName='قيمة الشحن'  value={inputsValue} setValue={setInputsValue} name='shipCost'/>
      </Col>
      <Col md='4'>
      <Input type='text' labelName='الصافي'  value={inputsValue} setValue={setInputsValue} name='amount'/>
      </Col>
    </fieldset>
    <Button type='submit'>حفظ و خروج</Button>
    <Button onClick={() => {
      formSubmit('shippments', inputsValue)
      navigator('/shipments/add')
    }}>حفظ و اضافة جديد</Button>
  </Form>
}

export const AddingSheet = () => {
  const [branches, setBranches] = useContext(BranchesContext)
  const [sheet, setSheet] = useState(null)
  const inputs = [
    {
      label:'رقم الشيت',
      name: 'sheetCode',
      type: 'text',
    },
    {
      label: 'تاريخ الشيت',
      type: 'date',
    },
    {
      label: 'كود البوليصة',
      name: 'shipmentCode',
      type: 'text',
    },
    ]
  return <Form onSubmit={e => {
    e.preventDefault()
    console.log()
  }}>
    <SelectInput data={branches} label='الفرع'/>
    {
      inputs.map(input => <Input name={input.name} labelName={input.label} type={input.type} value={sheet} setValue={setSheet}/>)
    }
    <Row>
    {['ملاحظات','مراجعة العمليات'].map(textarea => <Col md={6}><Textarea label={textarea} value={sheet} setValue={setSheet}/>
    </Col>
    )}
    </Row>
    <Button>طباعة</Button>
    <Button type='submit' className='mx-1'>حفظ</Button>
  </Form>
}
export const AddingDeliverySheet = () => {
      const [branches, setBranches] = useContext(BranchesContext)
      const [areas, setAreas] = useContext(AreasContext)
      const [sheet, setSheet] = useState(null)
      const inputs = [
        {
          label:'رقم الشيت',
          name: 'sheetCode',
          type: 'text',
        },
        {
          label: 'تاريخ الشيت',
          type: 'date',
        }
        ]
      return <><Form className='my-form' onSubmit={e => {
        e.preventDefault()
        console.log()
      }}>
        <Row className='d-flex'>
        <Col className='d-flex align-items-center' md={6} >
        <SelectInput data={branches} label='الفرع'/>
        </Col>
        <Col className='d-flex align-items-center' md={6} >
        <SelectInput data={[]} label='المندوب'/>
        </Col>
        {
          inputs.map(input => <Col md={6}> <Input name={input.name} labelName={input.label} type={input.type} value={sheet} setValue={setSheet}/> </Col>)
        }
        <Col className='d-flex align-items-center' md={6} >
          <MultiSelect label='المنظقة' data={areas}/>
          <Button className='d-block '>فحص</Button>
          </Col>
          <Col className='d-flex align-items-center' md={6} >
          <Textarea label='كود البوليصة' />
          <Button className='d-block '>ادراج</Button>
          </Col>
        {['ملاحظات','مراجعة العمليات'].map(textarea => <Col className='d-flex align-items-center' md={6} >
          <Textarea label={textarea} value={sheet} setValue={setSheet}/>
          </Col>
          )}
        <Form.Group className='d-flex'>
          <Form.Check type='checkbox'/>
          <Form.Label>ارسل SMS للمرسل الية</Form.Label>
        </Form.Group>
      </Row>
        <Button>طباعة</Button>
        <Button type='submit' className='mx-1'>حفظ</Button>
      </Form>
      <Form className='d-flex justify-content-start my-1 align-items-center my-3'>
        <Input labelName='رقم الشيت' type='text'/>
        <Button type='submit' className='me-2 mb-2'>تحويل الي شيت اخر</Button>
      </Form>
      </>
    }

export const AddingInvoice = () => {
  const [branches] = useContext(BranchesContext)
  const [couriers] = useContext(CouriersContext)
  return <Form>
      <Input labelName='رقم الفاتورة' type='text'/>
      <Input labelName='تاريخ الفاتورة' type='date'/>
      <SelectInput label='الفرع' data={branches}/>
      <SelectInput label='طريقة التوريد' data={["الكل", "تسليم مكتب", "عن طريق مندوب", "ايداع بنكي"]}/>
      <CheckboxInputs label='ايام التسوية' checkboxArr={["السبت", "الاحد", "الاثنين", "الثلاثاء", "الاربعاء","الخميس","الجمعة"]} name='addingInvoiceCheckbox'/>  
      <SelectInput label='العميل' data={[]}/>
    <Col className='d-flex'>
    <Textarea label='بوالص لم يتم دفعها'/>
    <Button>ادراج</Button>
    </Col>
    <Row className='d-flex'>
    {['عدد البوالص','اجمالى المبلغ','اجمالى قيمة الشحن','الصافى '].map(e => <Col><p style={{whiteSpace: 'pre'}}>{e}</p><span className='text-danger'>0</span></Col>)}
    </Row>
    <Input labelName='البيان' type='text'/>
    <Input labelName='خدمة التوصيل' type='text'/>
    <SelectInput label='المندوب' data={couriers}/>
    <Input labelName='اجمالي الفاتورة' type='text'/>
    <Form.Check 
    type='checkbox'
    label='انشاء بوليصة للفاتورة'
    />
    <Button>بحث</Button>
  </Form>
}

export const AddingComplaint = () => {
  const [branches] = useContext(BranchesContext)
  const {complType, complGeha} = useContext(ComplexContext)
  const [customers] = useContext(CustomerContext)
  const customersArr = (arr) => arr.map(cust => cust.name)
  return <Form className='my-form'>
    <SelectInput data={branches} label='الفرع'/>
    <Input labelName='تاريخ الشكوي' type='date'/>
    <SelectInput data={customersArr(customers)} label='العميل'/>
     <SelectInput data={complType} label='نوع الشكوي'/>
    <SelectInput data={complGeha} label='جهة الشكوي'/>
    <Textarea label='موضوع الشكوى'/>
    <Textarea label='تفاصيل الشكوى'/>
    <Textarea label='الرد علي الشكوى'/>
    <Form.Check label='تم حل وانهاء الشكوى'/>
    <Form.Check label='اخطار العميل برسالة'/>
    <Button>حفظ</Button>
  </Form>
}