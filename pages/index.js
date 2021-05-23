import { Button, Flex, Icon } from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
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
        <script
          dangerouslySetInnerHTML={{
            __html: `if (document.cookie && document.cookie.includes('comment-inator-auth')){
            window.location.href = "/dashboard"
          }`
          }}
        />
        <title>Comment-inator</title>
      </Head>
      <Logo color="pink.500" boxSize="64px" />
      {auth.user ? (
        <NextLink href="/dashboard">
          <Button mt={4} size="sm">
            View Dashboard
          </Button>
        </NextLink>
      ) : (
        <Button mt={4} size="sm" onClick={(e) => auth.signinWithGitHub()}>
          Sign In
        </Button>
      )}
    </Flex>
  )
}
