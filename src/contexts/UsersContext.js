import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../db/firestoreHundle'

export const UsersContext = createContext()

export const UsersProvider = (props) => {
    const [users, setUsers] = useState()
    useEffect(() => {
      getData('users', setUsers)
    }, [])
  return (
    <UsersContext.Provider value={[users, setUsers]}>{props.children}</UsersContext.Provider>
  )
}