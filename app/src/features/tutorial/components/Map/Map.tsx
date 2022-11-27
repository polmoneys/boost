import { HelveticaNeue, HelveticaNeueBold } from "font-react";
import { Group } from "group-react";
import { Fragment } from "react";

interface Props {
  step: number;
}

function Map(props: Props) {
  const { step = 0 } = props;
  return (
    <Fragment>
      {step === 1 && (
        <Group
          as="div"
          className="p $$$ accent-error sticky"
          options={{ DANGEROUS: { zIndex: "var(--z-max)", top: "0" } }}
        >
          <HelveticaNeueBold>User Input</HelveticaNeueBold>
          <HelveticaNeue className="ml-auto">
            Accessible and styleable
          </HelveticaNeue>
        </Group>
      )}
      {step === 2 && (
        <Group
          as="div"
          className="p $$$ accent sticky"
          options={{
            DANGEROUS: {
              zIndex: "var(--z-max)",
              top: "58px",
            },
          }}
        >
          <HelveticaNeueBold>Dialogs, Tray & Pop Up</HelveticaNeueBold>
          <HelveticaNeue className="ml-auto">With ratio</HelveticaNeue>
        </Group>
      )}
      {step === 2 && (
        <Group
          as="div"
          className="p $$$ accent sticky"
          options={{ DANGEROUS: { zIndex: "var(--z-max)", top: "0" } }}
        >
          <HelveticaNeueBold>Progress & Periods</HelveticaNeueBold>
          <HelveticaNeue className="ml-auto">CSS gradients</HelveticaNeue>
        </Group>
      )}
      {step === 3 && (
        <Group
          as="div"
          className="p $$$ accent sticky"
          options={{ DANGEROUS: { zIndex: "var(--z-max)", top: "0" } }}
        >
          <HelveticaNeueBold>ScrollUnit</HelveticaNeueBold>
          <HelveticaNeue className="ml-auto">Cards with ratio</HelveticaNeue>
        </Group>
      )}
      {step === 4 && (
        <Group
          as="div"
          className="p $$$ accent sticky"
          options={{ DANGEROUS: { zIndex: "var(--z-max)", top: "0" } }}
        >
          <HelveticaNeueBold>CSS </HelveticaNeueBold>
          <HelveticaNeue className="ml-auto">Grid and tiles</HelveticaNeue>
        </Group>
      )}
      {step === 5 && (
        <Group
          as="div"
          className="p $$$ accent-error sticky"
          options={{ DANGEROUS: { zIndex: "var(--z-max)", top: "58px" } }}
        >
          <HelveticaNeueBold>Hooks </HelveticaNeueBold>
          <HelveticaNeue className="ml-auto">Reusable logic</HelveticaNeue>
        </Group>
      )}
    </Fragment>
  );
}

export default Map;
