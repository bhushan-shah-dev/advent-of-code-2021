const INPUT_FILE = "./input.txt";

const depths = new TextDecoder("utf-8").decode(
  await Deno.readFile(INPUT_FILE, {}),
).split("\n").map((item) => parseInt(item));

function partOne() {
  const result = depths.reduce((prev, curr, idx) => {
    return prev + (curr > depths[idx - 1] ? 1 : 0);
  }, 0);
  console.log(result);
}

function partTwo() {
  const depthsGroupedByThree = depths.map((_, idx, array) => {
    if (idx < array.length - 2) {
      return array[idx] + array[idx + 1] + array[idx + 2];
    }
  }).filter((item) => item) as number[];

  const result = depthsGroupedByThree.reduce((prev, curr, idx) => {
    return prev + (curr > depthsGroupedByThree[idx - 1] ? 1 : 0);
  }, 0);
  console.log(result);
}

partOne();
partTwo();
