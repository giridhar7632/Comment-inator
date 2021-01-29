import { Button, Flex, Icon } from '@chakra-ui/core'
import Head from 'next/head'
import { useAuth } from '@/lib/auth'

export default function Home() {
	const auth = useAuth()
	return (
		<Flex
			as="main"
			direction="column"
			align="center"
			justify="center"
			h="100vh">
			<Head>
				<title>Comment-inator</title>
			</Head>
			<Icon color="brand.900" name="logo" size="64px" />
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
