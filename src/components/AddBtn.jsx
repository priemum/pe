import React from 'react'
import { Button} from 'react-bootstrap'
import { BiPlusMedical } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const AddBtn = () => {
  return (
        <Button className='add-btn my-3'>
            
            <small className='me-2'>إضافة نطاق جديد</small>
            
            <BiPlusMedical />
        </Button>
  )
}

export default AddBtn