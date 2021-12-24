module.exports = [{
name: "use",
$if: "v4",
code: `
$if[$checkContains[$message;woodtrophy;wtrophy;trophyw]==true]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You used your <:woodtrophy:922832078553374760> and now enjoy a level <:unone:922606075780423722> multiplier 1h**]

$setGlobalUserVar[multiplier;1]
$setGlobalUserVar[tmultiplier;on]

$settimeout[wood;1h;{
"author": "$authorid"
}]

$else

$if[$checkContains[$message;goldtrophy;gtrophy;trophyg]==true]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You used your <:goldtrophy:922832251350319184> and now enjoy a level <:dosu:922606438558355527> multiplier for 1h**]

$setGlobalUserVar[multiplier;2]
$setGlobalUserVar[tmultiplier;on]

$settimeout[gold;1h;{
"author": "$authorid"
}]

$onlyIf[$getGlobalUserVar[goldtrophy]>0;**You dont own any**]
$onlyIf[$getGlobalUserVar[tmultiplier]==off;**Your multplier is already enabled**]

$else

$if[$checkContains[$message;crystaltrophy;ctrophy;trophyc]==true]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You used your <:crystaltrophy:922832551192711179> and now enjoy a level <:trise:922606728082780202> multiplier for 1h**]

$setGlobalUserVar[multiplier;3]
$setGlobalUserVar[tmultiplier;on]

$settimeout[crystal;1h;{
"author": "$authorid"
}]
$onlyIf[$getGlobalUserVar[crystaltrophy]>0;**You dont own any**]
$onlyIf[$getGlobalUserVar[tmultiplier]==off;**Your multplier is already enabled**]
$else
**$getVar[x] Ho Ho Ho seems like you cant use that item**
$endif
$endif
$endif


$onlyIf[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]
`
}, {
type: "timeout",
name: "wood",
code: `
$SendMessage[<@$timeOutData[author]> **Your <:woodtrophy:922832078553374760> has expired cheers**;no]`
}, {
type: "timeout",
name: "gold",
code: `
$SendMessage[<@$timeOutData[author]> **Your <:goldtrophy:922832251350319184> has expired cheers**;no]`
}, {
type: "timeout",
name: "crystal",
code: `
$SendMessage[<@$timeOutData[author]> **Your <:crystaltrophy:922832551192711179> has expired cheers** ;no]`
}]