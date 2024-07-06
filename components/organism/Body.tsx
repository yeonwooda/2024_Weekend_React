import { useState } from "react";
import AddButton from "../atom/AddButton";
import TodoItem, { TodoItemProps } from "../molecule/TodoItem";

const Body = () => {
  const [todoitems, setTodoitems] = useState<TodoItemProps[]>([
    { contents: "축구하기" },
    { contents: "유로2024보기" },
    { contents: "유튜브 보기" },
  ]);
  return (
    <div className="App">
      {todoitems.map((v, i) => (
        <TodoItem key={i} {...v} />
      ))}
      <AddButton />
    </div>
  );
};
export default Body;
