/*CMD
  command: Admin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = "1704662642"
if (user.telegramid == key){
var button = [[{title:"🔄 Change Balance",command:"/abd"},{title:"🎙 Broadcast",command:"/broad"}],[{title:"💰Check User Balance",command:"/checkb"}],[{title:"🛑 Ban User",command:"/ban"},{title:"✅ Unban User",command:"/unban"}]]

Bot.sendInlineKeyboard(button,"*Hey " +user.first_name+ "\n\n♨️Welcome To The Admin Panel🧑🏻‍💻\n\n‼️Warning When Using This Panel Please Don't Send Any Other Command It May Spoil Your Work\n\Made By @suriya_skp*")
}else{
Bot.sendMessage("❌You Are Not An Admin !")
}var key = "1704662642"
if (user.telegramid == key){
var button = [[{title:"🔄 Change Balance",command:"/abd"},{title:" Broadcast",command:"/broad"}],[{title:"💰Check User Balance",command:"/checkb"}],[{title:"🛑 Ban User",command:"/ban"},{title:"✅ Unban User",command:"/unban"}]]

Bot.sendInlineKeyboard(button,"*Hey " +user.first_name+ "\n\n♨️Welcome To The Admin Panel🧑🏻‍💻\n\n‼️Warning When Using This Panel Please Don't Send Any Other Command It May Spoil Your Work\n\Made By @suriya_skp*")
}else{
Bot.sendMessage("❌You Are Not An Admin !")
}
