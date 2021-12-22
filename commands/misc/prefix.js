module.exports = {
name: "prefix",
code: `
$title[1;**Server prefixed...**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$addTimeStamp[1;ms]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**Prefix has been changed to** \`$message[2]\`]
$setServerVar[prefix;$message[2]]


$onlyPerms[manageserver;**Perms missing \`MANAGE_SERVER\`**]`}