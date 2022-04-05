import React, { useState, useEffect } from "react";
import {
  Heading,
  IconButton,
  VStack,
  useColorMode,
  useDisclosure,
  useToast,
  Link,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import {
  FaSun,
  FaMoon,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { FETCH_TODOS_QUERY } from "./api/graphql";

const App = () => {
  // fetch todos
  const { loading, data } = useQuery(FETCH_TODOS_QUERY);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack p={4} minH="100vh" pb={28}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="md"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />

      <Heading
        p="5"
        fontWeight="extrabold"
        size="xl"
        bgGradient="linear(to-l, teal.300, blue.500)"
        bgClip="text"
      >
        Todo List
      </Heading>
      <TodoForm />
      {loading ? <Spinner size="xl" /> : <TodoList todos={data} />}
    </VStack>
  );
};

export default App;
