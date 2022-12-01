import { Group } from "group-react";
import { useNewBrowserTab } from "hooks-react";
import Skeletons from "../Skeletons/Skeletons";
import logo from "../../../metadata/artwork/logo.png";
import { Button } from "button-react";

function Header() {
  const trigger = useNewBrowserTab({
    url: "https://polmoneys.com",
    title: "pol moneys",
    width: 700,
    config: {
      menubar: "yes",
      location: "yes",
      resizable: "yes",
      scrollbars: "yes",
      status: "yes",
    },
  });
  return (
    <article className="fake-header full">
      <Group as="div">
        <div style={{ width: "30%", paddingRight: "var(--gap-3)" }}>
          <Skeletons />
        </div>
        <div style={{ width: "50%" }}>
          <Skeletons />
        </div>
        <div style={{ width: "10%", marginLeft: "auto" }}>
          <Skeletons />
        </div>
      </Group>
      <Group as="div">
        <div style={{ width: "80%" }}>
          <Skeletons />
        </div>
        <div style={{ width: "10%", marginLeft: "auto" }}>
          <Skeletons />
        </div>
      </Group>

      <Skeletons />
      <Button
        className="logo"
        onClick={trigger}
        keyboard={false}
        nonKeyboard={false}
      >
        <svg width="108" height="126" viewBox="0 0 108 126" aria-hidden="true">
          <path
            fill="var(--accent)"
            d="M41.514 23.187L41.38 44.33l-7.002-11.4-7.004-11.404-12.164-.134L3 21.302v83.493h24.24l.09-21.725.135-21.772 7.092 11.581 7.047 11.627v39.143h24.24V84.191l7.093-11.537 7.047-11.536.135 21.86.09 21.817H104V21.302H79.984l-6.958 11.447L66.07 44.15l-.135-21.097L65.845 2h-24.24l-.09 21.187z"
          />
        </svg>
      </Button>
    </article>
  );
}
export default Header;
