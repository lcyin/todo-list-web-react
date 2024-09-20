"use server";

export const fetchTodos: () => Promise<
  {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  }[]
> = async () => {
  try {
    // todo: replcae to todo-list-express api
    const response = await fetch("http://localhost:3000/todos");
    return response.json();
  } catch (error) {
    console.error("Error", error);
  }
};

export const createTodo: (todoDto: {
  title: string;
  description: string;
}) => Promise<{
  id: number;
  title: string;
  description: string;
  completed: boolean;
}> = async ({ title, description }) => {
  try {
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    console.log("response", response);
    return response.json();
  } catch (error) {
    console.error("Error", error);
  }
};
