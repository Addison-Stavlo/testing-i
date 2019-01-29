//import code to test
const itemEnhance = require("./itemEnhance.js");

describe("success() method", () => {
  test("success increases level", () => {
    //setup
    const exampleWeapon = {
      baseName: "Elven Warblade",
      name: "Elven Warblade",
      type: "weapon",
      durability: 100,
      level: 0
    };
    const expectedOutput = {
      baseName: "Elven Warblade",
      name: "[+1] Elven Warblade",
      type: "weapon",
      durability: 100,
      level: 1
    };
    // execute SUT (system under test)
    const testedItem = itemEnhance.success(exampleWeapon);

    // assert / compare
    expect(testedItem).toEqual(expectedOutput);
  });

  test("returns [PRI] for level 16", () => {
    //setup
    const exampleWeapon = {
      baseName: "Elven Warblade",
      name: "[+15] Elven Warblade",
      type: "weapon",
      durability: 100,
      level: 15
    };
    const expectedOutput = {
      baseName: "Elven Warblade",
      name: "[PRI] Elven Warblade",
      type: "weapon",
      durability: 100,
      level: 16
    };
    //execute SUT
    const testedItem = itemEnhance.success(exampleWeapon);
    //assert/compare
    expect(testedItem).toEqual(expectedOutput);
  });

  test("max level is 20", () => {
    //setup
    const exampleWeapon = {
      baseName: "Elven Warblade",
      name: "[PEN] Elven Warblade",
      type: "weapon",
      durability: 100,
      level: 20
    };
    const expectedOutput = {
      baseName: "Elven Warblade",
      name: "[PEN] Elven Warblade",
      type: "weapon",
      durability: 100,
      level: 20
    };
    //execute SUT
    const testedItem = itemEnhance.success(exampleWeapon);
    //assert/compare
    expect(testedItem).toEqual(expectedOutput);
  });
});

describe("failure() method", () => {
  test("level 4 armor cant fail", () => {
    //setup
    const exampleArmor = {
      baseName: "Dwarven Bladestopper",
      name: "[+4] Dwarven Bladestopper",
      type: "armor",
      durability: 100,
      level: 4
    };
    const expectedOutput = {
      baseName: "Dwarven Bladestopper",
      name: "[+5] Dwarven Bladestopper",
      type: "armor",
      durability: 100,
      level: 5
    };
    //execute SUT
    const testedItem = itemEnhance.failure(exampleArmor);
    //assert/compare
    expect(testedItem).toEqual(expectedOutput);
  });
  test("level 6 weapon can't fail", () => {
    const exampleWeapon = {
      baseName: "Dwarven Axe",
      name: "[+6] Dwarven Axe",
      type: "weapon",
      durability: 100,
      level: 6
    };
    const expectedOutput = {
      baseName: "Dwarven Axe",
      name: "[+7] Dwarven Axe",
      type: "weapon",
      durability: 100,
      level: 7
    };
    //execute SUT
    const testedItem = itemEnhance.failure(exampleWeapon);
    //assert/compare
    expect(testedItem).toEqual(expectedOutput);
  });
  test("failure below level 15 loses 5 durability", () => {
    const exampleWeapon = {
      baseName: "Dwarven Axe",
      name: "[+10] Dwarven Axe",
      type: "weapon",
      durability: 100,
      level: 10
    };
    const expectedOutput = {
      baseName: "Dwarven Axe",
      name: "[+10] Dwarven Axe",
      type: "weapon",
      durability: 95,
      level: 10
    };
    //execute SUT
    const testedItem = itemEnhance.failure(exampleWeapon);
    //assert
    expect(testedItem).toEqual(expectedOutput);
  });
  test("failure above level 14 loses 10 durability", () => {
    const exampleWeapon = {
      baseName: "Dwarven Axe",
      name: "[+15] Dwarven Axe",
      type: "weapon",
      durability: 100,
      level: 15
    };
    const expectedOutput = {
      baseName: "Dwarven Axe",
      name: "[+15] Dwarven Axe",
      type: "weapon",
      durability: 90,
      level: 15
    };
    //execute SUT
    const testedItem = itemEnhance.failure(exampleWeapon);
    //asser
    expect(testedItem).toEqual(expectedOutput);
  });
  test("failure above level 16 loses a level", () => {
    const exampleWeapon = {
      baseName: "Dwarven Axe",
      name: "[DUO] Dwarven Axe",
      type: "weapon",
      durability: 100,
      level: 17
    };
    const expectedOutput = {
      baseName: "Dwarven Axe",
      name: "[PRI] Dwarven Axe",
      type: "weapon",
      durability: 90,
      level: 16
    };
    //execute SUT
    const testedItem = itemEnhance.failure(exampleWeapon);
    //assert
    expect(testedItem).toEqual(expectedOutput);
  });
});
