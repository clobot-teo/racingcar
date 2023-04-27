const readline = require('readline')
const { stdin, stdout } = require('process')

export const input = (msg: string) => {
  const rl = readline.createInterface({ input: stdin, output: stdout })

  return new Promise((resolve) => {
    rl.question(msg, (answer: string) => {
      resolve(answer)
      rl.close()
    })
  })
}
