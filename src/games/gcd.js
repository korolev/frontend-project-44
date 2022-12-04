import { print, readline } from '../cli.js';
import { runGame } from '../index.js';
import { getRandomInt, greatestCommonDivisor } from '../utils.js';

// Game mechanic constants
const INTERVAL_FROM = 1;
const INTERVAL_TO = 100;

// UI Constants
const DESCRIPTION = 'Find the greatest common divisor of given numbers.';
const RIGHT_ANSWER_MSG = 'Correct!';

const printGameOverMessage = (question, userAnswer, rightAnswer, userName) => print(`
Question: ${question}
Your answer: ${userAnswer}
'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!
`);

const playRound = (userName) => {
  const firstInt = getRandomInt(INTERVAL_FROM, INTERVAL_TO);
  const secondInt = getRandomInt(INTERVAL_FROM, INTERVAL_TO);
  const question = `${firstInt} ${secondInt}`;
  const rightAnswer = greatestCommonDivisor(firstInt, secondInt);

  print(`Question: ${question}`);

  const userAnswer = readline('Your answer: ');

  if (Number(userAnswer) === rightAnswer) {
    print(RIGHT_ANSWER_MSG);
    return true;
  }

  printGameOverMessage(question, userAnswer, rightAnswer, userName);
  return false;
};

export default (userName) => runGame({
  userName,
  playRound,
  gameDescription: DESCRIPTION,
});
