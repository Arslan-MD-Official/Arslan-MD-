const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "💋",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `
 ╭─────────────━┈⊷
│*🧚‍♀️ ʙᴏᴛ ɴᴀᴍᴇ*: Arslan-MD
│*👨‍💻 ᴏᴡɴᴇʀ*: ArslanMD Tech    
│*👤 ɴᴜᴍʙᴇʀ*: 923237045919
│
│*🧬Version*: 8.0.0
│*💻 HOST* :  arslanmd.com
│*💫 ᴘʀᴇғɪx:* .
╰─────────────━┈⊷ 
*╭╼╼╼╼╼╼╼╼╼╼*
*├➤ 1 • OWNER*
*├➤ 2 • CONVERT*
*├➤ 3 • AI*
*├➤ 4 • SEARCH*
*├➤ 5 • DOWNLOAD*
*├➤ 6 • MAIN*
*├➤ 7 • GROUP*
*├➤ 8 • FUN*
*├➤ 9 • TOOLS*
*├➤ 10 • OTHER*
*╰╼╼╼╼╼╼╼╼╼╼*

*꧁◈╾───OWNER COMMAND LIST───╼◈꧂*
╭────────●●►
┋ ➽ *restart* 
┋ ➽ *block*
┋ ➽ *setting*
┋ ➽ *unblock*
┋ ➽ *jid*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*꧁*◈╾───CONVERT COMMAND LIST───╼◈꧂*
╭────────●●►
┋ ➽ *convert* 
┋ ➽ *ss* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*꧁*◈╾───AI COMMAND LIST───╼◈꧂*
╭────────●●►
┋ ➽ *ai* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*꧁◈╾───SEARCH COMMAND LIST───╼◈꧂*
╭────────●●►
┋ ➽ *yt* 
┋ ➽ *song* 
┋ ➽ *video* 
┋ ➽ *movie* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*꧁◈╾─DOWNLOAD COMMAND LIST──╼◈꧂*
╭────────●●►
┋ ➽ *apk* 
┋ ➽ *twitter* 
┋ ➽ *gdrive* 
┋ ➽ *mediafire* 
┋ ➽ *fb*
┋ ➽ *ig* 
┋ ➽ *movie*
┋ ➽ *song* 
┋ ➽ *video* 
┋ ➽ *play/yt* 
┋ ➽ *yt*
┋ ➽ *tiktok* 
┋ ➽ *img* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*꧁◈╾───MAIN COMMAND LIST───╼◈꧂*
╭────────●●►
┋ ➽ *alive* 
┋ ➽ *about* 
┋ ➽ *menu* 
┋ ➽ *allmenu* 
┋ ➽ *support* 
┋ ➽ *system* 
┋ ➽ *ping* 
┋ ➽ *runtime* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*꧁◈╾───GROUP COMMAND LIST───╼◈꧂*
╭────────●●►
┋ ➽ *promote* 
┋ ➽ *demote* 
┋ ➽ *kick* 
┋ ➽ *add* 
┋ ➽ *admins* 
┋ ➽ *tagall* 
┋ ➽ *getpic* 
┋ ➽ *setwelcome* 
┋ ➽ *setgoodbye* 
┋ ➽ *admins*
┋ ➽ *gname* 
┋ ➽ *tagall* 
┋ ➽ *tagadmin* 
┋ ➽ *opentime/closetime* 
┋ ➽ *groupinfo* 
┋ ➽ *grouplink* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*꧁◈╾───FUN COMMAND LIST───╼◈꧂*
╭────────●●►
┋ ➽ *dog* 
┋ ➽ *fact* 
┋ ➽ *hack* 
┋ ➽ *quote* 
┋ ➽ *loli* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*꧁◈╾───OTHER COMMAND LIST───╼◈꧂*
╭────────●●►
┋ ➽ *trt* 
┋ ➽ *weather* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

* ▣▣▣▣▣▣▣▣▣▣▣▣*⁠⁠⁠⁠

*ׂ╰┈➤Reply with the Number you want to select*

*⭕Arslan MD NEW UPDATE*

*🖇️https://whatsapp.com/channel/0029VarfjW04tRrmwfb8x306*

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ArslanMDッ*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/zw6rsz.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
