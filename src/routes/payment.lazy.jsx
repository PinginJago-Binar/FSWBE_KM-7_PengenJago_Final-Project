import { createLazyFileRoute } from "@tanstack/react-router";
import BookingForm from "../components/payment/paymentItem";
export const Route = createLazyFileRoute("/payment")({
  component: Index,
});

function Index() {
  return <BookingForm />;
}
