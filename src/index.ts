type Handlers = Record<string, Function[]>;

const handlers: Handlers = {};

export const on = (type: string, handler: Function): void => {
  if (!handlers[type]) {
    handlers[type] = [];
  }
  handlers[type].push(handler);
};

export const off = (type: string, handler: Function): void => {
  if (!handlers[type]) return;
  handlers[type] = handlers[type].filter((func) => func !== handler);
};

export const trigger = (type: string, ...args: any[]): void => {
  if (!handlers[type]) return;
  handlers[type].forEach((func) => func(...args));
};

// const foo = () => {
//   console.log("Do foo");
// };

// on("foo", foo);

// on("foo", () => {
//   console.log("Do some other foo");
// });

// on("foo", (arg1: string, arg2: string) => {
//   console.log("here are my args", arg1, arg2);
// });

// off("foo", foo);

// trigger("foo", "abc", "efg");
