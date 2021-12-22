module.exports = {
name: "shop",
code: `
$title[1;**Welcome to the shop...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$addTimeStamp[1;ms]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]


**<:santahat:922644522528292875> [Christmas hat]($getVar[support])**
**Price:** \`10,000\`$getServerVar[symbol]
**ID: \`santa , santahat\`**

**<:phones:922650930762113024> [Smartphone]($getVar[support])**
**Price:** \`1,000\`$getServerVar[symbol]
**ID: \`phone , ph\`**

\`\`\`php
🜲 Trophies 🜲\`\`\`

**<:woodtrophy:922832078553374760> [Wooden trophy]($getVar[support])**
**Price:** \`5,000\`$getServerVar[symbol]
**ID: \`woodtrophy , trophyw\`**

**<:goldtrophy:922832251350319184> [Golden trophy]($getVar[support])**
**Price:** \`15,000\`$getServerVar[symbol]
**ID: \`goldtrophy , trophyg\`**

**<:crystaltrophy:922832551192711179> [Crystal trophy]($getVar[support])**
**Price:** \`150,000\`$getServerVar[symbol]
**ID: \`crystaltrophy , trophyc\`**
]









$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]
$onlyIf[$memberExists[$get[u]]==true;{newEmbed: {color:RED} {description:$getVar[x] **Error member not found**}}]

$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`}
















