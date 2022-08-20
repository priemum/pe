import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Input } from '../../components/Input'

const ImportExel = () => {
  return (
   <>
    <Form className='my-form'>
      <Input type='file' value={{}} />
      <Button type='submit'>استيراد من اكسل</Button>
    </Form>
    <a>تحميل ملف توضيحى</a>
    <table className='table table-bordered table-striped table-sm table-hover'>
      <thead>
        <tr>

        <th>الكود</th>
        <th>نوع البوليصة</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td classsName=''>1</td>
          <td classsName=''>مبلغ مقابل طرد</td>
        </tr>
        <tr>
          <td classsName=''>2</td>
          <td classsName=''>طرد مقابل طرد</td>
        </tr>
        <tr>
          <td classsName=''>3</td>
          <td classsName=''>طرد بدون مقابل</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default ImportExel