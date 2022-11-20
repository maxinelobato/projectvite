import { Button } from '@chakra-ui/react';

export function CTAWhatsapp() {
  return (
    <Button
      fontWeight={'semibold'}
      size={'lg'}
      rounded={'lg'}
      color={'whiteAlpha.900'}
      bgGradient={'linear(to-r, pink.400, orange.400)'}
      transform="scale(1.0)"
      transition="0.3s ease-in-out"
      boxShadow={
        '0px 1px 25px -5px rgb(237 102 159 / 48%), 0 10px 10px -5px rgb(237 136 60 / 43%)'
      }
      _hover={{
        transform: 'scale(1.08)',
      }}
    >
      Fale com um Especialista
    </Button>
  );
}
