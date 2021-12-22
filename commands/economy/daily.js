module.exports = {
name: "daily",
$if: "v4",
code: `
$if[$getGlobalUserVar[multiplier]==0]
$title[1;**Daily cash collected...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You collected your daily of** \`500\`$getVar[symbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];500]]
$globalCooldown[24h;**You already collected your daily mind waiting** \`%time%\`]
$else
$if[$getGlobalUserVar[multiplier]==1]
$title[1;**Daily cash collected...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You collected your daily of** \`500\`$getVar[symbol]
**multiplier: <:unone:922606075780423722> (** \`+ 500\`$getVar[symbol]**)**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];1000]]
$globalCooldown[24h;**You already collected your daily mind waiting** \`%time%\`]
$else
$if[$getGlobalUserVar[multiplier]==2]
$title[1;**Daily cash collected...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You collected your daily of** \`500\`$getVar[symbol]
**multiplier: <:dosu:922606438558355527>  (** \`+ 1000\`$getVar[symbol]**)**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];1500]]
$globalCooldown[24h;**You already collected your daily mind waiting** \`%time%\`]
$else
$if[$getGlobalUserVar[multiplier]==3]
$title[1;**Daily cash collected...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You collected your daily of** \`500\`$getVar[symbol]
**multiplier: <:trise:922606728082780202>  (** \`+ 1500\`$getVar[symbol]**)**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];2000]]
$globalCooldown[24h;**You already collected your daily mind waiting** \`%time%\`]
$else
$if[$guildID==$getVar[supportid]]
$title[1;**Daily cash collected...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You collected your daily of** \`500\`$getVar[symbol]
**multiplier: In support server  (** \`+ 800\`$getVar[symbol]**)**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];1300]]
$globalCooldown[24h;**You already collected your daily mind waiting** \`%time%\`]
$else
$if[$authorID==852908598664364082]
$title[1;**Daily cash collected...**]
$color[1;$randomText[$getVar[1];$getVar[2]]]
$description[1;
$randomText[$getGlobalUserVar[xmas];$getGlobalUserVar[xmass]]

**You collected your daily of** \`2,500\`$getVar[symbol]
**multiplier: My owner  (** \`+ 500\`$getVar[symbol]**)**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];3000]]
$else
$if[$authorID==896846485805744168]
$title[1;**Daily cash collected...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getGlobalUserVar[xmas];$getGlobalUserVar[xmass]]

**You collected your daily of** \`2,500\`$getVar[symbol]
**multiplier: My owners friend  (** \`+ 500\`$getVar[symbol]**)**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];3000]]
$endif
$endif
$endif
$endif
$endif
$endif
$endif




$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]
$onlyIf[$memberExists[$get[u]]==true;{newEmbed: {color:RED} {description:$getVar[x] **Error member not found**}}]

$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`}