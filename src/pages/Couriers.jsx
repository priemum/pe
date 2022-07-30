import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { Col, Form, Row } from 'react-bootstrap'
import AddBtn from '../components/AddBtn'
import { Input, SelectInput } from '../components/Input'
import {BranchesContext} from '../contexts/BranchesContext'
import Tabels from '../components/Tabels'
import { CouriersContext } from '../contexts/CouriersContext'

const Couriers = () => {
  const [branches] = useContext(BranchesContext)
  const [couriers] = useContext(CouriersContext)
  const [search, setSearch] = useState({})
  return (
    <Row>
      <Col lg='6' sm='12'>
        <Link to='/couriers/add'><AddBtn content='اضافة مندوب جديد'/></Link>
      </Col>
      <Col lg='6' sm='12'>
        <Form>
            <SelectInput label='الفرع' data={branches}/>
            <Input labelName='اسم/تليفون المندوب' value={search} setValue={setSearch}/>
        </Form>
      </Col>
      <Col lg='6' sm='12'>
      <Tabels data={couriers} collName='couriers' headers={[{label: 'اسم المندوب', value: 'name'}, {label: 'تليفون', value: 'phone'}, {label: 'ملاحظات', value: 'notes'},]} unEditable={true} nav='couriers/update'/>

      </Col>
    </Row>
  )
}

export default Couriers