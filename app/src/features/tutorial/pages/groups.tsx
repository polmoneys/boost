import { animate, openUrl, timeline } from "boost-utils";
import { Fragment, useRef, useState } from "react";
import {
  Button,
  Group,
  HelveticaNeue,
  HelveticaNeueBold,
  HelveticaNeueBoldS,
  HelveticaNeueBoldXL,
  HelveticaNeueS,
  HelveticaNeueThin,
  IconBookmark,
  IconCaretDown,
  IconCaretUp,
  IconCheck,
  IconColorPicker,
  IconCross,
  IconGithub,
  IconHeart,
  IconIg,
  IconQuestion,
  IconStar,
  IconTwitter,
  Link,
  Options,
  Popover,
  Shape,
  Stat,
  Trap,
} from "styled-react";

function Groups() {
  const [shapeColor, setShapeColor] = useState("currentColor");
  const [trapped, setTrap] = useState(false);

  // Anims
  const spinRef = useRef(null);
  const spinRef2 = useRef(null);
  const spinRef3 = useRef(null);

  const doAnimate = () =>
    timeline()
      .then(() => {
        console.log("Timeline animation starts");
      })
      .then(() =>
        animate(spinRef, {
          transform: "scale(1.4)",
        })
      )
      .then(() =>
        animate(spinRef2, {
          transform: "scale(1.1)",
          filter: "brightness(1.2)",
        })
      )
      .then(() =>
        animate(spinRef, {
          filter: "brightness(1.4)",
          transform: "rotate(20deg)",
        })
      )
      .then(() =>
        animate(spinRef3, {
          transform: "rotate(360deg)",
          filter: "brightness(1.3)",
        })
      )
      .then(() =>
        animate(spinRef2, {
          filter: "brightness(1.1)",
          transform: "rotate(360deg)",
        })
      )
      .then(() =>
        animate(spinRef, {
          filter: "brightness(1.1)",
          transform: "scale(1) rotate(20)",
        })
      )
      .then(() =>
        animate(spinRef3, {
          transform: "rotate(0)",
          filter: "none",
        })
      )
      .then(() =>
        animate(spinRef2, {
          filter: "none",
          transform: "scale(1.2)",
        })
      )
      .then(() =>
        animate(spinRef, {
          filter: "none",
          transform: "rotate(0)",
        })
      )
      .then(() => {
        console.log("Timeline animation ends");
      });
  return (
    <div className="grid -md -stretch gap !!" style={{ width: "100%" }}>
      <Stat.Panel
        title="<Trap/>"
        description="Open trap and switch focus with keyboard"
        subtitle="Details"
        actions={[
          {
            label: (
              <Fragment>
                <IconStar />
                <HelveticaNeueS>Snippet</HelveticaNeueS>
              </Fragment>
            ),
            action: () =>
              openUrl(
                "https://github.com/polmoneys/boost/blob/master/packages/Trap/get-started.md"
              ),
          },
          {
            label: (
              <Fragment>
                <IconGithub />
                <HelveticaNeueS>Source</HelveticaNeueS>
              </Fragment>
            ),
            action: () =>
              openUrl(
                "https://github.com/polmoneys/boost/blob/master/packages/Trap/src/Trap.tsx"
              ),
            className: "ml-auto",
          },
        ]}
      >
        <Group
          as="div"
          gap="var(--gap-3)"
          options={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            DANGEROUS: {
              marginTop: "var(--gap-1)",
            },
          }}
        >
          <Button className="accent-error px $$" onClick={() => setTrap(true)}>
            Open trap
          </Button>
          <Trap initial={trapped}>
            {trapped && (
              <Fragment>
                <Button variant="icon" className="accent" onClick={() => ({})}>
                  <IconIg size="lg" />
                </Button>
                <Button variant="icon" className="accent" onClick={() => ({})}>
                  <IconTwitter size="lg" />
                </Button>
                <Button variant="icon" className="accent" onClick={() => ({})}>
                  <IconGithub size="lg" />
                </Button>
                <Button
                  variant="icon"
                  className="accent-error"
                  onClick={() => setTrap(false)}
                >
                  <IconCross size="lg" />
                </Button>
              </Fragment>
            )}
          </Trap>
        </Group>
      </Stat.Panel>
      <Stat.Panel
        title="<Group/>"
        description="Group elements with flexbox & grid"
        subtitle="Details"
        actions={[
          {
            label: (
              <Fragment>
                <IconStar />
                <HelveticaNeueS>Snippet</HelveticaNeueS>
              </Fragment>
            ),
            action: () =>
              openUrl(
                "https://github.com/polmoneys/boost/blob/master/packages/Group/get-started.md"
              ),
          },
          {
            label: (
              <Fragment>
                <IconGithub />
                <HelveticaNeueS>Source</HelveticaNeueS>
              </Fragment>
            ),
            action: () =>
              openUrl(
                "https://github.com/polmoneys/boost/blob/master/packages/Group/src/Group.tsx"
              ),
            className: "ml-auto",
          },
        ]}
      >
        <Group.Column as="div" gap="var(--gap-3)">
          <Group as="div" gap="var(--gap-3)">
            <IconStar stroke="var(--accent-error)" variant="solid" />
            <IconStar stroke="var(--accent-error)" variant="solid" />
            <IconStar stroke="var(--accent-error)" variant="solid" />
            <IconStar stroke="var(--accent-error)" variant="solid" />
          </Group>
          <Group.Column as="div" gap="var(--gap-3)">
            <IconHeart stroke="var(--accent-error)" />
            <IconHeart stroke="var(--accent-error)" />
            <IconHeart stroke="var(--accent-error)" />
            <IconHeart stroke="var(--accent-error)" />
          </Group.Column>
        </Group.Column>
      </Stat.Panel>
      <Stat.Panel
        title="<Unit/>"
        description="Adds 'ring' mgmt on interactive elements"
        subtitle="Details"
        actions={[
          {
            label: (
              <Fragment>
                <IconBookmark />
                <HelveticaNeueS>_ring.css</HelveticaNeueS>
              </Fragment>
            ),
            action: () =>
              openUrl(
                "https://github.com/polmoneys/boost/blob/master/css/theme/_ring.css"
              ),
          },
        ]}
      >
        <Group
          as="div"
          options={{
            alignItems: "center",
          }}
        >
          <Button className="accent-error px $$$">Button with ring</Button>
          <Button
            className="accent-error px $$$"
            keyboard={false}
            nonKeyboard={false}
          >
            No ring
          </Button>
          <Link href="" variant="button" className="accent-error px $$$">
            Link with ring
          </Link>
        </Group>
      </Stat.Panel>
      <Stat.Panel
        title="<Font />"
        description="Font factory "
        subtitle="Details"
        actions={[
          {
            label: (
              <Fragment>
                <IconStar />
                <HelveticaNeueS>Snippet</HelveticaNeueS>
              </Fragment>
            ),
            action: () =>
              openUrl(
                "https://github.com/polmoneys/boost/blob/master/packages/Font/get-started.md"
              ),
          },
          {
            label: (
              <Fragment>
                <IconGithub />
                <HelveticaNeueS>Source</HelveticaNeueS>
              </Fragment>
            ),
            action: () =>
              openUrl(
                "https://github.com/polmoneys/boost/blob/master/packages/Font/src/Font.tsx"
              ),
            className: "ml-auto",
          },
        ]}
      >
        <Group as="div" options={{ alignItems: "baseline" }}>
          <HelveticaNeueS>Aa</HelveticaNeueS>
          <HelveticaNeue>Aa</HelveticaNeue>
          <HelveticaNeueThin>Aa</HelveticaNeueThin>
          <HelveticaNeueBoldS>Aa</HelveticaNeueBoldS>
          <HelveticaNeueBold>Aa</HelveticaNeueBold>
          <HelveticaNeueBoldXL>Aa</HelveticaNeueBoldXL>
        </Group>
      </Stat.Panel>
      <Stat.Panel
        title="<Icon />"
        description="Icon factory "
        subtitle="Details"
        actions={[
          {
            label: (
              <Options
                id="color-picker-shape-id"
                classNames={{
                  item: " p $ px $$",
                  selected: "accent p $ px $$",
                }}
                selection={shapeColor}
                triggerOn={
                  <Fragment>
                    <IconColorPicker />
                    <IconColorPicker />
                    <IconColorPicker />
                  </Fragment>
                }
                triggerOff={
                  <Fragment>
                    <IconColorPicker />
                    <IconColorPicker />
                    <IconColorPicker />
                  </Fragment>
                }
                onChange={opt => setShapeColor(opt)}
                options={[
                  {
                    value: "var(--accent)",
                    label: "Accent",
                    id: "option-color-1",
                  },
                  {
                    value: "var(--accent-error)",
                    label: "Error",
                    id: "option-color-2",
                  },
                  {
                    value: "currentColor",
                    label: "default",
                    id: "option-color-3",
                  },
                ]}
              />
            ),
          },
          {
            label: (
              <Fragment>
                <IconGithub />
                <HelveticaNeueS>Source</HelveticaNeueS>
              </Fragment>
            ),
            action: () =>
              openUrl(
                "https://github.com/polmoneys/boost/blob/master/packages/Icon/src/Icon.tsx"
              ),
            className: "ml-auto",
          },
        ]}
      >
        <Group as="div" options={{ wrap: "wrap" }}>
          <IconBookmark stroke={shapeColor} size="sm" />
          <IconCaretDown stroke={shapeColor} size="sm" />
          <IconCaretUp stroke={shapeColor} size="sm" />
          <IconCheck stroke={shapeColor} size="sm" />
          <IconCross stroke={shapeColor} size="sm" />
          <IconHeart stroke={shapeColor} size="sm" />
          <IconTwitter stroke={shapeColor} size="sm" />

          <IconBookmark stroke={shapeColor} />
          <IconCaretDown stroke={shapeColor} />
          <IconCaretUp stroke={shapeColor} />
          <IconCheck stroke={shapeColor} />
          <IconCross stroke={shapeColor} />
          <IconHeart stroke={shapeColor} />
          <IconTwitter stroke={shapeColor} />

          <IconBookmark stroke={shapeColor} size="lg" />
          <IconCaretDown stroke={shapeColor} size="lg" />
          <IconCaretUp stroke={shapeColor} size="lg" />
          <IconCheck stroke={shapeColor} size="lg" />
          <IconCross stroke={shapeColor} size="lg" />
          <IconHeart stroke={shapeColor} size="lg" />
          <IconTwitter stroke={shapeColor} size="lg" />
        </Group>
      </Stat.Panel>
      <Stat.Panel
        title="<Shape />"
        description="Shape factory "
        subtitle="Details"
        actions={[
          {
            label: (
              <Options
                id="color-picker-shape-id"
                classNames={{
                  item: " p $ px $$",
                  selected: "accent p $ px $$",
                }}
                selection={shapeColor}
                triggerOn={
                  <Fragment>
                    <IconColorPicker />
                    <IconColorPicker />
                    <IconColorPicker />
                  </Fragment>
                }
                triggerOff={
                  <Fragment>
                    <IconColorPicker />
                    <IconColorPicker />
                    <IconColorPicker />
                  </Fragment>
                }
                onChange={opt => setShapeColor(opt)}
                options={[
                  {
                    value: "var(--accent)",
                    label: "Accent",
                    id: "option-color-1",
                  },
                  {
                    value: "var(--accent-error)",
                    label: "Error",
                    id: "option-color-2",
                  },
                  {
                    value: "currentColor",
                    label: "default",
                    id: "option-color-3",
                  },
                ]}
              />
            ),
          },
          {
            label: (
              <Fragment>
                <IconGithub />
                <HelveticaNeueS>Source</HelveticaNeueS>
              </Fragment>
            ),
            action: () =>
              openUrl(
                "https://github.com/polmoneys/boost/blob/master/packages/Shape/src/Shape.tsx"
              ),
            className: "ml-auto",
          },
        ]}
      >
        <Group as="div">
          <Shape.Triangle fill={shapeColor} />
          <Shape.Square fill={shapeColor} />
          <Shape sides={5} fill={shapeColor} />
          <Shape sides={6} fill={shapeColor} />
          <Shape.Circle fill={shapeColor} />
        </Group>
      </Stat.Panel>
      <Stat.Panel
        title="<Popover/>"
        description="Pop extra content "
        subtitle="Details"
        actions={[
          {
            label: (
              <Fragment>
                <IconGithub />
                <HelveticaNeueS>Source</HelveticaNeueS>
              </Fragment>
            ),
            action: () =>
              openUrl(
                "https://github.com/polmoneys/boost/blob/master/packages/Popover/src/Popover.tsx"
              ),
          },
        ]}
      >
        <Group as="div">
          <Popover
            trigger={<IconQuestion size="lg" />}
            arrowFill="var(--accent)"
            classNames={{
              group: "accent p $$ ",
            }}
          >
            <Group.Column
              as="div"
              options={{
                alignItems: "center",
                DANGEROUS: {
                  maxWidth: "200px",
                },
              }}
            >
              <Shape sides={6} fill="var(--accent-error)" />

              <HelveticaNeue>
                Lorem ipsun dolor sit amet indisciplinctur gloria at rosae
                pantocrator. Lorem{" "}
                <Link href="https://Google.com" data-tooltip="Search on google">
                  link
                </Link>{" "}
                anae shandy cante oremus.
              </HelveticaNeue>
            </Group.Column>
          </Popover>
        </Group>
      </Stat.Panel>

      <Stat.Panel
        title="Humble animations"
        description="Promise based timeline() with transitionEnd"
      >
        <Group
          className="py $$$$"
          as="div"
          options={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            className="animated-timeline-demo"
            ref={spinRef}
            tabIndex={-1}
            onClick={() => doAnimate()}
          >
            <Shape sides={6} fill="var(--accent-error)" />
          </div>
          <div
            className="animated-demo"
            ref={spinRef2}
            tabIndex={-1}
            onClick={() => doAnimate()}
          >
            <Shape sides={6} fill="var(--accent-error)" />
          </div>
          <div
            className="animated-timeline-demo"
            ref={spinRef3}
            tabIndex={-1}
            onClick={() => doAnimate()}
          >
            <Shape sides={6} fill="var(--accent-error)" />
          </div>
        </Group>
      </Stat.Panel>
    </div>
  );
}

export default Groups;
