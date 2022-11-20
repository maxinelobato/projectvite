import {
  Box,
  Container,
  Heading,
  Highlight,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { CTAWhatsapp } from '../Buttons/CTAWhatsapp';
import { BgWavesSpecialists } from '../Responsive/BgWavesSpecialists';
import { StatMaxine } from './StatMaxine';
import { StatNeto } from './StatNeto';
import { StatThais } from './StatThais';

export function Specialists() {
  return (
    <Box bgGradient={'linear(to-b, blackAlpha.900, blackAlpha.800)'}>
      <Box p={{ base: '4', md: 'sm' }} id="specialists" />
      <Container maxW={'7xl'}>
        <Stack
          display={{ base: 'flex' }}
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 6, md: 10 }}
        >
          <Heading
            textColor={'whiteAlpha.800'}
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          >
            <Highlight
              query={['Especialistas']}
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
              Conheça nossos Especialistas
            </Highlight>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'whiteAlpha.600'}>
            Estamos prontos para responder qualquer dúvida que você tenha.
          </Text>
        </Stack>
        <SimpleGrid columns={[1, 1, 3]} gap={[2, 4, 6]}>
          <StatNeto />
          <StatThais />
          <StatMaxine />
        </SimpleGrid>
        <VStack
          mt={6}
          spacing={6}
          textAlign={'center'}
          align={'center'}
          direction={['column', 'column', 'row']}
        >
          <CTAWhatsapp />
        </VStack>
      </Container>
      <BgWavesSpecialists />
    </Box>
  );
}
