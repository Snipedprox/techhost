module.exports = {
name: "mine",
$if: "v4",
code: `
$if[$getGlobalUserVar[wood_pickaxe]==1]
$title[1;**$username is mining ores...**]
$thumbnail[1;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$footer[1;Go get a life...;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**$username you went into a mineshaft with your $get[type] and there you found**
\`+ $random[1;5]\`<:iron:911929448343932989>
\`+ $random[1;6]\`<:bronze:911929393214013501>
\`+ $random[1;7]\`<:gold:911929526940991508>
\`+ $random[1;8]\`<:diamonddd:911929573443264542>

**And you also found $numberSeparator[$random[1000;2000];,]$getServerVar[symbol]
  And you also lost 1 durability bars**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;2000]]]

$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron];$random[1;5]]]
$setGlobalUserVar[bronze;$sum[$getGlobalUserVar[bronze];$random[1;6]]]
$setGlobalUserVar[gold;$sum[$getGlobalUserVar[gold];$random[1;7]]]
$setGlobalUserVar[platinum;$sum[$getGlobalUserVar[platinum];$random[1;8]]]
$
$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];1]]
$let[type;<:woodpick:921148995601055814> Wooden pickaxe]
$else
$if[$getGlobalUserVar[iron_pickaxe]==1]
$title[1;**$username is mining ores...**]
$thumbnail[1;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$footer[1;Go get a life...;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**$username you went into a mineshaft with your $get[type] and there you found**
\`+ $random[1;9]\`<:iron:911929448343932989>
\`+ $random[1;10]\`<:bronze:911929393214013501>
\`+ $random[1;11]\`<:gold:911929526940991508>
\`+ $random[1;12]\`<:diamonddd:911929573443264542>

**And you also found $numberSeparator[$random[1000;3000];,]$getServerVar[symbol]
  And you also lost 1 durability bar**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;3000]]]

$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron];$random[1;9]]]
$setGlobalUserVar[bronze;$sum[$getGlobalUserVar[bronze];$random[1;10]]]
$setGlobalUserVar[gold;$sum[$getGlobalUserVar[gold];$random[1;11]]]
$setGlobalUserVar[platinum;$sum[$getGlobalUserVar[platinum];$random[1;12]]]

$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];1]]
$let[type;<:ironpick:921149161095712809> Iron pickaxe]
$else
$if[$getGlobalUserVar[gold_pickaxe]==1]
$title[1;**$username is mining ores...**]
$thumbnail[1;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$footer[1;Go get a life...;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**$username you went into a mineshaft with your $get[type] and there you found**
\`+ $random[1;13]\`<:iron:911929448343932989>
\`+ $random[1;14]\`<:bronze:911929393214013501>
\`+ $random[1;15]\`<:gold:911929526940991508>
\`+ $random[1;16]\`<:diamonddd:911929573443264542>

**And you also found $numberSeparator[$random[1000;3000];,]$getServerVar[symbol]
  And you also lost 1 durability bar**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;3000]]]

$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron];$random[1;13]]]
$setGlobalUserVar[bronze;$sum[$getGlobalUserVar[bronze];$random[1;14]]]
$setGlobalUserVar[gold;$sum[$getGlobalUserVar[gold];$random[1;15]]]
$setGlobalUserVar[platinum;$sum[$getGlobalUserVar[platinum];$random[1;16]]]

$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];1]]
$let[type;<:goldpick:921149173796048896> Gold pickaxe]
$else
$if[$getGlobalUserVar[diamond_pickaxe]==1]
$title[1;**$username is mining ores...**]
$thumbnail[1;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$footer[1;Go get a life...;https://cdn.discordapp.com/emojis/915383399424868363.png?size=56]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**$username you went into a mineshaft with your $get[type] and there you found**
\`+ $random[1;20]\`<:iron:911929448343932989>
\`+ $random[1;21]\`<:bronze:911929393214013501>
\`+ $random[1;22]\`<:gold:911929526940991508>
\`+ $random[1;23]\`<:diamonddd:911929573443264542>

**And you also found $numberSeparator[$random[1000;5000];,]$getServerVar[symbol]
  And you also lost 2 durability bar**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;5000]]]

$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron];$random[1;20]]]
$setGlobalUserVar[bronze;$sum[$getGlobalUserVar[bronze];$random[1;21]]]
$setGlobalUserVar[gold;$sum[$getGlobalUserVar[gold];$random[1;22]]]
$setGlobalUserVar[platinum;$sum[$getGlobalUserVar[platinum];$random[1;23]]]

$setGlobalUserVar[durability;$sub[$getGlobalUserVar[durability];2]]
$let[type;<:diamondpick:921149444878131312> Diamond pickaxe]
$endif
$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]
$onlyIf[$memberExists[$get[u]]==true;{newEmbed: {color:RED} {description:$getVar[x] **Error member not found**}}]

$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]
$onlyIf[$getGlobalUserVar[durability]>0;**Oh no seems ike your pickaxe durability is at 0 bars go recharge it**]
$globalCooldown[5m;**Mineshafts getting looted way too often so wait %time%**]`}
