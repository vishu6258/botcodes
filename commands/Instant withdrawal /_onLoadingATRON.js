/*CMD
  command: /onLoadingATRON
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
  chat_id: "@BOT_PAYMENTS_CHANNEL",
  text:
    "✅ Withdraw successful in bot\n \n ▪️ User Id :" +
    user.telegramid +
    "\n🎤 UserName: " +
    "@" +
    user.username +
    "\n\n💳 Amount: " +
    balance.value() +
    " ATRON(Token) \n👜 Wallet : " +
    add +
    "\n🕹️ ☘TxID : https://tronscan.org/#/transaction/" +
    tx +
    "\n\n Bot link :-@FREE_4_IN_1_BOT" +
    "\n\n💹 Now check your Tron Wallet.",
  disable_web_page_preview: true
})
Bot.sendMessageToChatWithId(
 1713937259 ,
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
