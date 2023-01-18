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
import {
  IoLogoWhatsapp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline
} from 'react-icons/io5'

// import thumbNada from '../public/images/projek-ku/nada1.png'
import thumbVlix from '../public/images/projek-ku/netvlix.png'
import thumbModeKrypto from '../public/images/projek-ku/krypto4.png'

// import thumbFitnes from '../public/images/projek-ku/fitnes1.png'
import thumbFoto from '../public/images/projek-ku/bagi1.png'
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
        css={{ backdropFilter: 'blur(15px)' }}
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
              width="120%"
              height="120%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Profil
        </Heading>
        <Paragraph>
          Saya seorang junior <i>web developer</i> yang antusias terhadap{' '}
          <i>web development</i> dan keinginan besar belajar teknologi baru,
          sebagai <i>web developer</i> memiliki pemahaman dalam HTML, CSS,
          JavaScript, SQL dan familiar dengan <i>MERN stack</i>. Saat sedang
          tidak ngoding, senang melakukan aktifitas yang berhubungan dengan
          olahraga, dan mendengar musik.
        </Paragraph>

        {/* <Paragraph>
          I am a computer engineering graduate with a strong passion for web
          development and a desire to learn new technologies. He has a solid
          foundation in HTML, CSS, JavaScript and familiar with popular
          front-end frameworks such as Vue.js and Nuxt.js, and back-end
          technologies such as Node.js, Express.js and MongoDB. He has
          experience working on various projects and understands the importance
          of clean code and documentation. Michael is a creative problem-solver
          and has a keen eye for detail and user experience. He is a team player
          and can work well under pressure, always eager to take on new
          challenges and improve his skills. He is ready to apply his knowledge
          and skills to real-world projects and make an impact in the web
          development industry.
        </Paragraph> */}

        <Box align="center" my={3}>
          <Link
            href="https://bungholyow.github.io/mein-cv/"
            width="640"
            height="480"
            allow="autoplay"
            target="_blank"
            passHref
            scroll={false}
          >
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              Lihat CV
            </Button>
          </Link>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Biodata
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
          Sepakbola, Futsal, Musik, Film, AI, Data, Ngoding dan Ngopi dan Semua
          hal yang berhubungan dengan teknologi.
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
            <Link href="#">
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
            <Link
              href="https://www.linkedin.com/in/tommy-aritonang/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoLinkedin />}
              >
                @tommy aritonang
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 3]} gap={6} mt={8}>
          <GridItem
            href="https://bagifoto.netlify.app/"
            title="shareit"
            thumbnail={thumbFoto}
          >
            web App share foto favorit
          </GridItem>
          <GridItem
            href="https://netvlix.vercel.app/"
            title="netflix clone"
            thumbnail={thumbVlix}
          >
            website clone netflix
          </GridItem>
          <GridItem
            href="https://kryptho.netlify.app/"
            title="krypto"
            thumbnail={thumbModeKrypto}
          >
            info crypto terpopuler saat ini
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={6}>
          <NextLink href="/projek-ku" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              Projek Lain
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
