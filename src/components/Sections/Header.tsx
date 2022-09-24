import {
  Container,
  Heading,
  Stack,
  Text,
  Highlight,
  Box,
} from "@chakra-ui/react";
import { CTAWhatsapp } from "../Buttons/CTAWhatsapp";

export function Header() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        display={{ base: "flex" }}
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 10 }}
      >
        <Heading
          fontWeight={700}
          fontSize={{ base: "3xl", sm: "5xl", md: "7xl" }}
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
            fontSize={{ base: "xl", sm: "sm", md: "2xl" }}
            fontStyle={"oblique"}
          >
            Você sabia que uma página de 2 segundos carregando, pode resultar em
            um abandono de até 87% das visitas?
          </Text>
        </Box>
        <Stack spacing={6} direction={{ base: "column", sm: "row" }}>
          <CTAWhatsapp />
        </Stack>
      </Stack>
    </Container>
  );
}
