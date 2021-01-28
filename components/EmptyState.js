import React from 'react'
import { Heading, Flex, Text, Button } from '@chakra-ui/core'

import DashboardShell from './DashBoardShell'

const EmptyState = () => (
	<DashboardShell>
		<Flex
			width="100%"
			backgroundColor="whiteAlpha.900"
			borderRadius="8px"
			p={16}
			justify="center"
			align="center"
			direction="column">
			<Heading size="lg" mb={4}>
				You haven't added any sites.
			</Heading>
			<Text mb={8}>Hello 👋 Welcome! Let's get started!</Text>
			<Button fontWeight="medium" variant="solid" size="md">
				Add Your First Site
			</Button>
		</Flex>
	</DashboardShell>
)

export default EmptyState
