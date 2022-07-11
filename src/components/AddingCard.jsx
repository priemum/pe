import React, { useContext, useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ZonesContext } from '../contexts/ZonesContext'
import { AreasContext } from '../contexts/AreasContext'
import { BranchesContext } from '../contexts/BranchesContext'
import {Input, Textarea, SelectInput, FromToCompo, RadioInputs} from './Input'
import { CourierTable } from './TableCompo'

export const AddingZone = () => {
  const [zones, setZones] = useContext(ZonesContext)
  const [inputsValue, setInputsValue] = useState({})
  const navigator = useNavigate()

const formSubmit = e => {
  e.preventDefault()
  console.log(inputsValue)
  setZones([... zones, inputsValue])
  navigator('/zones')
} 

return (
  <Container fluid className='add-card '>
      {console.log(inputsValue)}
        <Form onSubmit={formSubmit}>
            <Input name='name' labelName=':اسم النطاق' type='text' value={inputsValue} setValue={setInputsValue}/>
            <div className='d-flex align-items-center'>
            <Textarea name='desc' value={inputsValue} setValue={setInputsValue} label='ملاحظات'/>
            
            </div>
            <Button type='submit'  className='d-block mx-auto'>حفظ</Button>
            
        </Form>
    </Container>
  )
}

export const AddingArea = () => {
  const [areas, setAreas] = useContext(AreasContext)
  const [zones, setZones] = useContext(ZonesContext)
  const [inputsValue, setInputsValue] = useState({})
  const navigator = useNavigate()

const formSubmit = e => {
  e.preventDefault()
  console.log(inputsValue)
  setAreas([... areas, inputsValue])
  navigator('/areas')
} 

return (
  <Container fluid className='add-card '>
      {console.log(inputsValue)}
        <Form onSubmit={formSubmit}>
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
  const [areas, setAreas] = useContext(AreasContext)
  const [zones, setZones] = useContext(ZonesContext)
  const [branches, setBranches] = useContext(BranchesContext)
  const [inputsValue, setInputsValue] = useState({})
  const navigator = useNavigate()

  const inputs = [
    {
      labelName: ':اسم المندوب',
      type: 'text'
    },
    {
      labelName: ':تليفون',
      type: 'text'
    },
    {
      labelName: ':اسم الدخول',
      type: 'text'
    },
    {
      labelName: ':كلمة المرور',
      type: 'text'
    },
  ]

const formSubmit = e => {
  e.preventDefault()
  console.log(inputsValue)
  setAreas([... areas, inputsValue])
  navigator('/areas')
} 

return (
  <Container fluid className='add-card '>
      {console.log(inputsValue)}
        <Row className='flex-row-reverse'>
          <Col>
            <Form>
            <SelectInput label='الفرع' data={branches}/>
              {inputs.map(input => <Input type={input.type} labelName={input.labelName}/>)}
              <Textarea label='ملاحظات'/>
              <Button>حفظ</Button>
            </Form>
          </Col>
          <Col>
          <CourierTable data={zones}/>
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
    <SelectInput data={branches}/>
    {
      inputs.map(input => <Input name={input.name} labelName={input.label} type={input.type} value={sheet} setValue={setSheet}/>)
    }
    {['ملاحظات','مراجعة العمليات'].map(textarea => <Textarea label={textarea} value={sheet} setValue={setSheet}/>)}
    <Button>طباعة</Button>
    <Button type='submit' className='mx-1'>حفظ</Button>
  </Form>
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