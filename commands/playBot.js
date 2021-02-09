const ytdl = require('ytdl-core');

let ready = 'true';

module.exports = {
   playMusic: function(message) {


    if (message.member.voice.channel) {
        ready = true;
        if (ready) {
            const channel = message.member.voice.channel;
            channel.join()
            .then((connection) => {
                const link = message.content.replace('!play ', '');
                channel.connection.playStream(ytdl(link));
            })
            .catch((error) => console.error(error));
        }

    }
    else message.channel.send('Você precisa estar conectado num canal de voz'); 
},
    stopMusic: function(message) {

    if (message.member.voice.channel){
        message.member.voice.channel.leave();
        ready = false;
    }
    else message.channel.send('Você precisa estar conectado num canal de voz'); 

}



}