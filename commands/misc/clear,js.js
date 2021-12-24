module.exports = {
name: "clear",
code: `

**Successfully cleared $numberSeparator[$message;,] messages**
$clear[$message]
$onlyIf[$message>0;**Specify an amount for me to clear**]
$onlyPerms[managemessages;**Missing perms \`MANAGE_MESSAGES\`**]
$onlyBotPerms[managemessages;**I am missing the perms \`MANAGE_MESSAGES
\`**]`}