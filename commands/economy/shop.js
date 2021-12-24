module.exports = [{
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

$onlyIf[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]

$addSelectMenu[1;shop;Crypto currency shop;1;1;no;Page 1:First page of the shop:1:no:<:ethereum:923325802861436998>]`
} , {
  name: "shop", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed:
  {title:**Welcome to the shop...**}
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]

{description:
$randomText[$getVar[xmas];$getVar[xmass]]


**$getVar[cbox] [Common box]($getVar[support])**
**Price:** \`100\`$getServerVar[esymbol]
**ID: \`common\`**

**$getVar[ubox] [Uncommon box]($getVar[support])**
**Price:** \`150\`$getServerVar[esymbol]
**ID: \`uncommon\`**

**$getVar[rbox] [Rare box]($getVar[support])**
**Price:** \`200\`$getServerVar[esymbol]
**ID: \`rare\`**

**$getVar[ebox] [Epic box]($getVar[support])**
**Price:** \`250\`$getServerVar[esymbol]
**ID: \`epic\`**

**$getVar[mbox] [Mythical box]($getVar[support])**
**Price:** \`300\`$getServerVar[esymbol]
**ID: \`mythical\`**

**$getVar[lbox] [Legendary box]($getVar[support])**
**Price:** \`500\`$getServerVar[esymbol]
**ID: \`legendary\`**
  }};;;yes]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]
$onlyif[$interactionData[values[0]]==1;]`
}]























