const a = '```'

exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Arnando|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi, client , process) => { 
	return `
┌──「 *ABOUT USER* 」
├*Nama : ${pushname}*
├*Premium :* ${premi}*
├*Nomer : wa.me/${sender.split("@")[0]}*
├*Uang mu : Rp${uangku}*
├*XP : ${getLevelingXp(sender)}/${reqXp} *
├*Level : ${getLevelingLevel(sender)}*
├*Role : ${role}*
├*User register : ${_registered.length}*
│
├「 *ABOUT BOT* 」
│
├ *${prefix}info*
├ *${prefix}donasi*
├ *${prefix} owner*
│
├「 *MAKER MENU* 」
│
├ *${prefix}tahta
├ *${prefix}hartatata2
├ *${prefix}hartatata3
├ *${prefix}imagetext
├ *${prefix}bneon
├ *${prefix}matrix
├ *${prefix}breakwall
├ *${prefix}dropwater
├ *${prefix}leavest
├ *${prefix}logobp
├ *${prefix}blackpink
├ *${prefix}neon
├ *${prefix}greenneon
├ *${prefix}advanceglow
├ *${prefix}futureneon
├ *${prefix}sandwriting
├ *${prefix}sandsummer*
├ *${prefix}sandengraved*
├ *${prefix}metaldark*
├ *${prefix}neonlight*
├ *${prefix}holographic*
├ *${prefix}text1917*
├ *${prefix}minion*
├ *${prefix}deluxesilver*
├ *${prefix}newyearcard*
├ *${prefix}bloodfrosted*
├ *${prefix}halloween*
├ *${prefix}jokerlogo*
├ *${prefix}fireworksparkle*
├ *${prefix}natureleaves*
├ *${prefix}bokeh*
├ *${prefix}toxic*
├ *${prefix}strawberry*
├ *${prefix}box3d*
├ *${prefix}roadwarning*
├ *${prefix}breakwall*
├ *${prefix}icecold*
├ *${prefix}luxury*
├ *${prefix}cloud*
├ *${prefix}summersand*
├ *${prefix}horrorblood*
├ *${prefix}thunder*
├ *${prefix}christmas*
├ *${prefix}sticker*
├ *${prefix}quotemaker*
├ *${prefix}qrcode*
├ *${prefix}nulis*
├ *${prefix}tahta*
├ *${prefix}ttp*
│
├「 *FUN MENU* 」
│
├ *${prefix}lirik*
├ *${prefix}artinama*
├ *${prefix}chord*
├ *${prefix}bisakah*
├ *${prefix}kapankah*
├ *${prefix}apakah*
├ *${prefix}rate*
├ *${prefix}tebakgambar*
├ *${prefix}meme*
├ *${prefix}textlight*
├ *${prefix}glitchtext*
├ *${prefix}slap*
├ *${prefix}tampar*
├ *${prefix}moddroid* 
├ *${prefix}happymod* 
│
├「 *MUTUAL* 」
│
├ *${prefix}mutual*
├ *${prefix}next*
│
├「 *MEDIA MENU* 」
│
├ *${prefix}brainly* 
├ *${prefix}pinterest*
├ *${prefix}resepmasakan*
├ *${prefix}igstalk*
├ *${prefix}bitly*
├ *${prefix}tiktokstalk* 
├ *${prefix}ssweb*
├ *${prefix}kbbi*
│
├「 *DOWNLOAD* 」
│
├ *${prefix}joox*
├ *${prefix}play*
├ *${prefix}ytmp4*
├ *${prefix}ytmp3*
├ *${prefix}fbdl*
│
├「 *NSFW* 」
│
├ *${prefix}anjing*
├ *${prefix}blowjob*
├ *${prefix}nekonime*
├ *${prefix}pokemon*
├ *${prefix}husbu*
├ *${prefix}nangis*
├ *${prefix}cium*
├ *${prefix}peluk*
├ *${prefix}ranime*
│
├「 *LIMIT & UANG*
│
├ *${prefix}limit*
├ *${prefix}buylimit*
├ *${prefix}transfer*
├ *${prefix}dompet*
├ *${prefix}giftlimit*
├ *${prefix}leaderboard*
│
├「 *GROUP MENU*
│
├ *${prefix}delete*
├ *${prefix}hidetag*
├ *${prefix}blocklist*
├ *${prefix}grouplist*
├ *${prefix}level*
├ *${prefix}linkgc*
├ *${prefix}tagall*
├ *${prefix}setpp*
├ *${prefix}add*
├ *${prefix}kick*
├ *${prefix}setname*
├ *${prefix}setdesc*
├ *${prefix}demote*
├ *${prefix}promote*
├ *${prefix}listadmin*
├ *${prefix}group [buka/tutup]*
├ *${prefix}leveling [enable/disable]*
├ *${prefix}nsfw [1/0]*
├ *${prefix}simih [1/0]*
├ *${prefix}welcome [1/0]*
├ *${prefix}antilink [1/0]*
├ *${prefix}nobadword [enable/disable]*
│
├「 *TOOLS*
│
├ *${prefix}bass*
├ *${prefix}tomp3*
├ *${prefix}slowmo*
├ *${prefix}gemok*
├ *${prefix}tupai*
│
├「 *CLOUD STORAGE*
│
├ *${prefix}addsticker*
├ *${prefix}getsticker*
├ *${prefix}stickerlist*
├ *${prefix}addvideo*
├ *${prefix}getvideo*
├ *${prefix}videolist*
├ *${prefix}getimage*
├ *${prefix}addImage*
├ *${prefix}imagelist*
├ *${prefix}addaudio*
├ *${prefix}getaudio*
├ *${prefix} audiolist*
│
├「 *OWNER MENU*
│
├ *${prefix}bc*
├ *${prefix}addbadword*
├ *${prefix}delbadword*
├ *${prefix}bcgc*
├ *${prefix}kickall*
├ *${prefix}setreply*
├ *${prefix}setprefix*
├ *${prefix}clearall*
├ *${prefix}block*
├ *${prefix}unblock*
├ *${prefix}leave*
├ *${prefix}event [1/0]*
├ *${prefix}clone*
├ *${prefix}setppbot*
│
├「 *TQTO* 」
│
├ MrG{108P}*
├ Sofyan AMV
├ Mr.A43G
├ Arashi~
└──「 *Elaina Bot-X* 」
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 SELAMAT 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┣⊱ *Role*: ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM ADD 」*

*Name* : ${pnom}
*Expired* : 30 DAY\n*thank for order premium*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM DELETE 」*

*Name* : ${hnom}
*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`
}

exports.premon = (pushname) => {
	return`MAAF ${pushname} ANDA BUKAN USER PREMIUM`
}

