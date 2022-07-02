import {
  useState,
  Fragment,
  useEffect,
  useMemo,
  useCallback,
  ChangeEvent,
} from "react";
import { FiMinus, FiCheck } from "react-icons/fi";
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

import "../../packages/Input/dist/style.css";
import "../../packages/Button/dist/style.css";
import "../../packages/Link/dist/style.css";
import "../../packages/Link/dist/style.css";
import "../../packages/Card/dist/style.css";
import "../../packages/CardMedia/dist/style.css";
import "../../packages/Layers/dist/style.css";
import "../../packages/Track/dist/style.css";
import "../../packages/Radio/dist/style.css";

type StatusMachine = "draft" | "live" | "unknown" | "publishe";
function App() {
  const [hasExploded, setDetonation] = useState(false);
  const [tab, setTab] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [inputValue, setInput] = useState("");
  const [publishStatus, setStatus] = useState<StatusMachine>("draft");
  const [publishStatusMultiple, setStatusMultiple] = useState<
    Array<"draft" | "live" | "unknown" | "none">
  >([]);

  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setStatus(value as "draft" | "live" | "unknown");
  };

  // useEffect(() => {
  //   console.log({ usefx: inputValue });
  // }, [inputValue]);
  // useEffect(() => {
  //   console.log({ usefx: checkboxValue });
  // }, [checkboxValue]);

  return (
    <main>
      <h1>Attempt #5872046752 </h1>
      <Group as="ul" gap="2em" css="grid" size="480px">
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
          >
            Link as Button
          </Link>
        </Group>

        <Group as="li" gap="2em">
          <Button>Tweet</Button>
          <Button variant="icon">
            <svg viewBox="-32 -32 144 120" width="73" height="60">
              <path d="M72 6.926a29.512 29.512 0 01-8.484 2.326 14.816 14.816 0 006.495-8.172 29.572 29.572 0 01-9.38 3.584A14.752 14.752 0 0049.847 0C40.314 0 33.304 8.898 35.46 18.138 23.183 17.522 12.298 11.64 5.013 2.704c-3.87 6.638-2.008 15.325 4.57 19.721a14.706 14.706 0 01-6.69-1.847c-.16 6.843 4.744 13.243 11.848 14.67a14.8 14.8 0 01-6.67.253c1.879 5.868 7.334 10.14 13.798 10.258C15.66 50.626 7.837 52.8 0 51.876a41.811 41.811 0 0022.643 6.637c27.426 0 42.92-23.164 41.986-43.94A30.009 30.009 0 0072 6.926z"></path>
            </svg>
          </Button>
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
              autoFocus
              value={inputValue}
              onChange={e => {
                const nextValue = e.target.value;
                setInput(nextValue);
              }}
              id="test-input"
              label="Input label"
              placeholder="Type friend"
              onChangeValue={val => console.log(val)}
            />
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
            <Radio name="draft" value="draft" id="radio-draft" />
            <Radio name="live" value="live" id="radio-live" />
            <Radio name="unknown" value="unknown" id="radio-unknown" />
            <Radio name="published" value="published" id="radio-published" />
          </Radio.Group>
        </li>
        <li>
          <Radio.Group
            checkboxSize={"200px"}
            initial={publishStatus}
            gap=".4em"
            onChange={(selection: string) =>
              setStatus(selection as StatusMachine)
            }
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
            <Radio name="draft" value="draft" id="radio-draft" />
            <Radio name="live" value="live" id="radio-live" />
            <Radio name="unknown" value="unknown" id="radio-unknown" />
            <Radio name="published" value="published" id="radio-published" />
          </Radio.Group>
        </li>

        <Group
          as="li"
          options={{
            alignItems: "center",
            justifyContent: "flex-start",
            direction: "column",
          }}
        >
          <Button onClick={() => setOpen(true)}>Open</Button>

          <Trap initial={isOpen}>
            {isOpen && (
              <Group
                as="footer"
                gap="var(--gap-3)"
                options={{
                  alignItems: "flex-start",
                }}
              >
                <Button onClick={() => setOpen(false)}>Close</Button>
                <Button onClick={() => setOpen(false)}>Same</Button>
                <Button onClick={() => setOpen(false)}>Same</Button>
              </Group>
            )}
          </Trap>
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
        <Layers as="li" className="full-width">
          <Group
            as="div"
            gap="2em"
            options={{ direction: "column", alignItems: "center" }}
            aria-hidden={tab ? false : true}
          >
            <Button onClick={() => setTab(prev => !prev)}>Show Circle</Button>
            <Shape.Triangle />
          </Group>
          <Group
            as="div"
            gap="2em"
            options={{ direction: "column", alignItems: "center" }}
            aria-hidden={!tab ? false : true}
          >
            <Button onClick={() => setTab(prev => !prev)}>Show Triangle</Button>
            <Shape.Circle />
          </Group>
        </Layers>
        <Group
          as="li"
          options={{
            alignItems: "center",
            justifyContent: "flex-start",
            direction: "column",
          }}
        >
          <Sticky as="div" className="sticky-bg">
            <h1>I will stick to the top</h1>
          </Sticky>
          <p style={{ maxWidth: "75%" }}>
            Lorem ipsun dolor sit amet indisciplinctur gloria at rosae
            pantocrator. Lorem anae shandy cante oremus.
          </p>
        </Group>
        <li className="white-space"></li>

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
        </li>
        <li>
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

        <li className="white-space"></li>
        <li className="white-space"></li>

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
            <Shape sides={hasExploded ? 5 : 3} size={200} />
          </Group>
        </Fence>
      </Group>

      <div className="white-space"></div>
    </main>
  );
}

export default App;
