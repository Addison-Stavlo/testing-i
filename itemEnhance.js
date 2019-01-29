module.exports = {
  success,
  failure
};
function nameItem(item) {
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
}

function success(item) {
  if (item.level >= 20) {
    return item;
  } else {
    item.level += 1;
    nameItem(item);
    return item;
  }
}

function failure(item) {
  if (item.level <= 4) {
    return success(item);
  }
  if (item.level <= 6 && item.type === "weapon") {
    return success(item);
  }

  if (item.level <= 14) {
    item.durability = Math.max(0, item.durability - 5);
  } else {
    item.durability = Math.max(0, item.durability - 10);
    if (item.level > 16) {
      item.level -= 1;
      nameItem(item);
    }
  }
  return item;
}
