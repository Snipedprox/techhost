module.exports = {
    name: "tictactoe",
    category: 'Leaf',
    code: `$djsEval[(async () => {
      const opponent = message.mentions.users.first()
      if (!opponent) return message.channel.send("**⛔ Please provide the user to challenge**")
      
      const {
          Leaftictactoe
      } = require('leaf-utils')
      
      new Leaftictactoe({
          message: message,
          opponent: message.mentions.users.first(),
          embed: {
              title: 'Tic Tac Toe',
              color: '#5865F2',
          },
          oEmoji: '🔵',
          xEmoji: '❌',
          oColor: 'PRIMARY',
          xColor: 'DANGER',
          turnMessage: '{emoji} | Its now **{player}** turn!',
          waitMessage: 'Waiting for the opponent...',
          askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!',
          cancelMessage: 'Looks like they refused to have a game of Tic Tac Toe. \:(',
          timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
          drawMessage: 'It was a draw!',
          winMessage: '{emoji} | **{winner}** won the game!',
          gameEndMessage: 'The game went unfinished',
      }).startGame();
})()]

$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`
}