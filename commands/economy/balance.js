module.exports = ({
name: "balance",
aliases: ['cash','bal','money'],
code: `
$author[1;$usertag[$get[u]]'s balance;$userAvatar[$get[u]]]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$thumbnail[1;$replaceText[$userAvatar[$get[u]];null;$userAvatar[$clientid]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

<:wallets:921884910455750656> **|** \`$numberSeparator[$truncate[$getGlobalUserVar[cash;$get[u]]];,]\`$getServerVar[symbol]
<:banks:921884868311408690> **|** \`$numberSeparator[$truncate[$getGlobalUserVar[bank;$get[u]]];,]\`$getServerVar[symbol]]




$onlyIf[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]
$onlyIf[$memberExists[$get[u]]==true;{newEmbed: {color:RED} {description:$getVar[x] **Error member not found**}}]

$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]

$let[u;$findMember[$message;yes]]`})