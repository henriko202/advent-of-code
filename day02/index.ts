import * as fs from "fs"

const input = "day02/input.txt"

function part1() {
  let sum = 0
  const regex = /\d+/

  fs.readFileSync(input, "utf-8")
    .replace(/(\r)/gm, "")
    .split("\n")
    .forEach((line) => {
      const gameIndex = line.split("Game ")[1].split(":")[0]
      const game = line.split(": ")[1].split("; ")
      let flag = true

      game.forEach((presents) => {
        let maxNumbers = {
          red: 12,
          green: 13,
          blue: 14,
        }

        const present = presents.replace(/(\r\n|\n|\r)/gm, "")

        present.split(",").forEach((cube) => {
          cube = cube.trim()
          const quantity = parseInt(cube.match(regex)![0])
          const pos = cube.split(" ")[1] as "red" | "green" | "blue"

          if (flag === false) return

          if (quantity <= maxNumbers[`${pos}`]) {
            maxNumbers[`${pos}`] -= quantity
          } else {
            maxNumbers[`${pos}`] -= quantity
            flag = false
            return
          }
        })
      })

      if (flag) sum += parseInt(gameIndex)
    })

  return sum
}

function part2() {
  let sum = 0
  const regex = /\d+/

  fs.readFileSync(input, "utf-8")
    .split("\n")
    .forEach((line) => {
      const game = line.split(": ")[1].split("; ")

      let maxNumbers = {
        red: 0,
        green: 0,
        blue: 0,
      }

      game.forEach((presents) => {
        const present = presents.replace(/(\r\n|\n|\r)/gm, "")

        present.split(",").forEach((cube) => {
          cube = cube.trim()
          const quantity = parseInt(cube.match(regex)![0])
          const pos = cube.split(" ")[1] as "red" | "green" | "blue"

          if (quantity > maxNumbers[`${pos}`]) {
            maxNumbers[`${pos}`] = quantity
          }
        })
      })

      sum += maxNumbers.red * maxNumbers.green * maxNumbers.blue
    })

  return sum
}

console.log("----Part 1----")
console.log(part1())

console.log("----Part 2----")
console.log(part2())
