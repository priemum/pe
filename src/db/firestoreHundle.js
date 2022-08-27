import firebase from '../db/firestore'

export const getData = (doc, setValue) => firebase.firestore().collection(doc).onSnapshot(snapshot => {
  try {
    const values = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setValue(values)
  } catch (error) {
    console.log(error);
  }  
  })