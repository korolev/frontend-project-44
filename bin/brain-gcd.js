#!/usr/bin/env node
import { greeting } from '../src/index.js';
import playGCD from '../src/games/gcd.js';

const userName = greeting();
playGCD(userName);
