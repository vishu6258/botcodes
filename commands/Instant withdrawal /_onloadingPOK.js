/*CMD
  command: /onloadingPOK
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Instant withdrawal 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var add = User.getProperty("TRXwallet")
var amo = User.getProperty("amo")
var tx = content
Bot.sendMessage(
  "✅* Paid automatically* \n ▪️ User Id : <code>" +
    user.telegramid +
    "\n🎤 <b> UserName: " +
    "@" +
    user.username +
    "\n Recipient's Name: " +
    user.first_name +
    "\n\nREFER AND EARN MORE" +
    "\n" +
    "🎪 Requester's id: " +
    user.id +
    "\n\n" +
    "🏆Hash\n  -  :http//tronscan.org/#/transaction/" +
    content
)

Api.sendMessage({
  chat_id: "Payment Channel",
  text:
    "✅ Withdraw successful in bot\n \n ▪️ User Id :" +
    user.telegramid +
    "\n🎤 UserName: " +
    "@" +
    user.username +
    "\n\n💳 Amount: " +
    balance.value() +
    " POKEMON\n👜 Wallet : " +
    add +
    "\n🕹️ ☘TxID : https://tronscan.org/#/transaction/" +
    tx +
    "\n\n Bot link :-@Demopvttbot" +
    "\n\n💹 Now check your Tron Wallet.",
  disable_web_page_preview: true
})
Bot.sendMessageToChatWithId(
 1704662642 ,
  "✅ Withdraw successful in bot @" +
    bot.name +
    "\n\n💳 Amount: " +
    Libs.ResourcesLib.userRes("balance") +
    " trt \n👜 Wallet : " +
    add +
    "\n🕹️ ☘TxID : https://tronscan.org/#/transaction/" +
    tx +
    "\n\n💹 Now check your Tron Wallet.\nUser id : " +
    user.telegramid +
    "`"
)
