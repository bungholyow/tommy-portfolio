import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


import thumbFitnes from '../public/images/projek-ku/fitnes1.png'
import thumbNada from '../public/images/projek-ku/nada1.png'

const Works = () => (
    <Layout title="Projek">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projek React
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="nada" title="nada" thumbnail={thumbNada}>
                        Web app seperti spotify dengan fitur pemutar lagu dan pencarian lagu atau
                        artis populer sekarang
                    </WorkGridItem>
                </Section>

                {/* <Section>
                    <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
                        A Markdown note-taking app with 100+ plugins, cross-platform and
                        encrypted data sync support
                    </WorkGridItem>
                </Section> */}


                <Section>
                    <WorkGridItem
                        id="fitnes"
                        title="Fitnes"
                        thumbnail={thumbFitnes}
                    >
                        Web app mengenai info manfaat dan jenis jenis latihan
                        yang biasa  dilakukan di gym
                    </WorkGridItem>
                </Section>

                {/* <Section delay={0.1}>
                    <WorkGridItem
                        id="fourpainters"
                        title="The four painters"
                        thumbnail={thumbFourPainters}
                    >
                        A video work generated with deep learning, imitating famous four
                        painters like Van Gogh
                    </WorkGridItem>
                </Section> */}
                {/* <Section delay={0.1}>
                    <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
                        An app that suggests ramen(noodle) shops based on a given photo of
                        the ramen you want to eat
                    </WorkGridItem>
                </Section> */}
            </SimpleGrid>

            <Section delay={0.2}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4}>
                    Projek Laravel
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                {/* <Section delay={0.3}>
                    <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
                        A website of the elite app development and contracting agency based
                        in Austria
                    </WorkGridItem>
                </Section> */}
                `  {/* <Section delay={0.3}>
                    <WorkGridItem
                        id="modetokyo"
                        thumbnail={thumbModeTokyo}
                        title="mode.tokyo"
                    >
                        The mode magazine for understanding to personally enjoy Japan
                    </WorkGridItem>
                </Section>` */}
                {/* <Section delay={0.3}>
                    <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
                        A VR Creative tools for fashion brands
                    </WorkGridItem>
                </Section> */}
            </SimpleGrid>

            <Section delay={0.4}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4}>
                    Projek Lainnya
                </Heading>
            </Section>

            {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.5}>
                    <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
                        Twitter client app for iPhone Safari
                    </WorkGridItem>
                </Section>
                <Section delay={0.5}>
                    <WorkGridItem
                        id="freedbtagger"
                        thumbnail={thumbFreeDBTagger}
                        title="freeDBTagger"
                    >
                        Automatic audio file tagging tool using FreeDB for Windows
                    </WorkGridItem>
                </Section>
                <Section delay={0.6}>
                    <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
                        P2P private file sharing tool with MSN Messenger integration for
                        Windows
                    </WorkGridItem>
                </Section>
            </SimpleGrid> */}
        </Container>
    </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
