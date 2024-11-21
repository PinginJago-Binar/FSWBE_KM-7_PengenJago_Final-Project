import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { FaCheck } from "react-icons/fa";
import { Button, Carousel } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <p>hai</p>
    </>
  );
}
