import React, { useState, useEffect, useContext, createContext } from 'react'
import firebase from './firebase'
import { createUser } from './db'
import Cookies from 'js-cookie'

const authContext = createContext()

export function AuthProvider({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser)
      const { token, ...userWithoutToken } = user
      console.log(user)
      createUser(user.uid, userWithoutToken)
      setLoading(false)
      setUser(user)

      Cookies.set('comment-inator-auth', true, {
        expires: 7,
        sameSite: 'strict'
      })
      return user
    } else {
      setLoading(false)
      setUser(false)
      Cookies.remove('comment-inator-auth')
      return false
    }
  }

  const signinWithGitHub = () => {
    setLoading(true)
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => handleUser(response.user))
  }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false))
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser)
    return () => unsubscribe()
  }, [])

  return {
    user,
    loading,
    signinWithGitHub,
    signout
  }
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user.ya,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL
  }
}
