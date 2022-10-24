import { ArrowUpIcon } from "@chakra-ui/icons";
import { IconButton, Stack } from "@chakra-ui/react";
import { useEffect } from "react";

export function CTAScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Stack
      position="fixed"
      zIndex={2}
      bottom="30px"
      right="30px"
      justifyContent="center"
      alignItems="center"
    >
      <IconButton
        aria-label="behavior"
        bgColor={"blackAlpha.900"}
        variant="solid"
        size="lg"
        icon={<ArrowUpIcon />}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }}
        isRound
      />
    </Stack>
  );
}
