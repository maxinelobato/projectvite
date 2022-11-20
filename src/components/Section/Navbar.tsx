import { HStack, IconButton, Box, useDisclosure, Flex, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Logo } from './Logo';
import ScrollIntoView from 'react-scroll-into-view';
import { CTAWhatsapp } from '../Buttons/CTAWhatsapp';

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      backdropFilter="auto"
      backdropBlur="1rem"
      px={{ base: '4', md: '32' }}
      w={'full'}
      position={'fixed'}
      zIndex={2}
    >
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={{ base: 'end', sm: 'space-between' }}
      >
        <IconButton
          colorScheme={'whiteAlpha'}
          boxShadow={'lg'}
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack
          ml={{ base: '14', md: '0' }}
          spacing={8}
          alignItems={['end', 'end', 'end']}
        >
          <Logo />
        </HStack>
        <Stack
          flex={{ base: 1, md: 20 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <HStack as={'nav'} spacing={8} display={['none', 'none', 'flex']}>
            <CTAWhatsapp />
            {/* <ScrollIntoView selector="#header" smooth>
              <Box
                color={'whiteAlpha.800'}
                borderBottom={'1px'}
                borderBottomColor={'rgba(255, 255, 255, 0.5)'}
                as="button"
                rounded={'lg'}
                p={3}
                _active={{
                  color: 'whiteAlpha.900',
                }}
                _hover={{
                  color: 'whiteAlpha.900',
                  bgGradient:
                    'linear(to-b, rgba(237, 102, 159, 0.5), rgba(237,136, 60, 0.5))',
                }}
                _focus={{
                  color: 'whiteAlpha.900',
                  bgGradient:
                    'linear(to-b, rgba(237, 102, 159, 0.5), rgba(237,136, 60, 0.5))',
                }}
              >
                Sobre
              </Box>
            </ScrollIntoView>
            <ScrollIntoView selector="#projetos" smooth>
              <Box
                color={'whiteAlpha.800'}
                borderBottom={'1px'}
                borderBottomColor={'rgba(255, 255, 255, 0.5)'}
                as="button"
                rounded={'lg'}
                p={3}
                _active={{
                  color: 'whiteAlpha.900',
                }}
                _hover={{
                  color: 'whiteAlpha.900',
                  bgGradient:
                    'linear(to-b, rgba(237, 102, 159, 0.5), rgba(237,136, 60, 0.5))',
                }}
                _focus={{
                  color: 'whiteAlpha.900',
                  bgGradient:
                    'linear(to-b, rgba(237, 102, 159, 0.5), rgba(237,136, 60, 0.5))',
                }}
              >
                Projetos
              </Box>
            </ScrollIntoView>
            <ScrollIntoView selector="#specialists" smooth>
              <Box
                color={'whiteAlpha.800'}
                borderBottom={'1px'}
                borderBottomColor={'rgba(255, 255, 255, 0.5)'}
                as="button"
                rounded={'lg'}
                p={3}
                _active={{
                  color: 'whiteAlpha.900',
                }}
                _hover={{
                  color: 'whiteAlpha.900',
                  bgGradient:
                    'linear(to-b, rgba(237, 102, 159, 0.5), rgba(237,136, 60, 0.5))',
                }}
                _focus={{
                  color: 'whiteAlpha.900',
                  bgGradient:
                    'linear(to-b, rgba(237, 102, 159, 0.5), rgba(237,136, 60, 0.5))',
                }}
              >
                Especialistas
              </Box>
            </ScrollIntoView> */}
          </HStack>
        </Stack>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <ScrollIntoView selector="#header" smooth>
              <Box
                color={'whiteAlpha.800'}
                borderBottom={'1px'}
                borderBottomColor={'rgba(255, 255, 255, 0.5)'}
                as="button"
                rounded={'lg'}
                p={3}
                _active={{
                  color: 'whiteAlpha.900',
                }}
                _hover={{
                  color: 'whiteAlpha.900',
                  bgGradient:
                    'linear(to-b, rgba(237, 102, 159, 0.5), rgba(237,136, 60, 0.5))',
                }}
                _focus={{
                  color: 'whiteAlpha.900',
                  bgGradient:
                    'linear(to-b, rgba(237, 102, 159, 0.5), rgba(237,136, 60, 0.5))',
                }}
              >
                Sobre
              </Box>
            </ScrollIntoView>
            <ScrollIntoView selector="#projetos" smooth>
              <Box
                color={'whiteAlpha.800'}
                borderBottom={'1px'}
                borderBottomColor={'rgba(255, 255, 255, 0.5)'}
                as="button"
                rounded={'lg'}
                p={3}
                _active={{
                  color: 'whiteAlpha.900',
                }}
                _hover={{
                  color: 'whiteAlpha.900',
                  bgGradient:
                    'linear(to-b, rgba(237, 102, 159, 0.5), rgba(237,136, 60, 0.5))',
                }}
                _focus={{
                  color: 'whiteAlpha.900',
                  bgGradient:
                    'linear(to-b, rgba(237, 102, 159, 0.5), rgba(237,136, 60, 0.5))',
                }}
              >
                Projetos
              </Box>
            </ScrollIntoView>
            <ScrollIntoView selector="#specialists" smooth>
              <Box
                color={'whiteAlpha.800'}
                borderBottom={'1px'}
                borderBottomColor={'rgba(255, 255, 255, 0.5)'}
                as="button"
                rounded={'lg'}
                p={3}
                _active={{
                  color: 'whiteAlpha.900',
                }}
                _hover={{
                  color: 'whiteAlpha.900',
                  bgGradient:
                    'linear(to-b, rgba(237, 102, 159, 0.5), rgba(237,136, 60, 0.5))',
                }}
                _focus={{
                  color: 'whiteAlpha.900',
                  bgGradient:
                    'linear(to-b, rgba(237, 102, 159, 0.5), rgba(237,136, 60, 0.5))',
                }}
              >
                Especialistas
              </Box>
            </ScrollIntoView>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
