module.exports = {
name: "disable-cmds",
code: `
$title[1;**Commands disabled...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$addTimeStamp[1;ms]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**:#RIGHT_CLICK# Now commands can not be executed in** <#$mentionedChannels[1;yes]>]
$setChannelVar[cmd;disabled;$mentionedChannels[1;yes]]
$onlyIf[$mentionedChannels[1;yes]!=$channelID;**Please mention a channel :/**]

$onlyPerms[manageserver;**Perms missing \`MANAGE_SERVER\`**]`}