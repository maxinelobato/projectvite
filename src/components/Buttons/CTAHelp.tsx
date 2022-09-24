import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";

export function CTAHelp() {
  return (
    <Stack
      position="fixed"
      zIndex={2}
      bottom="30px"
      right="30px"
      justifyContent="center"
      alignItems="center"
    >
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              bgColor={"orange.400"}
              isActive={isOpen}
              backdropFilter="auto"
              backdropBlur="1rem"
              display="flex"
              transition="0.1s linear"
              shadow="sm"
              as={Button}
              aria-label="Options"
              variant="solid"
            >
              {isOpen
                ? ["Fechar", <ChevronDownIcon />]
                : ["Ajuda?", <ChevronUpIcon />]}
            </MenuButton>
            <MenuList
              backdropFilter="auto"
              backdropBlur="1rem"
              transition="0.1s linear"
              bgColor="blackAlpha.500"
              shadow="sm"
            >
              <MenuGroup title="Produto Indisponível?" />
              <MenuDivider />
              <MenuGroup title="Dúvidas?" />
              <MenuDivider />
              <MenuGroup title="Fale Conosco no">
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  href="https://www.instagram.com/desintermediacaocomercial/"
                  isExternal
                >
                  <MenuItem icon={<BsInstagram size={16} />}>
                    Instagram
                  </MenuItem>
                </Link>
              </MenuGroup>
            </MenuList>
          </>
        )}
      </Menu>
    </Stack>
  );
}
