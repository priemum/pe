import React from 'react'
import { Button} from 'react-bootstrap'
import { BiPlusMedical } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const AddBtn = ({content}) => {
  return (
        <Button className='add-btn my-3'>
            
            <small className='me-2'>{content}</small>
            
            <BiPlusMedical />
        </Button>
  )
}

export default AddBtn