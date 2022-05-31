function getRandomIntDice() {
  return Math.floor(Math.random() * 6 + 1);
}

function diceRoller(times = process.argv[2]) {
  if (process.argv[2]) {
    const rollTimes = Number(process.argv[2])
    let result = []
    for (let i = 0; i < rollTimes; i++) {
      result.push(getRandomIntDice())
    }
    console.log(`Rolled ${times} dice: ${result.join()} `)
  } else {
    console.log('Please input how many dice you wanna to roll!')
  }
}

diceRoller()
