import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbFitnes from '../public/images/projek-ku/fitnes1.png'
import thumbNada from '../public/images/projek-ku/nada1.png'
import thumbFoto from '../public/images/projek-ku/bagi1.png'
// import thumbMenkiki from '../public/images/projek-ku/menkiki_eyecatch.png'
// import thumbModeTokyo from '../public/images/projek-ku/modetokyo_eyecatch.png'
import thumbModeKrypto from '../public/images/projek-ku/krypto4.png'
import thumbCuaca from '../public/images/projek-ku/cuaca3.png'

const Works = () => (
  <Layout title="Projek">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} color="cyan">
        Projek React
      </Heading>

      <SimpleGrid columns={[1, 1, 3]} gap={4}>
        <Section delay={0.1}>
          <WorkGridItem
            id="nada"
            title="nada"
            thumbnail={thumbNada}
          ></WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fitnes"
            title="pitnes"
            thumbnail={thumbFitnes}
          ></WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="shareit"
            title="shareit"
            thumbnail={thumbFoto}
          ></WorkGridItem>
        </Section>

        {/* <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section> */}

        <Section delay={0.1}>
          <WorkGridItem
            id="krypto"
            thumbnail={thumbModeKrypto}
            title="krypto"
          ></WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="cuaca"
            thumbnail={thumbCuaca}
            title="cuaca"
          ></WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4} color="orange">
          Projek Laravel
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4} color="pink">
          Projek Lainnya
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* <Section delay={0.5}>
                    <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
                        Twitter client app for iPhone Safari
                    </WorkGridItem>
                </Section>
                */}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
