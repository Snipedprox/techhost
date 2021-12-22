module.exports = {
name: "apply",
$if: "v4",
code: `
$if[$checkContains[$message;karen;kk;mage]==true]
$title[1;**Job selected...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

🧙 **|** **You now work as an 🧙 karen**]
$setGlobalUserVar[job;karen]

$else

$if[$checkContains[$message;doctor;nurse;doc]==true]
$title[1;**Job selected...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

👨‍⚕️ **|** **You now work as an 👨‍⚕️ doctor**]
$setGlobalUserVar[job;doctor]
$onlyIf[$getGlobalUserVar[level]>4;**not enough levels youll need to be level 5 or more**]

$else

$if[$checkContains[$message;farmer;farm;farmers]==true]
$title[1;**Job selected...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

👨‍🌾 **|** **You now work as an 👨‍🌾 farmer**]
$setGlobalUserVar[job;farmer]
$onlyIf[$getGlobalUserVar[level]>9;**not enough levels youll need to be level 10 or more**]


$else

$if[$checkContains[$message;judge;accountants;jugde]==true]
$title[1;**Job selected...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

👨‍⚖️ **|** **You now work as an 👨‍⚖️ judge**]
$setGlobalUserVar[job;judge]
$onlyIf[$getGlobalUserVar[level]>14;**not enough levels youll need to be level 15 or more**]

$else

$if[$checkContains[$message;astronaut;astro;astrunat]==true]
$title[1;**Job selected...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

🧑‍🚀 **|** **You now work as an 🧑‍🚀 astronaut**]
$setGlobalUserVar[job;astronaut]
$onlyIf[$getGlobalUserVar[level]>19;**not enough levels youll need to be level 20 or more**]

$else

$if[$checkContains[$message;santa;santaclaus;senta]==true]
$title[1;**Job selected...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

🎅 **|** **You now work as an 🎅 santa**]
$setGlobalUserVar[job;santa]
$onlyIf[$getGlobalUserVar[level]>29;**not enough levels youll need to be level 30 or more**]

$else

:x: **You have provided an invalid job please specify a valid job
$endif
$endif
$endif
$endif
$endif
$endif

$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]
$onlyIf[$memberExists[$get[u]]==true;{newEmbed: {color:RED} {description:$getVar[x] **Error member not found**}}]

$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`}
