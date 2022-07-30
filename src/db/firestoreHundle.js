import firebase from '../db/firestore'

export const getData = (doc, setValue) => firebase.firestore().collection(doc).onSnapshot(snapshot => {
    const values = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
    setValue(values)
  })