# Deep Clone Utility for TypeScript

A TypeScript utility function to perform deep cloning of objects, arrays, and other complex data structures.

## Usage

Import and use the `clone` function in your project:

```typescript
const sourceObject = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const clonedObject = clone(sourceObject);

console.log(clonedObject); // Outputs a deep clone of the sourceObject
```

## What is Deep Copy?

In JavaScript, a deep copy is a process of creating a new independent copy of a complex data structure, including nested objects, arrays, and other reference types.

### Shallow Copy vs. Deep Copy

- Shallow Copy: A shallow copy creates a new object, but the properties within it still refer to the same memory locations as the original object. Changing the properties in the shallow copy will also affect the original object.

- Deep Copy: A deep copy creates a completely new copy of the original object, including all nested properties. The cloned object is entirely independent of the original one.

### Why JSON.stringify() and structuredClone() Are Not Enough?

While `JSON.stringify` and `structuredClone` can handle simple JSON-serializable objects, they are limited when dealing with more complex data structures. These methods cannot clone functions, symbols, or objects with circular references. Additionally, the structuredClone algorithm has limited browser support and cannot clone non-structured data types.

## The Circular References Issue

One of the challenges in deep cloning is handling circular references. Circular references occur when an object references itself either directly or through a chain of references. Attempting to clone such objects without proper handling can lead to infinite recursion and stack overflow.

The `clone` function in this repository uses a `WeakMap` to keep track of cloned objects and avoid circular references. If an object is encountered more than once during cloning, the function will reuse the previously cloned object to break the circular chain.

## Inspiration and Sources

The `clone` function in this repository was inspired by various deep cloning implementations available in the JavaScript community. It builds upon the concept of recursive deep cloning while leveraging TypeScript type system to ensure type safety.

Sources:

- [MDN Web Docs - Deep copy](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy)
- [MDN Web Docs - Structured Clone Algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [fast-copy library](https://github.com/planttheidea/fast-copy)
- [rfdc library](https://github.com/davidmarkclements/rfdc)
- [clone-deep](https://github.com/jonschlinkert/clone-deep)
- [Stack Overflow - How to Deep Clone in JavaScript](https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript)
