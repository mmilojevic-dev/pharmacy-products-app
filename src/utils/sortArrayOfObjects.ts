// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sortArrayOfObjects = (array: any[]) =>
  array.sort((a, b) => a.price - b.price)
