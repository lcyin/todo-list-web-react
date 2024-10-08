import React from "react";
import TodoListTable from "./TodoListTable";
import TodoForm from "./TodoForm";

const TodoList = ({ items }: TodoListProps) => {
  return (
    <section className="recent-transactions">
      <header className="flex items-center justyfy-between">
        <h2 className="recent-transactions-label">Todo Lists</h2>
      </header>
      <TodoListTable items={items} />
      <TodoForm />
    </section>
  );
};

export default TodoList;
