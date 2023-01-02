import { useState, Fragment, useEffect } from "react";
import {
  Shape,
  Fence,
  Group,
  Button,
  Card,
  Layers,
  Dialog,
  ScrollUnit,
  Stat,
  HelveticaNeue,
  HelveticaNeueBoldS,
  HelveticaNeueBold,
  HelveticaNeueS,
  IconCaretUp,
  IconCaretDown,
  IconStar,
  IconTwitter,
  IconBookmark,
  IconGithub,
  IconHeart,
  List,
  UI,
} from "styled-react";
import { openUrl } from "boost-utils";
import { useBinary } from "hooks-react";
// DEMO
import { diskStorage, TABLE_DEMO, PINS } from "./utils/utils";
import Skeletons from "./features/tutorial/components/Skeletons/Skeletons";
import Products from "./features/shop/components/Products/Products";

import { default as CardTutorial } from "./features/tutorial/components/Card/Card";

// From CSS namespace
import "../../css/dist/css.css";
// import * as Tokens from "../../css/dist/css-tokens.js";
// DEMO
import "./styles/app.css";
import Header from "./features/tutorial/components/FakeHeader/FakeHeader";
import pagemap from "./features/tutorial/components/Map/lib";
import Pin from "./features/tutorial/components/Map/Pin";
// Component demo
import Reorder from "./features/tutorial/components/Reorder/Reorder";
// Not published yet
import Feed from "./features/shop/components/Feed/Feed";
import Paint from "./features/shop/components/Paint/Paint";
// pages
import Forms from "./features/tutorial/pages/forms";
import Groups from "./features/tutorial/pages/groups";
import Periods from "./features/tutorial/pages/periods";

function App() {
  const [mapStep, setMapStep] = useState(0);

  useEffect(() => {
    drawMap();
  }, []);

  const drawMap = () => {
    const el = document.querySelector("#map") as HTMLCanvasElement;
    if (el) {
      pagemap(el, {
        viewport: null,
        styles: {
          "header,footer,section,article": "rgba(0,0,0,0.08)",
          "h1,a": "rgba(0,0,0,0.10)",
          "h2,h3,h4": "rgba(0,0,0,0.08)",
        },
        back: "rgba(0,0,0,0.02)",
        view: "rgba(0,0,0,0.05)",
        drag: "rgba(0,0,0,0.10)",
        interval: null,
      });
    }
  };

  // Panels demos
  const [tab, setTab] = useState(false);
  const [partyType, setType] = useState<"line" | "curve">("line");

  const changePartyType = () => {
    setType(prevP => (prevP === "line" ? "curve" : "line"));
  };

  const { state: landscapeState, actions: landscapeActions } = useBinary("off");
  const { state: portraitState, actions: portraitActions } = useBinary("off");
  const { state: trayState, actions: trayActions } = useBinary("off");

  return (
    <Fragment>
      <h1 translate="no" className="visually-hidden">
        Boost
      </h1>
      <canvas id="map" className="fade-in"></canvas>
      {PINS.map(pin => (
        <Pin pin={pin} step={mapStep} key={pin.step.toString()} />
      ))}
      <main>
        <Header />
        <article className="py $$$ ">
          <Skeletons amount={16} />
        </article>
        <article className="full">
          <Fence
            as="div"
            onChange={(isOn: boolean) => (isOn ? setMapStep(1) : {})}
            options={{
              threshold: 0.2,
            }}
          >
            <Forms />
          </Fence>
        </article>
        <article className="py $$$">
          <Fence
            as="div"
            onChange={(isOn: boolean) => (isOn ? setMapStep(2) : {})}
            options={{
              threshold: 0.9,
            }}
          >
            <Skeletons amount={3} />
          </Fence>
        </article>
        <article className="full">
          <Groups />
        </article>
        <article className="py $$$">
          <Fence
            as="div"
            onChange={(isOn: boolean) => (isOn ? setMapStep(3) : {})}
            options={{
              threshold: 0.9,
            }}
          >
            <Skeletons amount={6} />
          </Fence>
        </article>
        <article className="full">
          <Periods />
        </article>
        <UI.Br />
        <article>
          <Group.Column as="div" gap="var(--gap-3)">
            <Skeletons amount={2} />

            <Stat.Panel
              title="<Stat.Meter/>"
              description="Assign space to quantities"
              subtitle="Details"
              id="stat-meter-panel"
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
                      "https://github.com/polmoneys/boost/blob/master/packages/Stat/get-started.md"
                    ),
                },
              ]}
            >
              <Group.Column
                as="ul"
                options={{
                  DANGEROUS: {
                    marginBottom: "var(--gap-3)",
                  },
                }}
              >
                {diskStorage
                  .reduce((prev, curr) => {
                    if (prev.length === 0) return [curr];
                    // const lastItem = prev.at(-1);
                    const lastItem = prev[prev.length - 1];

                    if (lastItem.color === curr.color) {
                      return [
                        ...prev.filter(
                          (it: any) => it.color !== lastItem.color
                        ),
                        curr,
                      ];
                    } else {
                      return [...prev, curr];
                    }
                  }, [] as any)
                  .map((group: any, pos: number) => (
                    <Group key={pos} as="li" options={{ alignItems: "center" }}>
                      <Shape.Circle size={16} fill={group.color} />
                      <HelveticaNeueS dangerousColor={group.color}>
                        {group.label} {` ${group.amount}`}
                      </HelveticaNeueS>
                    </Group>
                  ))}
              </Group.Column>
              <Stat.Meter
                label=""
                max={140}
                value={140}
                items={diskStorage}
                height="10px"
              />
            </Stat.Panel>
            <Skeletons />
            <Stat.Panel
              title="<Stat.Steps/>"
              description="Display user flow status/progresss"
              id="steps-panel"
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
                      "https://github.com/polmoneys/boost/blob/master/packages/Stat/src/Steps.tsx"
                    ),
                },
              ]}
            >
              <Stat.Steps
                id="steps-test"
                items={[
                  {
                    label: (
                      <HelveticaNeueBold>Step 1 is very hard</HelveticaNeueBold>
                    ),
                    completed: true,
                  },
                  {
                    label: (
                      <HelveticaNeueBold>
                        Step 2 is quite hard
                      </HelveticaNeueBold>
                    ),
                    completed: true,
                  },
                  {
                    label: (
                      <HelveticaNeueBold>
                        Step 3 might be hard
                      </HelveticaNeueBold>
                    ),
                    completed: false,
                  },
                ]}
              />
            </Stat.Panel>
            <Skeletons />
            <Stat.Panel
              title="<Move/>"
              description="Drag and drop"
              id="dnd-panel"
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
                      "https://github.com/polmoneys/boost/blob/master/packages/Move/src/Move.tsx"
                    ),
                },
              ]}
            >
              <Reorder />
            </Stat.Panel>
            {/* <Stat.Panel
              title="Pull To Refresh"
              description="mobile only"
              id="ptr-panel"
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
                      "https://github.com/polmoneys/boost/blob/master/packages/Stat/src/Steps.tsx"
                    ),
                },
              ]}
            >
              <Feed />
            </Stat.Panel>
            <Skeletons amount={2} /> 
            */}
            <Skeletons amount={2} />
            <Stat.Panel
              title="Join React refs"
              description="SVG line or curve"
              id="party-panel"
              subtitle="Details"
              actions={[
                {
                  label: (
                    <Fragment>
                      <HelveticaNeueS>Change joiner </HelveticaNeueS>
                    </Fragment>
                  ),
                  action: () => changePartyType(),
                },
              ]}
            >
              <Paint variant={partyType} />
            </Stat.Panel>
            <Skeletons amount={2} />
          </Group.Column>
        </article>

        <article className="full">
          <Stat.Panel
            title="<Stat.Table/>"
            description="Sticky first cell wrapped in <ScrollUnit/> (resize) "
            subtitle="Details"
            id="table-panel"
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
                    "https://github.com/polmoneys/boost/blob/master/packages/Stat/get-started.md"
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
                    "https://github.com/polmoneys/boost/blob/master/packages/Stat/src/Table.tsx"
                  ),
                className: "ml-auto",
              },
            ]}
          >
            <Stat.Table
              classNames={{
                group: "table-container",
              }}
              label="test label"
              th={TABLE_DEMO[0]}
              tr={TABLE_DEMO[1]}
            />
          </Stat.Panel>
        </article>

        <article className="py $$$">
          <Fence
            as="div"
            onChange={(isOn: boolean) => (isOn ? setMapStep(4) : {})}
            options={{ threshold: 0.9 }}
          >
            <Skeletons amount={8} />
          </Fence>
          <Group.Column as="div" gap="var(--gap-3)">
            <ScrollUnit
              classNames={{
                group: "css-scroll-gallery-wrapper",
                viewport: "css-scroll-gallery",
              }}
            >
              <Products>
                {[...Array(12)].map((k, v) => (
                  <Card as="div" ratio="landscape" key={v}>
                    <Card.Title
                      className="px $"
                      actions={<IconTwitter size="lg" />}
                    >
                      Nº {v} ratio landscape
                    </Card.Title>
                    <Card.Media
                      src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                      height="100%"
                      alt=""
                    />
                  </Card>
                ))}
              </Products>
              <Skeletons amount={4} />

              <Products>
                {[...Array(12)].map((k, v) => (
                  <Card as="div" ratio="portrait" key={v}>
                    <Card.Title
                      className="px $"
                      actions={<IconTwitter size="lg" />}
                    >
                      Nº {v} ratio portrait
                    </Card.Title>
                    <Card.Media
                      src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                      height="100%"
                      alt=""
                    />
                  </Card>
                ))}
              </Products>
              <Skeletons amount={2} />
            </ScrollUnit>

            <Stat.Panel
              id="layers-panel"
              title="<Layers/>"
              subtitle="Details"
              description="No content layout shifts"
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
                      "https://github.com/polmoneys/boost/blob/master/packages/Layers/src/Layers.module.css"
                    ),
                },
              ]}
            >
              <Layers as="ul">
                <Group.Column
                  as="li"
                  aria-hidden={!tab ? true : false}
                  options={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    className="accent -border px $$$"
                    onClick={() => setTab(prev => !prev)}
                  >
                    Show Square
                  </Button>
                  <Shape.Triangle fill="var(--accent-error)" />
                </Group.Column>

                <Group.Column
                  as="li"
                  options={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-hidden={tab ? true : false}
                >
                  <Button
                    className="accent-error -border px $$$"
                    onClick={() => setTab(prev => !prev)}
                  >
                    Show Triangle
                  </Button>
                  <Shape.Square fill="var(--accent)" />
                </Group.Column>
              </Layers>
              <HelveticaNeueS>I will not move/jump</HelveticaNeueS>
            </Stat.Panel>
            <Skeletons />

            <Stat.Panel
              title="<Dialog/> & <Tray/>"
              description="Dialogs with ratio"
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
                      "https://github.com/polmoneys/boost/blob/master/packages/Dialog/get-started.md"
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
                      "https://github.com/polmoneys/boost/blob/master/packages/Dialog/src/Dialog.tsx"
                    ),
                  className: "ml-auto",
                },
              ]}
            >
              <Group as="div">
                <Button
                  className="accent-error px $$ "
                  onClick={() => portraitActions.on()}
                  keyboard={false}
                  nonKeyboard={false}
                >
                  Dialog portrait
                </Button>
                <Button
                  className="accent px $$ "
                  onClick={() => landscapeActions.on()}
                  keyboard={false}
                  nonKeyboard={false}
                >
                  Dialog landscape
                </Button>

                <Button
                  className="color-error ml-auto"
                  onClick={() => trayActions.on()}
                  variant="icon"
                >
                  {trayState === "on" ? (
                    <IconCaretDown size="lg" />
                  ) : (
                    <IconCaretUp size="lg" />
                  )}
                </Button>
              </Group>
            </Stat.Panel>

            <Skeletons amount={2} />
          </Group.Column>
        </article>

        <article className="full">
          <div className="grid -md -stretch gap !!" style={{ width: "100%" }}>
            <Stat.Panel
              title="<List />"
              description="List with slots"
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
                      "https://github.com/polmoneys/boost/blob/master/packages/List/get-started.md"
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
                      "https://github.com/polmoneys/boost/blob/master/packages/List/src/List.tsx"
                    ),
                  className: "ml-auto",
                },
              ]}
            >
              <List label="Example list" className="list-demo">
                <List.Item
                  end={
                    <Button className="accent-error" variant="icon">
                      <IconBookmark stroke="var(--white)" />
                    </Button>
                  }
                >
                  Some serious content
                </List.Item>
                <List.Item
                  end={
                    <Button className="accent-error" variant="icon">
                      <IconBookmark stroke="var(--white)" />
                    </Button>
                  }
                >
                  Some serious content
                </List.Item>
                <List.Item
                  end={
                    <Button className="accent-error" variant="icon">
                      <IconBookmark stroke="var(--white)" />
                    </Button>
                  }
                >
                  Some serious content
                </List.Item>
              </List>
            </Stat.Panel>
            <Stat.Panel title="">
              <List label="Example list" className="list-demo">
                <List.Item
                  description="With sub content"
                  start={
                    <Button variant="icon">
                      <IconHeart stroke="var(--accent-error)" />
                    </Button>
                  }
                >
                  Some serious content
                </List.Item>

                <List.Item
                  description="With sub content"
                  start={
                    <Button variant="icon">
                      <IconHeart stroke="var(--accent-error)" />
                    </Button>
                  }
                >
                  Some serious content
                </List.Item>
                <List.Item
                  description="With sub content"
                  start={
                    <Button variant="icon">
                      <IconHeart stroke="var(--accent-error)" />
                    </Button>
                  }
                >
                  Some serious content
                </List.Item>

                <List.Divider>
                  <HelveticaNeueBoldS>New</HelveticaNeueBoldS>
                </List.Divider>

                <List.Item
                  start={
                    <Button variant="icon">
                      <IconHeart />
                    </Button>
                  }
                  end={
                    <Button variant="icon">
                      <IconBookmark />
                    </Button>
                  }
                >
                  Some serious content
                </List.Item>
                <List.Item
                  start={
                    <Button variant="icon">
                      <IconHeart />
                    </Button>
                  }
                  end={
                    <Button variant="icon">
                      <IconBookmark />
                    </Button>
                  }
                >
                  Some serious content
                </List.Item>
              </List>
            </Stat.Panel>
          </div>
        </article>
        <article className="full">
          <div className="resize">
            <div className="sticky-grid" style={{ width: "100%" }}>
              {[...Array(12)].map((k, v) => (
                <CardTutorial key={v} featured={v === 3} sides={v + 3} />
              ))}
            </div>
          </div>
        </article>
        <article className="py $$$">
          <Fence
            as="div"
            onChange={(isOn: boolean) => (isOn ? setMapStep(5) : {})}
            options={{ threshold: 0.9 }}
          >
            <Skeletons amount={3} />
          </Fence>
        </article>
        <article className="full">
          <div className="tile -lg gap $$$">
            {[...Array(8)].map((k, v) => (
              <div key={v}>
                <Card as="div" ratio="landscape">
                  <Card.Title
                    className="px $"
                    actions={<IconTwitter size="lg" />}
                  >
                    Landscape
                  </Card.Title>
                  <Card.Media
                    src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    height="100%"
                    alt=""
                  />
                </Card>
              </div>
            ))}
          </div>
        </article>
        <article className="py $$$">
          <Skeletons />
        </article>
        <article className="full">
          <div className="tile -lg gap $$$">
            {[...Array(8)].map((k, v) => (
              <div key={v}>
                <Card as="div" ratio="portrait">
                  <Card.Title
                    className="px $"
                    actions={<IconTwitter size="lg" />}
                  >
                    Portrait
                  </Card.Title>
                  <Card.Media
                    src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    height="100%"
                    alt=""
                  />
                </Card>
              </div>
            ))}
          </div>
        </article>
        <article className="py $$$">
          <Fence
            as="div"
            onChange={(isOn: boolean) => (isOn ? setMapStep(6) : {})}
            options={{ threshold: 0.9 }}
          >
            <Skeletons amount={3} />
          </Fence>

          <Group.Column
            as="div"
            gap="var(--gap-3)"
            options={{
              DANGEROUS: {
                paddingBottom: "var(--gap-3)",
              },
            }}
          >
            <Stat.Panel
              title="Hooks"
              description="Reusable headless logic"
              subtitle="Details"
              id="hooks-panel"
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
                      "https://github.com/polmoneys/boost/tree/master/hooks/src"
                    ),
                },
              ]}
            >
              <Group.Column as="ul">
                <Group.ColToRow
                  as="li"
                  className="align-items-center-landscape"
                >
                  <HelveticaNeueBoldS>useBinary</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-landscape-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    Adds toggle logic
                  </HelveticaNeueS>
                </Group.ColToRow>

                <Group.ColToRow
                  as="li"
                  className="align-items-center-landscape"
                >
                  <HelveticaNeueBoldS>useCache</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-landscape-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    Primitive to compose other hooks
                  </HelveticaNeueS>
                </Group.ColToRow>

                <Group.ColToRow
                  as="li"
                  className="align-items-center-landscape"
                >
                  <HelveticaNeueBoldS>useFormFocusout</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-landscape-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    React to user leaving a form
                  </HelveticaNeueS>
                </Group.ColToRow>

                <Group.ColToRow
                  as="li"
                  className="align-items-center-landscape"
                >
                  <HelveticaNeueBoldS>useImageSize</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-landscape-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    Ratio and natural size
                  </HelveticaNeueS>
                </Group.ColToRow>

                <Group.ColToRow
                  as="li"
                  className="align-items-center-landscape"
                >
                  <HelveticaNeueBoldS>useInput</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-landscape-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    Adds YUP validation
                  </HelveticaNeueS>
                </Group.ColToRow>

                {/* <Group as="li" className="align-items-center-landscape">
                  <HelveticaNeueBoldS>useMap</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-landscape-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    Sugar over new Map
                  </HelveticaNeueS>
                </Group> */}

                <Group.ColToRow
                  as="li"
                  className="align-items-center-landscape"
                >
                  <HelveticaNeueBoldS>useNewBrowserTab</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-landscape-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    Like Apple.com chat support
                  </HelveticaNeueS>
                </Group.ColToRow>
                {/* <Group as="li" className="align-items-center-landscape">
                  <HelveticaNeueBoldS>useResizeObserver</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-landscape-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    Measure elements
                  </HelveticaNeueS>
                </Group> */}

                <Group.ColToRow
                  as="li"
                  className="align-items-center-landscape"
                >
                  <HelveticaNeueBoldS>useSelection</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-landscape-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    A leader controls followers
                  </HelveticaNeueS>
                </Group.ColToRow>

                {/* <Group as="li" className="align-items-center-landscape">
                  <HelveticaNeueBoldS>useSet</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-landscape-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    Sugar over new Set
                  </HelveticaNeueS>
                </Group> */}
                <Group.ColToRow
                  as="li"
                  className="align-items-center-landscape"
                >
                  <HelveticaNeueS
                    className="ml-landscape-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    ...more
                  </HelveticaNeueS>
                </Group.ColToRow>
              </Group.Column>
            </Stat.Panel>

            <Skeletons amount={6} />
          </Group.Column>
        </article>
      </main>
      <Dialog
        label="Landscape "
        id="dialog-landscape"
        onClose={() => landscapeActions.off()}
        open={landscapeState === "on"}
        actions={<IconTwitter size="lg" />}
      >
        <Group.Column as="div" className="p $$" gap="var(--gap-2)">
          <HelveticaNeue>
            Lorem ipsum dolor sit amet, no veri erat accusamus vel, cu ubique
            legere philosophia cum. Nisl vide ei eam, est at causae omnium,
            veritus molestiae ex per. Usu noster vituperata ei, laoreet mentitum
            cu nec, at euismod impedit pri. Choro nusquam incorrupte an eos,
            mundi repudiare eum ei, vix in soleat epicurei moderatius. Odio
            saepe cu cum, mea utamur deterruisset in, quem offendit sea ut. Per
            ne mazim partem animal, pro corrumpit forensibus et.
          </HelveticaNeue>

          <Button className="accent px $$" onClick={() => portraitActions.on()}>
            Trigger DialogPortrait
          </Button>
        </Group.Column>
      </Dialog>
      <Dialog
        id="dialog-portrait"
        label="Portrait "
        isLastDialogOpened={portraitState === "on" && landscapeState === "on"}
        ratio="portrait"
        onClose={() => portraitActions.off()}
        open={portraitState === "on"}
      >
        <Group.Column as="div" className="p $$" gap="var(--gap-2)">
          <HelveticaNeue>
            Lorem ipsum dolor sit amet, no veri erat accusamus vel, cu ubique
            legere philosophia cum. Nisl vide ei eam, est at causae omnium,
            veritus molestiae ex per. Usu noster vituperata ei, laoreet mentitum
            cu nec, at euismod impedit pri. Choro nusquam incorrupte an eos,
            mundi repudiare eum ei, vix in soleat epicurei moderatius. Odio
            saepe cu cum, mea utamur deterruisset in, quem offendit sea ut. Per
            ne mazim partem animal, pro corrumpit forensibus et.
          </HelveticaNeue>
        </Group.Column>
      </Dialog>
      <Dialog.Tray
        id="tray-dialog"
        label="Tray "
        open={trayState === "on"}
        onClose={() => trayActions.off()}
        actions={<IconTwitter size="lg" />}
      >
        <Group.Column as="div" className="p $$" gap="var(--gap-2)">
          <HelveticaNeue>
            Lorem ipsum dolor sit amet, no veri erat accusamus vel, cu ubique
            legere philosophia cum. Nisl vide ei eam, est at causae omnium,
            veritus molestiae ex per. Usu noster vituperata ei, laoreet mentitum
            cu nec, at euismod impedit pri. Choro nusquam incorrupte an eos,
            mundi repudiare eum ei, vix in soleat epicurei moderatius. Odio
            saepe cu cum, mea utamur deterruisset in, quem offendit sea ut. Per
            ne mazim partem animal, pro corrumpit forensibus et.
          </HelveticaNeue>
          <HelveticaNeue>
            Lorem ipsum dolor sit amet, no veri erat accusamus vel, cu ubique
            legere philosophia cum. Nisl vide ei eam, est at causae omnium,
            veritus molestiae ex per. Usu noster vituperata ei, laoreet mentitum
            cu nec, at euismod impedit pri. Choro nusquam incorrupte an eos,
            mundi.
          </HelveticaNeue>
          <br />
        </Group.Column>
      </Dialog.Tray>
    </Fragment>
  );
}

export default App;
