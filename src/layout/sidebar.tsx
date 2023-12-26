import React, { useLayoutEffect } from "react";
import useStore from "../store/store";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { mobile, logout } = useStore((state) => state);
  const navigate = useNavigate();

  function logoutHandler() {
    logout();
    navigate("/login");
  }

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <ul className="space-y-2">
            <li>
              <h3 className="text-white text-center font-medium text-xl mb-2">
                {mobile}
              </h3>
              <button
                className="w-full text-center border border-gray-400 p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-white"
                onClick={logoutHandler}
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
