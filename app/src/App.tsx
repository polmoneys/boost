import {
  useState,
  Fragment,
  useEffect,
  useMemo,
  useCallback,
  ChangeEvent,
  useRef,
} from "react";
import { Sticky } from "sticky-react";
import { Shape } from "shape-react";
import { Fence } from "fence-react";
import { Group } from "group-react";
import { Link } from "link-react";
import { Button } from "button-react";
import { Trap } from "trap-react";
import { Input } from "input-react";
import { Card } from "card-react";
import { Layers } from "layers-react";
import { Track } from "track-react";
import { Radio } from "radio-react";
import { Options } from "options-react";
import { Dialog } from "dialog-react";
import { Checkbox } from "checkbox-react";
import { Popover } from "popover-react";
import { ScrollUnit } from "scroll-unit-react";
import { Stat } from "stat-react";
import {
  HelveticaNeue,
  HelveticaNeueBoldXL,
  HelveticaNeueBoldS,
  HelveticaNeueBold,
  HelveticaNeueS,
  HelveticaNeueMedium,
  HelveticaNeueThin,
} from "font-react";
import {
  IconCheck,
  IconCross,
  IconCaretUp,
  IconCaretDown,
  IconDash,
  IconSlash,
  IconStar,
  IconTwitter,
  IconIg,
  IconQuestion,
  IconBookmark,
  IconEmail,
  IconGithub,
  IconHeart,
  IconPin,
  IconDotsY,
  IconDotsX,
  IconColorPicker,
} from "icon-react";
import {
  useBinary,
  useInput,
  useSelection,
  useNewBrowserTab,
  useFormFocusout,
  useSet,
  useMap,
  useResizeObserver,
} from "hooks-react";
import { VALIDATE_USERNAME } from "../../hooks/src/useInput";
// DEMO
import {
  targets,
  tags,
  StatusMachine,
  USESELECTION_DEMO,
  diskStorage,
  TABLE_DEMO,
  OPTIONS_DEMO,
  PINS,
} from "./snippets/utils";
import Skeletons from "./features/tutorial/components/Skeletons/Skeletons";
import Products from "./features/shop/components/Products/Products";
import { default as CardTutorial } from "./features/tutorial/components/Card/Card";
// import Snippet from "./features/tutorial/components/Snippet/Snippet";

// From CSS namespace
import "../../css/dist/css.css";
import "../../css/dist/css-tokens.js";

// DEMO
import "./styles/app.css";
import Map from "./features/tutorial/components/Map/Map";
import pagemap from "./features/tutorial/components/Map/lib";
import Pin from "./features/tutorial/components/Map/Pin";

function App() {
  const [mapStep, setMapStep] = useState(0);

  const [trapped, setTrap] = useState(false);
  const [valueSearch, onChangeSearch] = useState("");
  const [publishStatus, setStatus] = useState<StatusMachine>("draft");
  const [{ output, all, mixed }, { onFollowerChange, onLeadChange }] =
    useSelection(USESELECTION_DEMO);
  const [value, onChange, error] = useInput({
    initial: "",
    validation: VALIDATE_USERNAME,
  });
  const [tab, setTab] = useState(false);
  const [size, setSize] = useState("xs");
  const { state: landscapeState, actions: landscapeActions } = useBinary("off");
  const { state: portraitState, actions: portraitActions } = useBinary("off");
  const { state: trayState, actions: trayActions } = useBinary("off");
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
  const ref = useRef(null);
  // useResizeObserver({
  //   ref,
  //   onResize: () => drawMap(),
  // });
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

  const [theme, setTheme] = useState("default");
  const [shapeColor, setShapeColor] = useState("currentColor");

  const scrollToHooksPanel = () => {
    const el = document.querySelector("#hooks-panel");
    console.log({ el });
    if (el) {
      el.scrollIntoView();
    }
  };

  const openUrl = (to: string) => window.open(to, "_blank");
  return (
    <Fragment>
      <canvas id="map"></canvas>
      {PINS.map(pin => (
        <Pin pin={pin} step={mapStep} key={pin.step.toString()} />
      ))}
      <main>
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
        <article className="py $$$">
          <Group as="div" options={{ direction: "column" }}>
            <Skeletons amount={16} />
          </Group>
        </article>

        <article className="full">
          <Fence
            as="div"
            onChange={(isOn: boolean) => (isOn ? setMapStep(1) : {})}
            options={{
              threshold: 0.2,
            }}
          >
            <div className="grid -md -stretch gap !!" style={{ width: "100%" }}>
              <Stat.Panel
                id="input-panel"
                title="<Input />"
                subtitle="Details"
                description="Validation with useInput hook"
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
                        "https://github.com/polmoneys/boost/blob/master/packages/Input/get-started.md"
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
                        "https://github.com/polmoneys/boost/blob/master/packages/Input/src/Input.tsx"
                      ),
                    className: "ml-auto",
                  },
                ]}
              >
                <Input
                  value={value}
                  onChange={e => {
                    const nextValue = e.target.value;
                    onChange(nextValue);
                  }}
                  classNames={{
                    input: "accent-error",
                  }}
                  id="test-error-input"
                  errorElementId="test-error-input-error"
                  label="Username"
                  placeholder="Type username"
                  onChangeValue={val => console.log(val)}
                />
                {error !== undefined && (
                  <HelveticaNeueBold
                    className="color-error text-left"
                    aria-live="polite"
                  >
                    <IconCross size="lg" />
                    <span id="test-error-input-error">
                      {error !== undefined ? error : ""}
                    </span>
                  </HelveticaNeueBold>
                )}
              </Stat.Panel>
              <Stat.Panel
                id="input-search-panel"
                title="<Input variant='search'/>"
                description="A regular <Input/> with sugar"
                subtitle="Details"
              >
                <Input.Search
                  id="test-input-search"
                  value={valueSearch}
                  classNames={{
                    group: "full-width",
                    input: "full-width ",
                  }}
                  label="Username"
                  placeholder="Search name"
                  onChangeValue={val => onChangeSearch(val)}
                />
              </Stat.Panel>
              <Stat.Panel
                id="select-panel"
                title="<Options />"
                description="A select like"
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
                        "https://github.com/polmoneys/boost/blob/master/packages/Options/get-started.md"
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
                        "https://github.com/polmoneys/boost/blob/master/packages/Options/src/Options.tsx"
                      ),
                    className: "ml-auto",
                  },
                ]}
              >
                <Options
                  id="test-options-id"
                  classNames={{
                    group: "color-error",
                    button: "color-error -hover",
                    item: "color-error -hover p $ px $$",
                    selected: "color-accent -hover p $ px $$",
                  }}
                  selection={size}
                  triggerOn={<IconDotsY size="lg" />}
                  triggerOff={<IconDotsY size="lg" />}
                  onChange={opt => setSize(opt)}
                  options={OPTIONS_DEMO}
                />
              </Stat.Panel>

              <Stat.Panel
                id="radio-a-panel"
                title="<Radio.Group />"
                description="Radio inherits color from <Radio.Group/>"
                subtitle="Details"
                actions={[
                  {
                    label: (
                      <Options
                        id="color-picker-id"
                        classNames={{
                          // group: "color-error",
                          // button: "color-error -hover",
                          item: " p $ px $$",
                          selected: "accent p $ px $$",
                        }}
                        selection={theme}
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
                        onChange={opt => setTheme(opt)}
                        options={[
                          {
                            value: "color-accent",
                            label: "Accent",
                            id: "option-color-1",
                          },
                          {
                            value: "color-error",
                            label: "Error",
                            id: "option-color-2",
                          },
                          {
                            value: "default",
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
                        "https://github.com/polmoneys/boost/blob/master/packages/Radio/src/RadioGroup.tsx"
                      ),
                    className: "ml-auto",
                  },
                ]}
              >
                <Radio.Group
                  initial={publishStatus}
                  onChange={(selection: string) =>
                    setStatus(selection as StatusMachine)
                  }
                  gap="1em"
                  className={theme}
                >
                  <Radio name="draft" value="draft" id="radio-draft" />
                  <Radio name="live" value="live" id="radio-live" />
                  <Radio name="unknown" value="unknown" id="radio-unknown" />
                  <Radio
                    name="published"
                    value="published"
                    id="radio-published"
                  />
                </Radio.Group>
              </Stat.Panel>

              <Stat.Panel
                id="radio-b-panel"
                title="<Radio />"
                description="Style with CSS currentColor"
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
                        "https://github.com/polmoneys/boost/blob/master/packages/Radio/get-started.md"
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
                        "https://github.com/polmoneys/boost/tree/master/packages/Radio/src"
                      ),
                    className: "ml-auto",
                  },
                ]}
              >
                <Radio.Group
                  initial={publishStatus}
                  onChange={(selection: string) =>
                    setStatus(selection as StatusMachine)
                  }
                  gap="1em"
                >
                  <Radio name="draft" value="draft" id="radio-draft" />
                  <Radio name="live" value="live" id="radio-live" />
                  <Radio
                    name="unknown"
                    value="unknown"
                    id="radio-unknown"
                    classNames={{
                      group: "color-error",
                      checked: "color-error",
                    }}
                  />
                  <Radio
                    name="published"
                    value="published"
                    id="radio-published"
                    classNames={{
                      group: "color-accent",
                      checked: "color-accent",
                    }}
                  />
                </Radio.Group>
              </Stat.Panel>

              <Stat.Panel
                id="radio-c-panel"
                title="<Radio.Label />"
                description="As tiles"
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
                        "https://github.com/polmoneys/boost/blob/master/packages/Radio/src/RadioLabel.tsx"
                      ),
                  },
                ]}
              >
                <Radio.Group
                  initial={publishStatus}
                  onChange={(selection: string) =>
                    setStatus(selection as StatusMachine)
                  }
                  gap="3em"
                  renderLabel={({
                    checked,
                    radioLabel,
                  }: {
                    checked: boolean;
                    radioLabel: string;
                  }) => (
                    <Fragment>
                      {checked ? (
                        <IconCheck size="lg" />
                      ) : (
                        <IconCross size="lg" />
                      )}
                      {radioLabel}
                    </Fragment>
                  )}
                >
                  <Radio.Label
                    name="draft"
                    value="draft"
                    id="radio-draft"
                    classNames={{
                      group: "accent",
                    }}
                  />
                  <Radio.Label
                    name="live"
                    value="live"
                    id="radio-live"
                    classNames={{
                      group: "accent-error",
                    }}
                  />
                  <Radio.Label
                    name="unknown"
                    value="unknown"
                    id="radio-unknown"
                    classNames={{
                      group: "color-error",
                      input: "color-error",
                      checked: "color-error",
                    }}
                  />
                  <Radio.Label
                    name="published"
                    value="published"
                    id="radio-published"
                    classNames={{
                      group: "color-accent",
                      input: "color-accent",
                      checked: "color-accent",
                    }}
                  />
                </Radio.Group>
              </Stat.Panel>

              <Stat.Panel
                id="checkbox-a-panel"
                title="<Checkbox/>"
                subtitle="Details"
                description="Indeterminate state, inherits currentColor from parent"
                actions={[
                  {
                    label: (
                      <Options
                        id="color-picker-id"
                        classNames={{
                          // group: "color-error",
                          // button: "color-error -hover",
                          item: " p $ px $$",
                          selected: "accent p $ px $$",
                        }}
                        selection={theme}
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
                        onChange={opt => setTheme(opt)}
                        options={[
                          {
                            value: "color-accent",
                            label: "Accent",
                            id: "option-color-1",
                          },
                          {
                            value: "color-error",
                            label: "Error",
                            id: "option-color-2",
                          },
                          {
                            value: "default",
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
                        "https://github.com/polmoneys/boost/tree/master/packages/Checkbox"
                      ),
                    className: "ml-auto",
                  },
                ]}
              >
                <Group
                  as="div"
                  gap=".5em"
                  options={{ direction: "column" }}
                  className={theme}
                >
                  <Checkbox
                    isMixed={mixed === "mixed"}
                    checked={mixed !== "mixed" && mixed === true}
                    label={mixed === "mixed" ? "Some " : all ? "All" : " None"}
                    name="parent"
                    value="parent"
                    id="parent-checkbox-test"
                    onChange={ev => onLeadChange()}
                  />

                  {Object.entries(output).map(([value, state]) => (
                    <div key={value}>
                      <Checkbox
                        name={value.toString()}
                        label={value.toString()}
                        id={`${value.toString()}-test-checkbox`}
                        checked={state as boolean}
                        value={value}
                        onChange={ev => onFollowerChange(ev)}
                      />
                    </div>
                  ))}
                </Group>
              </Stat.Panel>
              <Stat.Panel
                id="checkbox-b-panel"
                title="<Checkbox/>"
                subtitle="Details"
                description="Use it with useSelection hook"
                actions={[
                  {
                    label: (
                      <Fragment>
                        <IconBookmark />
                        <HelveticaNeueS>Scroll to Hooks</HelveticaNeueS>
                      </Fragment>
                    ),
                    action: () => scrollToHooksPanel(),
                  },
                ]}
              >
                <Group as="div" gap=".5em" options={{ direction: "column" }}>
                  <Checkbox
                    isMixed={mixed === "mixed"}
                    checked={mixed !== "mixed" && mixed === true}
                    label={mixed === "mixed" ? "Some " : all ? "All" : " None"}
                    name="parent"
                    value="parent"
                    id="parent-checkbox-test"
                    onChange={ev => onLeadChange()}
                  />

                  {Object.entries(output).map(([value, state]) => (
                    <div key={value}>
                      <Checkbox
                        name={value.toString()}
                        label={value.toString()}
                        id={`${value.toString()}-test-checkbox`}
                        checked={state as boolean}
                        value={value}
                        onChange={ev => onFollowerChange(ev)}
                        classNames={{
                          group: "color-error",
                        }}
                      />
                    </div>
                  ))}
                </Group>
              </Stat.Panel>

              <Stat.Panel
                title="<Stat.Surface/>"
                description="Playful x/y values for advanced users"
                id="surface-panel"
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
                        "https://github.com/polmoneys/boost/blob/master/packages/Stat/src/Surface.tsx"
                      ),
                    className: "ml-auto",
                  },
                ]}
              >
                <Stat.Surface
                  initialValue={[30, 70]}
                  onChange={(points: any) => console.log(points)}
                />
              </Stat.Panel>
            </div>
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
                <Button
                  className="accent-error px $$"
                  onClick={() => setTrap(true)}
                >
                  Open trap
                </Button>
                <Trap initial={trapped}>
                  {trapped && (
                    <Fragment>
                      <Button
                        variant="icon"
                        className="accent"
                        onClick={() => ({})}
                      >
                        <IconIg size="lg" />
                      </Button>
                      <Button
                        variant="icon"
                        className="accent"
                        onClick={() => ({})}
                      >
                        <IconTwitter size="lg" />
                      </Button>
                      <Button
                        variant="icon"
                        className="accent"
                        onClick={() => ({})}
                      >
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
              <Group
                as="div"
                gap="var(--gap-3)"
                options={{
                  direction: "column",
                }}
              >
                <Group as="div" gap="var(--gap-3)">
                  <IconHeart />
                  <IconHeart />
                  <IconHeart />
                  <IconHeart />
                </Group>
                <Group
                  as="div"
                  gap="var(--gap-3)"
                  options={{
                    direction: "column",
                  }}
                >
                  <IconHeart stroke="var(--accent-error)" />
                  <IconHeart stroke="var(--accent-error)" />
                  <IconHeart stroke="var(--accent-error)" />
                  <IconHeart stroke="var(--accent-error)" />
                </Group>
              </Group>
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
                <Button className="accent-error px $$$">
                  Button with ring
                </Button>
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
                  <Group
                    as="div"
                    options={{
                      direction: "column",
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
                      <Link
                        href="https://Google.com"
                        data-tooltip="Search on google"
                      >
                        link
                      </Link>{" "}
                      anae shandy cante oremus.
                    </HelveticaNeue>
                  </Group>
                </Popover>
              </Group>
            </Stat.Panel>
            <Stat.Panel
              title="<Stat.Panel />"
              description="Without footer actions"
              subtitle="Details"
            ></Stat.Panel>
          </div>
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
          <div className="grid -md -stretch gap !!" style={{ width: "100%" }}>
            <Stat.Panel
              title="<Stat.Periods/>"
              description="CSS gradients for flexible period display"
              subtitle="Details"
              id="stat-periods-a-panel"
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
              <HelveticaNeueBold>98%</HelveticaNeueBold>
              <Stat.Periods
                size="1%"
                height="20px"
                colors={{
                  start: "var(--accent)",
                  end: "var(--transparent)",
                }}
                marker={{
                  width: "1%",
                  color: "var(--accent-error)",
                  position: "98%",
                  height: "20px",
                }}
              />
            </Stat.Panel>
            <Stat.Panel
              title="<Stat.Periods/>"
              description="Same"
              subtitle="Details"
              id="stat-periods-b-panel"
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
              <Group
                as="div"
                className="flex-grow-children"
                options={{
                  DANGEROUS: { width: "100%" },
                }}
              >
                <HelveticaNeueBold>Q1</HelveticaNeueBold>
                <HelveticaNeueBold>Q2</HelveticaNeueBold>
                <HelveticaNeueBold>Q3</HelveticaNeueBold>
                <HelveticaNeueBold dangerousColor="var(--accent-error)">
                  Q4
                </HelveticaNeueBold>
              </Group>
              <Stat.Periods
                size="25%"
                height="90px"
                colors={{ start: "var(--accent)", end: "transparent" }}
              />
            </Stat.Panel>

            <Stat.Panel
              title="<Stat.Periods/>"
              description="Same"
              subtitle="Details"
              id="stat-periods-c-panel"
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
              <Group
                as="div"
                className="flex-grow-children"
                options={{
                  DANGEROUS: { width: "100%" },
                }}
              >
                <HelveticaNeueBold className="text-center">
                  MO
                </HelveticaNeueBold>
                <HelveticaNeueBold className="text-center">
                  TU
                </HelveticaNeueBold>
                <HelveticaNeueBold className="text-center">
                  WE
                </HelveticaNeueBold>
                <HelveticaNeueBold className="text-center">
                  TH
                </HelveticaNeueBold>
                <HelveticaNeueBold
                  className="text-center"
                  dangerousColor="var(--accent-error)"
                >
                  FR
                </HelveticaNeueBold>
                <HelveticaNeueBold className="text-center">
                  SAT
                </HelveticaNeueBold>
                <HelveticaNeueBold className="text-center">
                  SU
                </HelveticaNeueBold>
              </Group>
              <Stat.Periods
                size="14.28%"
                height="90px"
                colors={{ start: "var(--accent)", end: "transparent" }}
              />
            </Stat.Panel>
            <Stat.Panel
              title="<Stat.Periods/>"
              description="Show progress/completion"
              subtitle="Details"
              id="stat-periods-d-panel"
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
              <HelveticaNeueBold>50%</HelveticaNeueBold>
              <Stat.Periods
                size="50%"
                height="20px"
                colors={{
                  start: "var(--accent)",
                  end: "var(--accent-error)",
                }}
              />
            </Stat.Panel>
            <Stat.Panel
              title="<Stat.Periods/>"
              description="Customizable"
              subtitle="Details"
              id="stat-periods-e-panel"
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
                      "https://github.com/polmoneys/boost/blob/master/packages/Stat/src/Periods.tsx"
                    ),
                  className: "ml-auto",
                },
              ]}
            >
              <HelveticaNeueBold>75%</HelveticaNeueBold>
              <Stat.Periods
                size="40%"
                height="30px"
                colors={{
                  start: "var(--transparent)",
                  end: "var(--transparent)",
                }}
                marker={{
                  width: "1%",
                  color: "var(--accent-error)",
                  position: "75%",
                  height: "30px",
                }}
              />
            </Stat.Panel>
          </div>
        </article>
        <article>
          <Group
            as="div"
            gap="var(--gap-3)"
            options={{
              direction: "column",
            }}
          >
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
              <Group
                as="ul"
                options={{
                  direction: "column",
                  DANGEROUS: {
                    marginBottom: "var(--gap-3)",
                  },
                }}
              >
                {diskStorage
                  .reduce((prev, curr) => {
                    if (prev.length === 0) return [curr];
                    const lastItem = prev.at(-1);
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
              </Group>
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
            <Skeletons amount={2} />
          </Group>
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
          <Group
            as="div"
            gap="var(--gap-3)"
            options={{
              direction: "column",
            }}
          >
            <ScrollUnit
              classNames={{
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
                <Group
                  as="li"
                  aria-hidden={!tab ? true : false}
                  options={{
                    direction: "column",
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
                </Group>

                <Group
                  as="li"
                  options={{
                    direction: "column",
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
                </Group>
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
          </Group>
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
        </article>
        <article>
          <Group
            as="div"
            gap="var(--gap-3)"
            options={{
              direction: "column",
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
              <Group
                as="ul"
                options={{
                  direction: "column",
                }}
              >
                <Group as="li" options={{ alignItems: "center" }}>
                  <HelveticaNeueBoldS>useBinary</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    Adds toggle logic
                  </HelveticaNeueS>
                </Group>

                <Group as="li" options={{ alignItems: "center" }}>
                  <HelveticaNeueBoldS>useCache</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    Primitive to compose other hooks
                  </HelveticaNeueS>
                </Group>

                <Group as="li" options={{ alignItems: "center" }}>
                  <HelveticaNeueBoldS>useFormFocusout</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    React to user leaving a form
                  </HelveticaNeueS>
                </Group>

                <Group as="li" options={{ alignItems: "center" }}>
                  <HelveticaNeueBoldS>useImageSize</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    Ratio and natural size
                  </HelveticaNeueS>
                </Group>

                <Group as="li" options={{ alignItems: "center" }}>
                  <HelveticaNeueBoldS>useInput</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    Adds YUP validation
                  </HelveticaNeueS>
                </Group>

                <Group as="li" options={{ alignItems: "center" }}>
                  <HelveticaNeueBoldS>useMap</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    Sugar over new Map
                  </HelveticaNeueS>
                </Group>

                <Group as="li" options={{ alignItems: "center" }}>
                  <HelveticaNeueBoldS>useNewBrowserTab</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    Like Apple.com chat support
                  </HelveticaNeueS>
                </Group>
                <Group as="li" options={{ alignItems: "center" }}>
                  <HelveticaNeueBoldS>useResizeObserver</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    Measure elements
                  </HelveticaNeueS>
                </Group>

                <Group as="li" options={{ alignItems: "center" }}>
                  <HelveticaNeueBoldS>useSelection</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    A leader controls followers
                  </HelveticaNeueS>
                </Group>

                <Group as="li" options={{ alignItems: "center" }}>
                  <HelveticaNeueBoldS>useSet</HelveticaNeueBoldS>
                  <HelveticaNeueS
                    className="ml-auto"
                    dangerousColor="var(--panel-description)"
                  >
                    Sugar over new Set
                  </HelveticaNeueS>
                </Group>
              </Group>
            </Stat.Panel>

            <Skeletons amount={6} />
          </Group>
        </article>
      </main>

      <Dialog
        label="Landscape "
        id="dialog-landscape"
        onClose={() => landscapeActions.off()}
        open={landscapeState === "on"}
        actions={<IconTwitter size="lg" />}
      >
        <Group
          as="div"
          className="p $$"
          gap="var(--gap-2)"
          options={{ direction: "column" }}
        >
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
        </Group>
      </Dialog>
      <Dialog
        id="dialog-portrait"
        label="Portrait "
        isLastDialogOpened={portraitState === "on" && landscapeState === "on"}
        ratio="portrait"
        onClose={() => portraitActions.off()}
        open={portraitState === "on"}
      >
        <Group
          as="div"
          className="p $$"
          gap="var(--gap-2)"
          options={{ direction: "column" }}
        >
          <HelveticaNeue>
            Lorem ipsum dolor sit amet, no veri erat accusamus vel, cu ubique
            legere philosophia cum. Nisl vide ei eam, est at causae omnium,
            veritus molestiae ex per. Usu noster vituperata ei, laoreet mentitum
            cu nec, at euismod impedit pri. Choro nusquam incorrupte an eos,
            mundi repudiare eum ei, vix in soleat epicurei moderatius. Odio
            saepe cu cum, mea utamur deterruisset in, quem offendit sea ut. Per
            ne mazim partem animal, pro corrumpit forensibus et.
          </HelveticaNeue>
        </Group>
      </Dialog>
      <Dialog.Tray
        id="tray-dialog"
        label="Tray "
        open={trayState === "on"}
        onClose={() => trayActions.off()}
        actions={<IconTwitter size="lg" />}
      >
        <Group
          as="div"
          className="p $$"
          gap="var(--gap-2)"
          options={{ direction: "column" }}
        >
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
        </Group>
      </Dialog.Tray>
    </Fragment>
  );
}

export default App;
