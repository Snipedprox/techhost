module.exports = {
    name: "snake",
    category: 'Leaf',
    code: `$djsEval[(async () => {
        const { Leafsnake } = require('leaf-utils')
        new Leafsnake({
          message: message,
          embed: {
            title: 'Snake',
            color: '#5865F2',
            OverTitle: 'Game Over',
          },
          snake: { head: '🟢', body: '🟩', tail: '🟢', over: '💀' },
          emojis: {
            board: '⬛', 
            food: '🍎',
            up: '⬆️', 
            right: '➡️',
            down: '⬇️',
            left: '⬅️',
          },
          foods: ['🍎', '🍇', '🍊'],
          stopButton: 'Stop',
          othersMessage: 'You are not allowed to use buttons for this message!',
        }).startGame();
        })()]
        
        $onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`
}