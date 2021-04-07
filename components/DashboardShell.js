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
  Heading
} from '@chakra-ui/core'
import { useAuth } from '@/lib/auth'

const DashboardShell = ({ children }) => {
  const { user } = useAuth()
  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="whiteAlpha.900"
        alignItems="center"
        justifyContent="space-between"
        py={4}
        px={8}
      >
        <Stack spacing={4} isInline align="center">
          <Icon color="pink.500" name="logo" size="24px" />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Flex alignItems="center">
          <Link mr={4}>Account</Link>
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
          <Heading color="black" mb={4}>
            Sites
          </Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DashboardShell
