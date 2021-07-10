import { on, off, trigger } from "../src";

describe("Event emitter", () => {
  const foo = jest.fn();
  const bar = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("executes all added handlers on trigger", () => {
    on("foo", foo);
    on("foo", bar);
    trigger("foo");
    expect(foo).toBeCalledTimes(1);
    expect(bar).toBeCalledTimes(1);
  });

  it("removes handler ", () => {
    off("foo", bar);
    trigger("foo");
    expect(foo).toBeCalledTimes(1);
    expect(bar).not.toBeCalled();
  });

  it("passes all arguments to the handler", () => {
    const args = ["a", 1, true];
    trigger("foo", ...args);
    expect(foo).toBeCalledTimes(1);
    expect(foo).toBeCalledWith(...args);
    expect(bar).not.toBeCalled();
  });

  it("does not break on non-existing type", () => {
    off("bar", bar);
    trigger("foo");
    expect(foo).toBeCalledTimes(1);
    expect(bar).not.toBeCalled();
  });

  it("does not trigger handler on non-existing type", () => {
    trigger("bar");
    expect(foo).not.toBeCalled();
    expect(bar).not.toBeCalled();
  });
});
