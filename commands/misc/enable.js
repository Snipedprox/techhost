module.exports = {
name: "enable-cmds",
code: `
$title[1;**Commands enabled...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$addTimeStamp[1;ms]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**Now commands can be executed in** <#$mentionedChannels[1;yes]>]
$setChannelVar[cmd;enabled;$mentionedChannels[1;yes]]
$onlyIf[$mentionedChannels[1;yes]!=$channelID;**Please mention a channel :/**]

$onlyPerms[manageserver;**Perms missing \`MANAGE_SERVER\`**]`}