import React from 'react'
import { Box, Link } from '@chakra-ui/react'
import { Table, Tr, Th, Td } from './Table'
import { parseISO, format } from 'date-fns'

const SiteTable = ({ sites }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site</Th>
          <Th>Comments</Th>
          <Th>Date Added</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {sites.map((site) => {
          ;<Box as="tr" key={site.id}>
            <Td fontWeight="medium">{site.name}</Td>
            <Td>{site.url}</Td>
            <Td>
              <Link>View Comments</Link>
            </Td>
            <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
          </Box>
        })}
      </tbody>
    </Table>
  )
}

export default SiteTable
