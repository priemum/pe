import React from 'react'
import { useContext } from 'react'
import { Badge } from 'react-bootstrap'
import Tabels from '../../components/Tabels'
import { CustomerContext } from '../../contexts/CustomersContext'
import { ZonesContext } from '../../contexts/ZonesContext'

const ShippingPrice = ({user}) => {
  const [zones] = useContext(ZonesContext)

  const headersArr = [
    {
     label: 'النطاق',
     value: 'name' 
    },
    {
     label: 'سعر اول كيلو',
     value: 'shipValue' 
    },
    {
     label: 'سعر الكيلو الزيادة',
     value: 'extraKgCost' 
    },
    {
     label: 'عمولة المرتجع',
     value: 'returnShipValue' 
    },
    {
     label: 'وصف النطاق',
     value: 'desc' 
    },
  ]
  const tableData = user.defaultPrices.map(price => ({
    name: price.name,
    returnShipValue: price.defaultPrices.returnShipValue,
    extraKgCost: price.defaultPrices.extraKgCost,
    shipValue: price.defaultPrices.shipValue,
    desc: price.desc,
  }))
  console.log(user);

  return (
    <div>
        <Badge className='bg-success my-5'>الاسعار بالجنية المصرى</Badge>
        <Tabels headers={headersArr} data={tableData} updateAndDelete={{
          delete: false,
          update: false,
        }}/>
    </div>
  )
}

export default ShippingPrice