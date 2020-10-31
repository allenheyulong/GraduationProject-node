export const dbResIntoVo = (targetTemplate: [], sources: []) => {
  function makeNewResObject(templateKeys: string [], obj2: object) {
    let newObject = Object.create(null);
    for (let i = 0; i < templateKeys.length; i++) {
      newObject[templateKeys[i]] = obj2[templateKeys[i]];
    }
    return newObject;
  }

  // 遍历source
  let res = [];
  for (let i = 0; i < sources.length; i++) {
    let curSourceItem = sources[i];
    res.push(makeNewResObject(targetTemplate, curSourceItem));
  }
  return res;
}
