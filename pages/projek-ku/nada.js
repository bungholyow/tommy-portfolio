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
    <Layout title="Nada">
        <Container>
            <Title>
                Nada <Badge>2022</Badge>
            </Title>
            <P>
                Web app seperti spotify dengan fitur pemutar lagu dan pencarian lagu atau
                artis populer sekarang
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://nada-app.netlify.app/">
                        Nada <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>

                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Tailwind, Redux, React, RapidAPI</span>
                </ListItem>
            </List>



            <WorkImage src="/images/projek-ku/nada2.png" alt="nada" />
            <WorkImage src="/images/projek-ku/nada1.png" alt="nada" />
            <WorkImage src="/images/projek-ku/nada3.png" alt="nada" />
            <WorkImage src="/images/projek-ku/nada4.png" alt="nada" />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

