module.exports = {
name: "open",
$if: "v4",
code: `
$if[$message[1]==common]

$color[1;FFFFFF]
$title[1;**Box opening**]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**$username you are opening $numberSeparator[$multi[1;$message[2]];,] $getVar[cbox] and got...**]

$editIn[3.10s;{newEmbed: {title:**Box opened**} {color:FFFFFF} {description:$randomText[$getVar[xmas];$getVar[xmass]]
**$username you just opened $numberSeparator[$multi[1;$message[2]];,] $getVar[cbox] and got**
\` + $multi[$message[2];$random[500;2500]]\` $getServerVar[symbol]
\` + $multi[$message[2];$random[1;25]]\` $getServerVar[esymbol]
\` + $multi[$message[2];$random[1;20]]\` <:iron:911929448343932989>
\` + $multi[$message[2];$random[1;15]]\` <:bronze:911929393214013501>
\` + $multi[$message[2];$random[1;10]]\` <:gold:911929526940991508>
\` + $multi[$message[2];$random[1;5]]\` <:diamonddd:911929573443264542>}}]


$setGlobalUserVar[common;$sub[$getGlobalUserVar[common];$multi[1;$message[2]]]]
$setGlobalUserVar[ether;$sum[$getGlobalUserVar[ether];$multi[$message[2];$random[1;25]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];$random[500;2500]]]]
$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron];$multi[$message[2];$random[1;20]]]]
$setGlobalUserVar[bronze;$sum[$getGlobalUserVar[bronze];$multi[$message[2];$random[1;15]]]]
$setGlobalUserVar[gold;$sum[$getGlobalUserVar[gold];$multi[$message[2];$random[1;10]]]
$setGlobalUserVar[platinum;$sum[$getGlobalUserVar[platinum];$multi[$message[2];$random[1;5]]]]


$onlyIf[$message[2]>0;**specify an amount**]
$onlyIf[$getGloalUserVar[common]>$multi[$truncate[1;$message[2]];**You do not have enough $getVar[cbox]**]

$else

$if[$message[1]==uncommon]

$color[1;FFFFFF]
$title[1;**Box opening**]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**$username you are opening $numberSeparator[$multi[1;$message[2]];,] $getVar[ubox] and got...**]

$editIn[3.10s;{newEmbed: {title:**Box opened**} {color:FFFFFF} {description:$randomText[$getVar[xmas];$getVar[xmass]]
**$username you just opened $numberSeparator[$multi[1;$message[2]];,] $getVar[ubox] and got**
\` + $multi[$message[2];$random[1000;5000]\` $getServerVar[symbol]
\` + $multi[$message[2];$random[25;30]]\` $getServerVar[esymbol]
\` + $multi[$message[2];$random[20;25]]\` <:iron:911929448343932989>
\` + $multi[$message[2];$random[15;20]]\` <:bronze:911929393214013501>
\` + $multi[$message[2];$random[10;15]]\` <:gold:911929526940991508>
\` + $multi[$message[2];$random[5;10]]\` <:diamonddd:911929573443264542>}}]


$setGlobalUserVar[uncommon;$sub[$getGlobalUserVar[uncommon];$multi[1;$message[2]]]]
$setGlobalUserVar[ether;$sum[$getGlobalUserVar[ether];$multi[$message[2];$random[25;30]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];$random[1000;5000]]]]
$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron];$multi[$message[2];$random[20;25]]]]
$setGlobalUserVar[bronze;$sum[$getGlobalUserVar[bronze];$multi[$message[2];$random[15;20]]]]
$setGlobalUserVar[gold;$sum[$getGlobalUserVar[gold];$multi[$message[2];$random[10;15]]]]
$setGlobalUserVar[platinum;$sum[$getGlobalUserVar[platinum];$multi[$message[2];$random[5;10]]]]


$onlyIf[$message[2]>0;**specify an amount**]
$onlyIf[$getGloalUserVar[uncommon]>$multi[1;$message[2]];**You do not have enough $getVar[ubox]**]


$else

$if[$message[1]==rare]

$color[1;FFFFFF]
$title[1;**Box opening**]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**$username you are opening $numberSeparator[$multi[1;$message[2]];,] $getVar[rbox] and got...**]

$editIn[3.10s;{newEmbed: {title:**Box opened**} {color:FFFFFF} {description:$randomText[$getVar[xmas];$getVar[xmass]]
**$username you just opened $numberSeparator[$multi[1;$message[2]];,] $getVar[rbox] and got**
\` + $multi[$message[2];$random[2500;10000]]\` $getServerVar[symbol]
\` + $multi[$message[2];$random[30;35]]\` $getServerVar[esymbol]
\` + $multi[$message[2];$random[25;30]]\` <:iron:911929448343932989>
\` + $multi[$message[2];$random[20;25]]\` <:bronze:911929393214013501>
\` + $multi[$message[2];$random[15;20]]\` <:gold:911929526940991508>
\` + $multi[$message[2];$random[10;15]]\` <:diamonddd:911929573443264542>}}]


$setGlobalUserVar[rare;$sub[$getGlobalUserVar[rare];$multi[1;$message[2]]]]
$setGlobalUserVar[ether;$sum[$getGlobalUserVar[ether];$multi[$message[2];$random[30;35]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];$random[2500;10000]]]]
$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron];$multi[$message[2];$random[25;30]]]]
$setGlobalUserVar[bronze;$sum[$getGlobalUserVar[bronze];$multi[$message[2];$random[20;25]]]]
$setGlobalUserVar[gold;$sum[$getGlobalUserVar[gold];$multi[$message[2];$random[15;20]]]]
$setGlobalUserVar[platinum;$sum[$getGlobalUserVar[platinum];$multi[$message[2];$random[10;15]]]]


$onlyIf[$message[2]>0;**specify an amount**]
$onlyIf[$getGloalUserVar[rare]>$multi[1;$message[2]];**You do not have enough $getVar[rbox]**]


$else

$if[$message[1]==epic]

$color[1;FFFFFF]
$title[1;**Box opening**]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**$username you are opening $numberSeparator[$multi[1;$message[2]];,] $getVar[ebox] and got...**]

$editIn[3.10s;{newEmbed: {title:**Box opened**} {color:FFFFFF} {description:$randomText[$getVar[xmas];$getVar[xmass]]
**$username you just opened $numberSeparator[$multi[1;$message[2]];,] $getVar[ebox] and got**
\` + $multi[$message[2];$random[5000;15000]]\` $getServerVar[symbol]
\` + $multi[$message[2];$random[35;40]]\` $getServerVar[esymbol]
\` + $multi[$message[2];$random[30;35]]\` <:iron:911929448343932989>
\` + $multi[$message[2];$random[25;30]]\` <:bronze:911929393214013501>
\` + $multi[$message[2];$random[20;25]]\` <:gold:911929526940991508>
\` + $multi[$message[2];$random[15;20]]\` <:diamonddd:911929573443264542>}}]


$setGlobalUserVar[epic;$sub[$getGlobalUserVar[epic];$multi[1;$message[2]]]]
$setGlobalUserVar[ether;$sum[$getGlobalUserVar[ether];$multi[$message[2];$random[35;40]]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];$random[5000;15000]]]]
$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron];$multi[$message[2];$random[30;35]]]]
$setGlobalUserVar[bronze;$sum[$getGlobalUserVar[bronze];$multi[$message[2];$random[25;30]]]]
$setGlobalUserVar[gold;$sum[$getGlobalUserVar[gold];$multi[$message[2];$random[20;25]]]]
$setGlobalUserVar[platinum;$sum[$getGlobalUserVar[platinum];$multi[$message[2];$random[15;20]]]]


$onlyIf[$message[2]>0;**specify an amount**]
$onlyIf[$getGloalUserVar[epic]>$multi[1;$message[2]];**You do not have enough $getVar[ebox]**]


$else

$if[$message[1]==mythical]

$color[1;FFFFFF]
$title[1;**Box opening**]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**$username you are opening $numberSeparator[$multi[1;$message[2]];,] $getVar[mbox] and got...**]

$editIn[3.10s;{newEmbed: {title:**Box opened**} {color:FFFFFF} {description:$randomText[$getVar[xmas];$getVar[xmass]]
**$username you just opened $numberSeparator[$multi[1;$message[2]];,] $getVar[mbox] and got**
\` + $multi[$message[2];$random[10000;20000]\` $getServerVar[symbol]
\` + $multi[$message[2];$random[1;45]]\` $getServerVar[esymbol]
\` + $multi[$message[2];$random[1;40]]\` <:iron:911929448343932989>
\` + $multi[$message[2];$random[1;35]]\` <:bronze:911929393214013501>
\` + $multi[$message[2];$random[1;30]]\` <:gold:911929526940991508>
\` + $multi[$message[2];$random[1;25]]\` <:diamonddd:911929573443264542>}}]


$setGlobalUserVar[mythical;$sub[$getGlobalUserVar[mythical];$multi[1;$message[2]]]]
$setGlobalUserVar[ether;$sum[$getGlobalUserVar[ether];$multi[$message[2];$random[1;45]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];$random[10000;20000]]]
$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron];$multi[$message[2];$random[1;40]]]
$setGlobalUserVar[bronze;$sum[$getGlobalUserVar[bronze];$multi[$message[2];$random[1;35]]]]
$setGlobalUserVar[gold;$sum[$getGlobalUserVar[gold];$multi[$message[2];$random[1;30]]]]
$setGlobalUserVar[platinum;$sum[$getGlobalUserVar[platinum];$multi[$message[2];$random[1;25]]]]


$onlyIf[$message[2]>0;**specify an amount**]
$onlyIf[$getGloalUserVar[mythical]>$multi[1;$message[2]];**You do not have enough $getVar[mbox]**]



$else

$if[$message[1]==legendary]

$color[1;FFFFFF]
$title[1;**Box opening**]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**$username you are opening $numberSeparator[$multi[1;$message[2]];,] $getVar[lbox] and got...**]

$editIn[3.10s;{newEmbed: {title:**Box opened**} {color:FFFFFF} {description:$randomText[$getVar[xmas];$getVar[xmass]]
**$username you just opened $numberSeparator[$multi[1;$message[2]];,] $getVar[lbox] and got**
\` + $multi[$message[2];$random[15000;25000]]\` $getServerVar[symbol]
\` + $multi[$message[2];$random[1;50]]\` $getServerVar[esymbol]
\` + $multi[$message[2];$random[1;45]]\` <:iron:911929448343932989>
\` + $multi[$message[2];$random[1;40]]\` <:bronze:911929393214013501>
\` + $multi[$message[2];$random[1;35]]\` <:gold:911929526940991508>
\` + $multi[$message[2];$random[1;30]]\` <:diamonddd:911929573443264542>}}]


$setGlobalUserVar[legendary;$sub[$getGlobalUserVar[legendary];$multi[1;$message[2]]]]
$setGlobalUserVar[ether;$sum[$getGlobalUserVar[ether];$multi[$message[2];$random[1;50]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];$random[15000;25000]]]
$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron];$multi[$message[2];$random[1;45]]]
$setGlobalUserVar[bronze;$sum[$getGlobalUserVar[bronze];$multi[$message[2];$random[1;40]]]
$setGlobalUserVar[gold;$sum[$getGlobalUserVar[gold];$multi[$message[2];$random[1;35]]]
$setGlobalUserVar[platinum;$sum[$getGlobalUserVar[platinum];$multi[$message[2];$random[1;30]]]


$onlyIf[$message[2]>0;**specify an amount**]
$onlyIf[$getGloalUserVar[legendary]>$multi[1;$message[2]];**You do not have enough $getVar[lbox]**]
$endif
$endif
$endif
$endif
$endif
$endif



$onlyIf[$creatonDate[$authoID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`}