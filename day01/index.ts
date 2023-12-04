import * as fs from "fs"

const input = "day01/input.txt"

function part1() {
  let sum = 0

  fs.readFileSync(input, "utf-8")
    .split("\n")
    .forEach((line) => {
      const regex = /\d/g
      const resultArray = line.match(regex)! //bang operator so we exclude null values (which will never happen)

      const num1 = parseInt(resultArray[0])
      const num2 = parseInt(resultArray[resultArray.length - 1])

      sum += parseInt(`${num1}${num2}`)
    })

  return sum
}

function part2() {
  let sum = 0

  const dict: { [key: string]: string } = {
    on: "1",
    tw: "2",
    thre: "3",
    four: "4",
    fiv: "5",
    six: "6",
    seve: "7",
    eigh: "8",
    nin: "9",
  }

  fs.readFileSync(input, "utf-8")
    .split("\n")
    .forEach((line) => {
      const regex = /\d|on(?=e)|tw(?=o)|thre(?=e)|four|fiv(?=e)|six|seve(?=n)|eigh(?=t)|nin(?=e)/g
      const resultArray = line.match(regex)! //bang operator so we exclude null values (which will never happen)

      let num1: string = resultArray[0]
      let num2: string = resultArray[resultArray.length - 1]

      if (num1 in dict) {
        num1 = dict[`${num1}`]
      }

      if (num2 in dict) {
        num2 = dict[`${num2}`]
      }

      sum += parseInt(num1 + num2)
    })

  return sum
}

console.log("----Part 1----")
console.log(part1()) //53974

console.log("----Part 2----")
console.log(part2()) //52840
