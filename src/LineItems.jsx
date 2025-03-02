import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineItems = ({ item, handleCheck, handleDelete }) => {
  return (
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
      <button>
        <FaTrashAlt
          role="button"
          tabIndex="0"
          onClick={() => handleDelete(item.id)}
          aria-label={`Delete ${item.item}`}
        />
      </button>
    </li>
  );
};

export default LineItems;
