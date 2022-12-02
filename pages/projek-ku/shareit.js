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
    <Layout title="Shareit">
        <Container>
            <Title>
                Shareit <Badge>2022</Badge>
            </Title>
            <P>
                React Web app buat share foto favorit personal atau yang ada di internet.
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://bagifoto.netlify.app/" target="_blank">
                        Shareit <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>

                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, Tailwind , Google Cloud , Sanity</span>
                </ListItem>
            </List>



            <WorkImage src="/images/projek-ku/bagi2.png" alt="bagi" />
            <WorkImage src="/images/projek-ku/bagi5.png" alt="bagi" />
            <WorkImage src="/images/projek-ku/bagi3.png" alt="bagi" />
            <WorkImage src="/images/projek-ku/bagi4.png" alt="bagi" />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

