import {
  Box,
  Container,
  Heading,
  Highlight,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CTAWhatsapp } from "../Buttons/CTAWhatsapp";
import { BgBoxSpecialists } from "../Responsive/BgBoxSpecialists";
import { BgWavesSpecialists } from "../Responsive/BgWavesSpecialists";
import { StatMaxine } from "./StatMaxine";
import { StatNeto } from "./StatNeto";
import { StatThais } from "./StatThais";

export function Specialists() {
  return (
    <BgBoxSpecialists>
      <Box p={{ base: "4", md: "sm" }} id="specialists" />
      <Container maxW={"7xl"}>
        <Stack
          display={{ base: "flex" }}
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 6, md: 10 }}
        >
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Highlight
              query={["Especialistas"]}
              styles={{
                px: "2",
                py: "-1",
                rounded: "lg",
                color: "blackAlpha.700",
                bg: "orange.400",
                fontStyle: "oblique",
              }}
            >
              Conheça nossos Especialistas
            </Highlight>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"whiteAlpha.600"}>
            Estamos prontos para responder qualquer dúvida que você tenha.
          </Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "6", md: "6" }}>
          <StatNeto />
          <StatThais />
          <StatMaxine />
        </SimpleGrid>
        <VStack
          mt={6}
          spacing={6}
          textAlign={"center"}
          align={"center"}
          direction={{ base: "column", sm: "column" }}
        >
          <CTAWhatsapp />
        </VStack>
      </Container>
      <BgWavesSpecialists />
    </BgBoxSpecialists>
  );
}
