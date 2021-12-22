module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `
 $if[$getGlobalUserVar[talk;$authorID]>$getGlobalUserVar[req;$authorID]]
$setGlobalUserVar[level;$sum[$getGlobalUserVar[level;$authorID];1];$authorID]
$setGlobalUserVar[req;$sum[$getGlobalUserVar[req;$authorID];5500];$authorID]
$setGlobalUserVar[talk;0;$authorID]
$setGlobalUserVar
[cash;$sum[$getGlobalUserVar[cash;$authorID];$random[10;500]];$authorID]
$else
$setGlobalUserVar[talk;$sum[$getGlobalUserVar[talk;$authorID];$random[10;40]];$authorID]
$endif
$setGlobalUserVar[hunger;$sub[$getGlobalUserVar[hunger];1]]
$setGlobalUserVar[thirst;$sub[$getGlobalUserVar[thirst];1]]
$onlyIf[$getGlobalUserVar[hunger]>0;]
$onlyIf[$getGlobalUserVar[thirst]>0;]
$onlyIf[$getGlobalUserVar[start]==true;]
`}
