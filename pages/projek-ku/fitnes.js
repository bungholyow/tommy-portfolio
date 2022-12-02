import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Fitnes">
    <Container>
      <Title>
        Fitnes App <Badge>2020</Badge>
      </Title>
      <P>
        Web app mengenai info manfaat dan jenis jenis latihan
        yang biasa  dilakukan di gym
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, RapidAPI</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://fitnes-app.netlify.app/" target="_blank">
            Fitness App <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>



      <WorkImage src="/images/projek-ku/fitnes1.png" alt="fitnes" />
      <WorkImage src="/images/projek-ku/fitnes2.png" alt="fitnes" />
      <WorkImage src="/images/projek-ku/fitnes3.png" alt="fitnes" />
      <WorkImage src="/images/projek-ku/fitnes4.png" alt="fitnes" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
