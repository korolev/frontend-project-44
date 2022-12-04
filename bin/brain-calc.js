#!/usr/bin/env node
import { greeting } from '../src/index.js';
import playCalc from '../src/games/calc.js';

const userName = greeting();
playCalc(userName);
