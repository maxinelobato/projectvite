import { Box, BoxProps } from "@chakra-ui/react";

export function BgBoxSpecialists(props: BoxProps) {
  return (
    <>
      <Box
        w="100%"
        bgGradient="linear(to-r, blackAlpha.800, blackAlpha.200)"
        {...props}
      />
    </>
  );
}
