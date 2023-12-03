const camelize = (str: string) => {
  const parts = str.split("_");
  const first = parts.shift();
  return [
    first,
    ...parts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)),
  ].join("");
};

export default camelize;

export const camelizeKeys = (obj: any) => {
  const newObj: any = {};
  Object.keys(obj).forEach((key) => {
    newObj[camelize(key)] = obj[key];
  });

  return newObj;
};
