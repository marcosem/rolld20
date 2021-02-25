function rollDice(type: number, quantity: number): number | number[] {
  if (quantity < 1) return -1;

  if (quantity === 1) return Math.floor(Math.random() * type) + 1;

  const rolls: number[] = [];

  let i;
  for (i = 0; i < quantity; i += 1) {
    rolls.push(Math.floor(Math.random() * type) + 1);
  }
  return rolls;
}

function flipCoin(): string {
  const coinFace = Math.floor(Math.random() * 2);
  const coinArray = ['heads', 'tails'];

  return coinArray[coinFace];
}

function d2(dices = 1): number | number[] {
  return rollDice(2, dices);
}

function d3(dices = 1): number | number[] {
  return rollDice(3, dices);
}

function d4(dices = 1): number | number[] {
  return rollDice(4, dices);
}

function d6(dices = 1): number | number[] {
  return rollDice(6, dices);
}

function d8(dices = 1): number | number[] {
  return rollDice(8, dices);
}

function d10(dices = 1): number | number[] {
  return rollDice(10, dices);
}

function d12(dices = 1): number | number[] {
  return rollDice(12, dices);
}

function d20(dices = 1): number | number[] {
  return rollDice(20, dices);
}

function d30(dices = 1): number | number[] {
  return rollDice(30, dices);
}

function d60(dices = 1): number | number[] {
  return rollDice(60, dices);
}

function d100(dices = 1): number | number[] {
  return rollDice(100, dices);
}

function d1000(dices = 1): number | number[] {
  return rollDice(1000, dices);
}

function janKenPo(includeBomb = false): string {
  const jkp = Math.floor(Math.random() * (includeBomb ? 4 : 3));
  const jkpArray = ['rock', 'paper', 'scissors', 'bomb'];

  return jkpArray[jkp];
}

/*
interface IJanKenPoPlayers {
  player1: 'rock' | 'paper' | 'scissors' | 'bomb';
  player2: 'rock' | 'paper' | 'scissors' | 'bomb';
}
*/

function compareJanKenPo(player1: string, player2: string): number {
  if (
    player1 !== 'rock' &&
    player1 !== 'paper' &&
    player1 !== 'scissors' &&
    player1 !== 'bomb'
  ) {
    return -100;
  }

  if (
    player2 !== 'rock' &&
    player2 !== 'paper' &&
    player2 !== 'scissors' &&
    player2 !== 'bomb'
  ) {
    return -100;
  }

  if (player1 === player2) return 0;

  if (
    (player1 === 'rock' && player2 === 'scissors') ||
    (player1 === 'paper' && player2 === 'rock') ||
    (player1 === 'scissors' && (player2 === 'bomb' || player2 === 'paper')) ||
    (player1 === 'bomb' && (player2 === 'rock' || player2 === 'paper'))
  )
    return -1;

  return 1;
}

export {
  flipCoin,
  d2,
  d3,
  d4,
  d6,
  d8,
  d10,
  d12,
  d20,
  d30,
  d60,
  d100,
  d1000,
  janKenPo,
  compareJanKenPo,
};
