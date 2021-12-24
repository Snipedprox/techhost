module.exports = {
name: "slot",
$if: "v4",
aliases: ['slots','sl'],
code: `
$if[$randomText[l;l;w]==w]
$title[1;**$username's slot**]
$color[1;FFFFFF]
$footer[1;Merry christmas!]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

〉 ┋ <a:owol:922223575405056111> ┋ <a:owol:922223575405056111> ┋ <a:owol:922223575405056111> ┋ 〈
**Your bet:** \`$numberSeparator[$truncate[$message];,]\`$getVar[symbol]]

$setGlobalUserVar[w1;$randomText[<:eggplant:922227352711356476>;<:heart:922227455182376990>;<:cherrys:922227409347035176>]]

$editIn[0.9s;{newEmbed: {title:**$username's slot**} {footer:Merry christmas!} {color:FFFFFF} {description:
$randomText[$getVar[xmas];$getVar[xmass]]

〉 ┋ $getGlobalUserVar[w1] ┋ <a:owol:922223575405056111> ┋ <a:owol:922223575405056111> ┋ 〈
**Your bet:** \`$numberSeparator[$truncate[$message];,]\`$getVar[symbol]}};{newEmbed: {title:**$username's slot**} {footer:Merry christmas!} {color:FFFFFF} {description:
$randomText[$getVar[xmas];$getVar[xmass]]

〉 ┋ $getGlobalUserVar[w1] ┋ $getGlobalUserVar[w1] ┋ <a:owol:922223575405056111> ┋ 〈
**Your bet:** \`$numberSeparator[$truncate[$message];,]\`$getVar[symbol]}};{newEmbed: {title:**$username's slot**} {footer:Merry christmas!} {color:FFFFFF} {description:
$randomText[$getVar[xmas];$getVar[xmass]]

〉 ┋ $getGlobalUserVar[w1] ┋ $getGlobalUserVar[w1] ┋ $getGlobalUserVar[w1] ┋ 〈
**Your bet:** \`$numberSeparator[$truncate[$message];,]\`$getVar[symbol]
**You won:** \`$numberSeparator[$truncate[$multi[$message;1]];,]\`$getVar[symbol]}}]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$truncate[$multi[$message;1]]]]

$else

$if[$randomText[l;l;w]==l]


$title[1;**$username's slot**]
$color[1;FFFFFF]
$footer[1;Merry christmas!]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

〉 ┋ <a:owol:922223575405056111> ┋ <a:owol:922223575405056111> ┋ <a:owol:922223575405056111> ┋ 〈
**Your bet:** \`$numberSeparator[$truncate[$message];,]\`$getVar[symbol]]

$editIn[0.9s;{newEmbed: {title:**$username's slot**} {footer:Merry christmas!} {color:FFFFFF} {description:
$randomText[$getVar[xmas];$getVar[xmass]]

〉 ┋ $getGlobalUserVar[l1] ┋ <a:owol:922223575405056111> ┋ <a:owol:922223575405056111> ┋ 〈
**Your bet:** \`$numberSeparator[$truncate[$message];,]\`$getVar[symbol]}};{newEmbed: {title:**$username's slot**} {footer:Merry christmas!} {color:FFFFFF} {description:
$randomText[$getVar[xmas];$getVar[xmass]]

〉 ┋ $getGlobalUserVar[l1] ┋ $getGlobalUserVar[l2] ┋ <a:owol:922223575405056111> ┋ 〈
**Your bet:** \`$numberSeparator[$truncate[$message];,]\`$getVar[symbol]}};{newEmbed: {title:**$username's slot**} {footer:Merry christmas!} {color:FFFFFF} {description:
$randomText[$getVar[xmas];$getVar[xmass]]

〉 ┋ $getGlobalUserVar[l1] ┋ $getGlobalUserVar[l2] ┋ $getGlobalUserVar[l1] ┋ 〈
**Your bet:** \`$numberSeparator[$truncate[$message];,]\`$getVar[symbol]
**You lost:** \`$numberSeparator[$truncate[$multi[$message;1]];,]\`$getVar[symbol]}}]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$truncate[$multi[$message;1]]]]
$setGlobalUserVar[l1;$randomText[<:eggplant:922227352711356476>;<:heart:922227455182376990>;<:cherrys:922227409347035176>]]
$setGlobalUserVar[l2;$randomText[<:heart:922227455182376990>;<:eggplant:922227352711356476>;<:cherrys:922227409347035176>]]
$endif
$endif
$onlyIf[$getGlobalUserVar[cash]>$truncate[$multi[$message;1]];**Not enough money**]
$onlyIf[$truncate[$multi[$message;1]]=<150000;**The max bet amount is** \`150,000\`$getVar[symbol]]
$onlyIf[$isNumber[$message]==true;**Not a valid number**]
$onlyIf[$message>0;**specify an amount please**]
$onlyIf[$checkContains[$message;-;_;,]==false;**Dont use those symbols**]
$onlyIf[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]
$globalCooldown[3s;**Gambling isnt good so wait** \`%time%\`]
`
}


