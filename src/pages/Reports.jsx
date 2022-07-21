import React, { useContext } from 'react'
import { Form, ButtonGroup, Col, Button } from 'react-bootstrap'
import { FromToCompo, Input, RadioInputs, SelectInput } from '../components/Input'
import { BranchesContext } from '../contexts/BranchesContext'
import { CouriersContext } from '../contexts/CouriersContext'
import { CustomerContext } from '../contexts/CustomersContext'
import { StatusContext } from '../contexts/StatusContext'
import { ZonesContext } from '../contexts/ZonesContext'

export const RptCustomers = () => {
    const [branches] = useContext(BranchesContext)
  return (
    <Form className='my-form'>
        <SelectInput label='الفرع' data={branches}/>
        <SelectInput label='نوع العميل' data={['شركات','افراد']}/>
        <SelectInput label='مسئول المبيعات' data={[]}/>
        <SelectInput label='خدمة العملاء' data={[]}/>
        <FromToCompo label='الفترة' fromLabel='من' toLabel='الى' type='date'/>
        <Button>تقرير</Button>
    </Form>
  )
}

export const ShipmentsDuringPeriod = () => {
    const [branches] = useContext(BranchesContext)
    const [zones] = useContext(ZonesContext)
    const [customers] = useContext(CustomerContext)
    const [couriers] = useContext(CouriersContext)
    const [status] = useContext(StatusContext)
  const selectionArr = (arr) => arr.map(ob => ob.name)
  return (
    <Form className='my-form'>
        <SelectInput label='الفرع' data={branches}/>
        <SelectInput label='من نطاق' data={zones}/>
        <SelectInput label='الى نطاق' data={zones}/>
        <SelectInput label='العميل' data={selectionArr(customers)}/>
        <SelectInput label='المندوب' data={couriers}/>
        <SelectInput label='مسئول المبيعات' data={[]}/>
        <SelectInput label='خدمة العملاء' data={[]}/>
        <SelectInput label='الحالة' data={selectionArr(status)}/>
        <SelectInput label='سبب الحالة' data={[]}/>
        <FromToCompo label='الفترة' fromLabel='من' toLabel='الى' type='date'/>
        <RadioInputs label='نوع التاريخ' radioesArr={['تاريخ البيك اب', 'تاريخ الحالة']} name='dateKind'/>
        <ButtonGroup>
        <Button>تقرير</Button>
        <Button>تصدير الي اكسل</Button>
        <Button>تقرير تفصيلي</Button>
        <Button>المستحق للعميل</Button>
        <Button>بوالص غير منتهية</Button>
        <Button>تقرير مندوب</Button>
        <Button>الموجود بالفرع</Button>
        <Button>اكسل</Button>
        </ButtonGroup>
    </Form>
  )
}

export const CourierSheet = () => {
    const [couriers] = useContext(CouriersContext)

    return(
        <Form className='my-form'>
            <Col classname='d-flex'>
            <Input labelName='رقم الشيت' type='text'/>
        <Button>تقرير</Button>
            </Col>
        <SelectInput label='المندوب' data={couriers}/>
        <FromToCompo label='الفترة' fromLabel='من' toLabel='الى' type='date'/>
        <ButtonGroup>
        <Button>احصائية</Button>
        <Button>اكسل</Button>
        </ButtonGroup>
    </Form>
    )
}
