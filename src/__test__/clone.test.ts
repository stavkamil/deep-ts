import { clone } from "../index";

describe("clone function", () => {
  test("should clone a simple object", () => {
    const obj = { name: "John", age: 30 };
    const clonedObj = clone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  test("should clone a nested object", () => {
    const obj = {
      name: "John",
      age: 30,
      address: { city: "New York", country: "USA" },
    };
    const clonedObj = clone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj.address).not.toBe(obj.address);
  });

  test("should clone a deeply nested object", () => {
    const originalObj = {
      id: 1,
      name: "John",
      data: {
        items: [1, 2, 3],
        set: new Set(["a", "b", "c"]),
        nested: {
          prop1: "Hello",
          prop2: "World",
          fn: () => console.log("Hello, World!"),
        },
      },
    };

    const clonedObj = clone(originalObj);
    expect(clonedObj).toEqual(originalObj);
    expect(clonedObj).not.toBe(originalObj);
    expect(clonedObj.data.items).toEqual(originalObj.data.items);
    expect(clonedObj.data.items).not.toBe(originalObj.data.items);
    expect(clonedObj.data.set).toEqual(originalObj.data.set);
    expect(clonedObj.data.set).not.toBe(originalObj.data.set);
    expect(clonedObj.data.nested).toEqual(originalObj.data.nested);
    expect(clonedObj.data.nested).not.toBe(originalObj.data.nested);
    expect(clonedObj.data.nested.fn).toBeInstanceOf(Function);
  });

  test("should clone an array", () => {
    const arr = [1, 2, 3, 4];
    const clonedArr = clone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
  });

  test("should clone a set", () => {
    const set = new Set([1, 2, 3]);
    const clonedSet = clone(set);
    expect(clonedSet).toEqual(set);
    expect(clonedSet).not.toBe(set);
  });

  test("should clone a map", () => {
    const map = new Map([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]);
    const clonedMap = clone(map);
    expect(clonedMap).toEqual(map);
    expect(clonedMap).not.toBe(map);
  });

  test("should clone a RegExp", () => {
    const regex = /test/i;
    const clonedRegex = clone(regex);
    expect(clonedRegex).toEqual(regex);
    expect(clonedRegex).not.toBe(regex);
  });

  test("should clone a Date", () => {
    const date = new Date();
    const clonedDate = clone(date);
    expect(clonedDate).toEqual(date);
    expect(clonedDate).not.toBe(date);
  });

  test("should handle circular references", () => {
    const obj: any = { name: "John" };
    obj.self = obj;
    const clonedObj = clone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj.self).toBe(clonedObj);
  });
});
