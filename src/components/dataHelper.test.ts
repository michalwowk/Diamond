import { describe, expect, test } from "@jest/globals";
import {
  createDiamondArray,
  getDiamondLetters,
  getNumberOfSpacesBetween,
  getSpacesAroundLetters,
} from "./dataHelper";

describe("Diamond Component", () => {
  test("getDiamondLetters returns proper array of letters", () => {
    expect(getDiamondLetters("D")).toStrictEqual(["A", "B", "C", "D"]);
  });

  describe.each`
    letter | expected
    ${"A"} | ${8}
    ${"B"} | ${7}
    ${"C"} | ${6}
    ${"D"} | ${5}
    ${"E"} | ${4}
    ${"F"} | ${3}
    ${"G"} | ${2}
    ${"H"} | ${1}
    ${"I"} | ${0}
  `("getSpacesAroundLetters function", ({ letter, expected }) => {
    test(`returns ${expected} spaces when letter is ${letter}, for "I" diamond`, () => {
      const diamondLetters = getDiamondLetters("I");
      expect(getSpacesAroundLetters(diamondLetters, letter)).toBe(expected);
    });
  });

  describe.each`
    letter | expected
    ${"A"} | ${0}
    ${"B"} | ${1}
    ${"C"} | ${3}
    ${"D"} | ${5}
    ${"E"} | ${7}
    ${"F"} | ${9}
    ${"G"} | ${11}
    ${"H"} | ${13}
    ${"I"} | ${15}
  `("getNumberOfSpacesBetween function", ({ letter, expected }) => {
    test(`returns ${expected} spaces between when letter is ${letter}, for "I" diamond`, () => {
      const diamondLetters = getDiamondLetters("I");
      const spacesAround = getSpacesAroundLetters(diamondLetters, letter);

      expect(getNumberOfSpacesBetween(diamondLetters, spacesAround)).toBe(
        expected
      );
    });
  });

  describe.each`
    letter | expected
    ${"C"} | ${[{ letter: "A", spacesAround: 2, spacesBetween: 0 }, { letter: "B", spacesAround: 1, spacesBetween: 1 }, { letter: "C", spacesAround: 0, spacesBetween: 3 }, { letter: "B", spacesAround: 1, spacesBetween: 1 }, { letter: "A", spacesAround: 2, spacesBetween: 0 }]}
  `("getNumberOfSpacesBetween function", ({ letter, expected }) => {
    test(`returns ${JSON.stringify(expected, null, 2)} data for "I" diamond`, () => {
      expect(createDiamondArray("C")).toStrictEqual(expected);
    });
  });
});

//Example diamond just to imagine that.
//        A             |8 0
//       B B            |7 1
//      C   C           |6 3
//     D     D          |5 5
//    E       E         |4 7
//   F         F        |3 9
//  G           G       |2 11
// H             H      |1 13
//I               I     |0 15
// H             H      |1 13
//  G           G       |2 11
//   F          F       |3 9
//    E        E        |4 7
//     D      D         |5 5
//      C   C           |6 3
//       B B            |7 1
//        A             |8 0
