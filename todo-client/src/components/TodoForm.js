import { useState } from "react";
import { Button, HStack, Input, useToast } from "@chakra-ui/react";

const TodoForm = ({ addTodo }) => {
  const toast = useToast();
  const [todo, setTodo] = useState("");
  const [statusInput, setStatusInput] = useState(true);
  const handleSubmit = () => {};

  if (todo && !statusInput) {
    setStatusInput(true);
  }
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="4" mb="4">
        <Input
          h="46"
          borderColor={!statusInput ? "red.300" : "transparent"}
          variant="filled"
          placeholder="Enter todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button colorScheme="blue" px="8" pl="10" pr="10" h="46" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
};

export default TodoForm;
