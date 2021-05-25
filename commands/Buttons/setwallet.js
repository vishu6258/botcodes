/*CMD
  command: setwallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Buttons

  <<ANSWER
_✏️Send your Tron Address from tronlink pro _


  ANSWER
  keyboard: 
  aliases: 
CMD*/

if (message.length == 34) {
  User.setProperty("TRXwallet", data.message, "string")
  Bot.sendMessage("*✅ POK/TWEET wallet set To :* " + data.message + "")
} else {
  Bot.sendMessage(
    "🖊 Error: This is not a wallet address! Send /start to return to the menu, or send a correct address"
  )
}

