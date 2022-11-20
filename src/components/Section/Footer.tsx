import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view';
import { Logo } from './Logo';

export function Footer() {
  return (
    <Box bgColor={'black'}>
      <Container maxW={'7xl'}>
        <Stack
          spacing="8"
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          py={{ base: '8', md: '0' }}
        >
          <Stack
            spacing={{ base: '6', md: '8' }}
            align={{ base: 'center', md: 'start' }}
          >
            <Logo />
            <Text color="whiteAlpha.800" align={['center', 'center', 'left']}>
              Landing Pages | Design UX/UI | Pro Networker
              <br />A melhor experiência da sua vida!
            </Text>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing="8"
            align={{ base: 'center', md: 'end' }}
            textAlign={{ base: 'center', md: 'right' }}
          >
            <Stack spacing="4" flex="1" textAlign={{ base: 'center', md: 'right' }}>
              <Text fontSize="sm" fontWeight="semibold" color="whiteAlpha.800">
                Informações
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <ScrollIntoView selector="#about" smooth>
                  <Button variant="link">Sobre</Button>
                </ScrollIntoView>
                <ScrollIntoView selector="#projetos" smooth>
                  <Button variant="link">Projetos</Button>
                </ScrollIntoView>
                <ScrollIntoView selector="#specialists" smooth>
                  <Button variant="link">Especialistas</Button>
                </ScrollIntoView>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Divider py={{ base: '0', md: '5' }} />
        <Stack
          pt="8"
          pb="12"
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
          align="center"
        >
          <Text
            textAlign={['center', 'center', 'left']}
            fontSize="sm"
            color="whiteAlpha.800"
          >
            &copy; {new Date().getFullYear()} Barreto & Lobato, Org. Todos os Direitos
            Reservados.
          </Text>
          <ButtonGroup mt={2}>
            <IconButton
              bgGradient={'linear(to-r, pink.400, orange.400)'}
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
              _hover={{
                bgGradient: 'linear(to-r, pink.600, orange.600)',
              }}
              isRound
            />
            <IconButton
              bgGradient={'linear(to-r, pink.400, orange.400)'}
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaInstagram fontSize="1.25rem" />}
              _hover={{
                bgGradient: 'linear(to-r, pink.600, orange.600)',
              }}
              isRound
            />
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  );
}
