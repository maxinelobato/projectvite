import { Img, HTMLChakraProps } from "@chakra-ui/react";
import imgBL from "../../assets/logotransparent.png";

export const Logo = (props: HTMLChakraProps<"img">) => (
  <Img
    loading="lazy"
    color="accent"
    height="12"
    width="auto"
    src={imgBL}
    {...props}
  />
);
