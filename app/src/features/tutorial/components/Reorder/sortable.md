
```tsx

import { Move } from "move-react";
import { useEffect, useState } from "react";
import {
  Button,
  HelveticaNeueBoldS,
  IconBookmark,
  IconHeart,
  IconIg,
  IconGithub,
  IconTwitter,
  IconStar,
  List,
  UI,
  Group,
} from "styled-react";
import { arrayMove } from "boost-utils";

  // const [sortableItems, setSortableItems] = useState([
  //   {
  //     id: "111",
  //     label: "111111 1111 1111 111",
  //   },
  //   {
  //     id: "222",
  //     label: "222222 2221 2221 222",
  //   },
  //   {
  //     id: "333",
  //     label: "3333 3333 333 333",
  //   },
  //   {
  //     id: "444",
  //     label: "44444 44 444 444444",
  //   },
  //   {
  //     id: "55555",
  //     label: "55555 5555 55555 55555",
  //   },
  // ]);

  // const onChangeYValue = (start: any, end: any) => {
  //   const from = sortableItems.map(it => it.id).findIndex(el => el === start);
  //   const to = sortableItems.map(it => it.id).findIndex(el => el === end);
  //   const sorted = arrayMove(sortableItems, from, to);
  //   console.log({ start, end, from, to });

  //   setSortableItems(sorted);
  // };
  // useEffect(() => {
  //   console.log({ sortableItems });
  // }, [sortableItems]);


<Move.Sortable
        itemHeight={42}
        items={sortableItems}
        onDropValue={(start: any, end: any) => onChangeYValue(start, end)}
      />

```