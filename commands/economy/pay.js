module.exports = ({
name:"give",
aliases:"pay",
description:"Pay cash to someone!",
usage:"pay <amount> <user>",
code:`
$sendmessage[{newEmbed: {color:BLUE} {description:**<@$authorID> gave **$getVar[symbol] \`$numberSeparator[$get[amount];,]\` **(and paid** $getVar[symbol] \`$numberSeparator[$sub[$get[tax];$get[amount]];,]\`** tax) to $username[$get[user]]**}};no]
$setglobaluservar[cash;$sub[$getglobaluservar[cash;$authorID];$get[amount]];$authorID]
$setglobaluservar[cash;$sum[$getglobaluservar[cash;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{newEmbed:{description:$getVar[x] Cannot pay 0!}{color:FF0000}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:$getVar[x] Cannot pay negative amounts!}{color:FF0000}}]
$onlyif[$get[amount]<=$getglobaluservar[cash;$authorID];{newEmbed:{description:$getVar[x] You do not have that much to give!}{color:FF0000}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:$getVar[x] Invalid Args
Usage:
\`pay <amount> <user>\`}{color:FF0000}}]
$let[tax;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[cash;$authorID];1];max;$getglobalUserVar[cash;$authorID];1]]
$let[amount;$truncate[$sub[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[cash;$authorID];1];max;$getglobalUserVar[cash;$authorID];1];$multi[$divide[5;100];$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[cash;$authorID];1];max;$getglobalUserVar[cash;$authorID];1]]]]]
$onlyif[$get[user]!=$authorid;{newEmbed:{description:$getVar[x] Do you really want to share your cash?}{color:FF0000}}]
$onlyif[$memberexists[$get[user]]==true;{newEmbed:{description:$getVar[x] User not found!}{color:FF0000}}]
$let[user;$findUser[$message[2];no]]
$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]
`}) 