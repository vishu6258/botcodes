/*CMD
  command: ref01694
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Refferal
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
   return
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");
var referrer = Libs.ReferralLib.currentUser.attractedByUser()
var bonus = 50000
if (referrer) {
  var referrerRes = Libs.ResourcesLib.anotherUserRes(
    "balance",
    referrer.telegramid
  )
  referrerRes.add(bonus)
  var refcom = Libs.ResourcesLib.anotherUserRes("n", referrer.telegramid)
  refcom.add(bonus)
  Bot.sendMessageToChatWithId(referrer.telegramid, "*🎁 New Referral : +50000 POK/TWEET *")
} else {
  Bot.sendMessage()
}
