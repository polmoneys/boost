import { ScrollUnit } from "scroll-unit-react";
import styles from "./Stat.module.css";

interface Item {
  label: string;
  value?: string;
}

interface Props {
  label: string;
  th: Array<Item>;
  tr: Array<Array<Item>>;
  classNames?: {
    group?: string;
    viewport?: string;
  };
}

function Table(props: Props) {
  const {
    label,
    th,
    tr,
    classNames = {
      group: styles.table,
      viewport: "table-container",
    },
  } = props;

  return (
    <ScrollUnit
      classNames={{
        group: classNames.group,
        viewport: classNames.viewport,
      }}
    >
      <table>
        <caption className="visually-hidden">{label}</caption>

        <thead>
          <tr>
            {th.map((thItem, pos) => {
              if (pos === 0) {
                return (
                  <th scope="col" className="pin">
                    {thItem.label}
                  </th>
                );
              }
              return <th scope="col">{thItem.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tr.map((row, pos) => {
            return (
              <tr>
                {row.map((tdItem, pos) => {
                  if (pos === 0) {
                    return (
                      <th scope="row" className="pin">
                        {tdItem.label}
                      </th>
                    );
                  }
                  return <td scope="col">{tdItem.label}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </ScrollUnit>
  );
}

export default Table;
