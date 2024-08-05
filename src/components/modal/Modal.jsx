import React from "react";

const Modal = ({ user, closeModal }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
      <h2 className="text-2xl mb-4">Quick Update</h2>
      <div className="mb-4 text-sm text-blue-600">Account is waiting for confirmation</div>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Status</label>
            <select className="w-full border border-gray-300 p-2 rounded" defaultValue={user.status}>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Banned">Banned</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Email address</label>
            <input
              type="email"
              defaultValue={user.email}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Full name</label>
            <input
              type="text"
              defaultValue={user.name}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              defaultValue={user.country}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone number</label>
            <input
              type="text"
              defaultValue={user.phone}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              defaultValue={user.city}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">State/region</label>
            <input
              type="text"
              defaultValue={user.state}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Zip/code</label>
            <input
              type="text"
              defaultValue={user.zip}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              defaultValue={user.address}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Company</label>
            <input
              type="text"
              defaultValue={user.company}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Role</label>
            <input
              type="text"
              defaultValue={user.role}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end space-x-4">
          <button
            type="button"
            onClick={closeModal}
            className="px-4 py-2 border border-gray-300 rounded"
          >
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Modal;
