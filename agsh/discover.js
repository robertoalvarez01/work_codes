var onvif = require('onvif');
onvif.Discovery.probe(function(err, cams) {
// function will be called only after timeout (5 sec by default)
    if (err) { throw err; }
    cams.forEach(function(cam) {
        cam.username = 'admin';
        cam.password = '123456';
        cam.connect(console.log);
    });
});