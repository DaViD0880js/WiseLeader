const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const db = require("quick.db")
const disbut = require("discord-buttons")
const attachIsImage = require("../../another_function")
module.exports = {
    name: 'email',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

      let embed2 = new MessageEmbed()
      .setDescription('**Qual é a categoria do email a ser enviado?**')
      .setColor("BLACK")
   
       let avisopublico = new disbut.MessageButton()
       .setID('aviso')
       .setEmoji('❗')
       .setStyle('blurple')
       .setLabel('Aviso Oficial');
   
       let punicao = new disbut.MessageButton()
       .setID('punicao')
       .setEmoji('🛡️')
       .setStyle('red')
       .setLabel('Punição');
   
       let atualizacao = new disbut.MessageButton()
       .setID('atualizar')
       .setEmoji('🔧')
       .setStyle('green')
       .setLabel('Atualização')

      if(!message.member.hasPermission('MANAGE_MESSAGES')) return;

      const description = args.slice(1).join(" ")

      if(!description) return message.channel.send("Digite o conteúdo do aviso. Glória ao Sábio Líder!")

      if(args[0] !== "send") return; //caiixa de entrada

    let yu =  message.channel.send("Descreva um título patriótico e curto").then(async(msg) => {
      const filter = m => m.author.id === message.author.id
      message.channel.awaitMessages(filter, {time: 30000, max: 1, errors: ['time']}).then(async(collected) => {
       
       const wqd = collected.first().content
       await msg.delete().then(async(bruh) => {
        let b = await message.channel.send({embed: embed2, buttons: [avisopublico, punicao, atualizacao]})

    const filtro = button => button.clicker.user.id === message.author.id

    const collector = b.createButtonCollector(filtro, {time: 60000, max: 1})
     collector.on("collect", (botao) => {
          botao.reply.defer()
          if(botao.id == "atualizar") {
            let wjwiqd;

            if(message.attachments.size > 0) {
               wjwiqd = message.attachments.first().attachment
               
            } else {
              wjwiqd = 'https://cdn.discordapp.com/attachments/875406340313452596/876858221787234424/ef9d5e7aee753ac6d77278cca6a84c10a3c6c33bda39a3ee5e6b4b0d3255bfef95601890afd80709da39a3ee5e6b4b0d3255.png'
               
            }

            db.push(`cai_${message.guild.id}`, {embedtitle: wqd, 
              embedauthor: `Novo email oficial de ${message.author.tag}`, 
              embeddescription: "`" + description + "`", 
              embedfield: 'Aviso Oficial', 
              embedimg: wjwiqd,
              embedthumbnail: message.author.displayAvatarURL({dynamic: true})
              
            })

            
            
              let embed = new MessageEmbed()
              
              .setTitle(wqd)
              .setFooter('Oceania - Glória ao Sábio Líder', message.guild.iconURL())
              .setAuthor(`Novo email oficial de ${message.author.tag}`, 'https://cdn.discordapp.com/attachments/781161322918051883/876293564324253737/1024px-Exclamation.png')
              .setDescription("`" + description + "`")
              .addField('Categoria do email', 'Atualização Oficial')
              .addField('Anexos:', 'ﾠ')
              .setImage(wjwiqd)
              .setThumbnail(message.author.displayAvatarURL({dynamic: true}));
            //  if(message.attachments) {
          //      if(message.attachments.first()) {
          //        if(message.attachments.first().attachment) {
         //           imagempadraofodase = message.attachments.first()
        //            embed.setImage(message.attachments.first().attachment)
      //              db.push(`cai_${message.guild.id}`, {embedimage: imagempadraofodase})
      //            }
        //        }
        //      }
       //       if(!message.attachments.first().attachment) {
       //         imagempadraofodase = 'https://cdn.discordapp.com/attachments/875406340313452596/876858221787234424/ef9d5e7aee753ac6d77278cca6a84c10a3c6c33bda39a3ee5e6b4b0d3255bfef95601890afd80709da39a3ee5e6b4b0d3255.png'
      //          embed.setImage(imagempadraofodase)
     //           db.push(`cai_${message.guild.id}`, {embedimage: imagempadraofodase})
    //         }
              message.guild.members.cache.forEach(member => {
             if (member.id != client.user.id && !member.user.bot) member.send(embed);
            // let uyo = db.get(`emaildescricao_${message.guild.id}`)
          
           });
          }
          if(botao.id == "punicao") {
            let wjwiqd;

            if(message.attachments.size > 0) {
               wjwiqd = message.attachments.first().attachment
               
            } else {
              wjwiqd = 'https://cdn.discordapp.com/attachments/875406340313452596/876858221787234424/ef9d5e7aee753ac6d77278cca6a84c10a3c6c33bda39a3ee5e6b4b0d3255bfef95601890afd80709da39a3ee5e6b4b0d3255.png'
               
            }

            db.push(`cai_${message.guild.id}`, {embedtitle: wqd, 
              embedauthor: `Novo email oficial de ${message.author.tag}`, 
              embeddescription: "`" + description + "`", 
              embedfield: 'Aviso Oficial', 
              embedimg: wjwiqd,
              embedthumbnail: message.author.displayAvatarURL({dynamic: true})})
               
        //      if(message.attachments) {
        //        if(message.attachments.first()) {
        //          if(message.attachments.first().attachment) {
       //             imagempadraofodase = message.attachments.first()
         //           embed.setImage(message.attachments.first().attachment)
          //          db.push(`cai_${message.guild.id}`, {embedimage: imagempadraofodase})
        //          }
     // //          }
     //         }
          //    if(!message.attachments.first().attachment) {
         //       imagempadraofodase = 'https://cdn.discordapp.com/attachments/875406340313452596/876858221787234424/ef9d5e7aee753ac6d77278cca6a84c10a3c6c33bda39a3ee5e6b4b0d3255bfef95601890afd80709da39a3ee5e6b4b0d3255.png'
         //       embed.setImage(imagempadraofodase)
        //        db.push(`cai_${message.guild.id}`, {embedimage: imagempadraofodase})
        //     }
            
              let embed = new MessageEmbed()
              .setTitle(wqd)
              .setFooter('Oceania - Glória ao Sábio Líder', message.guild.iconURL())
              .setAuthor(`Novo email oficial de ${message.author.tag}`, 'https://cdn.discordapp.com/attachments/781161322918051883/876293564324253737/1024px-Exclamation.png')
              .setDescription("`" + description + "`")
              .addField('Categoria do email', 'Punição Patriótica')
              .addField('Anexos:', 'ﾠ')
              .setImage(wjwiqd)
              .setThumbnail(message.author.displayAvatarURL({dynamic: true}));
              message.guild.members.cache.forEach(member => {
             if (member.id != client.user.id && !member.user.bot) member.send(embed);
            // let uh = db.get(`emaildescricao_${message.guild.id}`)
           
             
           });
          }
          if(botao.id == "aviso") {
            let wjwiqd;

            if(message.attachments.size > 0) {
               wjwiqd = message.attachments.first().attachment
               
            } else {
              wjwiqd = 'https://cdn.discordapp.com/attachments/875406340313452596/876858221787234424/ef9d5e7aee753ac6d77278cca6a84c10a3c6c33bda39a3ee5e6b4b0d3255bfef95601890afd80709da39a3ee5e6b4b0d3255.png'
               
            }
            db.push(`cai_${message.guild.id}`, {embedtitle: wqd, 
              embedauthor: `Novo email oficial de ${message.author.tag}`, 
              embeddescription: "`" + description + "`", 
              embedfield: 'Aviso Oficial', 
              embedimg: wjwiqd,
              embedthumbnail: message.author.displayAvatarURL({dynamic: true})})

            
         //     if(message.attachments) {
          //      if(message.attachments.first()) {
          //        if(message.attachments.first().attachment) {
          //          imagempadraofodase = message.attachments.first()
          //          embed.setImage(message.attachments.first().attachment)
         //           db.push(`cai_${message.guild.id}`, {embedimage: imagempadraofodase})
          //        }
        //        }
       //       }
              //if(!message.attachments && !message.attachments.first() && !message.attachments.first().attachment) {
          //      imagempadraofodase = 'https://cdn.discordapp.com/attachments/875406340313452596/876858221787234424/ef9d5e7aee753ac6d77278cca6a84c10a3c6c33bda39a3ee5e6b4b0d3255bfef95601890afd80709da39a3ee5e6b4b0d3255.png'
           //     embed.setImage(imagempadraofodase)
          //      db.push(`cai_${message.guild.id}`, {embedimage: imagempadraofodase})
          //   }

            //  let wjgf = db.get(`emaildescricao_${message.guild.id}`)
              let embed= new MessageEmbed()
              .setTitle(wqd)
              .setFooter('Oceania - Glória ao Sábio Líder', message.guild.iconURL())
              .setAuthor(`Novo email oficial de ${message.author.tag}`, 'https://cdn.discordapp.com/attachments/781161322918051883/876293564324253737/1024px-Exclamation.png')
              .setDescription("`" + description + "`")
              .addField('Categoria do email', 'Aviso Oficial')
              .addField('Anexos:', 'ﾠ')
              .setImage(wjwiqd)
              .setThumbnail(message.author.displayAvatarURL({dynamic: true}));
              
              message.guild.members.cache.forEach(member => {
             if (member.id != client.user.id && !member.user.bot) member.send(embed);


            
           });
          }
     })
       })
      })
    })
      
     
       

  

     
      
    }
}