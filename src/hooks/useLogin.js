import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

// firebase imports
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      // console.log('user logged in:', userCredential.user)
      dispatch({ type: 'LOGIN', payload: userCredential.user })
    } catch (err) {
      setError(err.message)
    }
  }
  return { error, login }
}
