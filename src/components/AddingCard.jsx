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


const formSubmit = (nav, inputsValue, navigator) => e => {
  e.preventDefault()
const db = getFirestore()
const docRef = addDoc(collection(db, nav), inputsValue)
  navigator(`/${nav}`)
} 
export const AddingZone = () => {
  const [inputsValue, setInputsValue] = useState({
    name: '',
    desc: ''
  })
  const navigator = useNavigate()
return (
  <Container fluid className='add-card '>
    <Form onSubmit={formSubmit('zones', inputsValue, navigator)} className='my-form'>
            <Input name='name' labelName='اسم النطاق' type='text' value={inputsValue} setValue={setInputsValue}/>
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
return (
  <Container fluid className='add-card '>
        <Form onSubmit={formSubmit('areas', inputsValue, navigator)}>
            <Input name='areaName' labelName='اسم المنطقة' type='text' value={inputsValue} setValue={setInputsValue}/>
            <div className='d-flex align-items-center'>
            <SelectInput data={zones} name='areaDomain' label='النطاق' value={inputsValue} setValue={setInputsValue}/>
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
  const [comm, setComm] = useState({})
  const navigator = useNavigate()
  const {id} = useParams()
  const [inputsValue, setInputsValue] = useState({
    name: '',
    phone: '',
    notes: '',
    username: '',
    password: '',
    comm: {...comm},
    unactive: false
  })
    useEffect( () => {
     id && getItem('couriers', id, setInputsValue)
    }, [id])
    useEffect(() => {
      setComm(inputsValue.comm)
    }, [inputsValue])
  console.log(comm);
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
            <SelectInput label='الفرع' data={branches} setValue={setInputsValue} name='branches'/>
              {inputs.map(input => <Input type={input.type} labelName={input.labelName} name={input.name} value={inputsValue} setValue={setInputsValue}/>)}
              <Textarea label='ملاحظات' name='notes'/>
              <Form.Check type='checkbox' label='غير فعال ' id='unactiveCourier' name='unactiveCourier'
              onChange={() => setInputsValue({...inputsValue, unactive: !inputsValue.unactive})}
              />
              <Button type='submit'>حفظ</Button>
            </Form>
          </Col>
          <Col>
          <CourierTable data={zones} comm={comm} setComm={setComm}/>
          
          {/* <Tabels data={zones} collName='couriers' headers={[{label: 'اسم النطاق', value: 'name'}, {label: 'عمولة المندوب فى حالة التسليم', value: 'deliveryComm'}, {label: 'عمولة المندوب فى حالة المرتجع بمقابل', value: 'returnComm'}]}/> */}

          </Col>
        </Row>
    </Container>
  )
}

export const AddingCustomer = () => {
  const [areas, setAreas] = useContext(AreasContext)
  const [zones, setZones] = useContext(ZonesContext)
  const [inputsValue, setInputsValue] = useState({})
  const navigator = useNavigate()

const formSubmit = e => {
  e.preventDefault()
  console.log(inputsValue)
  setAreas([... areas, inputsValue])
  navigator('/costumers')
} 

return (
  <Container fluid className='add-card '>
      {console.log(inputsValue)}
        <Form onSubmit={formSubmit}>
        <Input name='' labelName='رقم حساب العميل *:' type='text' value={inputsValue} setValue={setInputsValue}/>
        <Input name='' labelName='اسم العميل *:' type='text' value={inputsValue} setValue={setInputsValue}/>
        <div>
        <label>نوع الحساب</label>
         <Form.Check name='k' label='شركات' type='radio' />
         <Form.Check name='k' label='افراد' type='radio' />
        </div>
        <SelectInput label='الفرع' data={[]}/>
        <Input name='' labelName='الشخص المسئول *:' type='text' value={inputsValue} setValue={setInputsValue}/>
        <SelectInput label='النطاق' data={zones}/>
        <SelectInput label='المنطقة' data={areas}/>
        <Textarea name='' value={inputsValue} setValue={setInputsValue} label='العنوان الرئيسي'/>
        <Textarea name='' value={inputsValue} setValue={setInputsValue} label='العنوان 2'/>
        <Textarea name='' value={inputsValue} setValue={setInputsValue} label='العنوان 3'/>
        <Input name='' labelName='رقم التليفون :' type='text' value={inputsValue} setValue={setInputsValue}/>
        <Input name='' labelName='رقم المحمول' type='text' value={inputsValue} setValue={setInputsValue}/>
        <Input name='' labelName='رقم الفاكس' type='text' value={inputsValue} setValue={setInputsValue}/>
        <Input name='' labelName='البريد الالكتروني' type='text' value={inputsValue} setValue={setInputsValue}/>
        <SelectInput label='خدمة العملاء:' data={[]}/>
        <SelectInput label='مسئول المبيعات :' data={[]}/>
        <div>
        <label>طريقة التوريد *:</label>
         <Input name='m' labelName='تسليم مكتب' type='radio' value={inputsValue} setValue={setInputsValue}/>
         <Input name='m' labelName='عن طريق المندوب' type='radio' value={inputsValue} setValue={setInputsValue}/>
         <Input name='m' labelName='ايداع بنكي' type='radio' value={inputsValue} setValue={setInputsValue}/>
        </div>
        <Input name='' labelName='عدد البوالص المستهدفة شهريا (التارجت)' type='text' value={inputsValue} setValue={setInputsValue}/>
        <div>
        <label>ايام التسوية*:</label>
         <Form.Check name='day' label='السبت' type='checkbox' />
         <Form.Check name='day' label='الاحد' type='checkbox' />
         <Form.Check name='day' label='الاثنين' type='checkbox' />
         <Form.Check name='day' label='الثلاثاء' type='checkbox' />
         <Form.Check name='day' label='الاربعاء' type='checkbox' />
         <Form.Check name='day' label='الخميس' type='checkbox' />
         <Form.Check name='day' label='الجمعة' type='checkbox' />
        </div>
        
         <Form.Check name='' label='Sms للمرسل الية :' type='checkbox' />
         <Form.Check name='' label='فعال' type='checkbox' />
         <Input name='' labelName='اسم الدخول' type='text' value={inputsValue} setValue={setInputsValue}/>
         <Input name='' labelName='كلمة المرور' type='text' value={inputsValue} setValue={setInputsValue}/>
         <Form.Check label='تنشيط الحساب على الانترنت :
' name='' type='checkbox' />
         <Form.Check name='' label='ارسل رسالة sms للعميل بالتسجيل :
' type='checkbox' />
        </Form>
        <Button type='submit'>حفظ</Button>
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
  const [branches, setBranches] = useContext(BranchesContext)
  const [zones, setZones] = useContext(ZonesContext)
  const [areas, setAreas] = useContext(AreasContext)

  return <Form className='my-form'>
    <fieldset>
      <legend>
      بيانات البوليصة
      </legend>
      <Col md={6}>
      <RadioInputs label='نوع التكويد' radioesArr={['اتوماتيك','يدوى']} name='shipmentRadioes'/>
      </Col>
      <Col md={6}>
      <SelectInput label='الفرع' data={branches} />
      </Col>
      <Col md={6}>
      <SelectInput label='رقم البيك اب' data={['لا يوجد', '14', '15']} />
      </Col>
      <Col md={6}>
      <Input labelName='رقم البوليصة' readonly={true} value='auto' type='text'/>
      </Col>
      <Col md={6}>
      </Col>
      <Input labelName='Client Ref' type='date'/>
      <Col md={6}>
      <SelectInput label='نوع البوليصة' data={['مبلغ مقابل طرد', 'طرد مقابل طرد', 'طرد بدون مقابل']} />
      </Col>
      <Col md={6}>
      <Input labelName='الوزن' type='text'/>
      </Col>
      <Col md={6}>
      <Input labelName='عدد القطع' type='text'/>
      </Col>
      <Col md={6}>
      <Textarea label='البيان'/>
      </Col>
      <Col md={6}>
      <SelectInput label='الحالة الحالية' data={[]}/>
      </Col>
    </fieldset>
    <fieldset>
      <legend>
      بيانات المرسل الية
      </legend>
      <Row>
      <Col md={6}>
      <Input type='text' labelName='اسم المرسل اليه'/>
      </Col>
      <Col md={6}>
      <SelectInput label='النطاق' data={zones}/>
      </Col>
      <Col md={6}>
      <Textarea label='العنوان'/>
      </Col>
      <Col md={6}>
      <SelectInput label='المنطقة' data={areas}/>
      </Col>
      <Col md={6}>
      <Input type='text' labelName='رقم الموبايل' />
      </Col>
      <Col md={6}>
      <Input type='text' labelName='رقم الموبايل2' />
      </Col>
      </Row>
    </fieldset>
    <fieldset>
      <legend>
      بيانات العميل
      </legend>
      <Col md='6'>
      <SelectInput label='العميل' data={['اختار']}/>
      </Col>
      <Col md='6'>
      <RadioInputs label='نوع التكويد' radioesArr={['المبلغ بدون قيمة الشحن','المبلغ شامل قيمة الشحن']} name='shipmentRadioes'/>
      </Col>
      <Col md='4'>
      <Input type='text' labelName='المبلغ' />
      </Col>
      <Col md='4'>
      <Input type='text' labelName='قيمة الشحن' />
      </Col>
      <Col md='4'>
      <Input type='text' labelName='الصافي' />
      </Col>
    </fieldset>
    <Button>حفظ و خروج</Button>
    <Button>حفظ و اضافة جديد</Button>
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