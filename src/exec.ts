import { on, off, trigger } from "./";

const foo = () => {
  console.log("Do foo");
};

on("foo", foo);

on("foo", () => {
  console.log("Do some other foo");
});

on("foo", (arg1: string, arg2: string) => {
  console.log("here are my args", arg1, arg2);
});

off("foo", foo);

trigger("foo", "abc", "efg");
