module.exports = ({
name:"dep",
aliases:"deposit",
category:"Economy",
explanation:"Deposit cash into your bank!",
bot:"Embed Links",
user:"None",
usage:"dep <amount>",
example:"dep 1000",
explain:"Deposit 1000 into your bank!",
code:`
$title[1;**Isnt that basty...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$addTimeStamp[1;ms]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You withdrew $numberSeparator[$get[amount];,]$getVar[symbol]**]
$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$get[amount]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$get[amount]]]
$onlyif[$get[amount]!=0;{newEmbed:{description:
$randomText[$getVar[xmas];$getVar[xmass]]

Cannot withraw 0!}{color:FF0000}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:
$randomText[$getVar[xmas];$getVar[xmass]]

Cannot withdraw negative amounts!}{color:FF0000}}]
$onlyif[$getGlobalUserVar[bank]>=$get[amount];{newEmbed:{description:
$randomText[$getVar[xmas];$getVar[xmass]]

You do not have that much to withdraw!}{color:FF0000}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:
$randomText[$getVar[xmas];$getVar[xmass]]

Not a number!}{color:FF0000}}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[1]];k;000;1];m;000000;1];all;$getGlobalUserVar[bank;$authorID];1];max;$getGlobalUserVar[bank;$authorID];1]]



$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]
$onlyIf[$memberExists[$get[u]]==true;{newEmbed: {color:RED} {description:$getVar[x] **Error member not found**}}]

$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]

`})