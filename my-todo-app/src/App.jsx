import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState({
    id: "",
    name: "",
  });
  const [todoList, setTodoList] = useState([
    {
      id: "",
      name: "",
    },
  ]);

  const handleGetTodo = (value) => {
    const randomId = Math.floor(Math.random(1000) * 10000);

    const todo = {
      id: randomId,
      name: value,
    };

    setTodo(todo);
  };

  const handleSubmit = () => {
    setTodoList((prev) => {
      return [...prev, todo].filter((todo) => todo && todo.name.trim() !== "");
    });

    setTodo({
      id: "",
      name: "",
    });
  };

  const handleDelete = (id) => {
    console.log(id + " was deleted");
    setTodoList(todoList.filter((todo) => todo && todo.id !== id));
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => handleGetTodo(e.target.value)}
          value={todo.name}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>

      <div>
        <ul>
          {todoList
            .filter((todo) => todo && todo.name.trim() !== "")
            .map((todo, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    gap: "30px",
                  }}
                  key={index}
                >
                  <li>{todo.name}</li>
                  <div
                    style={{
                      cursor: "pointer",
                      color: "red",
                    }}
                    onClick={() => handleDelete(todo.id)}
                  >
                    X
                  </div>
                </div>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default App;
