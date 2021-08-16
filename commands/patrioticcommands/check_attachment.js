const { Client, Message, MessageEmbed } = require('discord.js');
const attachIsImage = require("../../another_function")
module.exports = {
    name: 'ca',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
       if(message.attachments.size > 0) {
           
               message.channel.send(message.attachments.first().attachment)
           } else {
               return message.channel.send('Sem anexo')
           }

           
 

   
       
    }
}
