

import { useState } from "react";

function todo() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);

  function handleSubmit() {
    if (input.trim() === "") return;

    if (editId !== null) {
      setList(
        list.map((item) =>
          item.id === editId ? { ...item, text: input } : item
        )
      );

      setEditId(null);
    } else {
      setList([...list, { id: Date.now(), text: input }]);
    }

    setInput("");
  }

  function handleEdit(item) {
    setInput(item.text);
    setEditId(item.id);
  }

  function handleDelete(id) {
    setList(list.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={handleSubmit}>
        {editId !== null ? "Update" : "Add"}
      </button>

      {list.map((item) => (
        <div key={item.id}>
          <span>{item.text}</span>
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default todo;
