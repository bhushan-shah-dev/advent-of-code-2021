const INPUT_FILE = "./input.txt";

enum DIRECTION {
  Forward = "forward",
  Up = "up",
  Down = "down",
}

const commands = new TextDecoder("utf-8").decode(
  await Deno.readFile(INPUT_FILE, {}),
).split("\n");

function partOne() {
  let horizontal = 0, depth = 0;
  commands.forEach((command) => {
    const [direction, stepSizeString] = command.split(" ");
    const stepSize = parseInt(stepSizeString);
    switch (direction) {
      case DIRECTION.Forward:
        horizontal += stepSize;
        break;
      case DIRECTION.Up:
        depth -= stepSize;
        break;
      case DIRECTION.Down:
        depth += stepSize;
        break;
      default:
        break;
    }
  });

  console.log(horizontal * depth);
}

function partTwo() {
  let horizontal = 0, depth = 0, aim = 0;
  commands.forEach((command) => {
    const [direction, stepSizeString] = command.split(" ");
    const stepSize = parseInt(stepSizeString);
    switch (direction) {
      case DIRECTION.Forward:
        horizontal += stepSize;
        depth += aim * stepSize;
        break;
      case DIRECTION.Up:
        aim -= stepSize;
        break;
      case DIRECTION.Down:
        aim += stepSize;
        break;
      default:
        break;
    }
  });

  console.log(horizontal * depth);
}

partOne();
partTwo();
