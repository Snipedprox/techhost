module.exports = {
    name: "connect4",
    category: 'Leaf',
    code: `$djsEval[(async () => {
   let opponent = message.mentions.users.first()
    if (!opponent) return message.channel.send("**⛔ Please provide the user to challenge**")
  
  const { Connect4 } = require('leaf-utils')
  
  new Connect4({
    message: message,
    opponent: message.mentions.users.first(),
    embed: {
      title: 'Connect 4',
      color: '#5865F2',
    },
    emojis: {
      player1: '🔵',
      player2: '🟡'
    },
    waitMessage: 'Waiting for the opponent..',
    turnMessage: '{emoji} | Its turn of player **{player}**.',
    winMessage: '{emoji} | **{winner}** won the game!',
    gameEndMessage: 'The game went unfinished :(',
    drawMessage: 'It was a draw!',
    othersMessage: 'You are not allowed to use buttons for this message!',
    askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Connect 4!',
    cancelMessage: 'Looks like they refused to have a game of Connect4',
    timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
  }).startGame()
  
  })()]
  $suppressErrors
  
  $onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`
  }