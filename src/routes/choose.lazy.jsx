import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import ChooseFlight from "../components/ChooseFlight/ChooseFlight";
export const Route = createLazyFileRoute("/choose")({
  component: Choose,
});

function Choose() {
  return (
    <>
      <ChooseFlight />
    </>
  );
}
