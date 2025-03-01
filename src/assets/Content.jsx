import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
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
      ) : (
        <p className="para">Your list is empty</p>
      )}
    </main>
  );
};
export default Content;
