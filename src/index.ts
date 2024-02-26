export {};

// EXAMPLE 1 - Use the map() method with Enums in TypeScript

// ✅ For String Enums
enum Sizes {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
}

const result = (Object.keys(Sizes) as (keyof typeof Sizes)[]).map(
  (key, index) => {
    console.log(key);
    return Sizes[key] + index;
  },
);

// 👇️ ['S0', 'M1', 'L2']
console.log(result);

// ---------------------------------------------------

// // EXAMPLE 2

// // ✅ For Numeric Enums
// enum SizesNumeric {
//   Small,
//   Medium,
//   Large,
// }

// const result = (
//   Object.keys(SizesNumeric).filter((v) =>
//     isNaN(Number(v)),
//   ) as (keyof typeof SizesNumeric)[]
// ).map((key, index) => {
//   return SizesNumeric[key];
// });

// // 👇️ [0, 1, 2]
// console.log(result);

// ---------------------------------------------------

// // EXAMPLE 3 - Mapping over the values of an Enum in TypeScript

// enum Sizes {
//   Small = 'S',
//   Medium = 'M',
//   Large = 'L',
// }

// const keys1 = Object.keys(Sizes);
// console.log(keys1); // 👉️ ['Small', 'Medium', 'Large']

// const values1 = Object.values(Sizes);
// console.log(values1); // 👉️ ['S', 'M', 'L']

// ---------------------------------------------------

// // EXAMPLE 4 - With NUMERIC enums

// enum SizesNumeric {
//   Small,
//   Medium,
//   Large,
// }

// const keys = Object.keys(SizesNumeric).filter((v) => isNaN(Number(v)));
// console.log(keys); // 👉️ ['Small', 'Medium', 'Large']

// const values = Object.values(SizesNumeric).filter((v) => !isNaN(Number(v)));
// console.log(values); // 👉️ [0, 1, 2]
