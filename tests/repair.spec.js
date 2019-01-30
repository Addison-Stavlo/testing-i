const itemEnhance = require("../itemEnhance.js");

describe("repair() method", () => {
  test("repairs item to 100 durability", () => {
    const exampleWeapon = {
      baseName: "Dwarven Axe",
      name: "[PRI] Dwarven Axe",
      type: "weapon",
      durability: 1,
      level: 17
    };
    const expectedOutput = {
      baseName: "Dwarven Axe",
      name: "[PRI] Dwarven Axe",
      type: "weapon",
      durability: 100,
      level: 17
    };
    //execute SUT
    const testedItem = itemEnhance.repair(exampleWeapon);
    //assert
    expect(testedItem).toEqual(expectedOutput);
  });
});
