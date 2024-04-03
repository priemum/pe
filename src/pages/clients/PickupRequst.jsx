import React from 'react'
import { useState } from 'react'
import { FromToCompo, Input, SelectInput, Textarea } from '../../components/Input'
import { Form, Button } from 'react-bootstrap'

export const NewPickupRequst = () => {
  const [clock, setClock] = useState({
    from: '',
    to: ''
  })
  const [inputsValue, setInputsValue] = useState({
    date: new Date,         
    notice: '',
    clock: clock,
    flyersNum: '0',
    transport: ''
  })
  return (
    <Form className='my-form' onSubmit={(e) => {
      e.preventDefault()
    }}>
      <Input labelName='تاريخ الاذن' type='date' name='date' value={inputsValue} setValue={setInputsValue}/>
      <Input labelName='البيان' type='text' name='notice' value={inputsValue} setValue={setInputsValue}/>
      <FromToCompo fromLabel='من' toLabel=' الى' label='ساعة استلام البيك اب' type='time'/>
      <SelectInput label='وسيلة النقل' data={['موتوسيكل','سيارة']} value={inputsValue} setValue={setInputsValue}/>
      <Button type='submit'>حفظ</Button>
    </Form>
  )
}

export const CustomerPickupList = () => {
  return (
    <h3>لا يوجد بيانات</h3>
  )
}
