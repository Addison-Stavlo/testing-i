const itemEnhance = require("../itemEnhance.js");

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

  test("levels 14- cannot be enhanced if durability less than 25", () => {
    //setup
    const exampleWeapon = {
      baseName: "Elven Warblade",
      name: "[+14] Elven Warblade",
      type: "weapon",
      durability: 23,
      level: 14
    };
    const expectedOutput = {
      baseName: "Elven Warblade",
      name: "[+14] Elven Warblade",
      type: "weapon",
      durability: 23,
      level: 14
    };
    //execute SUT
    const testedItem = itemEnhance.success(exampleWeapon);
    //assert/compare
    expect(testedItem).toEqual(expectedOutput);
  });

  test("levels 15+ cannot be enhanced if durability less than 10", () => {
    const exampleWeapon = {
      baseName: "Elven Warblade",
      name: "[+15] Elven Warblade",
      type: "weapon",
      durability: 8,
      level: 15
    };
    const expectedOutput = {
      baseName: "Elven Warblade",
      name: "[+15] Elven Warblade",
      type: "weapon",
      durability: 8,
      level: 15
    };
    //execute SUT
    const testedItem = itemEnhance.success(exampleWeapon);
    //assert/compare
    expect(testedItem).toEqual(expectedOutput);
  });

  test("levels 15+ will still enhance below 25durability", () => {
    const exampleWeapon = {
      baseName: "Elven Warblade",
      name: "[+15] Elven Warblade",
      type: "weapon",
      durability: 18,
      level: 15
    };
    const expectedOutput = {
      baseName: "Elven Warblade",
      name: "[PRI] Elven Warblade",
      type: "weapon",
      durability: 18,
      level: 16
    };
    //execute SUT
    const testedItem = itemEnhance.success(exampleWeapon);
    //assert/compare
    expect(testedItem).toEqual(expectedOutput);
  });
});
