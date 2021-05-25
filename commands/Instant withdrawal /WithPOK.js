/*CMD
  command: WithPOK
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Instant withdrawal 
  answer: Done ✅
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var pk = "Tron Link Private Key"
var add = User.getProperty("TRXwallet") //address where the token will sent
var amo = parseInt(message) //amount of token
var tokenid = "1000645" //token id which you want to do auto pay
HTTP.post({
  url: "https://autotrc10pay.herokuapp.com/api/v1/post/" + pk + "",
  success: "/onloadingPOK",
  body: { address: add, amount: balance.value(), tokenid: tokenid }
})
balance.add(-amo)
