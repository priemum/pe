import React, {useContext} from 'react'
import { Badge, Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddBtn from '../components/AddBtn'
import { FromToCompo, Input, SelectInput, Textarea } from '../components/Input'
import { BranchesContext } from '../contexts/BranchesContext'
import { ZonesContext } from '../contexts/ZonesContext'

export const Shipments = () => {
    const [zones, setZones] = useContext(ZonesContext)

  return (
    <div>
        <Link to='/shipments/add'>
        <AddBtn content='إضافة بوليصة شحن جديدة' />
        </Link>
        <Form classname='my-form'>
            <SelectInput label='النطاق' data={zones}/>
            <SelectInput label='العميل' data={['اختار العميل', 'abdo']}/>
            <FromToCompo label='الفترة من' toLabel='الي'/>
            <Input labelName='رقم البوليصة'/>
            <Button type='submit'>بحث</Button>
        </Form>
        <Badge>لا يوجد نتائج</Badge>
        <Button>طباعة</Button>
    </div>
  )
}

export const ShipmentsImport = () => {
    const [branches, setBranches] = useContext(BranchesContext)
    return <Form classname='my-form'>
        <SelectInput label='الفرع' data={branches}/>
        <Input labelName='اختار الملف' type='file'/>
        <Button>استيراد من اكسل</Button>
    </Form>
}

export const ShipmentsMulti = () => {
    return <><Form classname='my-form'>
        <Textarea label= 'اكواد البوالص فى سطور' />
        <Button className='d-block me-auto'>ادراج</Button>
    </Form>
    <Row className=''>
    {['عدد البوالص','اجمالى المبلغ','اجمالى قيمة الشحن','الصافى'].map(e => <Col><p style={{whiteSpace: 'pre'}}>{e}</p><span className='text-danger'>0</span></Col>)}
    </Row>
    </>
}

export const ShipmentsStatus = () => {
    return <Form classname='my-form'>
        <Textarea label= 'كود البوليصة' />
        <Button className='d-block me-auto'>بحث</Button>
    </Form>
}
