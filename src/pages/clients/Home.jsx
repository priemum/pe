import React from 'react'
import { useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { FromToCompo } from '../../components/Input'
import Tabels from '../../components/Tabels'
import { StatusContext } from '../../contexts/StatusContext'

const Home = () => {
    const [status] = useContext(StatusContext)
  return (
    <React.Fragment>
        <Form>
        <FromToCompo label='الفترة' fromLabel='من' toLabel='الى' type='date'/>
        <Button>بحث</Button>
    </Form>
    <Tabels headers={[{label: 'الحالة', value: 'name'}, {label: 'وصف الحالة', value: 'desc'}, {label: 'العدد', value: 'amount'}]} data={status} updateAndDelete={{
          delete: false,
          update: false,
        }}/>
    <Tabels headers={[{label: 'التاريخ'}, {label: 'عدد البوالص اليومية'}]} data={[]} updateAndDelete={{
          delete: false,
          update: false,
        }}/>
    </React.Fragment>
  )
}

export default Home