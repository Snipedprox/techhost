module.exports = {
name: "joblist",
code: `
$title[1;**Job list...**]
$footer[1;Page 1 / 1]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
\`\`\`php
To apply for a job do $getServerVar[prefix]apply #RIGHT_CLICK#id#LEFT_CLICK#\`\`\`

$randomText[$getVar[xmas];$getVar[xmass]]


🧙‍ **[Karen]($getVar[support])**
**[Salaray]($getVar[support])#COLON#** \`1 /50\`$getServerVar[symbol]
**[Level required]($getVar[support])#COLON#** \`✧ 0\`
**[ID]($getVar[support])#COLON#** \`karen\`

👨‍⚕️ **[Doctor]($getVar[support])**
**[Salaray]($getVar[support])#COLON#** \`1 /250\`$getServerVar[symbol]
**[Level required]($getVar[support])#COLON#** \`✧ 5\`
**[ID]($getVar[support])#COLON#** \`doctor\`

👨‍🌾 **[Farmer]($getVar[support])**
**[Salaray]($getVar[support])#COLON#** \`1 /500\`$getServerVar[symbol]
**[Level required]($getVar[support])#COLON#** \`✧ 10\`
**[ID]($getVar[support])#COLON#** \`farmer\`

👨‍⚖️ **[Judge]($getVar[support])**
**[Salaray]($getVar[support])#COLON#** \`1 /1,000\`$getServerVar[symbol]
**[Level required]($getVar[support])#COLON#** \`✧ 15\`
**[ID]($getVar[support])#COLON#** \`judge\`

🧑‍🚀 **[Astronaut]($getVar[support])**
**[Salaray]($getVar[support])#COLON#** \`1 /5,000\`$getServerVar[symbol]
**[Level required]($getVar[support])#COLON#** \`✧ 20\`
**[ID]($getVar[support])#COLON#** \`astronaut\`

🎅 **[Santa]($getVar[support])**
**[Salaray]($getVar[support])#COLON#** \`1 /10,000\`$getServerVar[symbol]
**[Level required]($getVar[support])#COLON#** \`✧ 30\`
**[ID]($getVar[support])#COLON#** \`santa\`
**[Limited time]($getVar[support])#COLON#** \`January 5th 2022\`]


$onlyIf[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`}