<div align="center">

<img src="https://github.com/user-attachments/assets/4270251d-37a8-45d3-beac-f18d125a17b1" alt="Header Image" width="100%" />

# ✨ ts-discord-bot

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
<img src="https://img.shields.io/badge/discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="discord.js"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node"/>

</div>

<p align="right">
  <a href="README.md">日本語</a> | English
</p>

> **ts-discord-bot** is a simple Discord bot starter template implemented with **TypeScript + discord.js v14**.  
> It comes with the minimum structure you need, including command registration, event handling, and environment variable setup.

## Features
| Feature | Description |
| ---- | ---- |
| `!ping` | Responds with **Pong!** |
| `!help` | Shows the list of available message commands |
| Event handlers | Implements `ready`, `messageCreate`, and `interactionCreate` |
| Logger | Lightweight logger included (`src/utils/logger.ts`) |

> 💡 **Slash Command** support is not included out-of-the-box, but the command registration logic is extensible.

## Requirements
- Node.js **16.9.0 or higher**  
- npm, pnpm, or yarn  
- Discord Bot account & token  
- (Optional) OpenAI / GitHub token, etc.

## Installation
```bash
git clone https://github.com/Sunwood-ai-labs/ts-discord-bot.git
cd ts-discord-bot

# Install dependencies
npm install        # or pnpm install / yarn install
```

## Environment Variables
1. Copy the template  
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and set the following variables  
   | Variable | Purpose |
   |------|------|
   | `DISCORD_TOKEN` | Discord Bot token |
   | `PREFIX` | Prefix for message commands (default: `!`) |
   | others | See comments in `.env.example` |

## Usage
### Development mode
Runs TypeScript directly with hot-reload.
```bash
npm run dev
```
The bot restarts automatically whenever you save files under `src/`.

### Production mode
1. Build  
   ```bash
   npm run build
   ```
2. Start  
   ```bash
   npm start
   ```

## npm Scripts
| Command | Description |
| -------- | ---- |
| `npm run dev`   | Start dev server with ts-node-dev |
| `npm run build` | Transpile to `dist/` with tsc |
| `npm start`     | Run the bot with `node dist/index.js` |

## 💬 How to use in chat
Once the bot joins your server and is online, type commands in a text channel.  
The **default prefix is `!`** (changeable via the `PREFIX` variable).

| Input | Reply | Description |
| ------ | ---- | ---- |
| `!ping` | `Pong!` | Connectivity check |
| `!help` | `Available commands: ping, help` | List available message commands |

> ❗ You don’t need to mention the bot. Just prefix your message.

### Changing the prefix
1. Edit `PREFIX` in `.env`  
2. Restart the bot

### About Slash Commands
Currently only message-based commands are supported.  
To add **Slash Commands**, create modules under `src/commands/` and implement separate registration logic for Discord API.

## Project structure
```text
ts-discord-bot/
├── src/
│   ├── commands/             # Message commands
│   ├── events/               # Discord events
│   ├── utils/                # Utility modules
│   ├── config.ts             # .env loader & shared config
│   └── index.ts              # Entry point
├── dist/                     # Build output (gitignored)
├── .env.example              # Environment variable template
├── tsconfig.json             # TypeScript config
└── package.json
```

## License
MIT License