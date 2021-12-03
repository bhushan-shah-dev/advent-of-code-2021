const INPUT_FILE = "./input.txt";

const binaryNumbers = new TextDecoder("utf-8").decode(
  await Deno.readFile(INPUT_FILE, {}),
).split("\n");

const numberLength = binaryNumbers[0].length;

function partOne() {
  const gammaRateBits: string[] = [];

  for (let i = 0; i < numberLength; i++) {
    gammaRateBits.push(
      binaryNumbers.map((binaryNumber) => binaryNumber[i]).filter((value) =>
          value === "0"
        ).length > binaryNumbers.length / 2
        ? "0"
        : "1",
    );
  }
  const epsilonRateBits = gammaRateBits.map((bit) => bit === "0" ? "1" : "0");

  const gammaRate = parseInt(gammaRateBits.join(""), 2);
  const epsilonRate = parseInt(epsilonRateBits.join(""), 2);

  console.log(gammaRate * epsilonRate);
}

function partTwo() {
  let oxygenGeneratorRatingRunningList = Array.from(binaryNumbers),
    co2ScrubberRatingRunningList = Array.from(binaryNumbers);

  let currentBitIndex = 0;
  do {
    const mostCommonBit =
      oxygenGeneratorRatingRunningList.map((binaryNumber) =>
          binaryNumber[currentBitIndex]
        ).filter((value) => value === "0").length >
          oxygenGeneratorRatingRunningList.length / 2
        ? "0"
        : "1";
    oxygenGeneratorRatingRunningList = oxygenGeneratorRatingRunningList.filter(
      (binaryNumber) => binaryNumber[currentBitIndex] === mostCommonBit,
    );
    currentBitIndex++;
  } while (
    oxygenGeneratorRatingRunningList.length > 1
  );

  currentBitIndex = 0;
  do {
    const leastCommonBit =
      co2ScrubberRatingRunningList.map((binaryNumber) =>
          binaryNumber[currentBitIndex]
        ).filter((value) => value === "1").length <
          co2ScrubberRatingRunningList.length / 2
        ? "1"
        : "0";
    co2ScrubberRatingRunningList = co2ScrubberRatingRunningList.filter(
      (binaryNumber) => binaryNumber[currentBitIndex] === leastCommonBit,
    );
    currentBitIndex++;
  } while (
    co2ScrubberRatingRunningList.length > 1
  );

  const oxygenGeneratorRating = parseInt(
    oxygenGeneratorRatingRunningList[0],
    2,
  );
  const co2ScrubberRating = parseInt(co2ScrubberRatingRunningList[0], 2);

  console.log(oxygenGeneratorRating * co2ScrubberRating);
}

partOne();
partTwo();
