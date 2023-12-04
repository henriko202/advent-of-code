import * as fs from "fs"

const input = "dayXX/input.txt"

function part1() {
  let sum = 0

  fs.readFileSync(input, "utf-8")
    .replace(/(\r)/gm, "")
    .split("\n")
    .forEach((line) => {})

  return sum
}

function part2() {
  let sum = 0

  fs.readFileSync(input, "utf-8")
    .replace(/(\r)/gm, "")
    .split("\n")
    .forEach((line) => {})

  return sum
}

console.log("----Part 1----")
console.log(part1())

console.log("----Part 2----")
console.log(part2())
