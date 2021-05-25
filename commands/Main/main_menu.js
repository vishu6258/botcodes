/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Main

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var userstat = User.getProperty("status");
var referbonus = User.getProperty("50000");
if (userstat=="member" | userstat =="administrator" | userstat=="creator"){

if (referbonus == undefined){
let refUser = Libs.ReferralLib.currentUser.attractedByUser()
if (refUser){
  var balanceref = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balanceref.add(50000)
  Bot.sendMessageToChatWithId(refUser.chatId, "You Earned +50000 POK/TWEET\n*New User :* "+"[" +user.telegramid+"]" + "(" + "tg://user?id=" + user.telegramid + ")")
User.setProperty("referbonus", user.telegramid, "integer")}
}

var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("📈Balance,🔴Withdraw,♨️Invite,\n🗂Set wallet,🎁EXTRA,🔝 Reffarals", "*▶️ Refer and Earn POK/TWEET,*")
}
if (user=="left"){
Bot.runCommand("/start");
}


