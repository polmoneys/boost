import {
  useState,
  Fragment,
  useEffect,
  useMemo,
  useCallback,
  ChangeEvent,
} from "react";
import {
  FiMinus,
  FiCheck,
  FiX,
  FiGitBranch,
  FiGitCommit,
  FiGitMerge,
} from "react-icons/fi";
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
import { Select } from "select-react";
import { Checkbox } from "checkbox-react";
import { ScrollUnit } from "scroll-unit-react";
import {
  HelveticaNeue,
  HelveticaNeueBoldXL,
  HelveticaNeueBoldS,
  HelveticaNeueBold,
} from "font-react";
import { IconCheck, IconCross, IconCaretUp, IconCaretDown } from "icon-react";
import { useBinary, useInput, useSelection } from "hooks-react";
import { targets, tags, StatusMachine, USESELECTION_DEMO } from "./utils";

// From CSS namespace
import "../../css/dist/css.css";
import "../../css/dist/css-tokens.js";

// From packages namespace
import "../../packages/Input/dist/style.css";
import "../../packages/Button/dist/style.css";
import "../../packages/Link/dist/style.css";
import "../../packages/Link/dist/style.css";
import "../../packages/Card/dist/style.css";
import "../../packages/CardMedia/dist/style.css";
import "../../packages/Layers/dist/style.css";
import "../../packages/Track/dist/style.css";
import "../../packages/Radio/dist/style.css";
import "../../packages/Options/dist/style.css";
import "../../packages/Font/dist/style.css";
import "../../packages/Icon/dist/style.css";
import "../../packages/Select/dist/style.css";
import "../../packages/Dialog/dist/style.css";
import "../../packages/ScrollUnit/dist/style.css";
import "../../packages/Checkbox/dist/style.css";

import { VALIDATE_USERNAME } from "../../hooks/src/useInput";

// import "@szhsin/react-menu/dist/index.css";

// DEMO
import "./app.css";

function App() {
  const [hasExploded, setDetonation] = useState(false);
  const [tab, setTab] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [inputValue, setInput] = useState("");

  const [value, onChange, error] = useInput({
    initial: "",
    validation: VALIDATE_USERNAME,
    errorMessage: "error friend",
  });
  const [publishStatus, setStatus] = useState<StatusMachine>("draft");
  const [publishStatusMultiple, setStatusMultiple] = useState<
    Array<"draft" | "live" | "unknown" | "none">
  >([]);

  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setStatus(value as "draft" | "live" | "unknown");
  };

  const [{ output, all, mixed }, { onFollowerChange, onLeadChange }] =
    useSelection(USESELECTION_DEMO);

  console.log({ output, all, mixed });
  const { state: landscapeState, actions: landscapeActions } = useBinary("off");
  const { state: portraitState, actions: portraitActions } = useBinary("off");
  const { state: trayState, actions: trayActions } = useBinary("off");

  // useEffect(() => {
  //   console.log({ usefx: inputValue });
  // }, [inputValue]);
  // useEffect(() => {
  //   console.log({ usefx: checkboxValue });
  // }, [checkboxValue]);

  const [target, setTarget] = useState("");

  // useEffect(() => {
  //   console.log({ target });
  // }, [target]);

  return (
    <main>
      <h1>Attempt #5872046752 </h1>

      <Group as="ul" gap="2em" css="grid" size="480px" className="demo">
        <Group
          as="li"
          gap="var(--gap-3)"
          options={{
            alignItems: "center",
            justifyContent: "center",
            direction: "column",
          }}
        >
          <p style={{ maxWidth: "200px" }}>
            Lorem ipsun dolor sit amet indisciplinctur gloria at rosae
            pantocrator. Lorem{" "}
            <Link href="https://Google.com" data-tooltip="Search on google">
              link
            </Link>{" "}
            anae shandy cante oremus.
          </p>

          <Link
            href="https://Google.com"
            data-tooltip="Search on google"
            variant="button"
            className="surface -highlight px $$"
          >
            Link as Button
          </Link>
        </Group>

        <Group as="li" gap="2em">
          <Button className="surface -highlight px $$">Tweet</Button>
          <Button variant="icon" className="surface -highlight px $$">
            <svg viewBox="-32 -32 144 120" width="73" height="60">
              <path d="M72 6.926a29.512 29.512 0 01-8.484 2.326 14.816 14.816 0 006.495-8.172 29.572 29.572 0 01-9.38 3.584A14.752 14.752 0 0049.847 0C40.314 0 33.304 8.898 35.46 18.138 23.183 17.522 12.298 11.64 5.013 2.704c-3.87 6.638-2.008 15.325 4.57 19.721a14.706 14.706 0 01-6.69-1.847c-.16 6.843 4.744 13.243 11.848 14.67a14.8 14.8 0 01-6.67.253c1.879 5.868 7.334 10.14 13.798 10.258C15.66 50.626 7.837 52.8 0 51.876a41.811 41.811 0 0022.643 6.637c27.426 0 42.92-23.164 41.986-43.94A30.009 30.009 0 0072 6.926z"></path>
            </svg>
          </Button>
          <Options
            classNames={{
              button: "surface -highlight px $$",
              group: "surface -highlight p $",
              item: "p $",
            }}
            onChange={opt => console.log(opt)}
            options={[
              {
                id: "0",
                value: "draft",
              },
              {
                id: "1",
                value: "live",
              },
              {
                id: "2",
                value: "unknown",
              },
              {
                id: "3",
                value: "published",
              },
            ]}
          />
        </Group>

        <li>
          <Group
            as="form"
            gap="var(--gap-3)"
            options={{
              direction: "column",
            }}
          >
            <Input
              value={inputValue}
              onChange={e => {
                const nextValue = e.target.value;
                setInput(nextValue);
              }}
              id="test-input"
              label="Friends"
              placeholder="Type friend"
              onChangeValue={val => console.log(val)}
              classNames={{ input: "surface -highlight px $$" }}
            />
            <Input
              autoFocus
              value={value}
              onChange={e => {
                const nextValue = e.target.value;
                onChange(nextValue);
              }}
              id="test-error-input"
              errorElementId="test-error-input-error"
              label="Username"
              placeholder="Type username"
              onChangeValue={val => console.log(val)}
              classNames={{ input: "surface -highlight px $$" }}
            />
            {error !== undefined && (
              <HelveticaNeueBold className="errors-input" aria-live="polite">
                <IconCross size="lg" />
                <span id={`test-error-input-error`}>
                  {error !== undefined ? error : ""}
                </span>
              </HelveticaNeueBold>
            )}
          </Group>
        </li>

        <li>
          <Radio.Group
            initial={publishStatus}
            onChange={(selection: string) =>
              setStatus(selection as StatusMachine)
            }
            gap=".4em"
            renderLabel={({
              checked,
              checkboxLabel,
            }: {
              checked: boolean;
              checkboxLabel: string;
            }) => (
              <Fragment>
                {checked ? <FiCheck size={48} /> : <FiMinus size={48} />}
                {checkboxLabel}
              </Fragment>
            )}
          >
            <Radio
              name="draft"
              value="draft"
              id="radio-draft"
              classNames={{
                checked: "surface -success",
              }}
            />
            <Radio
              name="live"
              value="live"
              id="radio-live"
              classNames={{
                checked: "surface -highlight",
              }}
            />
            <Radio
              name="unknown"
              value="unknown"
              id="radio-unknown"
              classNames={{
                checked: "surface -highlight",
              }}
            />
            <Radio
              name="published"
              value="published"
              id="radio-published"
              classNames={{
                checked: "surface -error",
              }}
            />
          </Radio.Group>
        </li>

        <li>
          <Checkbox
            isMixed={mixed === "mixed"}
            checked={mixed !== "mixed" && mixed === true}
            label="Parent checkbox"
            name="parent"
            value="parent"
            id="parent-checkbox-test"
            onChange={ev => onLeadChange()}
            fill={all ? "var(--accent-success)" : "var(--accent-error)"}
          />
          <br />
          {Object.entries(output).map(([value, state]) => (
            <div key={value}>
              <Checkbox
                name={value.toString().toLowerCase()}
                label={value.toString().toLowerCase()}
                id={`${value.toString().toLowerCase()}-test-checkbox`}
                checked={state as boolean}
                value={value}
                onChange={ev => onFollowerChange(ev)}
                // value={value}
                fill="var(--accent-highlight)"
              />
            </div>
          ))}
        </li>

        <li>
          <Select
            placeholder="Choose favorite "
            options={targets}
            value={target}
            onChange={setTarget}
            classNames={{ root: "surface -highlight", select: "px $$$" }}
          />
        </li>
        <Group
          as="li"
          gap="var(--gap-3)"
          options={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ScrollUnit
            type="hover"
            classNames={{
              root: "scroll",
              viewport: "surface -highlight p $$",
            }}
          >
            {tags.map(tag => (
              <HelveticaNeue className="tag" key={tag}>
                {tag}
              </HelveticaNeue>
            ))}
          </ScrollUnit>
        </Group>
        <Group
          as="li"
          options={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            direction: "column",
          }}
        >
          <Button
            className="surface -highlight px $$"
            onClick={() => setOpen(true)}
          >
            Open trap
          </Button>

          <Trap initial={isOpen}>
            {isOpen && (
              <Group
                as="footer"
                gap="var(--gap-3)"
                options={{
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Button
                  variant="icon"
                  className="surface -success px $$"
                  onClick={() => setOpen(false)}
                >
                  <FiGitBranch />
                </Button>
                <Button
                  variant="icon"
                  className="surface -success px $$"
                  onClick={() => setOpen(false)}
                >
                  <FiGitCommit />
                </Button>
                <Button
                  variant="icon"
                  className="surface -success px $$"
                  onClick={() => setOpen(false)}
                >
                  <FiGitMerge />
                </Button>

                <Button
                  variant="icon"
                  className="surface -error px $$"
                  onClick={() => setOpen(false)}
                >
                  <FiX />
                </Button>
              </Group>
            )}
          </Trap>
        </Group>
        <Group as="li" gap="2em">
          <Button
            className="surface -success px $$"
            onClick={() => portraitActions.on()}
          >
            Dialog portrait
          </Button>
          <Button
            className="surface -success px $$"
            onClick={() => landscapeActions.on()}
          >
            Dialog landscape
          </Button>

          <Button
            className="surface -success px $$"
            onClick={() => trayActions.on()}
            variant="icon"
          >
            {trayState === "on" ? (
              <IconCaretDown size="lg" />
            ) : (
              <IconCaretUp size="lg" />
            )}{" "}
          </Button>
        </Group>

        <li className="white-space"></li>
        <Group
          as="li"
          css="flex"
          options={{
            alignItems: "center",
            justifyContent: "flex-start",
            direction: "column",
          }}
        >
          <Sticky as="div" className="surface -highlight p $$">
            <h1>I will stick to the top</h1>
          </Sticky>
          <p style={{ maxWidth: "75%" }}>
            Lorem ipsun dolor sit amet indisciplinctur gloria at rosae
            pantocrator. Lorem anae shandy cante oremus.
          </p>
        </Group>
        <Group
          as="li"
          options={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Shape.Triangle />
          <Shape.Circle />
          <Shape.Square />
          <Shape sides={5} />
        </Group>

        <Group
          as="li"
          gap="var(--gap-3)"
          options={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconCheck size="sm" />
          <IconCheck />
          <IconCheck size="lg" />

          <IconCheck size="sm" variant="outline" />
          <IconCheck variant="outline" />
          <IconCheck size="lg" variant="outline" />

          <IconCheck size="sm" variant="solid" />
          <IconCheck variant="solid" />
          <IconCheck size="lg" variant="solid" />
        </Group>

        <Layers as="li" className="full-width">
          <Group
            as="div"
            gap="2em"
            options={{ direction: "column", alignItems: "center" }}
            aria-hidden={tab ? false : true}
          >
            <Button
              className="surface -highlight px $$"
              onClick={() => setTab(prev => !prev)}
            >
              Show Circle
            </Button>
            <Shape.Triangle />
          </Group>
          <Group
            as="div"
            gap="2em"
            options={{ direction: "column", alignItems: "center" }}
            aria-hidden={!tab ? false : true}
          >
            <Button
              className="surface -error px $$"
              onClick={() => setTab(prev => !prev)}
            >
              Show Triangle
            </Button>
            <Shape.Circle />
          </Group>
        </Layers>
        <Fence
          as="li"
          options={{
            threshold: 0.8,
            triggerOnce: true,
          }}
          onChange={(isOn: boolean) => setDetonation(isOn)}
          className="fence-bg"
        >
          <Group
            as="div"
            DONOTUse={{
              DONOTStyle: {
                padding: "var(--gap4)",
              },
            }}
            options={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Shape
              sides={hasExploded ? 5 : 3}
              size={200}
              transforms="translateY(50px)"
            />
          </Group>
        </Fence>

        <li>
          <Track as="div" maskSize="1400px">
            <Card as="article" ratio="square">
              <h2>Card Title</h2>
              <Card.Media
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                height="100%"
                alt=""
              />
            </Card>
            <Card as="article" ratio="square">
              <h2>Card Title</h2>
              <Card.Media
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                height="100%"
                alt=""
              />
            </Card>
            <Card as="article" ratio="square">
              <h2>Card Title</h2>
              <Card.Media
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                height="100%"
                alt=""
              />
            </Card>
            <Card as="article" ratio="square">
              <h2>Card Title</h2>
              <Card.Media
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                height="100%"
                alt=""
              />
            </Card>
            <Card as="article" ratio="square">
              <h2>Card Title</h2>
              <Card.Media
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                height="100%"
                alt=""
              />
            </Card>
            <Card as="article" ratio="square">
              <h2>Card Title</h2>
              <Card.Media
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                height="100%"
                alt=""
              />
            </Card>
          </Track>
          <br />
          <Track as="div" maskSize="1400px">
            <Card as="article" ratio="landscape">
              <h2>Card Title</h2>
              <Card.Media
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                height="100%"
                alt=""
              />
            </Card>
            <Card as="article" ratio="landscape">
              <h2>Card Title</h2>
              <Card.Media
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                height="100%"
                alt=""
              />
            </Card>

            <Card as="article" ratio="landscape">
              <h2>Card Title</h2>
              <Card.Media
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                height="100%"
                alt=""
              />
            </Card>
            <Card as="article" ratio="landscape">
              <h2>Card Title</h2>
              <Card.Media
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                height="100%"
                alt=""
              />
            </Card>
          </Track>
        </li>
        <li>
          <Track as="div" maskSize="1400px">
            <Card as="article" ratio="portrait">
              <h2>Card Title</h2>
              <Card.Media
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                height="100%"
                alt=""
              />
            </Card>
            <Card as="article" ratio="portrait">
              <h2>Card Title</h2>
              <Card.Media
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                height="100%"
                alt=""
              />
            </Card>
            <Card as="article" ratio="portrait">
              <h2>Card Title</h2>
              <Card.Media
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                height="100%"
                alt=""
              />
            </Card>
            <Card as="article" ratio="portrait">
              <h2>Card Title</h2>
              <Card.Media
                src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                height="100%"
                alt=""
              />
            </Card>
          </Track>
        </li>
      </Group>

      <Dialog
        label="Landscape state"
        closeButton={
          <Button
            variant="icon"
            className="surface -highlight"
            onClick={() => ({})}
            keyboard={false}
            nonKeyboard={false}
          >
            <IconCross />
          </Button>
        }
        onClose={() => landscapeActions.off()}
        open={landscapeState === "on"}
      >
        <br />

        <HelveticaNeue>
          Lorem ipsum dolor sit amet, no veri erat accusamus vel, cu ubique
          legere philosophia cum. Nisl vide ei eam, est at causae omnium,
          veritus molestiae ex per. Usu noster vituperata ei, laoreet mentitum
          cu nec, at euismod impedit pri. Choro nusquam incorrupte an eos, mundi
          repudiare eum ei, vix in soleat epicurei moderatius. Odio saepe cu
          cum, mea utamur deterruisset in, quem offendit sea ut. Per ne mazim
          partem animal, pro corrumpit forensibus et.
        </HelveticaNeue>
        <br />

        <Button
          className="surface -highlight px $$"
          onClick={() => portraitActions.on()}
        >
          Trigger DialogPortrait
        </Button>
      </Dialog>
      <Dialog
        label="Portrait state"
        isLastDialogOpened={portraitState === "on" && landscapeState === "on"}
        closeButton={
          <Button
            variant="icon"
            className="surface -highlight"
            onClick={() => ({})}
            keyboard={false}
            nonKeyboard={false}
          >
            <IconCross />
          </Button>
        }
        ratio="portrait"
        onClose={() => portraitActions.off()}
        open={portraitState === "on"}
      >
        <br />

        <HelveticaNeue>
          Lorem ipsum dolor sit amet, no veri erat accusamus vel, cu ubique
          legere philosophia cum. Nisl vide ei eam, est at causae omnium,
          veritus molestiae ex per. Usu noster vituperata ei, laoreet mentitum
          cu nec, at euismod impedit pri. Choro nusquam incorrupte an eos, mundi
          repudiare eum ei, vix in soleat epicurei moderatius. Odio saepe cu
          cum, mea utamur deterruisset in, quem offendit sea ut. Per ne mazim
          partem animal, pro corrumpit forensibus et.
        </HelveticaNeue>
      </Dialog>
      <Dialog.Tray
        label="Tray state"
        open={trayState === "on"}
        closeButton={
          <Button
            variant="icon"
            className="surface -highlight"
            onClick={() => ({})}
            keyboard={false}
            nonKeyboard={false}
          >
            <IconCross />
          </Button>
        }
        onClose={() => trayActions.off()}
      >
        <br />
        <HelveticaNeue>
          Lorem ipsum dolor sit amet, no veri erat accusamus vel, cu ubique
          legere philosophia cum. Nisl vide ei eam, est at causae omnium,
          veritus molestiae ex per. Usu noster vituperata ei, laoreet mentitum
          cu nec, at euismod impedit pri. Choro nusquam incorrupte an eos, mundi
          repudiare eum ei, vix in soleat epicurei moderatius. Odio saepe cu
          cum, mea utamur deterruisset in, quem offendit sea ut. Per ne mazim
          partem animal, pro corrumpit forensibus et.
        </HelveticaNeue>
        <HelveticaNeue>
          Lorem ipsum dolor sit amet, no veri erat accusamus vel, cu ubique
          legere philosophia cum. Nisl vide ei eam, est at causae omnium,
          veritus molestiae ex per. Usu noster vituperata ei, laoreet mentitum
          cu nec, at euismod impedit pri. Choro nusquam incorrupte an eos,
          mundi.
        </HelveticaNeue>
        <br />
      </Dialog.Tray>
    </main>
  );
}

export default App;
