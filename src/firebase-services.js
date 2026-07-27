import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import app from './firebase'

export const auth = app ? getAuth(app) : null
export const db = app ? getFirestore(app) : null
