import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Container,
  Flex,
  Heading,
  Highlight,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import imgCTA from "../../assets/lpresponsive.png";
import { CTAWhatsapp } from "../Buttons/CTAWhatsapp";

export function CTASplitImage() {
  return (
    <Container maxW={"7xl"} id="#projetos">
      <Stack
        display={{ base: "flex" }}
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 0 }}
      >
        <Flex flex={1} align={"center"} justify={"center"} textAlign={"left"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Highlight
                query={["Projetos", "Responsivos"]}
                styles={{
                  px: "2",
                  py: "-1",
                  rounded: "lg",
                  color: "orange.400",
                  bg: "blackAlpha.700",
                  fontStyle: "oblique",
                }}
              >
                Projetos Responsivos
              </Highlight>
              <br />{" "}
              <Text color={"blackAlpha.700"} as={"span"}>
                Testados e aprovados no PageSpeed.
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"blackAlpha.900"}>
              <Link
                href="https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect&hl=pt-br"
                isExternal
              >
                Escolha uma página nossa e teste nossa performance.{" "}
                <ExternalLinkIcon mx="2px" mb={1} />
              </Link>
            </Text>
            <Stack spacing={6} direction={{ base: "column", sm: "row" }}>
              <CTAWhatsapp />
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            loading="lazy"
            transform="scale(1.0)"
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.08)",
            }}
            rounded={"lg"}
            alt={"Login Image"}
            height={{ sm: "24rem", lg: "28rem" }}
            width={{ sm: "32rem", lg: "40rem" }}
            mt={{ base: -10, sm: 22 }}
            src={imgCTA}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
