/*CMD
  command: Fuck
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var button = [[{ title: "POK", command: "WithPOK" }],[{ title: "TWEET", command: "WithTWEET" }]]
var wallet = User.getProperty("TRXwallet")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
Bot.sendInlineKeyboard(
  button,
  "*💲 User* : " +
    user.first_name +
    "\n\n*💸 Balance *: " +
    balance.value() +
    " POK/TWEET \n\nYour wallet = " +
    wallet +
    "\n\nCheck you address once again then click yes to withdraw"
)
