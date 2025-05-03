import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  token: process.env.DISCORD_TOKEN || '',
  prefix: process.env.PREFIX || '!'
};

export default config;