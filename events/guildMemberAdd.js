const client = require('../index')
module.exports = {
    // we want a message event
    event: "guildMemberAdd",
    // we want it to trigger multiple times
    once: false,
    // the actual function
    run(member) {
        
           let b = member.guild.channels.cache.get("875398431974256715")
           b.send('Olá')
        
    }
};

