module.exports = (bot) => {
    bot.status({
        text: "In $servercount guilds and $allmemberscount members and my prefix is c.",
        type: "PLAYING",
        time: 12
    })
}
