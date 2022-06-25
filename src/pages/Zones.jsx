import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import AddBtn from '../components/AddBtn'
import AddingCard from '../components/AddingCard'
import TableCompo from '../components/TableCompo'
const Zones = () => {
  const [overlayShow, setOverlayShow] = useState({})
  return (
    <Container>
      <AddingCard />
        <AddBtn />
        <TableCompo />
    </Container>
  )
}

export default Zones