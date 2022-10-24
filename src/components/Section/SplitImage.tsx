import {
  Box,
  Container,
  Stack,
  Flex,
  Heading,
  Highlight,
  Text,
  Link,
  Image,
} from "@chakra-ui/react";
import { CTAWhatsapp } from "../Buttons/CTAWhatsapp";
import { BgBox } from "../Responsive/BgBox";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import imgCTA from "../../assets/lpresponsive.png";

export function SplitImage() {
  return (
    <BgBox>
      <Container maxW={"7xl"}>
        <Box p={{ base: "4", md: "sm" }} id="projetos" />
        <Stack
          display={{ base: "flex" }}
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 6, md: 0 }}
        >
          <Flex flex={1} align={"center"} textAlign={"left"}>
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
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color={"blackAlpha.900"}
              >
                <Link
                  href="https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect&hl=pt-br"
                  isExternal
                >
                  Escolha uma página nossa e teste nossa performance.{" "}
                  <ExternalLinkIcon mx="2px" mb={1} />
                </Link>
              </Text>
              <Stack
                mt={10}
                spacing={6}
                textAlign={"center"}
                align={{ base: "center", md: "start" }}
                direction={{ base: "column", sm: "row" }}
              >
                <CTAWhatsapp />
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1} align={"end"}>
            <Image
              transform="scale(1.0)"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.08)",
              }}
              rounded={"lg"}
              alt={"Login Image"}
              mt={{ base: 5, sm: 22 }}
              src={imgCTA}
            />
          </Flex>
        </Stack>
      </Container>
    </BgBox>
  );
}
