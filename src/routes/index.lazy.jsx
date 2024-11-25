import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { FaCheck } from "react-icons/fa";
import { Button, Carousel, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

import PromoHeader from "../components/PromoHeader/PromoHeader";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <PromoHeader />
    </>
  );
}
