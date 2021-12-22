module.exports = {
    name: "trivia",
	category: 'Leaf',
    code: `$djsEval[(async () => {
		const {
			Trivia
		} = require('leaf-utils')
		
		await Trivia({
			message: message,
			embed: {
				title: 'Trivia :eyes:',
				description: 'You only have **{{time}}** to guess the answer!',
				color: '#5865F2',
				footer: 'Trivia ',
				timestamp: true
			},
			difficulty: 'hard',
			thinkMessage: 'I am thinking',
			winMessage: 'GG, It was **{{answer}}**. You gave the correct answer in **{{time}}**.',
			loseMessage: 'Better luck next time! The correct answer was **{{answer}}**.',
			emojis: {
				one: '1️⃣',
				two: '2️⃣',
				three: '3️⃣',
				four: '4️⃣',
			},
			othersMessage: 'Only <@{{author}}> can use the buttons!',
			returnWinner: false
		})
})()]

$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`
}