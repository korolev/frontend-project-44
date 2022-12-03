import readlineSync from 'readline-sync';

export const { log: print } = console;

export const readline = (question) => readlineSync.question(question);

export const greeting = () => {
  print('Welcome to the Brain Games!');
  const name = readline('May I have your name? ');
  print(`Hello, ${name}!`);

  return name;
};
