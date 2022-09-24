import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { CTAHelp } from "./components/Buttons/CTAHelp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <CTAHelp />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);