import { Icon, IconButton, Link, Stack, Tooltip } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

export function CTAScrollToTop() {
  return (
    <Stack
      position="fixed"
      zIndex={2}
      bottom="30px"
      right="30px"
      justifyContent="center"
      alignItems="center"
    >
      <Tooltip
        backdropFilter="auto"
        backdropBlur="1rem"
        rounded="md"
        bgColor={'whiteAlpha.50'}
        shadow={'xl'}
        color={'whiteAlpha.900'}
        label="Fale Conosco"
        placement="top"
        isOpen
      >
        <Link
          style={{ textDecoration: 'none' }}
          href="https://api.whatsapp.com/send?phone=5513996680686&text=Ol%C3%A1%2C%20Dr.%20Gustavo!%20Vim%20do%20seu%20site.%20Podemos%20conversar%3F"
          isExternal
        >
          <IconButton
            color={'whiteAlpha.900'}
            aria-label="behavior"
            bgColor="green.500"
            variant="solid"
            w={[12, 12, 14]}
            h={[12, 12, 14]}
            shadow="base"
            _hover={{
              bgColor: 'green.600',
              transform: 'scale(1.1)',
              border: '1px',
              borderColor: 'whiteAlpha.200',
            }}
            isRound
          >
            <Icon as={FaWhatsapp} w={[6, 6, 8]} h={[6, 6, 8]} />
          </IconButton>
        </Link>
      </Tooltip>
    </Stack>
  );
}
