import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Logo } from "./Logo";[]
import ScrollIntoView from 'react-scroll-into-view';

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        backdropFilter="auto"
        backdropBlur="1rem"
        px={{ base: "4", md: "48" }}
        w={"full"}
        position={"fixed"}
        zIndex={2}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={{ base: "end", sm: "space-between" }}
        >
          <IconButton
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
              <ul
                style={{ textDecoration: "none" }}           
              >
                <li>Sobre</li>
              </ul>
              <ScrollIntoView selector="#footer">
              <Link
                href="#projetos"
                style={{ textDecoration: "none" }}       
              >           
                           
                Projetos
              </Link>
              </ScrollIntoView>
              <Link
                href="#especialistas"
                style={{ textDecoration: "none" }}         
              >
                Especialistas
              </Link> 
            </HStack>
          </Stack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link href="#">Sobre</Link>
              <Link href="#">Projetos</Link>
              <Link href="#">Especialistas</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box p={{ base: "5", md: "lg" }} />

      <div id="footer">Scroll target element</div>
    </>
  );
}
