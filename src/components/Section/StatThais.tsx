import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Heading,
  Link,
  Stack,
  Stat,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import imgThais from "../../assets/thais.jpg";

export function StatThais() {
  return (
    <Stat>
      <Box px={{ base: "4", md: "6" }} py={{ base: "5", md: "6" }}>
        <Stack direction={{ base: "row", md: "row" }}>
          <Avatar
            boxSize={useBreakpointValue({ base: "150px", md: "150px" })}
            borderRadius={"full"}
            objectFit="cover"
            src={imgThais}
            style={{
              border: "5px solid pink",
            }}
          />
          <Stack
            flex={1}
            flexDirection={{ base: "column", md: "column" }}
            justifyContent="center"
            alignItems="start"
            p={1}
            pt={2}
          >
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              Thais Barreto
            </Heading>
            <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
              <Link
                href="https://www.instagram.com/soudosanjos/"
                style={{ textDecoration: "none" }}
                isExternal
              >
                @soudosanjos <ExternalLinkIcon mx="2px" />
              </Link>
            </Text>
            <Text fontWeight={200} color={"gray.500"} size="sm" mb={0}>
              Vendas e Prospecção
            </Text>
            <Text fontWeight={200} color={"gray.500"} size="sm" mb={0}>
              Gestão de Pessoas
            </Text>
            <Text fontWeight={200} color={"gray.500"} size="sm" mb={0}>
              Profissional Networker
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stat>
  );
}
