import { print, readline } from '../cli.js';
import { getRandomInt, isEven } from '../utils.js';

// Game mechanic constants
const ATTEMPT_TO_WIN = 3;
const INTERVAL_FROM = 1;
const INTERVAL_TO = 50;

// UI Constants
const RIGHT_ANSWER_MSG = 'Correct!';
const USER_YES = 'yes';
const USER_NO = 'no';
const GAME_RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameOverMessage = (userAnswer, rightAnswer, userName) => `
    "${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".
    Let's try again, ${userName}!
`;

const playRound = (userName) => {
  const randomInt = getRandomInt(INTERVAL_FROM, INTERVAL_TO);

  print(`Question: ${randomInt}`);
  const userAnswer = readline('Your answer: ');
  const rightAnswer = isEven(randomInt) ? USER_YES : USER_NO;
  const isAnswerRight = userAnswer === rightAnswer;

  if (isAnswerRight) {
    print(RIGHT_ANSWER_MSG);
  } else {
    print(getGameOverMessage(userAnswer, rightAnswer, userName));
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
