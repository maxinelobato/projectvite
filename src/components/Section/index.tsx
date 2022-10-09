import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Container,
  Highlight,
  Text,
  Heading,
  Image,
  Button,
  Badge,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Logo } from "./Logo";
import ScrollIntoView from "react-scroll-into-view";
import { BgBoxImage } from "../Responsive/BgBoxImage";
import { CTAWhatsapp } from "../Buttons/CTAWhatsapp";
import imgCTA from "../../assets/lpresponsive.png";
import { BgBox } from "../Responsive/BgBox";

export function Section() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <BgBoxImage>
        {/* Navbar */}
        <Box
          backdropFilter="auto"
          backdropBlur="1rem"
          w={"full"}
          position={"fixed"}
          zIndex={2}
        >
          <Flex
            px={{ base: "0", md: "36" }}
            h={16}
            alignItems={"center"}
            justifyContent={{ base: "end", sm: "space-between" }}
          >
            <IconButton
              boxShadow={"lg"}
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack
              ml={{ base: "14", md: "0" }}
              spacing={8}
              alignItems={{ base: "end", md: "center" }}
            >
              <Logo />
            </HStack>
            <Stack
              flex={{ base: 1, md: 20 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
            >
              <HStack
                as={"nav"}
                spacing={8}
                display={{ base: "none", md: "flex" }}
              >
                <ScrollIntoView selector="#sobre" smooth>
                  <Box
                    as="button"
                    rounded={"lg"}
                    p={3}
                    _active={{
                      transform: "scale(0.98)",
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "whiteAlpha.200",
                    }}
                    _focus={{
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "whiteAlpha.200",
                    }}
                    _hover={{
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "whiteAlpha.200",
                    }}
                  >
                    Sobre
                  </Box>
                </ScrollIntoView>
                <ScrollIntoView selector="#projetos" smooth>
                  <Box
                    as="button"
                    rounded={"lg"}
                    p={3}
                    _active={{
                      transform: "scale(0.98)",
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "whiteAlpha.200",
                    }}
                    _focus={{
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "whiteAlpha.200",
                    }}
                    _hover={{
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "whiteAlpha.200",
                    }}
                  >
                    Projetos
                  </Box>
                </ScrollIntoView>
                <ScrollIntoView selector="#especialistas" smooth>
                  <Box
                    as="button"
                    rounded={"lg"}
                    p={3}
                    _active={{
                      transform: "scale(0.98)",
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "whiteAlpha.200",
                    }}
                    _focus={{
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "whiteAlpha.200",
                    }}
                    _hover={{
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "whiteAlpha.200",
                    }}
                  >
                    Especialistas
                  </Box>
                </ScrollIntoView>
              </HStack>
            </Stack>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                <ScrollIntoView selector="#sobre" smooth>
                  <Box
                    as="button"
                    rounded={"lg"}
                    p={3}
                    _active={{
                      transform: "scale(0.98)",
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "whiteAlpha.200",
                    }}
                    _focus={{
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "whiteAlpha.200",
                    }}
                    _hover={{
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "whiteAlpha.200",
                    }}
                  >
                    Sobre
                  </Box>
                </ScrollIntoView>
                <ScrollIntoView selector="#projetos" smooth>
                  <Box
                    as="button"
                    rounded={"lg"}
                    p={3}
                    _active={{
                      transform: "scale(0.98)",
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "whiteAlpha.200",
                    }}
                    _focus={{
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "whiteAlpha.200",
                    }}
                    _hover={{
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "orange.200",
                    }}
                  >
                    Projetos
                  </Box>
                </ScrollIntoView>
                <ScrollIntoView selector="#especialistas" smooth>
                  <Box
                    as="button"
                    rounded={"lg"}
                    p={3}
                    _active={{
                      transform: "scale(0.98)",
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "whiteAlpha.200",
                    }}
                    _focus={{
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "whiteAlpha.200",
                    }}
                    _hover={{
                      color: "whiteAlpha.900",
                      bg: "blackAlpha.500",
                      border: "1px",
                      borderColor: "whiteAlpha.200",
                    }}
                  >
                    Especialistas
                  </Box>
                </ScrollIntoView>
              </Stack>
            </Box>
          ) : null}
        </Box>
        <Box p={{ base: "14", md: "lg" }} id="sobre" />
        {/* SECTION HEADER */}
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
                Você sabia que uma página de 2 segundos carregando, pode
                resultar em um abandono de até 87% das visitas?
              </Text>
            </Box>
            <Stack spacing={6} direction={{ base: "column", sm: "row" }}>
              <CTAWhatsapp />
            </Stack>
          </Stack>
        </Container>
      </BgBoxImage>
      {/* SECTION CTA SPLIT IMAGE */}
      <BgBox>
        <Box p={{ base: "4", md: "sm" }} id="projetos" />
        <Container maxW={"7xl"}>
          <Stack
            display={{ base: "flex" }}
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 10, md: 0 }}
          >
            <Flex
              flex={1}
              align={"center"}
              justify={"center"}
              textAlign={"left"}
            >
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
                mt={{ base: 5, sm: 22 }}
                src={imgCTA}
              />
            </Flex>
          </Stack>
        </Container>
        {/* SECTION SPECIALISTS */}
        <Box p={{ base: "0", md: "sm" }} id="especialistas" />
        <Container maxW={"7xl"}>
          <Stack
            display={{ base: "flex" }}
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 10, md: 10 }}
          >
            <Flex
              flex={1}
              align={"center"}
              justify={"center"}
              textAlign={"left"}
            >
              {/* Netinho */}
              <Stack
                borderRadius="lg"
                w={{ sm: "100%", md: "540px" }}
                height={{ sm: "476px", md: "20rem" }}
                direction={{ base: "column", md: "row" }}
                backdropFilter="auto"
                backdropBlur="10rem"
                boxShadow={"base"}
                bgColor={"whiteAlpha.200"}
                padding={4}
              >
                <Flex flex={1}>
                  <Image
                    rounded={"lg"}
                    loading="lazy"
                    objectFit="cover"
                    boxSize="100%"
                    src={
                      "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                    }
                  />
                </Flex>
                <Stack
                  flex={1}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  pt={2}
                >
                  <Heading fontSize={"2xl"} fontFamily={"body"}>
                    Lindsey James
                  </Heading>
                  <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                    @lindsey_jam3s
                  </Text>
                  <Text
                    textAlign={"center"}
                    color={useColorModeValue("gray.700", "gray.400")}
                    px={3}
                  >
                    Actress, musician, songwriter and artist. PM for work
                    inquires or
                    <Link href={"#"} color={"blue.400"}>
                      #tag
                    </Link>
                    me in your posts
                  </Text>
                  <Stack
                    align={"center"}
                    justify={"center"}
                    direction={"row"}
                    mt={6}
                  >
                    <Badge
                      px={2}
                      py={1}
                      bg={useColorModeValue("gray.50", "gray.800")}
                      fontWeight={"400"}
                    >
                      #art
                    </Badge>
                    <Badge
                      px={2}
                      py={1}
                      bg={useColorModeValue("gray.50", "gray.800")}
                      fontWeight={"400"}
                    >
                      #photography
                    </Badge>
                    <Badge
                      px={2}
                      py={1}
                      bg={useColorModeValue("gray.50", "gray.800")}
                      fontWeight={"400"}
                    >
                      #music
                    </Badge>
                  </Stack>

                  <Stack
                    width={"100%"}
                    mt={"2rem"}
                    direction={"row"}
                    padding={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      _focus={{
                        bg: "gray.200",
                      }}
                    >
                      Message
                    </Button>
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                    >
                      Follow
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Flex>
            <Flex
              flex={1}
              align={"center"}
              justify={"center"}
              textAlign={"left"}
            >
              {/* Maxine */}
              <Stack
                borderRadius="lg"
                w={{ sm: "100%", md: "540px" }}
                height={{ sm: "476px", md: "20rem" }}
                direction={{ base: "column", md: "row" }}
                backdropFilter="auto"
                backdropBlur="10rem"
                boxShadow={"base"}
                bgColor={"whiteAlpha.200"}
                padding={4}
              >
                <Flex flex={1}>
                  <Image
                    rounded={"lg"}
                    loading="lazy"
                    objectFit="cover"
                    boxSize="100%"
                    src={
                      "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                    }
                  />
                </Flex>
                <Stack
                  flex={1}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  pt={2}
                >
                  <Heading fontSize={"2xl"} fontFamily={"body"}>
                    Lindsey James
                  </Heading>
                  <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                    @lindsey_jam3s
                  </Text>
                  <Text
                    textAlign={"center"}
                    color={useColorModeValue("gray.700", "gray.400")}
                    px={3}
                  >
                    Actress, musician, songwriter and artist. PM for work
                    inquires or
                    <Link href={"#"} color={"blue.400"}>
                      #tag
                    </Link>
                    me in your posts
                  </Text>
                  <Stack
                    align={"center"}
                    justify={"center"}
                    direction={"row"}
                    mt={6}
                  >
                    <Badge
                      px={2}
                      py={1}
                      bg={useColorModeValue("gray.50", "gray.800")}
                      fontWeight={"400"}
                    >
                      #art
                    </Badge>
                    <Badge
                      px={2}
                      py={1}
                      bg={useColorModeValue("gray.50", "gray.800")}
                      fontWeight={"400"}
                    >
                      #photography
                    </Badge>
                    <Badge
                      px={2}
                      py={1}
                      bg={useColorModeValue("gray.50", "gray.800")}
                      fontWeight={"400"}
                    >
                      #music
                    </Badge>
                  </Stack>

                  <Stack
                    width={"100%"}
                    mt={"2rem"}
                    direction={"row"}
                    padding={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      _focus={{
                        bg: "gray.200",
                      }}
                    >
                      Message
                    </Button>
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                    >
                      Follow
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Flex>
          </Stack>
        </Container>
      </BgBox>
    </>
  );
}
