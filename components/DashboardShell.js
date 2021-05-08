import React from 'react'
import {
  Flex,
  Link,
  Stack,
  Icon,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Heading
} from '@chakra-ui/react'
import { useAuth } from '@/lib/auth'
import { Logo } from '@/styles/icons'

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth()
  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="whiteAlpha.900"
        alignItems="center"
        justifyContent="space-between"
        py={4}
        px={8}
      >
        <Stack spacing={4} isInline={true} align="center">
          <Logo color="pink.500" boxSize="24px" />
          <Link>Sites</Link>
          <Link>Comments</Link>
        </Stack>
        <Flex alignItems="center">
          <Link mr={8} onClick={(e) => signout()}>
            Log out
          </Link>
          <Avatar size="sm" src={user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height="100vh">
        <Flex
          maxWidth="800px"
          w="100%"
          ml="auto"
          mr="auto"
          direction="column"
          borderRadius={6}
        >
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink color="gray.700" fontSize="sm">
                Sites /
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading color="black" mb={4}>
              My Sites
            </Heading>
            <Button
              variant="solid"
              size="md"
              fontWeight="bold"
              backgroundColor="gray.900"
              color="white"
              fontWeight="medium"
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)'
              }}
            >
              + Add Site
            </Button>
          </Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DashboardShell
