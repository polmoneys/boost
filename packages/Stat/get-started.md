## Stat

Cul de sac for all sorts of components that visualize and interact with stats / values. 

If you are looking for quick charts, I got [you](https://github.com/polmoneys/charts)


## Usage


```jsx

<Stat.Periods
    size="25%"
    height="90px"
    colors={{ start: "var(--accent)", end: "transparent" }}
/>

<Stat.Periods
  size="50%"
  height="20px"
  colors={{
    start: "var(--accent)",
    end: "var(--accent-error)",
  }}
/>

<Stat.Periods
  size="1%"
  height="20px"
  marker={{
    width: "1%",
    color: "var(--accent-error)",
    position: "99%",
    height: "20px",
  }}
/>

<Stat.Meter
  label=""
  max={140}
  value={140}
  items={ [
  {
    color: "var(--accent)",
    value: "0%",
    label: "Pics",
    amount: "5%",
  },
  {
    color: "var(--accent)",
    value: "5%",
    label: "Pics",
    amount: "5%",
  },
  {
    color: "var(--accent-error)",
    value: "5%",
    label: "Stories",
    amount: "50%",
  },
  {
    color: "var(--accent-error)",
    value: "55%",
    label: "Stories",
    amount: "50%",
  },
  {
    color: "var(--gray)",
    value: "55%",
    label: "Music",
    amount: "40%",
  },
  {
    color: "var(--gray)",
    value: "95%",
    label: "Music",
    amount: "40%",
  },
  {
    color: "var(--gray-light)",
    value: "95%",
    label: "Empty",
    amount: "5%",
  },
  {
    color: "var(--gray-light)",
    value: "100%",
    label: "Empty",
    amount: "5%",
  },
]
}
  height="10px"
/>

<Stat.Surface initialValue={[30, 70]} onChange={points => console.log(points)} />;

<Stat.Table
    classNames={{
      group: "table-container",
    }}
    label="test label"
    th={TABLE_DEMO[0]}
    tr={TABLE_DEMO[1]}
/>

<Stat.Panel
    title="Table"
    description="Sticky first cell, scrollUnit"
    subtitle="Actions"
    actions={[
      {
        label: (
          <Fragment>
            <IconBookmark />
            <HelveticaNeueS>Action Label</HelveticaNeueS>
          </Fragment>
        ),
        action: () => console.log("h"),
      },
      {
        label: (
          <Fragment>
            <IconBookmark />
            <HelveticaNeueS>Action Label</HelveticaNeueS>
          </Fragment>
        ),
        action: () => console.log("h"),
        className: "ml-auto",
      },
    ]}
  >
    { /*content */} 
</Stat.Panel>

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

```
