#!/usr/bin/env node
import { greeting } from '../src/index.js';
import playEven from '../src/games/event.js';

const userName = greeting();
playEven(userName);
