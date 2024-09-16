import HeaderBox from "@/components/ui/HeaderBox";
import TodoList from "@/components/ui/TodoList";
import { fetchTodos } from "@/lib/actions/todo.actions";
import React from "react";

const Home = async () => {
  const todoLists = await fetchTodos();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox title="Todo App" subtext="This is a todo app" />
        </header>
        <TodoList items={todoLists} />
      </div>
    </section>
  );
};

export default Home;
