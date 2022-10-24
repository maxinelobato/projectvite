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
import imgNeto from "../../assets/neto.jpg";

export function StatNeto() {
  return (
    <Stat>
      <Box px={{ base: "4", md: "6" }} py={{ base: "5", md: "6" }}>
        <Stack direction={{ base: "row", md: "row" }}>
          <Avatar
            boxSize={useBreakpointValue({ base: "150px", md: "150px" })}
            borderRadius={"full"}
            objectFit="cover"
            src={imgNeto}
            style={{
              border: "5px solid gray",
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
              Lauro Neto
            </Heading>
            <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
              <Link
                href="https://www.linkedin.com/in/lvneto/"
                style={{ textDecoration: "none" }}
                isExternal
              >
                @lauro_neto <ExternalLinkIcon mx="2px" />
              </Link>
            </Text>
            <Text fontWeight={200} color={"gray.500"} size="sm" mb={0}>
              Engenheiro de Software
            </Text>
            <Text fontWeight={200} color={"gray.500"} size="sm" mb={0}>
              Desenvolvedor Back-End
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stat>
  );
}
