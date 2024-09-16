"use server";

export const fetchTodos: () => Promise<
  {
    id: number;
    title: string;
    completed: boolean;
  }[]
> = async () => {
  try {
    // todo: replcae to todo-list-express api
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
  } catch (error) {
    console.error("Error", error);
  }
};
