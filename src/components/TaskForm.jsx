import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(descripcion);
    createTask({
      title: title,
      description: descripcion,
    });
    setDescripcion("");
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={HandleSubmit} className="bg-yellow-200 p-10 mb-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">Crea tu trea</h1>
        <input
          className="bg-slate-200 p-3 w-full mb-2"
          autoFocus
          value={title}
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="bg-slate-200 p-3 w-full mb-2"
          value={descripcion}
          placeholder="Escribe la descripcion"
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
        <button
        className="bg-indigo-500 px-3 py-1 text-white"
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
