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
    const isAuthRoute = location.pathname.startsWith("/auth");

    return (
      <>
        {isAuthRoute ? (
          <Container>
            {/* Render the component for the admin path */}
            <Outlet />
          </Container>
        ) : (
          <>
            <NavBar />
            <div id="promo-header-container"></div>
            <Container>
              <Outlet />
            </Container>
          </>
        )}

        {/* Debugging tool for router */}
        <TanStackRouterDevtools />
        <ToastContainer theme="colored" />
      </>
    );
  },
});
