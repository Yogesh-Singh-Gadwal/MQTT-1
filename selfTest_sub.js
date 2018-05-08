var mqtt = require('mqtt');
var option1 = {
        username:"user",
        password:"passwd",
        will:{
            topic:"killWill",
            payload:"Subscriber Disconnected..!",
            QoS:1,
            retain:1
        }
      };
var client = mqtt.connect('mqtt://localhost:1883',option1);

client.on('connect', () => {
  console.log('MQTT Connected');
  client.subscribe('#');
});

client.on('close', () => {
  console.log('MQTT Disconnected.!');
});

client.on('message', (topic, message) => {
  // var content = JSON.parse(message).data;
  // if (content.id == 'VISHU') {
  // if (topic == "atmData") {
  //   console.log("atmospheric data recieved.!");
  // } else if (topic == "cpuData") {
  //   console.log('CPU data recieved.!');
  // } else {
  //   console.log('Invalid topic');
  // }}
  console.log(message.toString());
});
