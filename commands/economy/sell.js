module.exports = {
name: "sell",
$if: "v4",
code: `
$if[$checkContains[$message[1];iron;silver;irn;ironn;irno]==true]
$title[1;**Iron sold...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$addTimeStamp[1;ms]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You have sold $numberSeparator[$message[2];,]<:iron:911929448343932989> for $numberSeparator[$multi[$message[2];5];,]$getServerVar[symbol]**]

$setGlobalUserVar[iron;$sub[$getGlobalUserVar[iron];$multi[1;$message[2]]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[5;$message[2]]]]

$onlyIf[$getGlobalUserVar[iron]>$multi[1;$message[2]];**Not enough <:iron:911929448343932989>**]

$else

$if[$checkContains[$message[1];bronze;brunze;bro;brzn;brozne]==true]
$title[1;**Bronze sold...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$addTimeStamp[1;ms]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You have sold $numberSeparator[$message[2];,]<:bronze:911929393214013501> for $numberSeparator[$multi[$message[2];10];,]$getServerVar[symbol]**]

$setGlobalUserVar[bronze;$sub[$getGlobalUserVar[bronze];$multi[1;$message[2]]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[10;$message[2]]]]

$onlyIf[$getGlobalUserVar[bronze]>$multi[1;$message[2]];**Not enough <:bronze:911929393214013501>**]

$else

$if[$checkContains[$message[1];gold;guld;goold;gld;gldo]==true]
$title[1;**Gold sold...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$addTimeStamp[1;ms]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You have sold $numberSeparator[$message[2];,]<:gold:911929526940991508> for $numberSeparator[$multi[$message[2];15];,]$getServerVar[symbol]**]

$setGlobalUserVar[gold;$sub[$getGlobalUserVar[gold];$multi[1;$message[2]]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[15;$message[2]]]]

$onlyIf[$getGlobalUserVar[gold]>$multi[1;$message[2]];**Not enough <:gold:911929526940991508>**]

$else

$if[$checkContains[$message[1];platinum;platnium;plat;platnim;plt]==true]
$title[1;**Platinum sold...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$addTimeStamp[1;ms]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You have sold $numberSeparator[$message[2];,]<:diamonddd:911929573443264542> for $numberSeparator[$multi[$message[2];20];,]$getServerVar[symbol]**]

$setGlobalUserVar[platinum;$sub[$getGlobalUserVar[platinum];$multi[1;$message[2]]]]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[20;$message[2]]]]

$onlyIf[$getGlobalUserVar[platinum]>$multi[1;$message[2]];**Not enough <:diamonddd:911929573443264542>**]

$else
**Not a valid item for now you can only sell ores**
$endif
$endif
$endif
$endif
$onlyIf[$message[2]>=1;**please specify an amount to sell**]
$onlyIf[$isNumber[$message[2]]==true;**That is not a valid number**]
$onlyIf[$checkContains[$message[2];-;,;.;/;_;~]==false;**Please do not use those symbols**]
$onlyIf[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]



$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]
$onlyIf[$getGlobalUserVar[durability]>=1;**Oh no seems ike your pickaxe durability is at 0 bars go recharge it**]`}









