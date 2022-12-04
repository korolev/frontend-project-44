#!/usr/bin/env node
import { greeting } from '../src/index.js';
import playProgression from '../src/games/progression.js';

const userName = greeting();
playProgression(userName);
