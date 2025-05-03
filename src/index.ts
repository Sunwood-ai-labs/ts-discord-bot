import 'dotenv/config';
import { Client, GatewayIntentBits, Collection } from 'discord.js';
import { readdirSync } from 'fs';
import { join } from 'path';
import config from './config';

interface CommandModule {
  name: string;
  description: string;
  execute: (message: any, args: string[]) => Promise<void> | void;
}

declare module 'discord.js' {
  interface Client {
    commands: Collection<string, CommandModule>;
    prefix: string;
  }
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});
 
client.commands = new Collection();
client.prefix = config.prefix;
 
// Load command modules
const commandsPath = join(__dirname, 'commands');
const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.js') || file.endsWith('.ts'));
for (const file of commandFiles) {
  const command: CommandModule = require(join(commandsPath, file));
  client.commands.set(command.name, command);
}

// Load event handlers
const eventsPath = join(__dirname, 'events');
const eventFiles = readdirSync(eventsPath).filter(file => file.endsWith('.js') || file.endsWith('.ts'));
for (const file of eventFiles) {
  const event = require(join(eventsPath, file));
  if (event.once) {
    client.once(event.name, (...args: any[]) => event.execute(...args));
  } else {
    client.on(event.name, (...args: any[]) => event.execute(...args));
  }
}

client.login(config.token).catch(console.error);