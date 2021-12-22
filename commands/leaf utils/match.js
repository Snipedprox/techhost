module.exports = {
    name: "match",
    category: 'Leaf',
    code: `$djsEval[(async () => {
    const { Match } = require('leaf-utils')
      
await Match({
    message: message,
    embed: {
        title: 'Football Match',
        color: 'RED',
    },
    buttons: {
        left: '⏪ Left',
        middle: '⏺ Middle',
        right: '⏩ Right',
    },
    emojis: {
        goalkeeper: '🧍‍♂️',
        goal: '🥅',
        soccer: '⚽',
    },
    winMessage: 'GG, <@{{winner}}> scored in **{{time}} seconds**.',
    loseMessage: '<@{{player}}> You lose',
    ongoingMessage: 'A game is already runnning in <#{{channel}}>. You cant start a new one',
    othersMessage: 'Only <@{{author}}> can use buttons'
})
})()]

$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`
}