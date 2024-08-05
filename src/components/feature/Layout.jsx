import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {   FaAppStore,
    FaShoppingBag,
    FaChartLine,
    FaUniversity,
    FaBookOpen,
    FaFile,
    FaUser,
    FaBoxOpen,
    FaShoppingCart,
    FaSearch,
    FaBell,
    FaUserCircle,
    FaCog, } from 'react-icons/fa';

const Layout = () => {
  return (
    <>
    <div className="flex h-screen">
      <aside className="w-96 bg-white text-gray-800 flex flex-col border-r">
        <div className="p-4  text-2xl w-[100px] h-[100px] font-bold flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="" viewBox="0 0 512 512"><defs><linearGradient id=":r1:-1" x1="100%" x2="50%" y1="9.946%" y2="50%"><stop offset="0%" stop-color="var(--palette-primary-dark)"></stop><stop offset="100%" stop-color="var(--palette-primary-main)"></stop></linearGradient><linearGradient id=":r1:-2" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="var(--palette-primary-light)"></stop><stop offset="100%" stop-color="var(--palette-primary-main)"></stop></linearGradient><linearGradient id=":r1:-3" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="var(--palette-primary-light)"></stop><stop offset="100%" stop-color="var(--palette-primary-main)"></stop></linearGradient></defs><g fill="var(--palette-primary-main)" fill-rule="evenodd" stroke="none" stroke-width="1"><path fill="url(#:r1:-1)" d="M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"></path><path fill="url(#:r1:-2)" d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"></path><path fill="url(#:r1:-3)" d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"></path></g></svg>
        </div>
        <nav className="flex-1 p-4 pl-5 text-2xl">
          <ul>
            <li className="mb-4">
              <Link to="/app" className="flex items-center text-gray-600 hover:text-green-600 hover:bg-green-100 p-2 rounded">
                <FaAppStore className="mr-4" /> App
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/ecommerce" className="flex items-center text-gray-600 hover:text-green-600 hover:bg-green-100 p-2 rounded">
                <FaShoppingBag className="mr-4" /> Ecommerce
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/analytics" className="flex items-center text-gray-600 hover:text-green-600 hover:bg-green-100 p-2 rounded">
                <FaChartLine className="mr-4" /> Analytics
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/banking" className="flex items-center text-gray-600 hover:text-green-600 hover:bg-green-100 p-2 rounded">
                <FaUniversity className="mr-4" /> Banking
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/booking" className="flex items-center text-gray-600 hover:text-green-600 hover:bg-green-100 p-2 rounded">
                <FaBookOpen className="mr-4" /> Booking
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/file" className="flex items-center text-gray-600 hover:text-green-600 hover:bg-green-100 p-2 rounded">
                <FaFile className="mr-4" /> File
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/course" className="flex items-center text-gray-600 hover:text-green-600 hover:bg-green-100 p-2 rounded ">
                <FaBookOpen className="mr-4" /> Course
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/user" className="flex items-center text-gray-600 hover:text-green-600 hover:bg-green-100 p-2 rounded">
                <FaUser className="mr-4" /> User
              </Link>
              <ul className="ml-4 mt-2 text-gray-600">
                <li className="mb-2">
                  <Link to="/user/profile" className="flex items-center hover:text-green-600  hover:bg-green-100 p-2 rounded">
                    Profile
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/user/cards" className="flex items-center hover:text-green-600  hover:bg-green-100 p-2 rounded">
                    Cards
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/user/list" className="flex items-center hover:text-green-600  hover:bg-green-100 p-2 rounded">
                    List
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <Link to="/product" className="flex items-center text-gray-600 hover:text-green-600">
                <FaBoxOpen className="mr-2" /> Product
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/order" className="flex items-center text-gray-600 hover:text-green-600">
                <FaShoppingCart className="mr-2" /> Order
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-4">
        <div className="flex justify-between items-center p-4 bg-white shadow rounded-lg mb-6">
          <div className="flex items-center">
            <span className="text-2xl font-bold">Team 1</span>
            <span className="ml-2 bg-gray-200 text-gray-600 px-2 py-1 rounded">Free</span>
          </div>
          <div className="flex items-center  space-x-4">
            <FaSearch className="text-gray-600 text-2xl" />
            <div className="text-gray-600 text-2xl">
                <img src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/flagpack/gb.webp" className='rounded-lg' alt="" />
            </div>
            <div className="relative w-10 h-10">
              <span className="absolute top-0 right-0  bg-red-600 text-white rounded-full px-1">4</span>
              <FaBell className="text-gray-600 bottom-0 h-[100%] text-2xl" />
            </div>
            <FaUserCircle className="text-gray-600 text-2xl" />
            <FaCog className="text-gray-600 text-2xl animate-spin" />
            <img src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-25.webp" alt="Profile" className="w-10 h-10 rounded-full" />
          </div>
        </div>
        <Outlet />
      </main>
    </div>
    </>
  );
};

export default Layout;
