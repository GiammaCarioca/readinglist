import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBOof4ePAPNvbEVsEF8NTDWPYnwN2e2sFw',
  authDomain: 'readinglist-app-8a3bc.firebaseapp.com',
  projectId: 'readinglist-app-8a3bc',
  storageBucket: 'readinglist-app-8a3bc.appspot.com',
  messagingSenderId: '830860338443',
  appId: '1:830860338443:web:9f17b2d3861daf47e8ee0e',
}

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

export { db }
