import React, {useContext, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddBtn from '../components/AddBtn'
import { Input, SelectInput } from '../components/Input'
import Tabels from '../components/Tabels'
import { AreasContext } from '../contexts/AreasContext'
import { ZonesContext } from '../contexts/ZonesContext'

const Areas = () => {
  const [zones, setZones] = useContext(ZonesContext)
  const [areas, setAreas] = useContext(AreasContext)
  const [area, setArea] = useState({})
  return (
    <div>
        <Form>
            <SelectInput data={zones} label='النطاق'/>
            <Input value={area} setValue={setArea} labelName=':اسم المنطقة'/>
           <Link to='/areas/add'> <AddBtn content='اضافة منطقة جديدة'/> </Link>
           <Tabels data={areas} collName='areas' headers={[{label: '	اسم المنطقة', value: 'name'}, {label: 'النطاق', value: 'domain'}]}/>
        </Form>
    </div>
  )
}

export default Areas