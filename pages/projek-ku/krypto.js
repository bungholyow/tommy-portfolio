import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="krypto">
    <Container>
      <Title>
        krypto <Badge>2022</Badge>
      </Title>
      <P>
        Web App untuk cek info crypto currency terpopuler saat ini dengan
        menambahkan ke watchlist.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://kryptho.netlify.app/" target="_blank">
            crypto <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Material UI dan Firebase </span>
        </ListItem>
      </List>

      <WorkImage src="/images/projek-ku/krypto5.png" alt="krypto" />
      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/projek-ku/krypto2.png" alt="krypto" />
        <WorkImage src="/images/projek-ku/krypto3.png" alt="krypto" />
      </SimpleGrid>
      <WorkImage src="/images/projek-ku/krypto4.png" alt="krypto" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
