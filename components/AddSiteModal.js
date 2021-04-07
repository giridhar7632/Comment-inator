import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure
} from '@chakra-ui/core'
import { createSite } from '@/lib/db'

export default function AddSiteModal() {
  const initialRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { handleSubmit, register } = useForm()
  const onCreateSite = (values) => createSite(values)

  return (
    <>
      <Button
        fontWeight="medium"
        variant="solid"
        onClick={onOpen}
        size="md"
        maxW="200px"
      >
        Add Your First Site
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="My Site"
                name="site"
                {...register('site', {
                  required: 'Required'
                })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://website.com"
                name="link"
                {...register('link', {
                  required: 'Required'
                })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} fontWeight="medium">
              Cancel
            </Button>
            <Button
              fontWeight="medium"
              variantColor="pink"
              color="whiteAlpha.900"
              mr={3}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
