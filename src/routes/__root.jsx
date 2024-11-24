import React from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import NavBar from "../components/Navbar/NavBar";
export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <NavBar />
        <Container>
          <Outlet />
        </Container>

        {/* Debugging tool for router */}
        <TanStackRouterDevtools />
        <ToastContainer theme="colored" />
      </>
    );
  },
});
