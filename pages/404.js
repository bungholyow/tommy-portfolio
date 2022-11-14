import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Tidak Ditemukan</Heading>
      <Text>Laman yang dituju tak ditemukan...</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="purple">Kembali ke home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
