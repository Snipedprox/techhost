module.exports = {
name: "beg",
$if: "v4",
code: `
$if[$getGlobalUserVar[multiplier]==0]
$title[1;**Isnt that basty...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$addTimeStamp[1;ms]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**As a broke beggar you decided to go begging $randomText[on christmas even then people gave you;at a christmas tree and people gave you;at santas house which he then gave you;for milk and cookies the man said " hey thats for santa here you go" and he gave you]** \`$random[1;20]\`$getServerVar[symbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;20]]]
$globalCooldown[70s;**begging is nasty, just wait** \`%time%\`]

$else



$if[$getGlobalUserVar[multiplier]==1]

$title[1;**Isnt that basty...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$addTimeStamp[1;ms]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**As a broke beggar you decided to go begging $randomText[on christmas even then people gave you;at a christmas tree and people gave you;at santas house which he then gave you;for milk and cookies the man said " hey thats for santa here you go" and he gave you]** \`$random[20;100]\`$getServerVar[symbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[20;100]]]
$globalCooldown[70s;**begging is nasty, just wait** \`%time%\`]

$else

$if[$getGlobalUserVar[multiplier]==2]

$title[1;**Isnt that basty...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$addTimeStamp[1;ms]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**As a broke beggar you decided to go begging $randomText[on christmas even then people gave you;at a christmas tree and people gave you;at santas house which he then gave you;for milk and cookies the man said " hey thats for santa here you go" and he gave you]** \`$random[100;200]\`$getServerVar[symbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[100;200]]]
$globalCooldown[70s;**begging is nasty, just wait** \`%time%\`]

$else

$if[$getGlobalUserVar[multiplier]==3]
$title[1;**Isnt that basty...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$addTimeStamp[1;ms]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**As a broke beggar you decided to go begging $randomText[on christmas even then people gave you;at a christmas tree and people gave you;at santas house which he then gave you;for milk and cookies the man said " hey thats for santa here you go" and he gave you]** \`$random[200;500]\`$getServerVar[symbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[200;500]]]
$globalCooldown[70s;**begging is nasty, just wait** \`%time%\`]




$endif
$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`}