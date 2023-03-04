"usestrict";
function convertCamelCase(str) {
  const splitStrings = str.split("-");
  if (splitStrings.length == 1) return splitStrings[0];
  if (splitStrings.length == 0) return str;
  const newStr =
    splitStrings[0] +
    splitStrings[1].charAt(0).toUpperCase() +
    splitStrings[1].slice(1);
  return newStr ;
}

export { convertCamelCase };
