import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'


import thumbYouTube from '../public/images/links/youtube.png'
import thumbRoadmap from '../public/images/projek-ku/roadmap.png'
import thumbWebdev from '../public/images/projek-ku/webdev.png'
import thumbStack from '../public/images/projek-ku/stack.png'

const Posts = () => (
    <Layout title="Artikel">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Artikel
            </Heading>

            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Cek Akun Youtube Dev as Life Sebagai Referensi"
                        thumbnail={thumbYouTube}
                        href="https://www.youtube.com/devaslife"
                    />

                    <GridItem
                        title="Referensi penting buat Developer"
                        thumbnail={thumbRoadmap}
                        href="https://roadmap.sh/"
                    />

                </SimpleGrid>
            </Section>


            <Section delay={0.5}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Apa itu Web Development?"
                        thumbnail={thumbWebdev}
                        href="https://medium.com/technology-hits/introduction-to-web-development-2d1d1ae76f65"
                    />

                    <GridItem
                        title="Tech Stack Web Development Terbaik"
                        thumbnail={thumbStack}
                        href="https://dev.to/theme_selection/best-web-development-stack-2jpe"
                    />

                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
