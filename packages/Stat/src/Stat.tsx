import { Fragment } from "react";
import Panel, { PanelTransparent } from "./Panel";
import Draw from "./Draw";
import Table from "./Table";
import Steps from "./Steps";
import Meter from "./Meter";
import Periods from "./Periods";
import Surface from "./Surface";

function Stat() {
  return <Fragment />;
}

Stat.Periods = Periods;
Stat.Meter = Meter;
Stat.Surface = Surface;
Stat.Table = Table;
Stat.Steps = Steps;
Stat.Draw = Draw;
Stat.Panel = Panel;
Stat.PanelTransparent = PanelTransparent;

export default Stat;
