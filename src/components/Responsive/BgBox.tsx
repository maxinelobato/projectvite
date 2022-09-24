import { Box, BoxProps } from "@chakra-ui/react";

export function BgBox(props: BoxProps) {
  return (
    <>
      <Box
        w="100%"
        bgGradient="linear(to-r, orange.400, orange.600)"
        {...props}
      />
    </>
  );
}
