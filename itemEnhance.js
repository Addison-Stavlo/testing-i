module.exports = {
  success
  //   fail,
  //   repair
};

function success(item) {
  if (item.level >= 20) {
    return item;
  } else {
    item.level += 1;
    if (item.level <= 15) {
      item.name = `[+${item.level}] ${item.baseName}`;
    } else {
      switch (item.level) {
        case 16:
          item.name = `[PRI] ${item.baseName}`;
          break;
        case 17:
          item.name = `[DUO] ${item.baseName}`;
          break;
        case 18:
          item.name = `[TRI] ${item.baseName}`;
          break;
        case 19:
          item.name = `[TET] ${item.baseName}`;
          break;
        case 20:
          item.name = `[PEN] ${item.baseName}`;
          break;
      }
    }
    return item;
  }
}