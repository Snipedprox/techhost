module.exports = {
name: "set",
code: `
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$message]]
**Ive set your balance to \`$numberSeparator[$message;,]\`$getServerVar[symbol]**
$onlyIf[$message>0;**Specify an amount **]
$onlyForIds[$botOwnerId;896846485805744168;**you have no permission to use this command**]
$cooldown[1s;**wait %time%**]`}