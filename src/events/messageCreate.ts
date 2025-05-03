module.exports = {
  name: 'messageCreate',
  execute(message: any) {
    const prefix = message.client.prefix || '!';
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = message.client.commands.get(commandName);
    if (!command) return;
    try {
      command.execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply('There was an error executing that command.');
    }
  }
};