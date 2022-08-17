import React from 'react'
import { useContext } from 'react'
import { Button, ButtonGroup, Col, Form, Row } from 'react-bootstrap'
import { FromToCompo, SelectInput } from '../components/Input'
import Tabels from '../components/Tabels'
import { BranchesContext } from '../contexts/BranchesContext'

export const Statistics = () => {
    const [branches] = useContext(BranchesContext)
    const statistics = [
        {
            name: 'اجمالى عدد طلبات البيك اب خلال الفترة',
            statistic: '0'
        },
        {
            name: 'اجمالى عدد الشحنات خلال الفترة',
            statistic: '110'
        }, 
        {
            name: 'اجمالى عدد الشيتات اليومية خلال الفترة',
            statistic: '4'
        }, 
        {
            name: 'اجمالى الايرادات خلال الفترة',
            statistic: '5670'
        }, 
        {
            name: 'اجمالى المصروفات خلال الفترة',
            statistic: '0'
        }, 
        {
            name: 'الفارق خلال الفترة',
            statistic: '5670'
        }
    ]
  return (
    <>
    <Form className='my-form'>
        <SelectInput label='الفرع' data={branches}/>
        <FromToCompo label='الفترة' fromLabel='من' toLabel='الى' type='date'/>
        <Button>بحث</Button>
    </Form>
    <Row>
        {statistics.map(stat => <Col sm={4}>
            <span>{stat.name}</span>:<span>{stat.statistic}</span>
            </Col>)}
    </Row>
    <Tabels headers={[{label: 'حالة الشحنة', }, {label: 'العدد'}]} data={[]} updateAndDelete={{
          delete: false,
          update: false,
        }}/>
    <Tabels headers={[{label: 'التاريخ'}, {label: 'عدد البوالص اليومية'}]} data={[]} updateAndDelete={{
          delete: false,
          update: false,
        }}/>
    </>
  )
}

export const RequestStat = () => {

    return <Form className='my-form'>
    <FromToCompo label='الفترة' fromLabel='من' toLabel='الى' type='date'/>
    <Button>بحث</Button>
</Form>
}

export const ShipmentsStat = () => {

    return <Form className='my-form'>
    <FromToCompo label='الفترة' fromLabel='من' toLabel='الى' type='date'/>
    <ButtonGroup>
    <Button>طباعة</Button>
    <Button>بحث</Button>
    <Button>اكسل</Button>
    </ButtonGroup>
</Form>
}

export const ZonesStat = () => {
    const [branches] = useContext(BranchesContext)

    return <Form className='my-form'>
        <SelectInput label='الفرع' data={branches}/>
        <SelectInput label='مسئول المبيعات' data={[]}/>
    <FromToCompo label='الفترة' fromLabel='من' toLabel='الى' type='date'/>
    <ButtonGroup>
    <Button>احصائية حسب النطاقات</Button>
    <Button>بحث</Button>
    <Button>احصائية حسب الحالات</Button>
    </ButtonGroup>
</Form>
}

export const Entryrpt = () => {
    <SelectInput label='مدخل البيانات' data={[]}/>
    return <Form className='my-form'>
    <FromToCompo label='الفترة' fromLabel='من' toLabel='الى' type='date'/>
    <Button>احصائية حسب الفروع</Button>
</Form>
}

export const BranchsStat = () => {
    <SelectInput label='مدخل البيانات' data={[]}/>
    return <Form className='my-form'>
    <FromToCompo label='الفترة' fromLabel='من' toLabel='الى' type='date'/>
    <ButtonGroup>
    <Button>احصائيات الحالات في الفروع</Button>
    <Button>احصائيات الحالات بالمناطق</Button>
    </ButtonGroup>
</Form>
}