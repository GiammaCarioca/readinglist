import { useState, useEffect } from 'react'

// firebase imports
import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'

// c is for collection; in this case our collection is books
export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null)

  useEffect(() => {
    let ref = collection(db, c)

    // the callback function fires ever single time there's a change in the collection
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      let results = []
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() })
      })
      setDocuments(results)
    })

    return () => unsubscribe()
  }, [c])

  return { documents }
}
