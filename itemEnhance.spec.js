//import code to test
const itemEnhance = require("./itemEnhance.js");

describe("success() method", () => {
  test("success increases level", () => {
    //setup
    const exampleWeapon = {
      baseName: "Elven Warblade",
      name: "Elven Warblade",
      type: "weapon",
      durability: 100, //starting & max 100
      level: 0 //starting, max 20
    };
    const expectedOutput = {
      baseName: "Elven Warblade",
      name: "[+1] Elven Warblade",
      type: "weapon",
      durability: 100, //starting & max 100
      level: 1 //starting, max 20
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
      durability: 100, //starting & max 100
      level: 15 //starting, max 20
    };
    const expectedOutput = {
      baseName: "Elven Warblade",
      name: "[PRI] Elven Warblade",
      type: "weapon",
      durability: 100, //starting & max 100
      level: 16 //starting, max 20
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
      durability: 100, //starting & max 100
      level: 20 //starting, max 20
    };
    const expectedOutput = {
      baseName: "Elven Warblade",
      name: "[PEN] Elven Warblade",
      type: "weapon",
      durability: 100, //starting & max 100
      level: 20 //starting, max 20
    };
    //execute SUT
    const testedItem = itemEnhance.success(exampleWeapon);
    //assert/compare
    expect(testedItem).toEqual(expectedOutput);
  });
});
