module.exports = {
    name: "quickword",
    category: 'Leaf',
    code: `$djsEval[(async () => {
        const {
            QuickWord
        } = require('leaf-utils')
        
        await QuickWord({
            message: message,
            embed: {
                title: 'Quick Word ',
                color: '#5865F2',
                footer: 'Quick word',
                timestamp: true
            },
            backgroundhex: 'f5f5f5', // Without "#"
            texthex: '5865F2', // Without "#"
            textlength: 7,
            time: 60000,
            waitMessage: 'The buttons may appear anytime now!',
            startMessage: 'First person to press the correct button will win. You have **{{time}}**!',
            winMessage: 'GG, <@{{winner}}> pressed the button in **{{time}} seconds**.',
            loseMessage: 'No one pressed the button in time. So, I dropped the game!',
            ongoingMessage: "A game is already runnning in <#{{channel}}>. You can't start a new one!"
        });
})()]

$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`
}