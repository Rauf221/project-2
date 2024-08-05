import React, { useState } from "react";
import { useQuery } from "react-query";
import { FaSearch, FaPlus, FaPen, FaCheckSquare } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import ReactPaginate from "react-paginate";
import Modal from "../modal/Modal"

const fetchUsers = async () => {
  const res = await fetch("http://localhost:3001/users");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

const UserList = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const usersPerPage = 10;

  const { data, error, isLoading } = useQuery("users", fetchUsers);

  const statusCounts = data?.reduce(
    (acc, user) => {
      acc[user.status] = (acc[user.status] || 0) + 1;
      return acc;
    },
    { All: data?.length || 0 }
  );

  const filteredUsers = data
    ?.filter((user) => {
      if (filter === "All") return true;
      return user.status === filter;
    })
    .filter((user) => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    }) || [];

  const pageCount = Math.ceil(filteredUsers.length / usersPerPage);
  const offset = currentPage * usersPerPage;
  const currentPageUsers = filteredUsers.slice(offset, offset + usersPerPage) || [];

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedUsers(currentPageUsers.map((user) => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (id) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter((userId) => userId !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  const openModal = (user) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
  };

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4">Error: {error.message}</div>;

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">List</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
          <FaPlus className="mr-2" /> New user
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-3">
          {["All", "Active", "Pending", "Banned", "Rejected"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1 rounded-full ${
                filter === status ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {status} ({statusCounts?.[status] || 0})
            </button>
          ))}
        </div>
        <div className="flex space-x-3 items-center">
          <select className="border border-gray-300 px-4 py-2 rounded" defaultValue="">
            <option value="">Role</option>
            {/* Add role options here */}
          </select>
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 border border-gray-300 px-4 py-2 rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead className={selectAll ? "hidden" : ""}>
          <tr>
            <th className="py-2 px-4 border-b">
              <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
            </th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Phone number</th>
            <th className="py-2 px-4 border-b">Company</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">
              <FaCheckSquare />
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPageUsers.map((user) => (
            <tr key={user.id}>
              <td className="py-4 px-4 border-b">
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleSelectUser(user.id)}
                />
              </td>
              <td className="py-4 px-4 border-b flex items-center">
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full mr-2"
                />
                {user.name}
              </td>
              <td className="py-4 px-4 border-b">{user.phone}</td>
              <td className="py-4 px-4 border-b">{user.company}</td>
              <td className="py-4 px-4 border-b">{user.role}</td>
              <td className="py-4 px-4 border-b">
                <span
                  className={`px-2 py-1 rounded-full ${
                    user.status === "Active"
                      ? "bg-green-200 text-green-800"
                      : user.status === "Pending"
                      ? "bg-yellow-200 text-yellow-800"
                      : user.status === "Banned"
                      ? "bg-red-200 text-red-800"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="py-4 px-4 border-b flex items-center justify-center ">
                <button className="text-xl pr-4" onClick={() => openModal(user)}>
                  <FaPen />
                </button>
                <button className="text-xl">
                  <SlOptionsVertical />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={({ selected }) => setCurrentPage(selected)}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page"}
          pageLinkClassName={"page-link"}
          previousClassName={"page"}
          nextClassName={"page"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          breakClassName={"page"}
          breakLinkClassName={"page-link"}
        />
      </div>
      {isModalOpen && <Modal user={currentUser} closeModal={closeModal} />}
    </div>
  );
};

export default UserList;
