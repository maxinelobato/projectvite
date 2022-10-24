import {
  Box,
  Stack,
  Container,
  Highlight,
  Text,
  Heading,
} from "@chakra-ui/react";
import { BgBoxImage } from "../Responsive/BgBoxImage";
import { CTAWhatsapp } from "../Buttons/CTAWhatsapp";

export function About() {
  return (
    <>
      <BgBoxImage>
        <Box p={{ base: "14", md: "10" }} id="about" />
        <Container maxW={"7xl"}>
          <Stack
            display={{ base: "flex" }}
            textAlign={"center"}
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 8, md: 10 }}
          >
            <Heading
              fontWeight={700}
              fontSize={{ base: "4xl", sm: "5xl", md: "7xl" }}
              lineHeight={"145%"}
            >
              Você está buscando uma{" "}
              <Highlight
                query={["Landing Page"]}
                styles={{
                  px: "2",
                  py: "-1",
                  rounded: "lg",
                  color: "orange.400",
                  bg: "blackAlpha.500",
                  fontStyle: "oblique",
                }}
              >
                Landing Page rápida?
              </Highlight>{" "}
            </Heading>
            <Box
              backdropFilter="auto"
              backdropBlur="1rem"
              bgColor={"blackAlpha.50"}
              rounded={"lg"}
              border={"1px"}
              borderColor={"whiteAlpha.200"}
              boxShadow={"inner"}
            >
              <Text
                color={"whiteAlpha.900"}
                maxW={"3xl"}
                fontSize={{ base: "lg", sm: "lg", md: "2xl" }}
                fontStyle={"oblique"}
              >
                Você sabia que uma página de 2 segundos carregando, pode
                resultar em um abandono de até 87% das visitas?
              </Text>
            </Box>
            <Stack
              spacing={6}
              direction={{ base: "column", sm: "column" }}
              py={{ base: 0, md: 0 }}
            >
              <CTAWhatsapp />
            </Stack>
          </Stack>
        </Container>
      </BgBoxImage>
    </>
  );
}
