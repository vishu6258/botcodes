/*CMD
  command: WithTWEET
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Done✅
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var pk = "4bbd9e04cc6c287ca6cdda9f858f96b0b59a57939a40d1b2b6448ef568a5ffee"
var add = User.getProperty("TRXwallet") //address where the token will sent
var amo = parseInt(message) //amount of token
var tokenid = "1000645" //token id which you want to do auto pay
HTTP.post({
  url: "https://autotrc10pay.herokuapp.com/api/v1/post/" + pk + "",
  success: "/onLoadingTWEET ",
  body: { address: add, amount: balance.value(), tokenid: tokenid }
})
balance.add(-amo)
