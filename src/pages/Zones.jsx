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
        <Link to='/zones/add'><AddBtn/></Link>
        <ZoneTable data={zones}/>
    </Container>
  )
}

export default Zones