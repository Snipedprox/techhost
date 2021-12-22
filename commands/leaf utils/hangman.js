module.exports = {
    name: "hangman",
    category: 'Leaf',
    code: `$djsEval[(async () => {
const { Hangman } = require('leaf-utils')
const game = new Hangman({
    message: message,
    embed: {
        title: 'Hangman',
        color: 'RED',
    },
    hangman: {
        hat: '🧢',
        head: '🧔',
        shirt: '🎽 ',
        pants: '👖',
        boots: '👟👟',
    },
    winMessage: 'You won! The word was... **{{word}}**',
    loseMessage: 'You lose! The word was... **{{word}}**'
})
game.start()
})()]

$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`
}