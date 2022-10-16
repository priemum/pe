import React, { useState, useEffect } from 'react'

export const useDynamicID = (iv) => {
  const [shippmentsId, setShippmentsId] = useState(iv || 1)
  useEffect (() => {
    console.log(shippmentsId)
  },[shippmentsId])
  const setID = () => {setShippmentsId(id => id + 1); console.log(shippmentsId);}
  return { shippmentsId, setID }
}