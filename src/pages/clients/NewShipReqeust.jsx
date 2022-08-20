import React, {useState} from 'react'
import { Input, SelectInput, Textarea } from '../../components/Input'
import { Form, Button } from 'react-bootstrap'

const NewShipReqeust = () => {
  const [inputsValue, setInputsValue] = useState({
    date: new Date,
    notice: '',
    flyersNum: '0',
    transport: ''
  })
  return (
    <Form className='my-form' onSubmit={(e) => {
      e.preventDefault()
    }}>
      <SelectInput label='نوع الشحنة' data={['مبلغ مقابل طرد', 'طرد مقابل طرد', 'طرد بدون مقابل']} value={inputsValue} setValue={setInputsValue}/>
      <Input labelName=' التاريخ' type='date' value={inputsValue} setValue={setInputsValue}/>
      <Input labelName=' التاريخ' type='text' value={inputsValue} setValue={setInputsValue}/>
      <Input labelName='اسم المرسل الية' type='text' value={inputsValue} setValue={setInputsValue}/>
      <SelectInput label='منطقة المرسل' data={[]} value={inputsValue} setValue={setInputsValue}/>
      <Textarea label='العنوان' value={inputsValue} setValue={setInputsValue}/>
      <Input labelName='رقم التليفون' type='text' value={inputsValue} setValue={setInputsValue}/>
      <SelectInput label='عدد القطع' data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']} value={inputsValue} setValue={setInputsValue}/>
      <SelectInput label='الوزن التقريبى' data={['1kg', '2kg', '3kg', '4kg', '5kg', '6kg', '7kg', '8kg', '9kg', '10kg']} value={inputsValue} setValue={setInputsValue}/>
      <Input labelName='المبلغ شامل الشحن' type='text' value={inputsValue} setValue={setInputsValue}/>
      <Textarea label='ملاحظات' value={inputsValue} setValue={setInputsValue}/>
      <Form.Check 
      label='يسمح بالفتح والقياس'
      />
      <Button type='submit'>حفظ</Button>
    </Form>
  )
}

export default NewShipReqeust