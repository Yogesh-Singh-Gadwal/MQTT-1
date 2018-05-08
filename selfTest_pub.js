var mqtt = require('mqtt');
var option1 = {
        username:"user",
        password:"passwd",
        will:{
            topic:"killWill",
            payload:"Publisher Disconnected..!",
            QoS:1,
            retain:1
        }
      };
var client = mqtt.connect('mqtt://localhost:1883',option1);
var fs = require('fs');


client.on('connect', () => {
  console.log('mqtt connected');
  client.subscribe('#');
//client.publish('Ashu', 'ye first trial hai.!');

});
client.on('close', () => {
  console.log('Connection Closed');
});
// var cnt = 0;
var option2={Qos:1,
            retain:1};
setInterval(function() {
  var file = fs.readFileSync('s.json');
  var topic = JSON.parse(file).topic;
  // console.log(topic);
  // // content['data']['cnt'] = ++cnt;
  client.publish(topic, file,option2,()=>{
    console.log('Chap gaya.!');
  });
}, 1000 * 10);
