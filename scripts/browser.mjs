import { existsSync } from 'node:fs';
import { chromium } from 'playwright-core';

const candidates = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);

export const executablePath = candidates.find((candidate) =>
  existsSync(candidate),
);

export const launchBrowser = async () => {
  if (!executablePath) {
    throw new Error(
      'No Chrome/Edge executable found. Set CHROME_PATH to a Chromium browser.',
    );
  }
  return chromium.launch({ executablePath, headless: true });
};

export const testBase = process.env.PREVIEW_URL || 'http://127.0.0.1:4321';
