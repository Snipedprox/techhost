module.exports = {
name: "profile",
$if: "v4",
aliases: ['pro','prof'],
code: `
$author[1;$usertag[$get[u]]'s profile]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

$getVar[ai] **Multipliers:** \`$getGlobalUserVar[multiplier;$get[u]]\`

$getVar[ba] **Networth:** \`$numberSeparator[$truncate[$sum[$getGlobalUserVar[cash;$get[u]];$getGlobalUservar[bank;$get[u]]]];,]\`$getVar[symbol]

$getVar[jb] **Job:** \`$getGlobalUserVar[job;$get[u]]\`

$getVar[ls] **Level:** \`$getGlobalUserVar[level;$get[u]]\`

<:goldtrophy:922832251350319184> **Automation:** \`$numberSeparator[$getGlobalUserVar[allowence;$get[u]];,]\`]
$let[u;$findUser[$message;yes]]





$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]
$onlyIf[$memberExists[$get[u]]==true;{newEmbed: {color:RED} {description:$getVar[x] **Error member not found**}}]

$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`}