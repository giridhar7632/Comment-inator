import React from 'react'
import { Heading, Flex, Text } from '@chakra-ui/core'

import DashboardShell from './DashboardShell'
import AddSiteModal from './AddSiteModal'

const EmptyState = () => (
  <DashboardShell>
    <Flex
      width="100%"
      backgroundColor="whiteAlpha.900"
      borderRadius="8px"
      p={16}
      justify="center"
      align="center"
      direction="column"
    >
      <Heading size="lg" mb={4}>
        You haven't added any sites.
      </Heading>
      <Text mb={8}>Let's get started! 🚀</Text>
      <AddSiteModal />
    </Flex>
  </DashboardShell>
)

export default EmptyState
