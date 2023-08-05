import { clone } from "./clone";

const obj: any = {
  data: 1,
  children: [
    {
      data: 2,
      parent: null,
      func: () => console.log("hi"),
    },
  ],
};

const a = ["hello"];

const target = clone(a);

console.log(target);
