import {
  IconBookmark,
  IconGithub,
  IconHeart,
  IconIg,
  IconPin,
  IconTwitter,
} from "icon-react";

export const targets = [
  { value: "es3", label: "ECMAScript 3" },
  { value: "es5", label: "ECMAScript 5" },
  { value: "es2015", label: "ECMAScript 2015" },
  { value: "es2016", label: "ECMAScript 2016" },
  { value: "es2017", label: "ECMAScript 2017" },
  { value: "es2018", label: "ECMAScript 2018" },
  { value: "es2019", label: "ECMAScript 2019" },
];

export const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export type StatusMachine = "draft" | "live" | "unknown" | "published";

export const USESELECTION_DEMO = {
  mayo: false,
  mustard: true,
  ketchup: false,
};

export const diskStorage: Array<{
  label: string;
  amount: `${string}%`;
  color: string;
  value: `${string}%`;
}> = [
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
];

export const TABLE_DEMO = [
  [
    {
      label: "Name",
    },
    { label: "Type" },
    { label: "SubType" },
    { label: "Mana Cost" },
    { label: "Power" },
    { label: "Toughness" },
  ],
  [
    [
      {
        label: "Vexing devils",
      },
      {
        label: "Creature",
      },
      {
        label: "Devil",
      },
      {
        label: "1R",
      },
      {
        label: "4",
      },
      {
        label: "3",
      },
    ],
    [
      {
        label: "Pelt",
      },
      {
        label: "Creature",
      },
      {
        label: "Elf",
      },
      {
        label: "1G",
      },
      {
        label: "1",
      },
      {
        label: "1",
      },
    ],
    [
      {
        label: "Spark elemental",
      },
      {
        label: "Creature",
      },
      {
        label: "Elemental",
      },
      {
        label: "1R",
      },
      {
        label: "6",
      },
      {
        label: "1",
      },
    ],
    [
      {
        label: "Avatar of the Resolute",
      },
      {
        label: "Creature",
      },
      {
        label: "Avatar",
      },
      {
        label: "1G",
      },
      {
        label: "1",
      },
      {
        label: "1",
      },
    ],
  ],
];

export const OPTIONS_DEMO = [
  {
    id: "00",
    value: "xs",
    label: <IconBookmark size="lg" />,
    // icon: size === "xs" ? <IconSlash /> : <IconDash />,
  },

  {
    id: "22",
    value: "md",
    label: <IconHeart size="lg" />,
    // icon: size === "md" ? <IconSlash /> : <IconDash />,
  },
  {
    id: "33",
    value: "lg",
    label: <IconPin size="lg" />,
    // icon: size === "lg" ? <IconSlash /> : <IconDash />,
  },
  {
    id: "000",
    value: "divider",
    label: "",
  },
  // {
  //   id: "0000",
  //   value: "title",
  //   label: "Social",
  // },
  {
    id: "11",
    value: "sm",
    label: <IconGithub size="lg" />,
    // icon: size === "sm" ? <IconSlash /> : <IconDash />,
  },
  {
    id: "00000",
    value: "twitter",
    label: <IconTwitter size="lg" />,
    // icon: <IconDash />,
  },
  {
    id: "0000000",
    value: "ig",
    label: <IconIg size="lg" />,
    // icon: <IconDash />,
  },
];

export const PINS = [
  {
    label: "User Input",
    y: "10%",
    step: 1,
  },
  {
    label: "Primitives",
    y: "22%",
    step: 2,
  },
  {
    label: "Stats",
    y: "34%",
    step: 3,
  },
  {
    label: "ScrollUnit",
    y: "60%",
    step: 4,
  },
  {
    label: "CSS ",
    y: "69%",
    step: 5,
  },
  {
    label: "Hooks",
    y: "92%",
    step: 6,
  },
];
