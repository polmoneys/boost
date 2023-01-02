import { useInput, useSelection } from "hooks-react";
import { Fragment, useState } from "react";
import {
  Checkbox,
  Group,
  HelveticaNeueBold,
  HelveticaNeueS,
  IconBookmark,
  IconCheck,
  IconColorPicker,
  IconCross,
  IconDotsY,
  IconGithub,
  IconStar,
  Input,
  Options,
  Radio,
  Stat,
} from "styled-react";
import { Switch } from "switch-react";
import { Range } from "range-react";
import {
  StatusMachine,
  USESELECTION_DEMO,
  OPTIONS_DEMO,
} from "../../../utils/utils";
import { VALIDATE_USERNAME } from "../../../../../hooks/src/useInput";
import { openUrl, scrollToElement } from "boost-utils";

function Forms() {
  const [theme, setTheme] = useState("default");

  const [valueSearch, onChangeSearch] = useState("");
  const [publishStatus, setStatus] = useState<StatusMachine>("draft");
  const [{ output, all, mixed }, { onFollowerChange, onLeadChange }] =
    useSelection(USESELECTION_DEMO);
  const [value, onChange, error] = useInput({
    initial: "",
    validation: VALIDATE_USERNAME,
  });
  const [size, setSize] = useState("xs");
  const [rangeValue, setRangeValue] = useState(0);

  const scrollToHooksPanel = () => scrollToElement("#hooks-panel");

  return (
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

        {/* <Textarea
                    onChangeValue={(onchangev: any) =>
                      console.log({ onchangev })
                    }
                    label="Some label"
                    value="Once upon a time "
                  /> */}
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
          <Radio name="published" value="published" id="radio-published" />
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
          gap="1.5em"
          renderLabel={({
            checked,
            radioLabel,
          }: {
            checked: boolean;
            radioLabel: string;
          }) => (
            <Fragment>
              {checked ? <IconCheck size="lg" /> : <IconCross size="lg" />}
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
        <Group.Column as="div" gap=".5em" className={theme}>
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
        </Group.Column>
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
        <Group.Column as="div" gap=".5em">
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
        </Group.Column>
      </Stat.Panel>
      <Stat.Panel
        title="<Switch/>"
        description="HTML input"
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
                "https://github.com/polmoneys/boost/blob/master/packages/Switch/get-started.md"
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
                "https://github.com/polmoneys/boost/blob/master/packages/Switch/src/Switch.tsx"
              ),
            className: "ml-auto",
          },
        ]}
      >
        <Switch
          onChangeValue={(v: any) => console.log(v)}
          label="Joyful"
          id="test-switch"
          initial={false}
        />
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
          onChange={(points: any) =>
            points[0] !== 30 && points[1] !== 70 && console.log(points)
          }
        />
      </Stat.Panel>
      <Stat.Panel
        title="<Range/>"
        description="HTML input range"
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
                "https://github.com/polmoneys/boost/blob/master/packages/Range/get-started.md"
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
                "https://github.com/polmoneys/boost/blob/master/packages/Range/src/Range.tsx"
              ),
            className: "ml-auto",
          },
        ]}
      >
        <Group
          className="py $$$$"
          as="div"
          options={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Range
            initial={rangeValue}
            onChangeValue={newValue => setRangeValue(newValue)}
          />
        </Group>
      </Stat.Panel>
    </div>
  );
}

export default Forms;
