/*CMD
  command: 🔴Withdraw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Instant withdrawal 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty("" + user.telegramid + "")
let wdinfo = Bot.getProperty("wdInfo")
if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  let balance = Libs.ResourcesLib.userRes("balance")
  let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
  var wallet = User.getProperty("TRXwallet")
  if (wallet == undefined) {
    var button = [{ title: "🗂Set wallet", command: "🗂Set wallet" }]
    Bot.sendInlineKeyboard(button, "*❌Your wallet is not set👇*")
  } else {
    if (balance.value() < 250000) {
      Bot.sendMessage("❌ You have to own at least 250k POK/TWEET!")
    } else {
      Bot.sendMessage("* 📤 Enter Amount of POK/TWEET *")
      Bot.runCommand("Fuck")
    }
  }
}

