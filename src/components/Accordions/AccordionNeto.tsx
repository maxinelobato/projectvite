import {
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  Box,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";

export function AccordionNeto() {
  return (
    <Box mt={6} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Sobre o Especialista
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>Engenheiro de Software</Text>
            <Text>Especialista em Desenvolvimento Back-End</Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
