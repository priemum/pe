import React, { useContext} from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddBtn from '../components/AddBtn'
import Tabels from '../components/Tabels'
import { ZonesContext } from '../contexts/ZonesContext'
const Zones = () => {
  const [zones] = useContext(ZonesContext)
  return (
    <Container>
        <Link to='/zones/add'><AddBtn content='اضافة نطاق جديد'/></Link>
        <Tabels data={zones} collName='zones' headers={[{label: 'اسم النطاق', value: 'name'}, {label: 'الوصف', value: 'desc'}]}/>
    </Container>
  )
}

export default Zones