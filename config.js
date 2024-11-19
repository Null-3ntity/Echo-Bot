// Script PannOfficiaL V2

require("./database/module")

//GLOBAL PAYMENT
global.storename = "PannOfficiaLDeveloper"
global.dana = "0831"
global.qris = "-"


// GLOBAL SETTING
global.owner = "6283896168449"
global.namabot = "💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥"
global.nomorbot = "6283845850116"
global.namaCreator = "💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥"
global.linkyt = "https://www.youtube.com/@PannOfficialDev" // btw lom ada cik yt nya, insyaallah kpn" tak upload 😋😋
global.autoJoin = false
global.antilink = false
global.versisc = '2.0'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://k.top4top.io/p_3241oy2j10.jpg'
global.isLink = "https://whatsapp.com/channel/0029VarGepU1dAw1U76h3S1k"
global.packname = "Bugs"
global.author = "PannOfficiaL"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})