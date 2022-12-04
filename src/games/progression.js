import { print, readline } from '../cli.js';
import { runGame } from '../index.js';
import { getRandomInt, getRandomArrayValue } from '../utils.js';

// Game mechanic constants
const INTERVAL_FROM = 1;
const INTERVAL_TO = 25;
const PROGRESSION_MIN_LEN = 5;
const PROGRESSION_MAX_LEN = 15;

// UI Constants
const DESCRIPTION = 'What number is missing in the progression?';
const RIGHT_ANSWER_MSG = 'Correct!';

const printGameOverMessage = (question, userAnswer, rightAnswer, userName) => print(`
Question: ${question}
Your answer: ${userAnswer}
'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!
`);

const generateProgression = (start, step, len) => {
  const res = [];

  let val = start;
  for (let i = 0; i < len; i += 1) {
    res[i] = val;
    val += step;
  }

  return res;
};

const playRound = (userName) => {
  const start = getRandomInt(INTERVAL_FROM, INTERVAL_TO);
  const step = getRandomInt(INTERVAL_FROM, INTERVAL_TO);
  const len = getRandomInt(PROGRESSION_MIN_LEN, PROGRESSION_MAX_LEN);
  const progression = generateProgression(start, step, len);
  const rightAnswer = getRandomArrayValue(progression);
  const question = progression.map((n) => (n === rightAnswer ? '..' : n)).join(' ');

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
