module.exports = {
  name: "wyr",
  category: 'Leaf',
  code: `$djsEval[(async () => {
	const { WouldYouRather } = require('leaf-utils')
      
	await WouldYouRather({
  message: message,
  embed: {
	  title: 'Would you rather',
	  color: '#5865F2',
	  footer: 'Would you rather',
	  timestamp: true
  },
  thinkMessage: 'I am thinking',
  othersMessage: 'Only <@{{author}}> can use the buttons!',
  buttons: { optionA: 'Option A', optionB: 'Option B' }
})
})()]

$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`
}