import { print, readline } from '../cli.js';
import {
  mult, subtract, add, getRandomArrayValue, getRandomInt,
} from '../utils.js';

// Game mechanic constants
const OPERATORS = {
  add: '+',
  subtract: '-',
  mult: '*',
};
const ATTEMPT_TO_WIN = 3;
const INTERVAL_FROM = 1;
const INTERVAL_TO = 50;

// UI Constants
const RIGHT_ANSWER_MSG = 'Correct!';
const GAME_RULES = 'What is the result of the expression?';

const getGameOverMessage = (question, userAnswer, rightAnswer, userName) => `
Question: ${question}
Your answer: ${userAnswer}
'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!
`;

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

  print(`Question: ${question}`);
  const userAnswer = readline('Your answer: ');
  const rightAnswer = calc(randomOperation, firstInt, secondInt);
  const isAnswerRight = Number(userAnswer) === rightAnswer;

  if (isAnswerRight) {
    print(RIGHT_ANSWER_MSG);
  } else {
    print(getGameOverMessage(question, userAnswer, rightAnswer, userName));
  }

  return isAnswerRight;
};

export default function runGame(userName = 'John Doe') {
  const WIN_MSG = `Congratulations, ${userName}!`;

  print(GAME_RULES);

  let atemptsLeft = ATTEMPT_TO_WIN;

  while (atemptsLeft) {
    const isRoundSuccess = playRound(userName);

    if (isRoundSuccess) {
      atemptsLeft -= 1;

      if (atemptsLeft === 0) {
        print(WIN_MSG);
      }
    } else {
      atemptsLeft = 0;
    }
  }
}
