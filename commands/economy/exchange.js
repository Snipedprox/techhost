module.exports = {
name: "exchange",
$if: "v4",
code: `
$if[$checkContains[$message[1];ether;ethereum;crypto;eth]==true]
$title[1;**Exchange from $getServerVar[esymbol] to $getServerVar[symbol]...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You exchanged $numberSeparator[$multi[$message[2];1];,]$getServerVar[esymbol] to $getServerVar[symbol] and got $numberSeparator[$multi[$message[2];100];,] $getServerVar[symbol]**]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];[$multi[$message[2];100]]]]

$setGlobalUserVar[ether;$sub[$getGlobalUserVar[ether];$multi[$message[2];1]]]

$onlyIf[$getGlobalUserVar[ether]>=$multi[$message[2];1];**You dont have enough $getServerVar[esymbol]**]
$onlyIf[$message[2]>=1;**Specify an amount please**]
$onlyIf[$isNumber[$message[2]]==true;**Not a number**]

$else
$if[$checkContains[$message[1];cash;money;snow;snowballs]==true]
$title[1;**Exchange from $getServerVar[symbol] to $getServerVar[esymbol]...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You exchanged $numberSeparator[$multi[$message[2];100];,]$getServerVar[symbol] to $getServerVar[esymbol] and got $numberSeparator[$multi[$message[2];1];,] $getServerVar[esymbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];100]]]

$setGlobalUserVar[ether;$sum[$getGlobalUserVar[ether];$multi[$message[2];1]]]

$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];100];**You dont have enough $getServerVar[symbol]**]
$onlyIf[$message[2]>=1;**Specify an amount please**]
$onlyIf[$isNumber[$message[2]]==true;**Not a number**]

$else
$getVar[x] **Not a valid option you can only choose
\`crypto\`,\`cash\`**
$endif
$endif `
}