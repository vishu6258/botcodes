/*CMD
  command: Clone
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send email
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid = 1713937259 ){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done")
}else{
Bot.sendMessage("Not admin")
}
