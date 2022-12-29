import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItemTitle, setNewItemTitle, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="title">Item Title</label>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        required
        value={newItemTitle}
        onChange={(e) => setNewItemTitle(e.target.value)}
      />

      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
