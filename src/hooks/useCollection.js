import { useState, useEffect, useRef } from 'react'

// firebase imports
import { db } from '../firebase/config'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

// c is for collection; in this case our collection is books
export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null)

  // set up query
  const q = useRef(_q).current // an array of elements

  useEffect(() => {
    let ref = collection(db, c)

    if (q) {
      ref = query(ref, where(...q))
    }

    // the callback function fires ever single time there's a change in the collection
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      let results = []
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() })
      })
      setDocuments(results)
    })

    return () => unsubscribe()
  }, [c, q])

  return { documents }
}
