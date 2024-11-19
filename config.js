// Script Echo V2

require("./database/module")

// GLOBAL PAYMENT
global.storename = "NullEntity"
global.dana = "0831"
global.qris = "-"

// GLOBAL SETTING
global.owner = "Null Entity"
global.namabot = "Echo"
global.nomorbot = "263780858655"
global.namaCreator = "Null Entity"
global.linkyt = "https://www.youtube.com/@PannOfficialDev" // YouTube link remains unchanged
global.autoJoin = false
global.antilink = false
global.versisc = '2.0'

// DELAY JPM
global.delayjpm = 5500

// GLOBAL THUMB
global.codeInvite = ""
global.imageurl = 'https://k.top4top.io/p_3241oy2j10.jpg'
global.isLink = "https://whatsapp.com/channel/0029VarGepU1dAw1U76h3S1k"
global.packname = "Bugs"
global.author = "Null Entity"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
