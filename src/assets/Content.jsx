import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
const Content = () => {
  const [items, setItems] = useState([
    { id: 1, checked: true, name: "Learn coding" },
    { id: 2, checked: false, name: "Play cricket" },
    { id: 3, checked: false, name: "Read about AI" },
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setList("todo_list", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const deleteItems = items.filter((item) => item.id !== id);
    setItems(deleteItems);
    localStorage.setList("todo_list", JSON.stringify(listItems));
  };
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="list" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            ></input>
            <label
              className={item.checked ? "cut " : null}
              onDoubleClick={() => handleCheck(item.id)}
            >
              {item.name}
            </label>
            <button onClick={() => handleDelete(item.id)}>
              <FaTrashAlt role="button" tabIndex="0" />
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Content;
