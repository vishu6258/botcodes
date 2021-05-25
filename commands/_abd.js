/*CMD
  command: /abd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send telegram userid
  keyboard: 
  aliases: 
CMD*/

var key = " 1704662642"
if (user.telegramid == key){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/bb");
}else{
return
}
