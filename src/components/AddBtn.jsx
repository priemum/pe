import React from 'react'
import { Button} from 'react-bootstrap'
import { BiPlusMedical } from 'react-icons/bi'
const AddBtn = () => {
  return (
        <Button className='add-btn'>
            <small>إضافة نطاق جديد</small>
            <BiPlusMedical />
        </Button>
  )
}

export default AddBtn