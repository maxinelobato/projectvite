import { CgChevronDoubleDownO } from 'react-icons/cg';
import { Heading } from '@chakra-ui/react';
import Jump from 'react-reveal/Jump';

export function CTAArrowDown() {
  return (
    <Jump forever={true}>
      <Heading as={'h1'} color="whiteAlpha.900" fontSize={'5xl'}>
        <CgChevronDoubleDownO />
      </Heading>
    </Jump>
  );
}
