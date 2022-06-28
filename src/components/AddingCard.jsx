import React, { useContext, useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ZonesContext } from '../contexts/ZonesContext'
import { AreasContext } from '../contexts/AreasContext'
import {Input, Textarea, SelectInput} from './Input'
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
            <Input name='domainName' labelName=':اسم النطاق' type='text' value={inputsValue} setValue={setInputsValue}/>
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
            <SelectInput label='الفرع' data={[]}/>
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

