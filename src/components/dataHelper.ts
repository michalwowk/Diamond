import { AlphabetCharacters, alphabet } from "../utils/utils";

export const getDiamondLetters = (inputLetter: AlphabetCharacters) => {
  const characterPosition = alphabet.indexOf(inputLetter);
  const diamondLetters = alphabet.slice(0, characterPosition + 1);

  return diamondLetters;
};

export const getSpacesAroundLetters = (
  diamondLetters: ReturnType<typeof getDiamondLetters>,
  currentLetter: AlphabetCharacters
) => {
  const currentLetterIndex = diamondLetters.indexOf(currentLetter);
  const spacesAround = diamondLetters.length - currentLetterIndex - 1;

  return spacesAround;
};

export const getNumberOfSpacesBetween = (
  diamondLetters: ReturnType<typeof getDiamondLetters>,
  spacesAround: number
) => {
  const totalWidth = diamondLetters.length * 2 - 1;
  const numberOfSpacesBetween = totalWidth - spacesAround * 2 - 2;

  if (numberOfSpacesBetween < 0) {
    return 0;
  }

  return numberOfSpacesBetween;
};

export const createDiamondArray = (inputLetter: AlphabetCharacters) => {
    const diamondLetters = getDiamondLetters(inputLetter);
    
    
    const diamondLettersArrayTop = diamondLetters.map((letter) => {
      const spacesAround = getSpacesAroundLetters(diamondLetters, letter);
      const spacesBetween = getNumberOfSpacesBetween(
        diamondLetters,
        spacesAround
      );
  
      return { spacesAround, spacesBetween, letter };
    });
  
    const diamondLettersArrayBottom = [...diamondLettersArrayTop].reverse().slice(1);

    return [...diamondLettersArrayTop, ...diamondLettersArrayBottom];
  };
