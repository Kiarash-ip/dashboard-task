import React, { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []);

  return <div>dashboard</div>;
}
