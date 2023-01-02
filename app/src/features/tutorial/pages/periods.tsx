import { openUrl } from "boost-utils";
import { Fragment } from "react";
import {
  Group,
  HelveticaNeueBold,
  HelveticaNeueS,
  IconGithub,
  IconStar,
  Stat,
} from "styled-react";

function Periods() {
  return (
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
          <HelveticaNeueBold className="text-center">MO</HelveticaNeueBold>
          <HelveticaNeueBold className="text-center">TU</HelveticaNeueBold>
          <HelveticaNeueBold className="text-center">WE</HelveticaNeueBold>
          <HelveticaNeueBold className="text-center">TH</HelveticaNeueBold>
          <HelveticaNeueBold
            className="text-center"
            dangerousColor="var(--accent-error)"
          >
            FR
          </HelveticaNeueBold>
          <HelveticaNeueBold className="text-center">SAT</HelveticaNeueBold>
          <HelveticaNeueBold className="text-center">SU</HelveticaNeueBold>
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
      <Stat.Panel
        title="<Stat.Panel />"
        description="Without footer actions"
        subtitle="Details"
      >
        <Group.Center
          as="div"
          className="grey"
          options={{ DANGEROUS: { minHeight: "20vh" } }}
        >
          <div className="spin" />
        </Group.Center>
      </Stat.Panel>
    </div>
  );
}

export default Periods;
