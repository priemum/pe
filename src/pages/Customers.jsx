import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {Form} from 'react-bootstrap'
import AddBtn from '../components/AddBtn'
import {SelectInput, Input} from '../components/Input'
import { BranchesContext } from '../contexts/BranchesContext'
import Tabels from '../components/Tabels'
import { CustomerContext } from '../contexts/CustomersContext'
import { useDynamicID } from '../hooks/useDynamicID'
const Customers = () => {
  const [search, setSearch] = useState({})
  const [branches] = useContext(BranchesContext)
  const [customers] = useContext(CustomerContext)

  class TdCheckbox {
    constructor(label, value, check){
      this.label = label;
      this.value = value;
     const compo = <Form.Check type='checkbox' checked={check}/>
    }
  }

  // const TdCheck = ({isCheck}) => <Form.Check type='checkbox' checked={isCheck} />

  const headersArr= [
    {label: 'رقم العميل', value: 'id'}, 
    {label: 'اسم العميل', value: 'name'}, 
    {label: 'تاريخ فتح الحساب', value: 'date'},
    {label: 'الشخص المسئول', value: 'resPerson'},
    {label: '	المنطقة', value: 'areas'},
    {label: 'التليفون', value: 'teleNumber'},
    {label: 'المحمول', value: 'phone'},
    {label: 'عدد البوالص المستهدفة شهريا', value: 'targetedShipments'},
    {label: 'ايام التسوية', value: '', 
    compo: 'SetDays'
    },
    {label: 'فعال', value: 'active', check: false, compo: 'TdCheck'},
    {label: 'مرفقات', value: 'notes'},
  ]
  const count = useDynamicID('customers', customers)
  return( 
    <>
    <Form>
     <Link to='/customers/add'><AddBtn content='إضافة عميل جديد'/></Link>
      <SelectInput label='الفرع' data={branches}/>
      <SelectInput label='نوع العميل' data={[]}/>
      <SelectInput label='مسؤول المبيعات' data={[]}/>
      <SelectInput label='مسؤول خدمة العملاء' data={[]}/>
      <Input label='اسم/تليفون/رقم العميل' value={search} setValue={setSearch}/>
      <SelectInput label='الحالة' data={[]}/>
    </Form> 
    <Tabels data={customers ? customers.filter(c => c.id !== 'customers-id-count') : []} collName='customers' headers={headersArr} unEditable={true} nav='customers/update' elementsCount={count}/>
    </>
    )
}
export default Customers