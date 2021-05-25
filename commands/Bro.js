/*CMD
  command: Bro
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Type
  keyboard: 
  aliases: 
CMD*/

if(user.telegramid == "1704662642"){
Bot.runAll({ 
command: "Broadcast",
for_chats: "private-chats",
options: {msg: message}
})
}else{
Bot.sendMessage("*🔰 You're Not An Admin*")
}
