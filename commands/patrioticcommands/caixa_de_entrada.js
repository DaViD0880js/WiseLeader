const { Client, Message, MessageEmbed } = require('discord.js');
const db = require("quick.db")
const pagination = require('../../functions')

module.exports = {
    name: 'cde',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
   const embeds = []
   const emojilist = ['⏪', '⏩']
        const oi = db.fetch(`cai_${message.guild.id}`)
        if(oi === null) return message.channel.send('Sem embeds')
        for(let i = 0; i < oi.length; i++) {
         // console.log(oi[i])
           let mebed = new MessageEmbed()
         .setTitle(oi[i].embedtitle)
         .setAuthor(oi[i].embedauthor, 'https://cdn.discordapp.com/attachments/875406340313452596/876843555451183124/1f4ec.png')
         .setDescription(oi[i].embeddescription)
         .addField('Categoria do email:', oi[i].embedfield)
         .addField('Anexos:', 'ﾠ')
         .setThumbnail(oi[i].embedthumbnail)
         .setImage(oi[i].embedimg)
         
         
         
         
         embeds.push(mebed)
       
         
       }
      
       pagination(message, embeds, emojilist, 60000, message.guild.iconURL())
      
        
        
    }
}