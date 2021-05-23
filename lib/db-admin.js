import { compareDesc, parseISO } from 'date-fns'
import { db } from './firebase-admin'

export async function getAllComments(siteId) {
  try {
    const snapshot = await db
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

export async function getUserSites(userId) {
  const snapshot = await db
    .collection('sites')
    .where('authorId', '==', userId)
    .get()
  const sites = []

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() })
  })

  return { sites }
}
