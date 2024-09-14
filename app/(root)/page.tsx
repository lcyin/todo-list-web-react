import HeaderBox from "@/components/ui/HeaderBox";
import TodoList from "@/components/ui/TodoList";
import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox title="Todo App" subtext="This is a todo app" />
        </header>
        <TodoList
          items={[
            { id: 1, title: "Learn React", completed: true },
            { id: 2, title: "Learn Next.js", completed: false },
            { id: 3, title: "Build a todo app", completed: false },
          ]}
        />
      </div>
    </section>
  );
};

export default Home;
