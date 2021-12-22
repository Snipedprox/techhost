module.exports = {
name: "help",
code: `
$title[1;**Welcome to my commandlist**]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**Economy**
\`apply\` **,** \`balance\` **,** \`buy\` **,** \`daily\` **,** \`equip\` **,** \`joblist\` **,** \`profile\` **,** \`work\` **,** \`beg\` **,** \`withdraw\` **,** \`deposit\` **,** \`shop\` **,** \`use\` **,** \`inventory\` **,** \`multipliers\` **,** \`slot\` **,** \`sell\` **,** \`pay\` **,** \`collect\`

**Pickaxe**
\`ores\` **,** \`mine\` **,** \`pickaxe\` **,** \`pickaxe upgrade\` **,** \`pickaxe recharge\` **,** \`pickaxe stats\` **,** \`pickaxe list\`

**Utility**
\`invite\` **,** \`help\` **,** \`message\` **,** \`cmdsettings\` **,** \`prefix\`

**Leaf utils**
\`calculator\` **,** \`coinflip\` **,** \`connect4\` **,** \`github\` **,** \`hangman\` **,** \`match\` **,** \`npm\` **,** \`quickclick\` **,** \`quickword\` **,** \`rps\` **,** \`snake\` **,** \`tictactoe\` **,** \`trivia\` **,** \`wyr\`]

$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`}