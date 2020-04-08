var mqtt = require('mqtt');
var client = mqtt.connect({hostname: 'lwptech.co.in', port: 8883, username: 'parmu17', password: 'Parm@18001800', capath: '/etc/ssl/certs/', protocol: 'mqtts'});

client.on('error', (err)=>{
	console.log(err);
	client.end();
});

client.on('connect', ()=>{
	client.subscribe('lwp/brd1/esp1', (err)=>{
		if(err){
			debug.log(err);
		}
		if(!err){
			console.log('Successfully subscribed the topic "lwp/brdq/esp1" ..');
			client.publish('lwp/brd2/esp1', 'Hello mqtt how are you.. Jai maa Saraswati');
		}
	});
});

//For both subscribed(incoming) and published (outgoing) message
client.on('message', (topic, msg)=>{
	console.log(msg.toString());
	//console.log(topic.toString());
	client.end();
});
