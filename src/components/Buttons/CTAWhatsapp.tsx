import { Button } from "@chakra-ui/react";

export function CTAWhatsapp() {
  return (
    <Button
      fontWeight={"medium"}
      textTransform={"uppercase"}
      size={"lg"}
      rounded={"lg"}
      color={"blackAlpha.800"}
      bg={"whiteAlpha.900"}
      transform="scale(1.0)"
      transition="0.3s ease-in-out"
      boxShadow={
        "0px 1px 30px -5px rgb(255 255 255 / 80%), 0 10px 20px -5px rgb(255 255 255 / 83%)"
      }
      _hover={{
        transform: "scale(1.08)",
      }}
    >
      fale com um especialista
    </Button>
  );
}
