// Apollo Client imports
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";

// Chakra UI imports
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import React from "react";

// Chakra UI configs
const config = {
  initialColorMode: "dark",
  useSystemColoMode: false,
};

const theme = extendTheme({
  config,
});

// Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:5000",
  cache: new InMemoryCache(),
});

export default (
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
);
