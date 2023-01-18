import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="krypto">
    <Container>
      <Title>
        notes <Badge>2023</Badge>
      </Title>
      <P>
        Notes adalah aplikasi sederhana untuk menulis ide, dibuat dengan NodeJs
        dan MongoDB.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sleepy-snaps-elk.cyclic.app/" target="_blank">
            notes <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJs, Bootstrap, dan MongoDB </span>
        </ListItem>
      </List>

      <WorkImage src="/images/projek-ku/notes1.png" alt="notes" />

      <WorkImage src="/images/projek-ku/notes2.png" alt="notes" />
      <WorkImage src="/images/projek-ku/notes3.png" alt="notes" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
