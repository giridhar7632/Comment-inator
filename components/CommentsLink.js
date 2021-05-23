import { Flex, Link } from '@chakra-ui/react'
import { Logo } from '@/styles/icons'

export default function CommentsLink({ siteId }) {
  return (
    <Flex justifyContent="space-between" mb={8} width="full" mt={1}>
      <Link fontWeight="bold" fontSize="sm" href={`/p/${siteId}`}>
        Leave a comment 👉
      </Link>
      <Link fontSize="xs" color="blackAlpha.500" href="/">
        🌠 Powered by Comment-inator <Logo color="pink.500" boxSize="16px" />
      </Link>
    </Flex>
  )
}
