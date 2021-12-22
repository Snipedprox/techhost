module.exports = {
name: "reply",
code: `
**Reply sent!**
$setGlobalUserVar[id;0]
$channelSendMessage[$getGlobalUserVar[id];{newEmbed:{title:Reply} {description:**My owner replied with
$message**}};no]
$onlyForids[$botownerid;896846485805744168;nope]`}

