import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="krypto">
    <Container>
      <Title>
        weather-app <Badge>2023</Badge>
      </Title>
      <P>Web App untuk info cuaca dengan library react js.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://infocuaca-app.vercel.app/" target="_blank">
            weather-app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Tailwind, dan OpenWeather API </span>
        </ListItem>
      </List>

      <WorkImage src="/images/projek-ku/cuaca.png" alt="cuaca" />

      <WorkImage src="/images/projek-ku/cuaca1.png" alt="cuaca" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
