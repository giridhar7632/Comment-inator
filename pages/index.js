import { Button, Code, Heading, Text } from '@chakra-ui/core';
import Head from 'next/head';
import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <Head>
        <title>Comment-inator</title>
      </Head>
      <main>
        <Heading>Comment-inator</Heading>
        <Button onClick={(e) => auth.signinWithGitHub()}>signIn</Button>
        {auth?.user && <Button onClick={(e) => auth.signout()}>signOut</Button>}
        <Text>
          Current User: <Code>{auth?.user?.name}</Code>
        </Text>
      </main>
    </div>
  );
}
