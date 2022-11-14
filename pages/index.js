import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoWhatsapp, IoLogoGithub, IoLogoLinkedin, IoMailOutline } from 'react-icons/io5'

import thumbNada from '../public/images/projek-ku/nada1.png'
import thumbFitnes from '../public/images/projek-ku/fitnes1.png'
import Image from 'next/image'



const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('purple.400', 'purple.600')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hai, Saya seorang web developer dari Indonesia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tommy Aritonang
          </Heading>
          <p>Junior Web Developer & Programmer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="purple.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/tommy_2.jpg"
              alt="Gambar profil"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Tentang
        </Heading>
        <Paragraph>
          Tommy adalah seorang junior web developer yang berdomisili di semarang,
          sebagai web developer memiliki passion dan keinginan bereksperimen
          dengan teknologi terbaru dalam pengembangan web. Ketika sedang tidak ngoding,
          senang melakukan aktifitas yang berhubungan dengan olahraga, dan mendengar musik.
        </Paragraph>
        <Box align="center" my={3}>


          <Link href='https://drive.google.com/file/d/11pLd2BotgT7e9QVUQjyKNgBoFZXyWcv1/preview' width="640" height="480" allow="autoplay" target="_blank" passHref scroll={false}>
            {/* <iframe src="https://drive.google.com/file/d/11pLd2BotgT7e9QVUQjyKNgBoFZXyWcv1/preview" width="640" height="480" allow="autoplay"></iframe> */}


            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              Lihat CV
            </Button>

          </Link>

        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Lahir di Sidikalang, Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          Lulus dari SMA Negeri 1 Sidikalang
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Lulus S-1 Teknik Komputer dari Universitas Diponegoro (UNDIP) Semarang
        </BioSection>
        <BioSection>
          <BioYear>2021-</BioYear>
          Bekerja sebagai freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Tommy ♥
        </Heading>
        <Paragraph>
          Sepakbola, Futsal, Musik, Film, ngoding dan ngopi
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Kontak
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/bungholyow" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoGithub />}
              >
                @bungholyow
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" >
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoMailOutline />}
              >
                tommydedy.aritonang@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" target="">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoWhatsapp />}
              >
                081392087046
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.linkedin.com/in/tommy-dedy-aritonang-493b66250/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoLinkedin />}
              >
                @tommy dedy aritonang
              </Button>
            </Link>
          </ListItem>

        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={5}>

          <GridItem
            href="https://fitnes-app.netlify.app/"
            title="Fitnes"
            thumbnail={thumbFitnes}
          >
            Web App info jenis latihan di gym
          </GridItem>
          <GridItem
            href="https://nada-app.netlify.app/"
            title="Nada"
            thumbnail={thumbNada}
          >
            Wep App Pemutar Lagu Populer
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/projek-ku" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              Projek Saya
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

