import { compareDesc, parseISO } from 'date-fns'
import firebase from './firebase-admin'

export async function getAllComments(siteId) {
  try {
    const snapshot = await firebase
      .collection('comments')
      .where('siteId', '==', siteId)
      .get()

    const comments = []

    snapshot.forEach((doc) => {
      comments.push({ id: doc.id, ...doc.data() })
    })

    comments.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    )

    return { comments }
  } catch (error) {
    return { error }
  }
}

export async function getAllSites() {
  try {
    const snapshot = await firebase.collection('sites').get()
    const sites = []
    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() })
    })

    return { sites }
  } catch (error) {
    return { error }
  }
}
