/*CMD
  command: ♨️Invite
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Refferal

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (request.data){
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

Api.deleteMessage({
  chat_id: chat_id,
  message_id: message_id
})

}
let res = Libs.ResourcesLib.userRes("referral")
let reflink = Libs.ReferralLib.currentUser.getRefLink(
  "Demopvttbot",
  "Bot"
)
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
Bot.sendMessage(
  "*😇 Total Invites : " +
    refList.length +
    " Users\n\n🏮 Per Referral 50000 POK/TWEET \n\n🌐 Referral Link " +
    reflink +
    "\n\n" +
    "*"
)
