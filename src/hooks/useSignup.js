import { useState } from 'react'

// firebase imports
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useSignup = () => {
  const [error, setError] = useState(null)

  const signup = async (email, password) => {
    setError(null)

    try {
      // https://firebase.google.com/docs/reference/node/firebase.auth#usercredential
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      console.log('user signed up:', userCredential.user)
    } catch (err) {
      setError(err.message)
    }
  }
  return { error, signup }
}
