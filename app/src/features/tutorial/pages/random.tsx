import { openUrl } from "boost-utils";
import { Fragment, useState } from "react";
import {
  Group,
  HelveticaNeueBold,
  HelveticaNeueS,
  IconGithub,
  IconStar,
  Shape,
  Stat,
} from "styled-react";
import Paint from "../../shop/components/Paint/Paint";
import Reorder from "../components/Reorder/Reorder";
import Skeletons from "../components/Skeletons/Skeletons";
import { diskStorage } from "../../../utils/utils";

function Random() {
  const [partyType, setType] = useState<"line" | "curve">("line");

  const onChangeParty = () => {
    setType(prevP => (prevP === "line" ? "curve" : "line"));
  };

  return (
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
                  ...prev.filter((it: any) => it.color !== lastItem.color),
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
              label: <HelveticaNeueBold>Step 1 is very hard</HelveticaNeueBold>,
              completed: true,
            },
            {
              label: (
                <HelveticaNeueBold>Step 2 is quite hard</HelveticaNeueBold>
              ),
              completed: true,
            },
            {
              label: (
                <HelveticaNeueBold>Step 3 might be hard</HelveticaNeueBold>
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
            action: () => onChangeParty(),
          },
        ]}
      >
        <Paint variant={partyType} />
      </Stat.Panel>
      <Skeletons amount={2} />
    </Group.Column>
  );
}

export default Random;
