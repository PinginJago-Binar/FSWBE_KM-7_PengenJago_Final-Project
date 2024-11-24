import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { FaCheck } from "react-icons/fa";
import { Button, Carousel } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import SearchBox from "../components/SearchBox/SearchBox";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <SearchBox></SearchBox>
      <p>hai</p>
    </>
  );
}
