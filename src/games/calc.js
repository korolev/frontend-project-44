import { print, readline } from '../cli.js';
import { runGame } from '../index.js';
import {
  mult, subtract, add, getRandomArrayValue, getRandomInt,
} from '../utils.js';

// Game mechanic constants
const OPERATORS = {
  add: '+',
  subtract: '-',
  mult: '*',
};
const INTERVAL_FROM = 1;
const INTERVAL_TO = 50;

// UI Constants
const RIGHT_ANSWER_MSG = 'Correct!';
const DESCRIPTION = 'What is the result of the expression?';

const printGameOverMessage = (question, userAnswer, rightAnswer, userName) => print(`
Question: ${question}
Your answer: ${userAnswer}
'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!
`);

const calc = (operator, a, b) => {
  switch (operator) {
    case OPERATORS.add:
      return add(a, b);
    case OPERATORS.subtract:
      return subtract(a, b);
    case OPERATORS.mult:
      return mult(a, b);
    default:
      return 0;
  }
};

const playRound = (userName) => {
  const firstInt = getRandomInt(INTERVAL_FROM, INTERVAL_TO);
  const secondInt = getRandomInt(INTERVAL_FROM, INTERVAL_TO);
  const randomOperation = getRandomArrayValue(Object.values(OPERATORS));
  const question = `${firstInt} ${randomOperation} ${secondInt}`;
  const rightAnswer = calc(randomOperation, firstInt, secondInt);

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
