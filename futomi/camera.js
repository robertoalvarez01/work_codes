const onvif = require('node-onvif');

// Create an OnvifDevice object
let device = new onvif.OnvifDevice({
  xaddr: 'http://10.109.0.114:80/onvif/device_service'
});

// Initialize the OnvifDevice object
device.init().then((info) => {
  // Show the detailed information of the device.
  console.log(JSON.stringify(info, null, '  '));
}).catch((error) => {
  console.error(error);
});


device.services.device.setNetworkDefaultGateway().then((result) => {
  


}).catch((error) => {
  console.error(error);
});