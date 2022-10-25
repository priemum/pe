import React, { useState, useEffect } from 'react'

export const useDynamicID = (nav ,doc) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const count = doc.filter(item => item.id === `${nav}-id-count`)
    // define val variable to check if there document has the current id
    let val = count[0][`${nav}Count`]
    for(let x of doc){
      if (x.id == val + 1) {
        val++
      }
    }
    count.length > 0 && setCount(val !== count[0][`${nav}Count`] ? val : count[0][`${nav}Count`])
  }, [doc])
  
  return count
}