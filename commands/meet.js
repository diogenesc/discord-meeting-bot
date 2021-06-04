const nomeCategoriaDefault = 'Meetings';

module.exports = {
    name: 'meet',
    async execute(message, args) {
        if (!args.length) {
            message.reply('the command syntax is !meet <channel name>');
            return;
        }
        let category = message.guild.channels.cache.find(c => c.name == nomeCategoriaDefault && c.type == 'category')
        if (!category)
            category = await message.guild.channels.create(nomeCategoriaDefault, { type: 'category' });

        const channelName = 'Meet: ' + args.reduce((final, arg) => final += ' ' + arg);
        let channel = message.guild.channels.cache.find(c => c.name == channelName && c.type == 'voice')
        if (category && channel) {
            message.reply('channel already created');
            return;
        }
        channel = await message.guild.channels.create(channelName, { type: 'voice', parent: category })
            .catch(console.error);
        message.reply('channel **' + channelName + '** created at Meetings category');
        if (message.member.voice.channel)
            message.member.voice.setChannel(channel);
    }
}