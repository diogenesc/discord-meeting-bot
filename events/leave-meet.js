module.exports = {
    name: 'voiceStateUpdate',
    async execute(oldState, newState, client) {
        if (
            oldState
            && oldState.channel
            && oldState.channel.name.includes('Meet')
            && oldState.channel.members.size < 1
        ) {
            oldState.channel.delete();
        }
    }
}