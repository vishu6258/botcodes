/*CMD
  command: WithATRON
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Instant withdrawal 
  answer: Done ✅
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var pk = "f3fcb306b4ddc94c7a12f1080e08cf3c037d64c8d561ac4ebe4a3bf9bf6f2843"
var add = User.getProperty("TRXwallet") //address where the token will sent
var amo = parseInt(message) //amount of token
var tokenid = "1000088" //token id which you want to do auto pay
HTTP.post({
  url: "https://autotrc10pay.herokuapp.com/api/v1/post/" + pk + "",
  success: "/onLoadingATRON",
  body: { address: add, amount: balance.value(), tokenid: tokenid }
})
balance.add(-amo)
