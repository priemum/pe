import React from 'react'
import { Button} from 'react-bootstrap'
import { BiPlusMedical } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const AddBtn = ({content}) => {
  return (
        <Button className='add-btn px-4 my-3'>
            
            <BiPlusMedical />
            <h6 className='m-2'>{content}</h6>
            
        </Button>
  )
}

export default AddBtn