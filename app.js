var mqtt = require('mqtt');
var client = mqtt.connect({hostname: 'lwptech.co.in', port: 8883, username: 'parmu17', password: 'Parm@18001800', protocol: 'mqtts', capath: '/etc/ssl/certs/'});

client.on('connect', ()=>{
	client.subscribe('lwp/brd2/esp1', (err)=>{
		if(err){
			debug.log(err);
		}
		if(!err){
			client.publish('lwp/brd2/esp1', 'Hello mqtt how are you.. Jai maa Saraswati');
		}
	});
});

client.on('message', (topic, msg)=>{
	console.log(msg.toString());
	console.log(topic.toString());
	client.end();
});



//console.log("Ae mere humsafar ae mre jaaneman..");
