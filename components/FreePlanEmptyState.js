import React from 'react'
import { Heading, Box, Text, Button } from '@chakra-ui/core'

import DashboardShell from './DashboardShell'

const FreePlanEmpty = () => (
  <DashboardShell>
    <Box width="100%" backgroundColor="whiteAlpha.900" borderRadius={6} p={8}>
      <Heading as="h2" size="md">
        Get comments on your site immediatly
      </Heading>
      <Text>Start your comment-inator today 🚀 </Text>
      <Button variant="solid" size="md">
        Upgrade to Starter
      </Button>
    </Box>
  </DashboardShell>
)

export default FreePlanEmpty
