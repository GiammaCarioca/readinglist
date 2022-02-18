import { useState } from 'react'

// firebase imports
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useLogin = () => {
  const [error, setError] = useState(null)

  const login = async (email, password) => {
    setError(null)

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      console.log('user logged in:', userCredential.user)
    } catch (err) {
      setError(err.message)
    }
  }
  return { error, login }
}
