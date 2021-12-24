module.exports = {
name: "multipliers",
code: `
$author[1;Multipliers]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**Multipliers are a way to increase your money by a little bit but you  might be asking yourself " how do i get or activate a multiplier? "
well to activate a multiplier you will be using trophies
below there is a list**

<:woodtrophy:922832078553374760> **Wooden trophy:** Level <:unone:922606075780423722> multiplier

<:goldtrophy:922832251350319184> **Golden trophy:** Level <:dosu:922606438558355527> multiplier

<:crystaltrophy:922832551192711179> **Crystal trophy:** Level <:trise:922606728082780202> multiplier]





$onlyIf[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`}