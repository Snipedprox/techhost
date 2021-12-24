module.exports = {
name: "buy",
$if: "v4",
code: ` 
$if[$checkContains[$message[1];santa;santahat;hat;shat]==true]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$title[1;**Purchase successful**]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You successfully purchased $numberSeparator[$message[2];,] <:santahat:922644522528292875> for $numberSeparator[$multi[10000;$message[2]];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];10000]]]
$setGlobalUserVar[santa;$sum[$getGlobalUserVar[santa];$multi[1;$message[2]]]]
$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];9999];**You dont have enough $getServerVar[symbol]**]
$onlyIf[$message[2>=1;**please specify an amount**]

$else

$if[$checkContains[$message[1];phone;phones]==true]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$title[1;**Purchase successful**]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You successfully purchased 1 <:phones:922650930762113024> for $numberSeparator[1000;,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];1000]]]
$setGlobalUserVar[phone;$sum[$getGlobalUserVar[phone];1]]
$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]


$setGlobalUserVar[pbuy;true]
$onlyIf[$getGlobalUserVar[cash]>999;**You dont have enough $getServerVar[symbol]**]
$onlyIf[$getGlobalUserVar[pbuy]==false;**You already purchased this item**]
$else

$if[$checkContains[$message[1];woodtrophy;wtrophy;woodtro;trophyw]==true]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$title[1;**Purchase successful**]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You successfully purchased $numberSeparator[$message[2];,] <:woodtrophy:922832078553374760> for $numberSeparator[$multi[5000;$message[2]];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];5000]]]
$setGlobalUserVar[woodtrophy;$sum[$getGlobalUserVar[woodtrophy];$multi[1;$message[2]]]]
$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];4999];**You dont have enough $getServerVar[symbol]**]
$onlyIf[$message[2>=1;**please specify an amount**]

$else

$if[$checkContains[$message[1];goldtrophy;gtrophy;goldtro;trophyg]==true]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$title[1;**Purchase successful**]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You successfully purchased $numberSeparator[$message[2];,] <:goldtrophy:922832251350319184> for $numberSeparator[$multi[15000;$message[2]];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];15000]]]
$setGlobalUserVar[goldtrophy;$sum[$getGlobalUserVar[goldtrophy];$multi[1;$message[2]]]]
$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];14999];**You dont have enough $getServerVar[symbol]**]
$onlyIf[$message[2>=1;**please specify an amount**]

$else

$if[$checkContains[$message[1];crystaltrophy;ctrophy;crystaltro;trophyc]==true]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$title[1;**Purchase successful**]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You successfully purchased $numberSeparator[$message[2];,] <:crystaltrophy:922832551192711179> for $numberSeparator[$multi[150000;$message[2]];,]$getServerVar[symbol]**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];150000]]]
$setGlobalUserVar[crystaltrophy;$sum[$getGlobalUserVar[crystaltrophy];$multi[1;$message[2]]]]
$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];149999];**You dont have enough $getServerVar[symbol]**]
$onlyIf[$message[2>=1;**please specify an amount**]

$else

$if[$message[1]==common]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$title[1;**Purchase successful**]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You successfully purchased $numberSeparator[$message[2];,] $getVar[cbox] for $numberSeparator[$multi[100;$message[2]];,]$getServerVar[esymbol]**]
$setGlobalUserVar[ether;$sub[$getGlobalUserVar[ether];$multi[$message[2];100]]]
$setGlobalUserVar[common;$sum[$getGlobalUserVar[common];$multi[1;$message[2]]]]
$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[ether]>$multi[$message[2];99];**You dont have enough $getServerVar[esymbol]**]
$onlyIf[$message[2>=1;**please specify an amount**]

$else

$if[$message[1]==uncommon]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$title[1;**Purchase successful**]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You successfully purchased $numberSeparator[$message[2];,] $getVar[ubox] for $numberSeparator[$multi[150;$message[2]];,]$getServerVar[esymbol]**]
$setGlobalUserVar[ether;$sub[$getGlobalUserVar[ether];$multi[$message[2];150]]]
$setGlobalUserVar[uncommon;$sum[$getGlobalUserVar[uncommon];$multi[1;$message[2]]]]
$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[ether]>$multi[$message[2];149];**You dont have enough $getServerVar[esymbol]**]
$onlyIf[$message[2>=1;**please specify an amount**]

$else

$if[$message[1]==rare]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$title[1;**Purchase successful**]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You successfully purchased $numberSeparator[$message[2];,] $getVar[rbox] for $numberSeparator[$multi[200;$message[2]];,]$getServerVar[esymbol]**]
$setGlobalUserVar[ether;$sub[$getGlobalUserVar[ether];$multi[$message[2];200]]]
$setGlobalUserVar[rare;$sum[$getGlobalUserVar[rare];$multi[1;$message[2]]]]
$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[ether]>$multi[$message[2];199];**You dont have enough $getServerVar[esymbol]**]
$onlyIf[$message[2>=1;**please specify an amount**]

$else

$if[$message[1]==epic]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$title[1;**Purchase successful**]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You successfully purchased $numberSeparator[$message[2];,] $getVar[ebox] for $numberSeparator[$multi[250;$message[2]];,]$getServerVar[esymbol]**]
$setGlobalUserVar[ether;$sub[$getGlobalUserVar[ether];$multi[$message[2];250]]]
$setGlobalUserVar[epic;$sum[$getGlobalUserVar[epic];$multi[1;$message[2]]]]
$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[ether]>$multi[$message[2];249];**You dont have enough $getServerVar[esymbol]**]
$onlyIf[$message[2>=1;**please specify an amount**]

$else

$if[$message[1]==mythical]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$title[1;**Purchase successful**]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You successfully purchased $numberSeparator[$message[2];,] $getVar[mbox] for $numberSeparator[$multi[300;$message[2]];,]$getServerVar[esymbol]**]
$setGlobalUserVar[ether;$sub[$getGlobalUserVar[ether];$multi[$message[2];300]]]
$setGlobalUserVar[mythical;$sum[$getGlobalUserVar[mythical];$multi[1;$message[2]]]]
$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[ether]>$multi[$message[2];299];**You dont have enough $getServerVar[esymbol]**]

$onlyIf[$message[2>=1;**please specify an amount**]

$else

$if[$message[1]==legendary]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$randomText[$getGlobalUserVar[1];$getGlobalUserVar[2]]]
$title[1;**Purchase successful**]
$description[1;
$randomText[$getVar[xmas];$getVar[xmass]]

**You successfully purchased $numberSeparator[$message[2];,] $getVar[lbox] for $numberSeparator[$multi[500;$message[2]];,]$getServerVar[esymbol]**]
$setGlobalUserVar[ether;$sub[$getGlobalUserVar[ether];$multi[$message[2];500]]]
$setGlobalUserVar[legendary;$sum[$getGlobalUserVar[legendary];$multi[1;$message[2]]]]
$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[ether]>$multi[$message[2];499];**You dont have enough $getServerVar[esymbol]**]

$onlyIf[$message[2]>1;**please specify an amount**]
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif




$onlyIf[$creationDate[$authorID;ms]>$getGlobalUserVar[alt];{newEmbed: {author:#COLON#x#COLON# Suspicous activaty detected} {color:RED} {description: **$getVar[x] To avoid alt accounts your account has to be atleast **\`2 weeks\` **old in order to use my commands. not an alt? join my support server [Here]($getVar[support])**}}]

$onlyIf[$getChannelVar[cmd]==enabled;{newEmbed: {title:$getVar[x] Error occured} {color:RED} {description:$getVar[x] **| my commands are disabled please ask a administrator / someone with the perms** \`MANAGE_SERVER\` **to enable my commands**}}]`}