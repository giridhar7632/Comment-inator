import { Button, Flex, Icon } from '@chakra-ui/react'
import Head from 'next/head'
import { useAuth } from '@/lib/auth'
import { Logo } from '@/styles/icons'

export default function Home() {
  const auth = useAuth()
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Comment-inator</title>
      </Head>
      <Logo color="pink.500" boxSize="64px" />
      {auth.user ? (
        <Button mt={4} size="sm" onClick={(e) => auth.signout()}>
          Sign Out
        </Button>
      ) : (
        <Button mt={4} size="sm" onClick={(e) => auth.signinWithGitHub()}>
          Sign In
        </Button>
      )}
    </Flex>
  )
}
