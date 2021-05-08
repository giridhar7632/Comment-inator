import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { mutate } from 'swr'
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
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import { createSite } from '@/lib/db'
import { useAuth } from '@/lib/auth'

export default function AddSiteModal({ children }) {
  const initialRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { handleSubmit, register } = useForm()
  const toast = useToast()
  const auth = useAuth()

  const onCreateSite = ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url
    }
    createSite(newSite)
    toast({
      title: 'Hurray!!! 🎉',
      description: "You've added the site ✌",
      status: 'success',
      duration: 5000,
      isClosable: true
    })
    mutate(
      '/api/sites',
      async (data) => {
        return { sites: [...data.sites, newSite] }
      },
      false
    )
    onClose()
  }

  return (
    <>
      <Button
        variant="solid"
        size="md"
        fontWeight="bold"
        backgroundColor="pink.500"
        color="white"
        fontWeight="medium"
        _hover={{ bg: 'pink.700' }}
        _active={{
          bg: 'pink.800',
          transform: 'scale(0.95)'
        }}
        onClick={onOpen}
      >
        {children}
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <form>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="My Site"
                  type="name"
                  {...register('name', {
                    required: 'Required'
                  })}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>URL</FormLabel>
                <Input
                  placeholder="https://website.com"
                  type="url"
                  {...register('url', {
                    required: 'Required'
                  })}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button mr={4} onClick={onClose} fontWeight="medium">
                Cancel
              </Button>
              <Button
                fontWeight="medium"
                colorScheme="pink"
                color="whiteAlpha.900"
                mr={3}
                onClick={handleSubmit(onCreateSite)}
              >
                Create
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
