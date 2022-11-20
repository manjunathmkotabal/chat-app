var cp = require('child_process')

// gen pub priv key pair
function genKeys(cb){
    // gen private
    cp.exec('openssl.exe genrsa 2048', function(err, priv, stderr) {
      // tmp file
      var randomfn = 'D:/chat-app-react-nodejs/public/src/cryptography/certs';
      cb(priv)

    });
}

genKeys(console.log);