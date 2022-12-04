import { print, readline } from './cli.js';

const ROUNDS_COUNT = 3;

export function runGame({ userName, playRound, gameDescription }) {
  print(gameDescription);

  let atemptsLeft = ROUNDS_COUNT;

  while (atemptsLeft) {
    const isRoundSuccess = playRound(userName);

    if (isRoundSuccess) {
      atemptsLeft -= 1;

      if (atemptsLeft === 0) {
        print(`Congratulations, ${userName}!`);
      }
    } else {
      atemptsLeft = 0;
    }
  }
}

export const greeting = () => {
  print('Welcome to the Brain Games!');
  const name = readline('May I have your name? ');
  print(`Hello, ${name}!`);

  return name;
};
