/*CMD
  command: /niru
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Other
  answer: 
  keyboard: 
  aliases: 
CMD*/


if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
    .value()
    .toFixed(0)

  
    var button = [{ title : "🌺 View Bot from start 🌺 " , command : "/start" }]
Bot.sendInlineKeyboard(button , "*📊 Total members : " +
    status +
    " Users\n\n " +
    
    "👑 Bot made by @NINJAat2006 IF u want to buy code than msg price 10trx (discount available)  *"
)

  Bot.sendMessage(stat)
}
