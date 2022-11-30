import { Group } from "group-react";
import Skeletons from "../Skeletons/Skeletons";

function Header() {
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
    </article>
  );
}
export default Header;
