import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/lib/auth'
import { getAllComments, getAllSites } from '@/lib/db-admin'
import { createComment } from '@/lib/db'
import Comments from '@/components/Comments'

import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box } from '@chakra-ui/layout'

export async function getStaticProps(context) {
  const siteId = context.params.siteId
  const { comments } = await getAllComments(siteId)
  return {
    props: {
      initialComments: comments
    }
  }
}

export async function getStaticPaths() {
  const { sites } = await getAllSites()
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString()
    }
  }))
  return {
    paths,
    fallback: false
  }
}
const SiteComments = ({ initialComments }) => {
  const auth = useAuth()
  const router = useRouter()
  const inputEle = useRef(null)
  const [allComments, setAllComments] = useState(initialComments)

  const onSubmit = (e) => {
    e.preventDefault()

    const newComment = {
      author: auth.user.name,
      authorId: auth.user.uid,
      siteId: router.query.siteId,
      text: inputEle.current.value,
      createdAt: new Date().toISOString(),
      provider: auth.user.provider,
      status: 'pending'
    }

    setAllComments([newComment, ...allComments])
    createComment(newComment)
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="full"
      maxWidth="720px"
      margin="0 auto"
    >
      <Box as="form" onSubmit={onSubmit}>
        <FormControl my={8}>
          <FormLabel htmlFor="commment">Comment</FormLabel>
          <Input ref={inputEle} type="comment" id="commment" />
          <Button mt={2} type="submit" fontWeight="medium">
            Add Comment
          </Button>
        </FormControl>
      </Box>
      {allComments.map((comment) => (
        <Comments key={comment.id} {...comment} />
      ))}
    </Box>
  )
}

export default SiteComments
