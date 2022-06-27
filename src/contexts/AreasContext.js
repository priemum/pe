import React, { createContext, useState } from 'react'

export const AreasContext = createContext()

export const AreasProvider = (props) => {
    const [areas, setAreas] = useState([
        {
            areaName: 'المعصره',
            areaDomain: 'القاهرة و الجيزة'
        },
        {
            areaName: 'مصر الجديدة',
            areaDomain: 'القاهرة و الجيزة'
        },
        {
            areaName: 'حدائق القبه',
            areaDomain: 'القاهرة و الجيزة'
        },
        {
            areaName: 'المعادي',
            areaDomain: 'القاهرة و الجيزة'
        },
        {
            areaName: 'الحلميه الجديده',
            areaDomain: 'القاهرة و الجيزة'
        },
        {
            areaName: 'محرم بيك',
            areaDomain: 'اسكندرية'
        },
        {
            areaName: 'الشاطبي',
            areaDomain: 'اسكندرية'
        },
        {
            areaName: 'الدخيلة',
            areaDomain: 'اسكندرية'
        },
        {
            areaName: 'البيطاش',
            areaDomain: 'اسكندرية'
        },
        {
            areaName: 'شدس',
            areaDomain: 'اسكندرية'
        },
    ])
  return (
    <AreasContext.Provider value={[areas, setAreas]}>{props.children}</AreasContext.Provider>
  )
}
