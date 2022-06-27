import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddBtn from '../components/AddBtn'
import {ZoneTable} from '../components/TableCompo'
import { ZonesContext, ZonesProvider } from '../contexts/ZonesContext'
const Zones = () => {
  const [zones, setZones] = useContext(ZonesContext)
  return (
    <Container>
      {console.log(zones)}
        <Link to='/zones/add'><AddBtn content='اضافة نطاق جديد'/></Link>
        <ZoneTable data={zones}/>
    </Container>
  )
}

export default Zones