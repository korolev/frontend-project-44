#!/usr/bin/env node
import { greeting } from '../src/index.js';
import playPrime from '../src/games/prime.js';

const userName = greeting();
playPrime(userName);
