import {
  Box,
  Container,
  Stack,
  Flex,
  Heading,
  Highlight,
  Text,
  Link,
  Image,
} from '@chakra-ui/react';
import { CTAWhatsapp } from '../Buttons/CTAWhatsapp';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import imgCTA from '../../assets/lpresponsive.png';

export function Projects() {
  return (
    <Box bgGradient={'linear(to-b, blackAlpha.800, blackAlpha.900)'}>
      <Container maxW={'7xl'}>
        <Box p={['sm', 'sm', 'lg']} id="projetos" />
        <Stack
          alignItems={['center', 'center', 'center']}
          display="flex"
          direction={['column', 'column', 'row']}
          spacing={{ base: 8, md: 10 }}
          py={[10, 10, 6]}
        >
          <Flex flex={1}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Heading
                textAlign={['center', 'center', 'left']}
                textColor={'whiteAlpha.800'}
                fontSize={['3xl', '4xl', '5xl']}
              >
                <Highlight
                  query={['Responsivos']}
                  styles={{
                    px: '2',
                    py: '-1',
                    rounded: 'lg',
                    backdropFilter: 'auto',
                    backdropBlur: '1rem',
                    bgGradient:
                      'linear(to-r, rgba(237, 102, 159, 0.5), rgba(237,136, 60, 0.5))',
                    shadow: 'xl',
                    boxShadow: 'dark-lg',
                    textColor: 'whiteAlpha.800',
                    fontStyle: 'oblique',
                  }}
                >
                  Projetos Responsivos
                </Highlight>
                <br />{' '}
                <Text textColor={'whiteAlpha.800'} as={'span'}>
                  Testados e aprovados no PageSpeed.
                </Text>{' '}
              </Heading>
              <Text
                textAlign={['center', 'center', 'left']}
                fontSize={['md', 'md', 'lg']}
                color={'whiteAlpha.600'}
              >
                <Link
                  href="https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect&hl=pt-br"
                  isExternal
                >
                  Escolha uma página nossa e teste nossa performance.{' '}
                  <ExternalLinkIcon mx="2px" mb={1} />
                </Link>
              </Text>
              <Stack
                mt={10}
                spacing={6}
                textAlign={'center'}
                align={['center', 'center', 'start']}
                direction={['column', 'column', 'row']}
              >
                <CTAWhatsapp />
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1} align={'center'}>
            <Image
              transform="scale(1.0)"
              transition="0.3s ease-in-out"
              _hover={{
                transform: 'scale(1.08)',
              }}
              rounded={'lg'}
              alt={'Login Image'}
              mt={[5, 5, 10]}
              src={imgCTA}
            />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
