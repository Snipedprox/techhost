module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: ` 
$if[$getGlobalUserVar[multiplier]==0]
$setGlobalUserVar[allowence;$sum[$getGlobalUserVar[allowence];$getGlobalUserVar[alcap]]]

$else

$if[$getGlobalUserVar[multiplier]==1]
$setGlobalUserVar[allowence;$sum[$getGlobalUserVar[allowence];$multi[2;$getGlobalUserVar[alcap]]]]
$else

$if[$getGlobalUserVar[multiplier]==2]
$setGlobalUserVar[allowence;$sum[$getGlobalUserVar[allowence];$multi[3;$getGlobalUserVar[alcap]]]]
$else

$if[$getGlobalUserVar[multiplier]==3]
$setGlobalUserVar[allowence;$sum[$getGlobalUserVar[allowence];$multi[4;$getGlobalUserVar[alcap]]]]
$endif
$endif
$endif
$endif
`}