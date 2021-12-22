module.exports = [{
name: "equip",
$if: "v4",
code: `
$if[$checkContains[$message;santa;santahat;shat]==true]
$color[1;GREEN]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You enabled your <:santahat:922644522528292875> now your embed colors will be red or white for the next 3 days, its random!**]

$setGlobalUserVar[1;ffffff]
$setGlobalUserVar[2;FF0000]

$settimeout[hat;3d;{
"cid": "$channelID",
"author": "$authorid"
}]

$onlyIf[$getGlobalUserVar[santa]>0;**You dont own any**]
$onlyIf[$getGlobalUserVar[hat]==off;**Its already enabled**]
$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]
$endif`
}, {
type: "timeout",
name: "hat",
code: `
$channelSendMessage[$timeOutData[cid];<@$timeOutData[author]> **Your <:santahat:922644522528292875> has expired cheers** ]`
}]