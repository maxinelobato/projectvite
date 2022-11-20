import { Box, BoxProps } from '@chakra-ui/react';
import imgBG from '../../assets/bgresponsive.png';

export function BgBoxImage(props: BoxProps) {
  return (
    <Box
      w="100%"
      bgImage={imgBG}
      bgSize={'contain'}
      bgRepeat={'no-repeat'}
      bgPosition={'center center'}
      {...props}
    />
  );
}
