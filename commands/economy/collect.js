module.exports = {
name: "collect",
code: `
$setGlobalUserVar[allowence;$sub[$getGlobalUserVar[allowence];$getGlobalUserVar[allowence]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$getGlobalUserVar[allowence]]]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You claimed $numberSeparator[$getGlobalUserVar[allowence];,]$getServerVar[symbol]**]
$globalCooldown[3m;wait %time%]
$onlyIf[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`
}