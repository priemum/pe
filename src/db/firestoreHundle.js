import firebase from '../db/firestore'

export const getData = (doc, setValue) => firebase.firestore().collection(doc).onSnapshot(snapshot => {
  try {
    
    const values = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      console.log(values);
      if( !values ) return setValue(v => console.log(v))
      
       setValue(values)
  } catch (error) {
    console.log(error);
  }  
  })