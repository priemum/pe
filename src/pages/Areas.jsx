import React, {useContext, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddBtn from '../components/AddBtn'
import { Input, SelectInput } from '../components/Input'
import { AreaTable } from '../components/TableCompo'
import { AreasContext } from '../contexts/AreasContext'
import { ZonesContext } from '../contexts/ZonesContext'

const Areas = () => {
  const [zones, setZones] = useContext(ZonesContext)
  const [areas, setAreas] = useContext(AreasContext)
  const [area, setArea] = useState(null)
  return (
    <div>
        <Form>
            <SelectInput data={zones} label='النطاق'/>
            <Input value={area} setValue={setArea} labelName=':اسم المنطقة'/>
           <Link to='/areas/add'> <AddBtn content='اضافة منطقة جديدة'/> </Link>
            <AreaTable data={areas} label=':النطاق'/>
        </Form>
    </div>
  )
}

export default Areas