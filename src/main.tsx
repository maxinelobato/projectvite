import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react";
import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { CTAHelp } from "./components/Buttons/CTAHelp";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const customTheme = extendTheme({ config });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <CTAHelp />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
