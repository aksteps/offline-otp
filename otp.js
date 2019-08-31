const crypto = require('crypto');
const colors = require('./colors');

setInterval(function(){
    
    console.time('Time Taken');

    const hash = crypto.createHash('sha256');

    const date = new Date();
    const timestamp = date.getTime();

    const otp_valid_for_secs = 60;
  	
  	const factor = otp_valid_for_secs*1000;

    otp_changing_parameter = parseInt(timestamp/factor);

    console.log(otp_changing_parameter);

    const value_with_my_secret_key = 'my-secret-key'+otp_changing_parameter;

    hash.update(value_with_my_secret_key);

    const hash_value = hash.digest('hex');

    const last_six_characters = hash_value.substr(hash_value.length - 6);
    
    const otp = parseInt(last_six_characters, 16);

    let otp_string = otp.toString();

    while(otp_string.length != 8) {
        otp_string =  "0"+otp_string;
    }

    console.log(date.toString() );
    console.log("Otp : ", colors.magenta , otp, colors.white);


    console.timeEnd('Time Taken');
    console.log();
}, 30*1000);