module.exports = {
    name: "coinflip",
    category: 'Leaf',
    code: `$djsEval[(async () => {
      const {
        Coinflip
    } = require('leaf-utils')
    
    await Coinflip({
        message: message,
        embed: {
            title: 'Coinflip',
            color: 'RED',
        },
        buttons: {
            heads: 'Heads',
            tails: 'Tails',
        },
        colors: {
            heads: 'DANGER',
            tails: 'PRIMARY',
        },
        startMessage: 'The coin is in the air Choose heads or tails below.',
        winMessage: 'GG, <@{{winner}}> The coin landed on **{{result}}**',
        loseMessage: '<@{{player}}> You lose The coin landed on **{{result}}**',
        ongoingMessage: 'A game is already runnning in <#{{channel}}>. You cant start a new one',
        othersMessage: 'Only <@{{author}}> can use buttons'
    })
})()]

$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`
}