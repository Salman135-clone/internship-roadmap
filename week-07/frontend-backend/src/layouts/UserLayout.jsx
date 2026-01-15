import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";

const UserLayout = () => {
  return (
    <>
      <div>
        <Headers />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default UserLayout;
