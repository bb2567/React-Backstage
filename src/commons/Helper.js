export function urlParamsToObject(str) {
  if (!str) {
    return null;
  }
  str = str.slice(1);
  let pareArr = str.split("&");
  let result = {};
  pareArr.forEach((item) => {
    let keyValueArr = item.split("=");
    result[keyValueArr[0]] =keyValueArr[1]
  });
  return result
}
 