module.exports = {
name: "ores",
code: `
$author[1;$usertag[$get[u]]'s ores]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$thumbnail[1;$replaceText[$userAvatar[$get[u]];null;$useravatar[$clientid]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

<:iron:911929448343932989> **Iron:** \`$numberSeparator[$getGlobalUserVar[iron;$get[u]];,]\`

<:bronze:911929393214013501> **Bronze:** \`$numberSeparator[$getGlobalUserVar[bronze;$get[u]];,]\`

<:gold:911929526940991508> **Gold:** \`$numberSeparator[$getGlobalUserVar[gold;$get[u]];,]\`

<:diamonddd:911929573443264542> **Platinum:** \`$numberSeparator[$getGlobalUserVar[platinum;$get[u]];,]\`
]

$let[u;$findUser[$message;yes]]











$onlyIf[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]
$onlyIf[$memberExists[$get[u]]==true;{newEmbed: {color:RED} {description:$getVar[x] **Error member not found**}}]

$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`}