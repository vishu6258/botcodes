/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: mainmenu
  answer: 
  keyboard: 
  aliases: 
CMD*/

var userstat = User.getProperty("status");
var referbonus = User.getProperty("referbonus");
if (userstat=="member" | userstat =="administrator" | userstat =="creator"){
if (referbonus == undefined){
let refUser = Libs.ReferralLib.currentUser.attractedByUser()
if (refUser){
  var balanceref = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balanceref.add(1000)
  Bot.sendMessageToChatWithId(refUser.chatId, "ð² You Earned +1000 WHXC \n\n*ð¨âð¼Your Referral :* "+"["+user.username+"]" + "(" + "tg://user?id=" + user.telegramid + ")")
User.setProperty("referbonus", user.telegramid, "integer")}
}

var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("ð¤ Balance,ð Refferal\nð Withdraw,ðSet wallet\nð° Task,ð Statistics", "*ð® Welcome To our Botð® *")
}
if (userstat=="left"){
Bot.runCommand("/start");
}
