module.exports = {
name: "work",
$if: "v4",
code: `
$if[$getGlobalUserVar[job]==karen]
$title[1;**Put in the work...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

🧙‍ **| You worked as a karen and $randomText[ruined someones christmas :#RIGHT_CLICK#;screamed at santa for comming through the chimney and not the front door;didnt give santa milk and cookies;you said that christmas sucks;you didnt give your children any presents <:christmass:922625701750915163>;closed the door o the singing children;you were on the naughty list] and for that you somehow made ** \`$numberSeparator[$random[1;50];,]\`$getVar[symbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;50]]]
$globalCooldown[5h;**You did great champ now please wait** \`%time%\`]
$else

$if[$getGlobalUserVar[job]==doctor]
$title[1;**Put in the work...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

👨‍⚕️‍ **| You worked as a doctor and $randomText[went into the hospital and gave the most illest kid a present <:christmass:922625701750915163>;managed to heal the kid who was on life support;cured a dying patient;donated your money to the hospital;sang a christmas song to your patients]  and for that you made ** \`$numberSeparator[$random[1;250];,]\`$getVar[symbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;250]]]
$globalCooldown[5h;**You did great champ now please wait** \`%time%\`]
$else

$if[$getGlobalUserVar[job]==farmer]
$title[1;**Put in the work...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

👨‍🌾‍ **| You worked as a farmer and $randomText[made some ginger bread for your family;donated some crops to the baker;made some warm milk for santa;gave santa more than enough cookies :heart:]  and for that you made ** \`$numberSeparator[$random[1;5000];,]\`$getVar[symbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;500]]]
$globalCooldown[5h;**You did great champ now please wait** \`%time%\`]
$else

$if[$getGlobalUserVar[job]==judge]
$title[1;**Put in the work...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

👨‍⚖️‍ **| You worked as a judge and $randomText[sent the grinch to 50y jail time;forced that one karen to pay $random[200;500][$]($getVar[support]) because they didnt put any milk and cookies for santa;you gave santa another reindeer]  and for that you made ** \`$numberSeparator[$random[1;1000];,]\`$getVar[symbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;1000]]]
$globalCooldown[5h;**You did great champ now please wait** \`%time%\`]
$else

$if[$getGlobalUserVar[job]==astronaut]
$title[1;**Put in the work...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

🧑‍🚀‍ **| You worked as a astronaut and $randomText[flew to space to wish the aliens a merry christmas;flew to space to give space santa some milk and cookies;flew to space and arrested the space grinch;flew to space and helped out the aliens]  and for that you made ** \`$numberSeparator[$random[1;5000];,]\`$getVar[symbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;5000]]]
$globalCooldown[5h;**You did great champ now please wait** \`%time%\`]
$else

$if[$getGlobalUserVar[job]==santa]
$title[1;**Put in the work...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

🎅‍ **| Ho Ho Ho You worked as a santa and $randomText[climbed through the chimney to give a naughty kid some coal ew;gave the naughty kid a second chance wow :eyes:;ate the milk and cookies from a poor and guy and gave him a ps5;just sat on your bum and didnt do anything;wen to space to give the aliens a brand new UFO;actually tried working out and stopped eating milk and cookies :eyes:]  and for that you made ** \`$numberSeparator[$random[1;10000];,]\`$getVar[symbol]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;10000]]]
$globalCooldown[5h;**You did great champ now please wait** \`%time%\`]
$else

$if[$getGlobalUserVar[job]==none]
$title[1;**Put in the laziness...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**Ho Ho Ho 🎅 santa said go get a job you lazy kid**]

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