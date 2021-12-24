module.exports = {
name: "message",
$if: "v4",
code: `
$if[$charCount[$message]==0]
**Specify a message**
$globalCooldown[10s;**My dev doesnt like spammers so try again in like ** \`%time%\`]
$else
$if[$charCount[$message]>0]
**Message has been sent to my developer wait for her reply**
$channelSendMessage[922639697816203324;{newEmbed: {author: $authorid } {description:
**ID:** \`$authorid\`
**Tag:** \`$usertag[$authorid]\`
**channelID:** \`$channelID\`
**Messgae:** $message}};no]
$onlyIf[$getGlobalUserVar[phone]>0;**I dont think you even own a phone!**]

$onlyIf[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]
$globalCooldown[10m;**My dev doesnt like spammers so try again in like ** \`%time%\`]
$endif
$endif`
}