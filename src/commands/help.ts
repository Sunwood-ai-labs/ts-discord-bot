module.exports = {
  name: 'help',
  description: 'List all commands',
  async execute(message: any) {
    const commands = message.client.commands.map((cmd: any) => cmd.name).join(', ');
    await message.reply(`Available commands: ${commands}`);
  }
};