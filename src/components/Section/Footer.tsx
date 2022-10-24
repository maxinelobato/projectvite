import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        spacing="8"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        py={{ base: "8", md: "0" }}
      >
        <Stack
          spacing={{ base: "6", md: "8" }}
          align={{ base: "center", md: "start" }}
        >
          <Logo />
          <Text color="muted" align={"center"}>
            Developer Landing Pages | Design UX/UI | Pro Network
            <br />
            Specialists in People Journey
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing="8"
          align={{ base: "center", md: "end" }}
          textAlign={{ base: "center", md: "right" }}
        >
          <Stack
            spacing="4"
            flex="1"
            textAlign={{ base: "center", md: "right" }}
          >
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Informações
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <ScrollIntoView selector="#about" smooth>
                <Button variant="link">Sobre</Button>
              </ScrollIntoView>
              <ScrollIntoView selector="#projetos" smooth>
                <Button variant="link">Projetos</Button>
              </ScrollIntoView>
              <ScrollIntoView selector="#specialists" smooth>
                <Button variant="link">Especialistas</Button>
              </ScrollIntoView>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider py={{ base: "0", md: "5" }} />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Barreto & Lobato, Org. Todos os
          Direitos Reservados.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaFacebook fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaInstagram fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Container>
  );
}
