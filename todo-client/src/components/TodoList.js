import React from "react";
import {
  HStack,
  Box,
  VStack,
  IconButton,
  Flex,
  Button,
  Text,
  StackDivider,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import img from "../images/empty.svg";

const TodoList = ({ todos: { getTodos } }) => {
  if (!getTodos.length) {
    return (
      <>
        <Box maxW="80%">
          <Image
            mt="20px"
            w="98%"
            maxW="350"
            src={img}
            alt="No Todos found :("
          />
        </Box>
      </>
    );
  }
  return (
    <>
      <VStack
        divider={<StackDivider />}
        border="gray.100"
        borderWidth="2px"
        p="5"
        borderRadius="lg"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
        alignItems="stretch"
      >
        {getTodos.map((todo) => (
          <HStack key={todo.id} opacity={todo.isDone == true ? "0.2" : "1"}>
            <Text
              w="100%"
              p="8px"
              borderRadius="lg"
              cursor="pointer"
              onClick={() => console.log("clicked")}
            >
              {todo.name}
            </Text>
          </HStack>
        ))}
      </VStack>
    </>
  );
};

export default TodoList;
