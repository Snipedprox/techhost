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

**You deposited $numberSeparator[$get[amount];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$get[amount]]]
$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$get[amount]]]
$onlyif[$sum[$getglobaluservar[bank];$get[amount]]<=$getGlobalUservar[bankspace];{newEmbed:{description:
$randomText[$getVar[xmas];$getVar[xmass]]

**You cant deposit more $getServerVar[symbol] into your box might wanna buy a increaser in the shop**}{color:FF0000}}] 
$onlyif[$get[amount]!=0;{newEmbed:{description:Cannot dep 0!}{color:FF0000}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:
$randomText[$getVar[xmas];$getVar[xmass]]

Cannot dep negative amounts!}{color:FF0000}}]
$onlyif[$getGlobalUserVar[cash]>=$get[amount];{newEmbed:{description:
$randomText[$getVar[xmas];$getVar[xmass]]

You do not have that much to dep!}{color:FF0000}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:
$randomText[$getVar[xmas];$getVar[xmass]]

Not a number!}{color:FF0000}}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[1]];k;000;1];m;000000;1];all;$getGlobalUserVar[cash;$authorID];1];max;$getGlobalUserVar[cash;$authorID];1]]


$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]
$onlyIf[$memberExists[$get[u]]==true;{newEmbed: {color:RED} {description:$getVar[x] **Error member not found**}}]

$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]

`})