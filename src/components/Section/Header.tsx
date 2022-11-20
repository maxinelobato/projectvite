import { Box, Stack, Container, Highlight, Text, Heading } from '@chakra-ui/react';
import { CTAArrowDown } from '../Buttons/CTAArrowDown';
import { CTAWhatsapp } from '../Buttons/CTAWhatsapp';

export function Header() {
  return (
    <>
      <Box bgGradient={'linear(to-b, blackAlpha.900, blackAlpha.800)'}>
        <Box p={{ base: '14', md: '10' }} id="header" />
        <Container maxW={'7xl'}>
          <Stack
            display={{ base: 'flex' }}
            textAlign={'center'}
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 2, md: 16 }}
          >
            <Heading
              color={'whiteAlpha.800'}
              fontWeight={{ base: '500', sm: '600', md: '700' }}
              fontSize={{ base: '3xl', sm: '5xl', md: '7xl' }}
              lineHeight={'145%'}
            >
              Você está buscando uma{' '}
              <Highlight
                query={['Landing Page']}
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
                Landing Page rápida?
              </Highlight>{' '}
            </Heading>
            <Box>
              <Text
                color={'whiteAlpha.900'}
                maxW={'3xl'}
                fontSize={{ base: 'sm', sm: 'lg', md: '2xl' }}
                fontStyle={'oblique'}
              >
                Você sabia que uma página de 2 segundos carregando, pode resultar em um
                abandono de até 87% das visitas?
              </Text>
            </Box>
            <Stack spacing={6} direction={{ base: 'column', sm: 'column' }}>
              <CTAWhatsapp />
            </Stack>
            <Stack spacing={6} direction={{ base: 'column', sm: 'column' }}>
              <CTAArrowDown />
            </Stack>
            {/* <Flex w={'full'} justifyContent={'center'}>
              <Img
                src={imgBG}
                width={{ base: '100%', md: '100%' }}
                height={{ base: 'lg', md: '2xl' }}
                mt={{ base: -18, md: -58 }}
              />
            </Flex> */}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
