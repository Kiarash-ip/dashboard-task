import React, { useEffect } from "react";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";
import useStore from "../store/store";

export default function Layout() {
  const { initStates } = useStore((state) => state);

  useEffect(() => {
    initStates();
  }, []);

  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
