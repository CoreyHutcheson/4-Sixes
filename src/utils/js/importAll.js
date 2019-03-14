/**
 * Imports all from specified folder
 */
function importAll(r) {
  let obj = {};
  const removeFileExtension = str => str.replace(/\.\w+$/, "");

  r.keys().map(
    (item, index) =>
      (obj[removeFileExtension(item.replace("./", ""))] = r(item))
  );

  return obj;
}

export default importAll;
