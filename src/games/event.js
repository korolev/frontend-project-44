import { print, readline } from '../cli.js';
import { runGame } from '../index.js';
import { getRandomInt, isEven } from '../utils.js';

// Game mechanic constants
const INTERVAL_FROM = 1;
const INTERVAL_TO = 50;

// UI Constants
const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';
const RIGHT_ANSWER_MSG = 'Correct!';
const USER_YES = 'yes';
const USER_NO = 'no';

const printGameOverMessage = (userAnswer, rightAnswer, userName) => print(`
"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".
Let's try again, ${userName}!
`);

const playRound = (userName) => {
  const randomInt = getRandomInt(INTERVAL_FROM, INTERVAL_TO);
  const rightAnswer = isEven(randomInt) ? USER_YES : USER_NO;

  print(`Question: ${randomInt}`);

  const userAnswer = readline('Your answer: ');

  if (userAnswer === rightAnswer) {
    print(RIGHT_ANSWER_MSG);
    return true;
  }

  printGameOverMessage(userAnswer, rightAnswer, userName);
  return false;
};

export default (userName) => runGame({
  userName,
  playRound,
  gameDescription: DESCRIPTION,
});
