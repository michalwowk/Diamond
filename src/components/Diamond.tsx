import { useMemo } from "react";
import { AlphabetCharacters } from "../utils/utils";
import { createDiamondArray } from "./dataHelper";

interface DiamondProps {
  character: AlphabetCharacters;
}

const renderSpaces = (numberOfSpaces: number) => {
  return Array.from(Array(numberOfSpaces).keys())
    .map(() => "\u00A0")
    .join("");
};

export const Diamond = ({ character }: DiamondProps) => {
  const data = useMemo(() => createDiamondArray(character), [character]);

  return (
    <>
      {data.map(({ spacesAround, spacesBetween, letter }, index) => {
        const isFirstRow = index === 0;
        const isLastRow = index === data.length - 1;

        const renderSecondLetter = !isFirstRow && !isLastRow;
        return (
          <div key={index}>
            {renderSpaces(spacesAround)}
            {letter}
            {renderSpaces(spacesBetween)}
            {renderSecondLetter && letter}
            {renderSpaces(spacesAround)}
          </div>
        );
      })}
    </>
  );
};
