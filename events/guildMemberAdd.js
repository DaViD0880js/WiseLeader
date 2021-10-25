const client = require('../index')
module.exports = {

    event: "guildMemberAdd",

    once: false,
  
    run(member) {
        
           let b = member.guild.channels.cache.get("875398431974256715")
           b.send('Olá')
        
    }
};

