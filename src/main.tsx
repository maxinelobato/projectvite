import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";
import React from "react";
import * as ReactDOM from "react-dom/client";
import { CTAHelp } from "./components/Buttons/CTAHelp";
import App from "./App";
import "./index.css";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CTAHelp />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
