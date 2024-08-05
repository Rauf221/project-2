import React from "react";
import { FaTrash, FaPen } from "react-icons/fa";

const DropdownMenu = ({ onEdit, onDelete }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-10">
      <button
        className="flex items-center px-4 py-2 text-red-600 hover:bg-gray-100 w-full text-left"
        onClick={onDelete}
      >
        <FaTrash className="mr-2" /> Delete
      </button>
      <button
        className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
        onClick={onEdit}
      >
        <FaPen className="mr-2" /> Edit
      </button>
    </div>
  );
};

export default DropdownMenu;
