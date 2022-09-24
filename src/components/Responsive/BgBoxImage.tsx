import { Box, BoxProps } from "@chakra-ui/react";
import imgBG from "../../assets/bgresponsive.jpg";

export function BgBoxImage(props: BoxProps) {
  return (
    <Box
      w="100%"
      h="80vh"
      loading="lazy"
      bgImage={imgBG}
      bgSize={"cover"}
      bgPosition={"center center"}
      {...props}
    />
  );
}
