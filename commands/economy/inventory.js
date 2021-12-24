module.exports = {
name: "inv",
$if: "v4",
aliases: ['inventory','storage'],
code: `
$author[1;$usertag[$get[u]]'s inventory]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$thumbnail[1;$replaceText[$userAvatar[$get[u]];null;$useravatar[$clientid]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

<:woodtrophy:922832078553374760> **Wood trophy:** \`$numberSeparator[$getGlobalUserVar[woodtrophy;$get[u]];,]\`

<:goldtrophy:922832251350319184> **Gold trophy:** \`$numberSeparator[$getGlobalUserVar[goldtrophy;$get[u]];,]\`

<:crystaltrophy:922832551192711179> **Crystal trophy:** \`$numberSeparator[$getGlobalUserVar[crystaltrophy;$get[u]];,]\`

<:santahat:922644522528292875> **Christmas hat:** \`$numberSeparator[$getGlobalUserVar[santa;$get[u]];,]\`

<:phones:922650930762113024> **Smartphone:** \`$numberSeparator[$getGlobalUserVar[phone;$get[u]];,]\`

<:woodtrophy:922832078553374760> **Wood trophy:** \`$numberSeparator[$getGlobalUserVar[woodtrophy;$get[u]];,]\`

$getVar[cbox] **Common box:** \`$numberSeparator[$getGlobalUserVar[common;$get[u]];,]\`

$getVar[ubox] **Uncommon box:** \`$numberSeparator[$getGlobalUserVar[uncommon;$get[u]];,]\`

$getVar[rbox] **Rare box:** \`$numberSeparator[$getGlobalUserVar[rare;$get[u]];,]\`

$getVar[ebox] **Epic box:** \`$numberSeparator[$getGlobalUserVar[epic;$get[u]];,]\`

$getVar[mbox] **Mythical box:** \`$numberSeparator[$getGlobalUserVar[mythical;$get[u]];,]\`

$getVar[lbox] **Legendary box:** \`$numberSeparator[$getGlobalUserVar[legendary;$get[u]];,]\`
]

$let[u;$findUser[$message;yes]]











$onlyIf[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`}