var
  http = require('http'),
  Cam = require('onvif').Cam;

var onvif = require('onvif');
 
onvif.Discovery.on('device', function(cam){
// function will be called as soon as NVT responses
    cam.username = 'admin';
    cam.password = '123456';
    cam.connect(console.log);
})
onvif.Discovery.probe();