const { Client, Message, MessageEmbed } = require('discord.js');
const db = require("quick.db")
module.exports = {
    name: 'delete',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
       db.delete(`cai_${message.guild.id}`)
       return message.channel.send('Banco de dado restaurado com sucesso')
    }
}