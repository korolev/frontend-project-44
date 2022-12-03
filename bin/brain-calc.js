#!/usr/bin/env node
import { greeting } from '../src/cli.js';
import playCalc from '../src/games/calc.js';

const userName = greeting();
playCalc(userName);
