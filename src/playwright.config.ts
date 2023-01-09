import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'pnpm ci:start',
    url: 'http://localhost:3000',
  },
};

export default config;