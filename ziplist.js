function ziplist(list, seclist) {
// eslint-disable-next-line no-empty
  const retList = [];
  for (let i = 0; i < list.length; i++) {
    retList.push(list[i], seclist[i]);
  }
  return retList;
}
console.log(ziplist(['1', '2', '3'], ['a', 'b', 'c']));

function ziplistSimpleWay(list, seclist) {
  return _.flatten(_.zip(list, seclist));
}

console.log(ziplistSimpleWay(['1', '2', '3'], ['a', 'b', 'c']));
