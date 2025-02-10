let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:* ${pesan}`
  let teks = `*𝗡𝗨𝗘𝗩𝗢 𝗜𝗡𝗧𝗘𝗚𝗥𝗔𝗡𝗧𝗘 , 𝗤𝗨𝗘 𝗘𝗦𝗣𝗘𝗥𝗔𝗡 𝗣𝗔𝗥𝗔 𝗗𝗔𝗥 𝗟𝗔 𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗔, 𝗟𝗘𝗦 𝗥𝗨𝗘𝗚𝗢 𝗢 𝗤𝗨𝗘 ❓*\n\n ${oi}\n\n➥ _*@tribe_pride*_\n`
  for (let mem of participants) {
  teks += `🪂 ⇝ @${mem.id.split('@')[0]}\n`}
  teks += `*└Bot - TRϟBEㅤPRϟDE*`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten|putos|animales)$/i
  handler.admin = true
  handler.group = true
  export default handler