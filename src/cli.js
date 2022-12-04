import readlineSync from 'readline-sync';

export const { log: print } = console;

export const readline = (question) => readlineSync.question(question);
