module.exports = {
    name: "npm",
    category: 'Leaf',
    code: `$djsEval[(async () => {
      const {
        Npm
    } = require('leaf-utils');
    
    await Npm({
        message: message,
        args: args,
    
        embed: {
            title: '{{package}}',
            description: '{{package_description}}',
            color: '#5865F2'
        },
        query: 'Give me a package name to search',
        noResult: 'I cant find this package'
    })
})()]

$onlyIf[$getGlobalUserVar[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]


$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`
}