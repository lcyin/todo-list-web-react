import React from "react";
import TodoListTable from "./TodoListTable";

interface TodoListProps {
  items: { id: number; title: string; completed: boolean }[];
}

const TodoList = ({ items }: TodoListProps) => {
  return (
    <section className="recent-transactions">
      <header className="flex items-center justyfy-between">
        <h2 className="recent-transactions-label">Todo Lists</h2>
      </header>
      <TodoListTable items={items} />
    </section>
  );
};

export default TodoList;
