const onvif = require('node-onvif');
const fs = require('fs');

console.log("Escribe la camara con la que deseas tomar un snapshot: ");
var stdin = process.openStdin();

stdin.addListener("data", function(d) { 
        var camara = d.toString().trim();

// Create an OnvifDevice object
let device = new onvif.OnvifDevice({
  xaddr: 'http://10.109.0.' + camara + ':80/onvif/device_service',
  user : 'admin',
  pass : '123456'
});

// Initialize the OnvifDevice object
device.init().then(() => {
  // Get the data of the snapshot
  console.log('fetching the data of the snapshot...');
  return device.fetchSnapshot();
}).then((res) => {
  // Save the data to a file
  fs.writeFileSync('capturas/snapshot.jpg', res.body, {encoding: 'binary'});
  console.log('Done!');
}).catch((error) => {
  console.error(error);
});

});