/**
 * Deep clones an object or array, including nested objects and arrays.
 *
 * @template T - The type of the source object.
 * @param {T} source - The object or array to clone.
 * @param {WeakMap<T, any>} [map] - An optional WeakMap to keep track of cloned objects
 * and avoid circular references. Default is an empty WeakMap.
 * @returns {T} A deep clone of the source object with the same structure and values.
 */
export function clone<T extends object>(
  source: T,
  map = new WeakMap<T, any>()
): T {
  if (source === null || typeof source !== "object") {
    return source;
  }

  if (map.has(source)) {
    return map.get(source);
  }

  let target: T;
  if (Array.isArray(source)) {
    target = source.map((item) => clone(item, map)) as T;
  } else if (source instanceof Set) {
    target = new Set(source) as T;
  } else if (source instanceof Map) {
    target = new Map(
      Array.from(source, ([key, value]) => [key, clone(value, map)])
    ) as T;
  } else if (source instanceof Date) {
    target = new Date(source.getTime()) as T;
  } else if (source instanceof RegExp) {
    target = new RegExp(source.source, source.flags) as T;
  } else {
    target = {} as T;
  }
  map.set(source, target);

  return Object.assign(
    target,
    ...Object.keys(source).map((key) => ({
      [key]: clone(source[key as keyof T], map),
    }))
  );
}
