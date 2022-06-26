import React, {useContext} from 'react'
import { Form } from 'react-bootstrap'
import { SelectInput } from '../components/Input'
import { ZonesContext } from '../contexts/ZonesContext'

const Areas = () => {
  const [zones, setZones] = useContext(ZonesContext)
  return (
    <div>
        <Form>
            <SelectInput data={zones} label='النطاق'/>
        </Form>
    </div>
  )
}

export default Areas